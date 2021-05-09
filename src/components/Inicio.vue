<template>
  <section class="container">
    <div class="inicio bg-inicio">
      <button class="btn red-button iniciar-btn" @click.prevent="clickIniciar">
        <div class="text">Iniciar</div>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {},
  methods: {
    clickIniciar() {
      this.$emit('iniciar')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  width: 1024px;
  height: 768px;
  z-index: 9;
  .inicio {
    @include flex-center;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    .iniciar-btn {
      position: absolute;
      bottom: 68px;
    }
  }
}
</style>
