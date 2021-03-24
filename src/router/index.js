import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

/**
 * Load components async with dynamic import.
 * @see: babel-plugin-syntax-dynamic-import
 *
 * @usage: route level code-splitting,
 * this generates a separate chunk (about.[hash].js) for this route,
 * which is lazy-loaded when the route is visited.
 */
function loadView (view) {
  return () => import(`@/views/${view}.vue`) /* webpackChunkName: "view-[request]" */
} /* webpackPrefetch: true */

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/om',
    name: 'about',
    component: loadView('About'),
    meta: {
      scrollToTop: true
      // description: `Vår visjon: Vi skal være en profesjonell helse- og fysioterapiklinikk, samtidig som vi skal møte den enkelte pasienten med omsorg og forståelse for dens situasjon.`
    }
  },
  {
    path: '/jobb',
    name: 'work',
    component: loadView('Work'),
    meta: {
      scrollToTop: true
      // description: `Innlandet helse og fysioterapi er et etablert tverrfaglig team med fokus på kompetanse, service, kunnskap og resultater.`
    }
  },
  {
    path: '/bedrifter',
    name: 'company',
    component: loadView('treatments/Company'),
    meta: {
      scrollToTop: true
      // description: `Muskel- og skjelettplager er den vanligste årsaken til sykefravær på arbeidsplasser. Vi som fysioterapeuter er eksperter på å forebygge og behandle nettopp dette.`
    }
  },
  {
    path: '/pasienterfaringer',
    name: 'reviews',
    component: loadView('Reviews'),
    meta: {
      scrollToTop: true
      // description: `Hør fra pasientene våre om deres erfaring.`
    }
  },
  {
    path: '/fysioterapi',
    name: 'physiotherapy',
    component: loadView('treatments/Physiotherapy'),
    meta: {
      scrollToTop: true
      // description: `Vi gjør en grundig undersøkelse for å kartlegge hvor plagene dine kommer fra. Behandlingen består ofte av leddmobilisering, tøyinger og dyp behandling av muskler og vev.`
    }
  },
  {
    path: '/yoga',
    name: 'yoga',
    component: loadView('treatments/Yoga'),
    meta: {
      scrollToTop: true
      // description: `MediYoga er en terapeutisk yogaform. Yogaformen passer for alle enten man har fysiske begrensninger eller ikke.`
    }
  },
  {
    path: '/yinyoga',
    name: 'Yinyoga',
    component: loadView('treatments/Yinyoga'),
    meta: {
      scrollToTop: true
      // description: `YinYoga er en rolig terapeutisk yogaform og gir en god avspenning i en krevende hverdag. Det er lange gode strekk som er bra for stive muskler, bidevev og ledd.`
    }
  },
  {
    path: '/kiropraktor',
    name: 'kiropraktor',
    component: loadView('treatments/Kiropraktor'),
    meta: {
      scrollToTop: true
      // description: `Behandling av muskel-, nerve- og skjelettlidelser. Behandling av bløtvev, hjemmeøvelser, kinesiotape, theragun, triggerpunktbehandling.`
    }
  },
  {
    path: '/osteopati',
    name: 'Osteopati',
    component: loadView('treatments/Osteopati'),
    meta: {
      scrollToTop: true
      // description: `Sammen finner vi sammenhengen mellom dine plager, din kropp og hverdag.`
    }
  },
  {
    path: '/fotpleie',
    name: 'fotpleie',
    component: loadView('treatments/Fotpleie'),
    meta: {
      scrollToTop: true
      // description: `Føttene bruker vi hver dag og det er de som bærer oss gjennom hele livet. Hver dag går vi flere tusen skritt og de blir stengt inne i sko. De trenger vedlikehold og pleie.`
    }
  },
  {
    path: '/massasje',
    name: 'massage',
    component: loadView('treatments/Massage'),
    meta: {
      scrollToTop: true
      // description: `Massasje påvirker kroppens blodsirkulasjonen, nerve- og hormonssystem. Dette fører til reduksjon av stressreaksjoner og øker kroppens evne til avspenning og restitusjon.`
    }
  },
  {
    path: '/akupunktur',
    name: 'akupunktur',
    component: loadView('treatments/Acupuncture'),
    meta: {
      scrollToTop: true
    }
  },
  {
    path: '/jordmor',
    name: 'jordmor',
    component: loadView('treatments/Jordmor'),
    meta: {
      scrollToTop: true
      // description: `Svangerskap-, fødsel- og foreldreforberedende kurs over to kvelder.`
    }
  },
  {
    path: '/svomming',
    name: 'swimming',
    component: loadView('treatments/Swimming'),
    meta: {
      scrollToTop: true
      // description: `Lære de fire kjernefunksjonene: dykke – flyte – gli – fremdrift. Vanntilvenning – bli kjent med vannets egenskaper`
    }
  },
  {
    path: '/loping',
    name: 'running',
    component: loadView('treatments/Running'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/personvern',
    name: 'personvern',
    component: loadView('PrivacyPolicy'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // scroll to top every route change
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations
      return savedPosition
    } else {
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash

        // specify offset of the element
        if (to.hash === '#pasienterfaring') {
          position.offset = { y: 100 }
        }
      }
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  },
  routes
})

// router.beforeEach((to, from, next) => {
//   document.querySelector('meta[name="description"]').content = to.meta.description
//   next()
// })

export default router
