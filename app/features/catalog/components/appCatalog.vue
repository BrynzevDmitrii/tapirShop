<template>
    <ul class="product-list">
        <li class="product-list__item" v-for="item in filterList" :key="item.id">
            <BaseProductCard :product="item" :isMobile="false" />
        </li>
    </ul>
    <ButtonsSection :isLoading="isLoading" @setNextPage="setNextPage" />
</template>
<script setup lang="ts">
import { BaseProductCard } from '~/shared/ui';
import { useCatalogStore } from '../composables/catalogDataStore/useCatalogStore';
import { computed, nextTick, onBeforeMount, onMounted, ref } from 'vue';
import { Product } from '../composables/catalogDataStore/types';
import { ButtonsSection } from '~/features/catalog';
 
const store = useCatalogStore();
const listProduct = computed(() => store.getCatalogData);
const isMobile = ref(false);
const page = ref(1);
const isLoading = ref(false);
const filterList = computed(() => {
    page.value = store.getPage;
if (isMobile.value && page.value === 1) {
    return listProduct.value.slice(0, 6);
  }
  return listProduct.value;
});
const resize = () => {
    isMobile.value = window.innerWidth <= 768;
}

const setNextPage = async() => {
    isLoading.value = true;
    await store.setNextPage();   
    await nextTick();
    isLoading.value = false;
};

onMounted(async() => {
    resize();
    window.addEventListener('resize', resize);
});

onBeforeMount(() => {
    window.removeEventListener('resize', resize);
})
</script>

<style lang="scss" scoped>
.product-list {
    width: 100%;
    height: 100%;
    display: grid;
    align-content: start;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    @media (min-width: 768px) {
        gap: 40px;
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>