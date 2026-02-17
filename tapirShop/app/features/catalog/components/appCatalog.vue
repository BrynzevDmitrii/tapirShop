<template>
    <ul class="product-list">
        <li class="product-list__item" v-for="item in filterList" :key="item.id">
            <BaseProductCard :product="item" :isMobile="false" />
        </li>
    </ul>
    <BaseButton 
    :type="ButtonType.SECONDARY" 
    :variant="ButtonVariant.OUTLINED" 
    :button-tag="ButtonTag.BUTTON"
    v-show="!isLoading && !serverError"
    class="product-list__button"
    @click="setNextPage">
        Загрузить еще
    </BaseButton>
    <BaseButton 
    :type="ButtonType.LOADING" 
    :variant="ButtonVariant.TEXT" 
    :button-tag="ButtonTag.BUTTON"
    v-show="isLoading && !serverError"
    class="product-list__button">
        Загрузка...
    </BaseButton>

    <div v-show="serverError" class="product-list__error-wrapper">
        <div class="product-list__error">
            Произошла ошибка, попробуйте позже
        </div>
        <BaseButton 
        :type="ButtonType.SECONDARY" 
        :variant="ButtonVariant.OUTLINED" 
        :button-tag="ButtonTag.BUTTON"
        class="product-list__reset-button"
        @click="setNextPage">
        Повторить
        </BaseButton>
    </div>

</template>
<script setup lang="ts">
import { BaseProductCard, BaseButton } from '~/shared/ui';
import { useCatalogStore } from '../composables/catalogDataStore/useCatalogStore';
import { computed, nextTick, onBeforeMount, onMounted, ref } from 'vue';
import { ButtonTag, ButtonType, ButtonVariant } from '~/shared/ui/button/type';
import { Product } from '../composables/catalogDataStore/types';

const store = useCatalogStore();
const listProduct = ref <Product[]>([]);
const isMobile = ref(false);
const isLoading = ref(false);
const page = ref(1);

const serverError = computed(() => store.getServerError);
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
    listProduct.value = store.getCatalogData;
    await nextTick();
    isLoading.value = false;
};

onMounted(async() => {
    isLoading.value = true;
    await store.setCatalogData();
    listProduct.value = store.getCatalogData;
    isLoading.value = false;
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

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px auto;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 114px;
        height: 40px;
        @media (min-width: 768px) {
            margin: 100px auto;
        }
    }

    &__error-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin: 40px auto;
        @media (min-width: 768px) {
            margin: 100px auto;
        }
    }

    &__error {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 100%;
        height: 40px;
    }

    &__reset-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 114px;
        height: 40px;
    }
}
</style>