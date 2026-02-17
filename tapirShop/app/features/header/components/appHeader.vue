<template>
    <div class="site-head">
        <AppLogo />
        <AppMenu />
    </div>
</template>
<script setup lang="ts">
import { AppLogo } from '~/features/logo';
import { AppMenu } from '~/features/menu';
</script>
<style lang="scss" scoped>
.site-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 60px;
     @media (min-width: 768px) {
        padding: 40px;
        height: 82px;
    }
}
</style>