<template>
  <component
    :is="buttonTag"
    :class="['button', `button--${variant}`]"
    :style = "style"
    :disabled="disabled"
    :href="href"
    role="button"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import { ButtonTag, ButtonVariant, type ButtonProps } from './type';

const props = withDefaults(defineProps<ButtonProps>(), {
  buttonTag: ButtonTag.BUTTON,
  variant: ButtonVariant.CONTAINED,
  color: 'black',
  disabled: false,
  style:() => ({})
});
</script>
<style lang="scss" scoped>
.button {
  display: flex;  
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  text-decoration: none;

  &--contained {
    background-color: var(--default-red);
    color: var(--color-white);
  }
}
</style>