<template>
  <h1 class="title">Тестовое задание</h1>
   <BaseButton
     :buttonTag="ButtonTag.ANCHOR"
     :type="ButtonType.PRIMARY"
     :variant="ButtonVariant.CONTAINED"
     :disabled="false"
     :href="'/catalog'"
     :target="ButtonTarget.SELF"
      class="catalog-button"
   >
    В каталог
   </BaseButton>
</template>
<script setup lang="ts">
import { BaseButton } from '~/shared/ui';
import { ButtonTag, ButtonType, ButtonVariant, ButtonTarget } from '~/shared/ui/button/type';

</script>
<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 26px;
  line-height: 58px;
  color: var(--default-black);
  margin-bottom: 70px;

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 70px;
    margin-bottom: 60px;
  }
}

.catalog-button {
  width: 120px;
  height: 40px;
  color: var(--default-white);
  background-color: var(--default-red);
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
}
</style>