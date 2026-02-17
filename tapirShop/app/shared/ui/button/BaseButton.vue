<template>
  <component
    :is="buttonTag"
    :class="['button', `button--${variant}`]"
    :style = "style"
    :disabled="disabled"
    role="button"
  >
  <NuxtLink v-if="buttonTag === ButtonTag.ANCHOR" :to="href" :target="target">
    <slot />
  </NuxtLink>
    <slot v-else />
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

  &--outlined {
    border: 1px solid var(--default-black);
    color: var(--default-black);
    background-color: transparent;
  }

  &--text {
    color: var(--default-black);
    background-color: transparent;
  }
}
</style>