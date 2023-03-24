<script setup lang="ts">
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'input'): void
}>();
const props = defineProps<{ modelValue: string }>();

const handleInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement;

  emits('update:modelValue', target.value);
  emits('input');
};
</script>

<template>
  <input
    :value="props.modelValue"
    class="input"
    @input="handleInput"
  />
</template>

<style lang="sass" scoped>
.input
  padding: 6px 12px
  border: 1px solid black
  border-radius: 4px
  outline: none
  font-size: 14px
</style>
