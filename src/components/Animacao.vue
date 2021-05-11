<template>
  <div class="animation-stage">
    <div class="image" :class="actualShowPaper"></div>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  props: {
    index: {
      type: Number,
      required: false,
      default: 3
    }
  },
  data() {
    return {
      number: 3,
      timer: null
    }
  },
  computed: {
    actualShowPaper() {
      if (this.number === 0) return 'paginainteira'
      else if (this.number === 1) return 'paginametade'
      else if (this.number === 2) return 'paginaquarto'
      else if (this.number === 3) return 'paginaoitavo'
      else return 'paginainteira'
    },
    timerExec() {
      if (this.index === 3) return 300
      else if (this.index === 2) return 400
      else if (this.index === 1) return 600
      else return 1000
    }
  },
  mounted() {
    this.number = this.index
    this.changePaper()
  },

  methods: {
    changePaper() {
      this.timer = setInterval(() => {
        if (this.number > 0) {
          this.number--
        } else {
          clearInterval(this.timer)
          this.$emit('close')
        }
      }, this.timerExec)
    }
  }
}
</script>

<style lang="scss" scoped>
.animation-stage {
  width: 638px;
  height: 424px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
