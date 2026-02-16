<template>
  <div class="site-layout">
    <AppHead />
    <main class="site-content">
      <header class="header site-header">
        <AppMenu />
      </header>
      <slot />
      <AppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import { AppHead } from '~/features/header';
import { AppMenu } from '~/features/menu';
import { AppFooter } from '~/features/footer';
</script>