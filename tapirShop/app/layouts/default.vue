<template>
  <div class="site-layout">
  <header class="header site-header">
    <AppHead />
    </header>
    <main class="site-content">
      <slot />
    </main>
    <footer class="footer site-footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { AppHead } from '~/features/header';
import { AppFooter } from '~/features/footer';
</script>

<style lang="scss" scoped>
.site-content {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    @media (min-width: 768px) {
        padding: 0 40px;
        align-items: flex-start;
    }
}
</style>