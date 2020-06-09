import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: '#3f51b5',
        secondary: '#F75F49',
        accent: '#2E86AB'
        // error: '#b71c1c'
      }
    }
  }
})
