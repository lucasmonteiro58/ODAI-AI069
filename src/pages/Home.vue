<template>
  <section class="container">
    <div class="logo-game logo"></div>
    <div class="left-content">
      <button
        class="btn ajuda btn-ajuda"
        :class="'index-help' + indexHelp"
        @click.prevent="clickOpenHelp"
      >
        <div class="icon ico-ajuda"></div>
        <div class="text t15">Ajuda</div>
      </button>
      <div class="btn-section-controls">
        <button
          class="btn primary btns-zindex"
          :class="'index-help' + indexHelp"
          @click.prevent="clickInicio"
        >
          <div class="icon ico-inicio"></div>
          <div class="text t11">Início</div>
        </button>
        <button
          class="btn primary btns-zindex"
          :class="'index-help' + indexHelp"
          @click.prevent="clickReiniciar"
        >
          <div class="icon ico-reiniciar"></div>
          <div class="text t9">Reiniciar</div>
        </button>
        <button
          class="btn primary z10 btns-zindex"
          :class="'index-help' + indexHelp"
          @click.prevent="toogleSound"
        >
          <div class="icon" :class="soundClass"></div>
          <div class="text">Som</div>
        </button>
        <button
          class="btn primary z10 btns-zindex"
          :class="'index-help' + indexHelp"
          @click.prevent="openCreditos"
        >
          <div class="icon ico-creditos"></div>
          <div class="text t9">Créditos</div>
        </button>
      </div>
    </div>
    <div class="center-content">
      <div
        v-show="showCenter"
        class="pontuation"
        :class="'index-help' + indexHelp"
      >
        <div class="sup">{{ questions[index].fracao.top }}</div>
        <div class="bar"></div>
        <div class="inf">{{ questions[index].fracao.bottom }}</div>
      </div>
      <div v-show="showCenter" class="stage-interation">
        <div v-if="showResposta" :class="classResposta"></div>
        <div
          v-else
          class="paper-change"
          :class="['index-help' + indexHelp, classPaper]"
          @click.prevent="changeActualPaperIndex"
          @mouseenter="hoverPaper"
          @mouseout="outPaper"
        ></div>
      </div>
      <button
        v-show="showCenter"
        class="btn red-button btn-confirmar"
        :class="'index-help' + indexHelp"
        @click.prevent="clickConfirmar"
      >
        <div class="text t11">Confirmar</div>
      </button>
    </div>
    <div class="right-content">
      <div class="pontos" :class="'index-help' + indexHelp">
        <div class="title t15">Pontos</div>
        <div class="qnt t30">{{ textPontuation }}</div>
      </div>
      <div class="btn-letters-section">
        <div
          v-for="q in questions"
          :key="q.id"
          :class="{ selected: q.selected, completed: q.completed }"
          @click.prevent="changeActualQuestion(q)"
        >
          <span v-if="q.completed" class="checkiconecerto"></span>
          {{ q.letra }}
        </div>
      </div>
    </div>
    <PopUpFeedback
      v-if="showPopUpFeedback"
      :is-showed="showPopUpFeedback"
      :is-correct="feedbackCorrect"
      @continuar="clickContinuarPopUp"
      @voltar="clickVoltarPopUp"
    ></PopUpFeedback>
    <PopUpCongrats
      v-if="showPopUpCongrats"
      :is-showed="showPopUpCongrats"
      @inicio="clickInicio"
    ></PopUpCongrats>
    <Help
      v-if="showHelp"
      :index="indexHelp"
      :is-inicial="isInicialHelp"
      @voltar="clickVoltarHelp"
      @close="clickCloseHelp"
      @avancar="clickAvancarHelp"
    ></Help>
    <Inicio v-if="showInicio" @iniciar="clickIniciar"></Inicio>
    <PopUpCreditos
      v-if="showCreditos"
      :is-showed="showCreditos"
      @close="closeCreditos"
    ></PopUpCreditos>
  </section>
