import { useSound } from '@vueuse/sound'

import click from '../assets/audios/click.wav'
import dobra0 from '../assets/audios/dobra0.wav'
import dobra1 from '../assets/audios/dobra1.wav'
import dobra2 from '../assets/audios/dobra2.wav'
import dobra3 from '../assets/audios/dobra3.wav'
import errado from '../assets/audios/errado.wav'
import final from '../assets/audios/final.wav'
import mouseenter from '../assets/audios/mouseenter.wav'
import correto from '../assets/audios/correto.wav'
import desdobra from '../assets/audios/desdobra.wav'

const audios = {
  setup() {
    const audioClick = useSound(click)
    const audioCorreto = useSound(correto)
    const audioErrado = useSound(errado)
    const audioDobra0 = useSound(dobra0)
    const audioDobra1 = useSound(dobra1)
    const audioDobra2 = useSound(dobra2)
    const audioDobra3 = useSound(dobra3)
    const audioFinal = useSound(final)
    const audioMouseEnter = useSound(mouseenter)
    const audioDesdobra = useSound(desdobra)

    return {
      audioClick,
      audioDobra0,
      audioDobra1,
      audioDobra2,
      audioDobra3,
      audioErrado,
      audioFinal,
      audioMouseEnter,
      audioCorreto,
      audioDesdobra
    }
  },
  methods: {
    audioClickPlay() {
      if (this.soundState) this.audioClick.play()
    },
    audioCorretoPlay() {
      setTimeout(() => {
        if (this.soundState) this.audioCorreto.play()
      }, 500)
    },
    audioDesdobraPlay() {
      if (this.soundState) this.audioDesdobra.play()
    },
    audioErradoPlay() {
      setTimeout(() => {
        if (this.soundState) this.audioErrado.play()
      }, 500)
    },
    audioDobra0play() {
      if (this.soundState) this.audioDobra0.play()
    },
    audioDobra1play() {
      if (this.soundState) this.audioDobra1.play()
    },
    audioDobra2play() {
      if (this.soundState) this.audioDobra2.play()
    },
    audioDobra3play() {
      if (this.soundState) this.audioDobra3.play()
    },
    audioFinalPlay() {
      setTimeout(() => {
        if (this.soundState) this.audioFinal.play()
      }, 500)
    },
    audioMousEnterPlay() {
      if (this.soundState) this.audioMouseEnter.play()
    },
    audioErradoStop() {
      if (this.soundState) this.audioErrado.stop()
    },
    audioCorretoStop() {
      if (this.soundState) this.audioCorreto.stop()
    },
    audioFinalStop() {
      if (this.soundState) this.audioFinal.stop()
    }
  }
}

export default audios
