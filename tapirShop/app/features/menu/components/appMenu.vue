<template>
    <nav class="menu">
        <ul v-if="!isMobile" class="menu__list">
            <li class="menu__item" v-for="item in menuList" :key="item.title">
                <NuxtLink class="menu__link" :href="item.link">{{ item.title }}</NuxtLink>
            </li>
        </ul>
            <div v-else class="menu__mobile">
                <span class="menu__mobile--burger"></span>
            </div>
    </nav>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
    const menuList = [
        {
            title: 'Мужчинам',
            link: '#'
        },
        {
            title: 'Женщинам',
            link: '#'
        },
        {
            title: 'Каталог',
            link: '/catalog'
        },
        {
            title: 'Доставка',
            link: '#'
        },
        {
            title: 'Блог',
            link: '#'
        },
        {
            title: 'О нас',
            link: '#'
        }

    ]

    const isMobile = ref(false);

    onMounted(() => {
    const screenWidth = window.innerWidth;
    isMobile.value = screenWidth <= 768;
    });
</script>
<style lang="scss" scoped> 
.menu {
    @media (min-width: 768px) {
    margin: 0 auto;
    }

    &__list {
        display: flex;
        gap: 20px;
        background-color: var(--menu-gray);
        padding: 16px 40px;    
    }

    &__link {
        color: var(--default-black);
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
    }

   &__mobile {
        position: relative;
        width: 40px;
        height: 40px;
        background-color: var(--menu-gray);
        display: flex;
        justify-content: center;
        align-items: center;

        &--burger {
            display: block;
            width: 28px;
            height: 28px;
                &::before {
                content: '';
                position: absolute;
                top: 12px;
                left: 10px;
                width: 17px;
                height: 2px;
                background-color: var(--default-black);
                box-shadow: 0 6px 0 var(--default-black), 0 12px 0 var(--default-black);
            }
        }
    }
}
</style>