</template>
<script>
import PopUpCongrats from '../components/PopUpCongrats.vue'
import PopUpFeedback from '../components/PopUpFeedback.vue'
import Inicio from '../components/Inicio.vue'
import { questions } from '../consts/home'
import audios from '../mixins/audios'
import PopUpCreditos from '../components/PopUpCreditos.vue'
export default {
  components: { PopUpFeedback, PopUpCongrats, Inicio, PopUpCreditos },
  mixins: [audios],
  data() {
    return {
      isHoverPaper: false,
      actualPaperIndex: 0,
      showPopUpFeedback: false,
      showPopUpCongrats: false,
      feedbackCorrect: false,
      showInicio: true,
      showCenter: true,
      showResposta: false,
      questions,
      index: 0,
      pontuation: 0,
      indexHelp: 0,
      showHelp: false,
      preventClickConfirma: true,
      isInicialHelp: true,
      showCreditos: false
    }
  },
  computed: {
    classPaper() {
      if (this.isHoverPaper) return this.actualPaper + '-hover'
      else return this.actualPaper
    },
    textPontuation() {
      if (this.pontuation < 9) {
        return '0' + this.pontuation
      } else return this.pontuation
    },
    classResposta() {
      return 'resposta' + this.actualPaperIndex
    },
    actualPaper() {
      if (this.actualPaperIndex === 0) return 'paginainteira'
      else if (this.actualPaperIndex === 1) return 'paginametade'
      else if (this.actualPaperIndex === 2) return 'paginaquarto'
      else if (this.actualPaperIndex === 3) return 'paginaoitavo'
      else return 'paginainteira'
    },
    soundState() {
      return this.$store.state.soundState
    },
    soundClass() {
      if (this.soundState) return 'ico-som-on'
      else return 'ico-sound-off'
    }
  },
  methods: {
    clickVoltarHelp() {
      this.indexHelp--
      this.audioClickPlay()
    },
    closeCreditos() {
      this.showCreditos = false
      this.audioClickPlay()
    },
    openCreditos() {
      this.showCreditos = true
      this.audioClickPlay()
    },
    clickCloseHelp() {
      this.indexHelp = 0
      this.showHelp = false
      this.isInicialHelp = false
      this.audioClickPlay()
    },
    clickOpenHelp() {
      this.showHelp = true
      this.actualPaperIndex = 0
      this.audioClickPlay()
    },
    clickAvancarHelp() {
      this.audioClickPlay()
      if (this.indexHelp === 2) {
        this.showHelp = false
        this.indexHelp = 0
        this.isInicialHelp = false
      } else {
        this.indexHelp++
      }
    },
    hoverPaper() {
      this.isHoverPaper = true
    },
    clickIniciar() {
      // nao por som
      this.showInicio = false
      this.showHelp = true
      this.changeActualQuestion(this.questions[this.index])
    },
    outPaper() {
      this.isHoverPaper = false
    },
    changeActualPaperIndex() {
      this.playSongPaper()
      if (this.actualPaperIndex < 3) {
        this.actualPaperIndex++
      } else {
        this.actualPaperIndex = 0
      }
    },
    playSongPaper() {
      if (this.actualPaperIndex === 0) this.audioDobra0play()
      else if (this.actualPaperIndex === 1) this.audioDobra1play()
      else if (this.actualPaperIndex === 2) this.audioDobra2play()
      else if (this.actualPaperIndex === 3) this.audioDobra3play()
    },
    changeActualQuestion(q) {
      this.audioClickPlay()
      this.index = q.id
      this.actualPaperIndex = 0
      this.deselectAll()
      q.selected = true
    },
    deselectAll() {
      // nao colocar som
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].selected = false
      }
    },
    toogleSound() {
      this.$store.commit('changeSoundState', !this.soundState)
      this.audioClickPlay()
    },
    openPopUpFeedback() {
      // nao por som
      this.showPopUpFeedback = true
    },
    clickContinuarPopUp() {
      this.audioClickPlay()
      this.showPopUpFeedback = false
      this.showResposta = false
      this.getNextQuestion()
    },
    clickVoltarPopUp() {
      this.audioClickPlay()
      this.showPopUpFeedback = false
      this.showResposta = false
    },
    clickConfirmar() {
      if (this.preventClickConfirma) {
        this.showResposta = true
        this.audioClickPlay()
        this.preventClickConfirma = false
        setTimeout(() => {
          if (this.actualPaperIndex === questions[this.index].correct) {
            // corect
            this.feedbackCorrect = true
            this.pontuation = this.pontuation + 10
            this.questions[this.index].completed = true
            this.openPopUpFeedback()
            this.audioCorretoPlay()
            this.preventClickConfirma = true
          } else {
            this.feedbackCorrect = false
            this.openPopUpFeedback()
            this.audioErradoPlay()
            this.preventClickConfirma = true
          }
        }, 1000)
      }
    },
    getNextQuestion() {
      // nao colocar som aqui
      const next = this.questions.filter((el) => el.completed === false)
      if (next[0]) {
        this.changeActualQuestion(next[0])
      } else {
        this.openPopUpCongrast()
      }
    },
    resetAll() {
      // nao por som
      this.deselectAll()
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].completed = false
      }
      this.actualPaperIndex = 0
      this.showPopUpFeedback = false
      this.showPopUpCongrats = false
      this.feedbackCorrect = false
      this.showCenter = true
      this.showResposta = false
      this.index = 0
      this.pontuation = 0
      this.indexHelp = 0
    },
    clickInicio() {
      this.audioFinalStop()
      this.audioClickPlay()
      this.showPopUpCongrats = false
      this.showCenter = true
      this.resetAll()
      this.showInicio = true
    },
    openPopUpCongrast() {
      this.showPopUpCongrats = true
      this.showCenter = false
      this.audioFinalPlay()
    },
    clickReiniciar() {
      // nao por som
      this.resetAll()
      this.isInicialHelp = true
      this.changeActualQuestion(this.questions[this.index])
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
    left: 30px;
    top: 40px;
  }

  .left-content {
    width: 141px;

    .btn-ajuda {
      margin-bottom: 110px;
      margin-top: 100px;
      position: relative;

      &.index-help2 {
        z-index: 30;
      }
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

      &.index-help1 {
        z-index: 30;
      }

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

        &.index-help1 {
          z-index: 30;
        }
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

      &.index-help1 {
        z-index: 30;
        position: relative;
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
    position: relative;
  }
}

.btn-confirmar {
  &.index-help1 {
    z-index: 30;
  }
}

.btns-zindex {
  &.index-help2 {
    z-index: 30;
  }
}
</style>
