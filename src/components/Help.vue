<template>
  <section class="container">
    <div class="backdrop"></div>
    <div class="protetion"></div>
    <div class="help-background" :class="helps[index].class">
      <div
        class="text-help"
        :class="helps[index].class"
        v-html="getAtualText"
      ></div>
      <div class="button-section" :class="helps[index].class">
        <button v-if="index !== 0" class="btn-voltar z100" @click="voltarClick">
          VOLTAR
        </button>
        <button class="btn-avancar z100" @click="avancarClick">
          {{ nxtBtn }}
        </button>
      </div>
      <button
        class="btn-sair z100 wrongiconeerrado"
        @click.prevent="clickClose"
      ></button>
    </div>
    <div class="triangulos-section" :class="helps[index].class">
      <div class="retangulo rt1"></div>
      <div class="retangulo rt2"></div>
      <div class="retangulo rt3"></div>
      <div class="retangulo rt4"></div>
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
      if (this.index === 2) return 'INICIAR'
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

  .backdrop {
    position: absolute;
    background-color: #000000a1;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .protetion {
    width: 100%;
    height: 100%;
    z-index: 31;
    position: absolute;
  }
  .help-background {
    position: absolute;
    padding-top: 86px;
    padding-left: 29px;
    z-index: 32;

    &.class-help0 {
      left: 322px;
      top: 235px;
    }
    &.class-help1 {
      left: 543px;
      top: 156px;
    }
    &.class-help2 {
      left: 240px;
      top: 194px;
    }

    .text-help {
      width: 342px;
      height: 231px;
      position: absolute;
      top: 52px;
      left: 33px;
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
      bottom: -100px;
      display: flex;
      bottom: -1px;
      left: -32px;
      gap: 15px;

      &.class-help0 {
        left: 90px;
      }
      .btn-avancar,
      .btn-voltar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 221px;
        height: 46px;
        font-size: 22px;
        color: #f1faee;
        background-color: #e63946;

        &:hover {
          box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);
        }
      }
      .btn-voltar {
        background-color: #457b9d;
      }
    }
  }
}
.z100 {
  z-index: 100;
}

.triangulos-section {
  position: absolute;
  z-index: 32;
  &.class-help0 {
    display: none;
  }

  &.class-help1 {
    .rt1 {
      position: absolute;
      top: -298px;
      left: 294px;
    }
    .rt2 {
      position: absolute;
      top: -113px;
      left: -340px;
    }

    .rt3 {
      position: absolute;
      top: -196px;
      left: -15px;
      transform: rotate(-90deg);
    }

    .rt4 {
      position: absolute;
      top: 228px;
      left: -14px;
      transform: rotate(90deg);
    }
  }

  &.class-help2 {
    .rt1 {
      position: absolute;
      top: -2px;
      left: -427px;
      transform: rotate(90deg);
    }
    .rt2 {
      position: absolute;
      top: -113px;
      left: -325px;
      transform: rotate(180deg);
    }

    .rt3 {
      display: none;
    }

    .rt4 {
      display: none;
    }
  }
}
</style>
