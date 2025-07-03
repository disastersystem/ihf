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
    path: '/samarbeidspartnere',
    name: 'partners',
    component: loadView('Partners'),
    meta: {
      scrollToTop: true
      // description: `Innlandet helse og fysioterapi er et etablert tverrfaglig team med fokus på kompetanse, service, kunnskap og resultater.`
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
    path: '/finn-din-plage',
    name: 'plage',
    component: loadView('Plage'),
    meta: {
      scrollToTop: true
      // description: `Muskel- og skjelettplager er den vanligste årsaken til sykefravær på arbeidsplasser. Vi som fysioterapeuter er eksperter på å forebygge og behandle nettopp dette.`
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
    path: '/nakkesmerter',
    name: 'nakkesmerter',
    component: loadView('plager/Nakkesmerter'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/korsryggplager',
    name: 'korsryggplager',
    component: loadView('plager/Korsryggplager'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/hodepine',
    name: 'hodepine',
    component: loadView('plager/Hodepine'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/kneplager',
    name: 'kneplager',
    component: loadView('plager/Kneplager'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/mageplager',
    name: 'mageplager',
    component: loadView('plager/Mageplager'),
    meta: {
      scrollToTop: true
      // description: `Vi hjelper deg til bedre helse med hensyn til din situasjon. Helse og fysioterapi klinikk på Moelv og Gjøvik.`
    }
  },
  {
    path: '/h%C3%A5ndleddsmerter',
    name: 'haandleddsmerter',
    component: loadView('plager/Haandledd'),
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
