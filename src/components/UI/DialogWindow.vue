<template>
 <div class="dialog-window" v-if="show" @click.stop="hideDialog">
  <div @click.stop class="dialog-window__content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "dialog-window",
  props:{
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog(){
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>

</style>