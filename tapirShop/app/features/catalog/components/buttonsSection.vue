<template>
    <BaseButton 
    :type="ButtonType.SECONDARY" 
    :variant="ButtonVariant.OUTLINED" 
    :button-tag="ButtonTag.BUTTON"
    v-show="!isLoading && !serverError && !finishList"
    class="product-list__button"
    @click="setNextPage">
        Загрузить еще
    </BaseButton>
    <BaseButton 
    :type="ButtonType.LOADING" 
    :variant="ButtonVariant.TEXT" 
    :button-tag="ButtonTag.BUTTON"
    v-show="isLoading && !serverError && !finishList"
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
import { BaseButton } from '~/shared/ui';
import { ButtonTag, ButtonType, ButtonVariant } from '~/shared/ui/button/type'; 
import { useCatalogStore } from '../composables/catalogDataStore/useCatalogStore';
import { computed } from 'vue';

const props = defineProps({
    isLoading: {
        type: Boolean,
        required: true
    }
})


const store= useCatalogStore();
const serverError = computed(() => store.getServerError);
const finishList = computed(() => store.getFinishList);

const emit = defineEmits(['setNextPage']);
const setNextPage = () => emit('setNextPage');

</script>

<style scoped lang="scss">
.product-list {
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
        background-color: transparent;
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