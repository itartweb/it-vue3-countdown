import Countdown from './components/Countdown.vue'

export default {
  install(Vue) {
    Vue.component('Countdown', Countdown)
  },
}

export { Countdown }
