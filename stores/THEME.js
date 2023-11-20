import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('THEME', () => {
  const brand = ref({
    "light": {
      primary: '#0E1734',
      'primary-dimmed': '#0E173440',
      secondary: '#3D95D9',
      accent: '#1a1a1a',
      dark: '#1d1d1d',
      'dark-page': '#2a2727',
      'bg-page': '#e0e0e0',
      positive: '#185727',
      negative: '#75212b',
      info: '#0f6d80',
      warning: '#eef207',
      'dimmed-background': '#fbfbfb',
      'light-dimmed-background': '#f1f1f1',
      'grey-3': '#f0f0f0',
      'separator-color-2':'#CECECE',
    },
    "dark": {
      primary: '#1a1a1a',
      'primary-dimmed': '#1a1a1a40',
      secondary: '#ffcb74',
      accent: '#ffffff',
      dark: '#1d1d1d',
      //  'bg-page': '#1a1a1a',
      'bg-page': '#3b3939',
      'dark-page': '#2a2727',
      positive: '#185727',
      negative: '#75212b',
      info: '#0f6d80',
      warning: '#eef207',
      'dimmed-background': '#2b2b2b',
      'light-dimmed-background': '#333333',
      'grey-3': '#3a3a3a',
      'separator-color-2':'#545454',
    },
  })

  const darkMode = ref(false)

  function getBrand() {
    if (darkMode.value) {
      return brand.value["dark"]
    } else {
      return brand.value["light"]
    }
  }

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }

  return { brand, darkMode, getBrand, toggleDarkMode }
})
