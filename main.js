import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar,BottomSheet } from 'quasar'
import { useThemeStore } from './stores/THEME'
import JORITZ from 'joritz-ui'

import 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'

// We load Quasar stylesheet file
import 'quasar/dist/quasar.sass'

// We add Quasar addons, if they were requested
import 'quasar/src/css/flex-addon.sass'

// JORITZ Specifc stylesheet
import 'joritz-ui/joritz.scss'


const pinia = createPinia()

// JORITZ theme store
const theme = useThemeStore(pinia)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Quasar,{
    config: {
        brand: theme.getBrand(),
        dark: theme.darkMode
    },
    plugins: {
      BottomSheet
    }
  })
app.use(JORITZ)

app.mount('#joritz-layout')
