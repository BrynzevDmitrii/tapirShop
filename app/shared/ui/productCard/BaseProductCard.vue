<template>
    <div class="product-card">
        <div class="product-card__image">
            <img :src="product.image" :alt="product.name">
        </div>
        <div class="product-card__info">
            <div class="product-card__info--favorite">
                <p class="product-card__info--price">{{ product.price }} {{ '\u20BD' }}</p>
                <div class="product-card__info--line">{{Math.ceil(product.price / 2)}} {{ '\u20BD' }}  &#x00D7;2</div>
            </div>
            <p class="product-card__info--title">{{ product.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Product } from '~/features/catalog/composables/catalogDataStore/types';
const props = defineProps<{
    product: Product,
    isMobile: boolean
}>();

</script>

<style scoped lang="scss">
.product-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 6px;
        right: 6px;
        width: 16px;
        height: 14px;
        background-image: url('../../../../public/_nuxt/icons/favorite.svg');
        background-repeat: no-repeat;
        background-size: contain;

        @media (min-width: 768px) {
            right: 18px;
            width: 20px;
            top: 10px;
            right: 10px;
        }
    }

    &__image {          
        display: flex;
        width: 100%;
        margin-bottom: 16px;

        img {
        height: 93px;
        width: 100%;
        object-fit: cover;
            @media (min-width: 768px) {
                height: 180px;
            }
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;

        &--favorite {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
            @media (min-width: 768px) {
                flex-direction: row;
            }
        }

        &--price {
            font-weight: 500;
            font-size: 24px;
            line-height: 17px;
            color: var(--default-black);
            margin: 0;
        }

        &--line {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 18px;
            background-color: var(--default-black);
            padding: 4px;
            font-weight: 500;
            font-size: 14px;
            line-height: 10px;
            color: var(--default-white);
        }

        &--title {
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            color: var(--default-black);
            margin: 0;
        }
    }
}
</style>