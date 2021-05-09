<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop" @click.prevent="clickClose"></div>
    <div class="content">
      <div class="list-creditos">
        <div class="title">Créditos</div>
        <b>IMAGENS VETORIAIS </b>
        <p>
          Restart por Jejen Juliansyah Nur Agung do Noun Project
        </p>
        <p>Sound por Adrien Coquet do Noun Project</p>
        <p class="last">Home por icongeek do Noun Project</p>
        <b>ÁUDIO</b>
        <p>Confirmation 002 por Kenney Vleugels (Kenney.nl)</p>
        <p>Error 003 por Kenney Vleugels (Kenney.nl)</p>
        <p>Switch 007 por Kenney Vleugels (Kenney.nl)</p>
        <p>Select 007 por Kenney Vleugels (Kenney.nl)</p>
        <p>Papers Being Moved or Wrinkling por Mixkit</p>
        <p>Snippet por xythe do Freesound.org</p>
        <p>Victory Cry Reverb 2 por chripei do Freesound.org</p>
      </div>
      <button class="btn red-button btn-fechar" @click.prevent="clickClose">
        <div class="text t22 ">Fechar</div>
      </button>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpCreditos',
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
  width: 100%;
  height: 100%;
  z-index: 500;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  .backdrop {
    position: absolute;
    background-color: #000000af;
    width: 100%;
    height: 100%;
  }
  .content {
    width: 586px;
    height: 526px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    background: #e9e9e9;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .list-creditos {
      width: 90%;
      text-align: center;
      line-height: 18px;
      .title {
        font-size: 32px;
        margin-top: -80px;
        margin-bottom: 30px;
        text-transform: uppercase;
        color: #252525;
      }
      .last {
        margin-bottom: 20px;
      }
      p {
        font-family: Rosario, 'Arial';
        text-transform: initial;
        color: #252525;
        font-size: 14px;
      }
    }
    .btn-fechar {
      position: absolute;
      bottom: 10px;
      height: 48px;
      margin-bottom: 30px;
    }
  }
}

b {
  font-size: 18px;
}
</style>
