<template>
    <nav class="menu">
        <ul class="menu__list">
            <li class="menu__item" v-for="item in menuList" :key="item.title">
                <NuxtLink class="menu__link" :href="item.link">{{ item.title }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
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
</script>