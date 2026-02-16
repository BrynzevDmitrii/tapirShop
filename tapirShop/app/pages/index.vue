<template>
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
  cursor: pointer;
  text-decoration: none;
}
</style>