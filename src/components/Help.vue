<template>
  <section class="container">
    <div class="backdrop"></div>
    <div class="help-background" :class="helps[index].class">
      <div
        class="text-help"
        :class="helps[index].class"
        v-html="getAtualText"
      ></div>
      <div class="button-section">
        <button class="btn-avancar z100" @click="avancarClick">
          {{ nxtBtn }}
        </button>
        <button v-if="index !== 0" class="btn-voltar z100" @click="voltarClick">
          VOLTAR
        </button>
      </div>
      <button
        class="btn-sair z100 wrongiconeerrado"
        @click.prevent="clickClose"
      >
        SAIR
      </button>
    </div>
  </section>
</template>
<script>
import { helps } from '../consts/help'
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    isInicial: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      helps
    }
  },
  computed: {
    nxtBtn() {
      if (this.index === 2) return 'COMEÇAR'
      else return 'AVANÇAR'
    },
    getAtualText() {
      if (this.isInicial) return this.helps[this.index].textInit
      else return this.helps[this.index].text
    }
  },
  mounted() {},
  methods: {
    voltarClick() {
      this.$emit('voltar')
    },
    clickClose() {
      this.$emit('close')
    },
    avancarClick() {
      this.$emit('avancar')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 19;
  .backdrop {
    position: absolute;
    background-color: #000000a1;
    width: 100%;
    height: 100%;
  }
  .help-background {
    position: absolute;
    padding-top: 86px;
    padding-left: 29px;
    box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);
    &.class-help0 {
      left: 360px;
      top: 181px;
    }
    &.class-help1 {
      left: 280px;
      top: 96px;
    }
    &.class-help2 {
      left: 120px;
      top: 125px;
    }

    .btn-sair {
      border-radius: 50%;
      transform: scale(0.6);
      position: absolute;
      top: -13px;
      right: 13px;
      &:hover {
        box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);
      }
    }
    .button-section {
      position: absolute;
      bottom: 87px;
      .btn-avancar,
      .btn-voltar {
        background: #dce0e7;
        box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);
        border-radius: 20px 20px 0px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 241px;
        height: 53px;
        font-size: 22px;
        color: #121212;
        position: absolute;
        bottom: 50px;
        &:hover {
          background: #bcbfc5;
        }
      }
      .btn-voltar {
        height: 37px;
        border-radius: 20px 0px 20px 20px;
        bottom: 2px;
      }
    }
  }
}
.z100 {
  z-index: 100;
}
</style>
