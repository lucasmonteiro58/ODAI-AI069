<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div class="content popup-congrats">
      <button class="btn red-button" @click.prevent="clickInicio">
        <div class="text t22">Início</div>
      </button>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpCongrats',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      showed: false
    }
  },
  watch: {
    isShowed(val, old) {
      if (!old && val) {
        this.showed = true
        this.showAnimation()
      } else if (old && !val) {
        this.showed = false
      }
    }
  },
  mounted() {
    if (this.isShowed) this.showed = true
    this.showAnimation()
  },
  beforeDestroy() {
    fadeOut(this.$el)
  },
  methods: {
    showAnimation() {
      fromTop(this.$el.lastChild)
    },
    clickInicio() {
      this.$emit('inicio')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-popup {
  font-size: 32px;
}
.pop-up {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  .backdrop {
    position: absolute;
    background-color: #00000090;
    width: 100%;
    height: 100%;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    .red-button {
      position: absolute;
      bottom: -80px;
    }
  }
}
</style>
