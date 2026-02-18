<template>
    <NuxtLink class="logo" to="/"></NuxtLink>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.logo {
    width: 28px;
    height: 28px;
    background-color: var(--default-red);
    @media (min-width: 768px) {
        width: 42px;
        height: 42px;
    }
}
</style>