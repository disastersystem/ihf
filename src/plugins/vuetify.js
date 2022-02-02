import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  // defaultAssets: false,
  theme: {
    themes: {
      light: {
        // primary: '#3f51b5',
        secondary: '#ef7b47',
        accent: '#003a5d'
        // error: '#b71c1c'
      }
    }
  }
})
