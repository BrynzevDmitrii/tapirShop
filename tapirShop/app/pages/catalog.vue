<template>
  <div class="catalog-wrapper">
    <h1 class="title">Каталог</h1>
    <AppCatalog />
  </div>
</template>
<script setup lang="ts">
import { AppCatalog } from '~/features/catalog';
</script>
<style lang="scss" scoped>
.catalog-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: var(--default-black);
  margin-top: 20px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 46px;
    margin-bottom: 110px;
    margin-top: 100px;
  }
}
</style>