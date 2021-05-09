<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div v-if="isCorrect" class="content correto-background">
      <div class="text-popup">
        Você acertou! Representou corretamente a fração! ESTá de parabéns!
      </div>

      <button class="btn red-button" @click.prevent="clickContinuar">
        <div class="text t22">Continuar</div>
      </button>
    </div>
    <div v-else class="content wrong-background">
      <div class="text-popup">
        CALMA, NÃO ESTÁ CERTO AINDA! OBSERVE COM ATENÇÃO E TENTE NOVAMENTE !
      </div>
      <button class="btn red-button" @click.prevent="clickVoltar">
        <div class="text t22">Voltar</div>
      </button>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpFeedback',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    },
    isCorrect: {
      type: Boolean,
      required: false,
      default: false
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
    clickContinuar() {
      this.$emit('continuar')
    },
    clickVoltar() {
      this.$emit('voltar')
    },
    clickClose() {
      this.$emit('close')
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    .text-popup {
      top: 123px;
      position: absolute;
      color: #000000;
      text-transform: uppercase;
      width: 328px;
      font-weight: bold;
      font-size: 22px;
      font-family: Rosario;
      text-align: center;
    }

    .red-button {
      position: absolute;
      bottom: -15px;
      height: 46px;
    }
  }
}
</style>
