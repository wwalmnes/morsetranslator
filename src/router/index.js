import Vue from 'vue'
import Router from 'vue-router'
import MorseTranslator from '@/components/MorseTranslator'
import CustomButton from '@/components/Button'

Vue.component('custom-button', CustomButton);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MorseTranslator',
      component: MorseTranslator
    },
    {
      path: '/morse',
      name: 'MorseTranslator',
      component: MorseTranslator
    }
  ]
})
