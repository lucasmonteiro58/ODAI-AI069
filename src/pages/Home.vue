<template>
  <section class="container">
    <div class="logo-game logo"></div>
    <div class="left-content">
      <button class="btn ajuda btn-ajuda">
        <div class="icon ico-ajuda"></div>
        <div class="text t15">Ajuda</div>
      </button>
      <div class="btn-section-controls">
        <button class="btn primary">
          <div class="icon ico-inicio"></div>
          <div class="text t11">Início</div>
        </button>
        <button class="btn primary">
          <div class="icon ico-reiniciar"></div>
          <div class="text t9">Reiniciar</div>
        </button>
        <button class="btn primary">
          <div class="icon ico-som-on"></div>
          <div class="text">Som</div>
        </button>
        <button class="btn primary">
          <div class="icon ico-creditos"></div>
          <div class="text t9">Créditos</div>
        </button>
      </div>
    </div>
    <div class="center-content">
      <div class="pontuation">
        <div class="sup">{{ questions[index].fracao.top }}</div>
        <div class="bar"></div>
        <div class="inf">{{ questions[index].fracao.bottom }}</div>
      </div>
      <div class="stage-interation">
        <div
          class="paper-change"
          :class="classPaper"
          @mouseenter="hoverPaper"
          @mouseout="outPaper"
        ></div>
      </div>
      <button class="btn red-button">
        <div class="text t11">Confirmar</div>
      </button>
    </div>
    <div class="right-content">
      <div class="pontos">
        <div class="title t15">Pontos</div>
        <div class="qnt t30">00</div>
      </div>
      <div class="btn-letters-section">
        <div
          v-for="q in questions"
          :key="q.id"
          :class="{ selected: q.selected, completed: q.completed }"
          @click="changeActualQuestion(q)"
        >
          <span v-if="q.completed" class="checkiconecerto"></span>
          {{ q.letra }}
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { questions } from '../consts/home'
export default {
  data() {
    return {
      isHoverPaper: false,
      actualPaperIndex: 0,
      questions,
      index: 0
    }
  },
  computed: {
    classPaper() {
      if (this.isHoverPaper) return this.actualPaper + '-hover'
      else return this.actualPaper
    },
    actualPaper() {
      if (this.actualPaperIndex === 0) return 'paginainteira'
      else if (this.actualPaperIndex === 1) return 'paginametade'
      else if (this.actualPaperIndex === 2) return 'paginaquarto'
      else if (this.actualPaperIndex === 3) return 'paginaoitavo'
      else return 'paginainteira'
    }
  },
  methods: {
    hoverPaper() {
      this.isHoverPaper = true
    },
    outPaper() {
      this.isHoverPaper = false
    },
    changeActualQuestion(q) {
      this.index = q.id
      q.selected = true
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  padding: 40px 40px 40px 30px;
  justify-content: space-between;

  .logo-game {
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .left-content {
    width: 141px;

    .btn-ajuda {
      margin-bottom: 123px;
    }
  }

  .center-content {
    width: 622px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .pontuation {
      width: 154px;
      height: 154px;
      border-radius: 50%;
      background-color: #a8dadc;
      position: relative;

      div {
        font-size: 51px;
        position: absolute;
        text-align: center;
      }

      .sup {
        top: 10px;
        left: 44px;
        width: 60px;
      }

      .bar {
        top: 70px;
        left: 40px;
        width: 70px;
        height: 8px;
        font-size: 80px;
        background-color: #f1faee;
      }
      .inf {
        top: 78px;
        left: 44px;
        width: 60px;
      }
    }

    .stage-interation {
      width: 638px;
      height: 424px;
      display: flex;
      align-items: center;
      justify-content: center;

      .paper-change {
        cursor: pointer;
      }
    }
  }

  .right-content {
    width: 131px;
    margin-left: -10px;

    .pontos {
      margin-top: -150px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 141px;
      height: 67px;
      background-color: #a3c3d7;
      margin-bottom: 156px;

      .title {
        margin-top: 5px;
      }

      .qnt {
        margin-top: -5px;
      }
    }

    .btn-letters-section {
      height: 241px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 141px;
      div {
        width: 141px;
        height: 67px;
        border: 6px solid #457b9d;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        color: #457b9d;
        font-size: 43px;
        cursor: pointer;
        .checkiconecerto {
          position: absolute;
          top: -20px;
          right: -20px;
          transform: scale(0.55);
        }

        &:hover {
          background-color: #457b9d;
          color: #f1faee;
        }

        &.selected {
          background-color: #457b9d;
          color: #f1faee;
        }

        &.completed {
          border: 6px solid #76e08d;
          color: #76e08d;
          border-radius: 0 23px 0 0;

          &:hover {
            background-color: #457b9d;
            border: 6px solid #76e08d;
            color: #f1faee;
          }
        }
      }
    }
  }

  .btn-section-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 21px;
  }
}
</style>
