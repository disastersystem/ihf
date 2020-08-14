<template>
  <v-app>
    <!-- :collapse-on-scroll="true" -->
    <v-app-bar
      app
      flat
    >
      <!-- <div class="d-flex align-center">
        <v-img
          :src="require('@/assets/figure.svg')"
          alt="Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />
      </div> -->
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-lg-and-up"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div class="pa-5 hidden-md-and-down">
        <v-btn @click="$router.push('/')" text class="text-none mr-4">
          <span>Hjem</span>
        </v-btn>

        <!-- <v-btn @click="$router.push('om')" text class="text-none mr-4">
          <span>Om Innlandet Helse og Fysioterapi</span>
        </v-btn> -->

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              class="text-none mr-4"
              v-on="on"
            >
              Om Innlandet Helse og Fysioterapi
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('om')">
              <v-list-item-title>
                <!-- Om oss / historie -->
                Vår visjon og historie
              </v-list-item-title>
            </v-list-item>

            <v-list-item @click="$router.push('jobb')">
              <v-list-item-title>
                Lyst på jobb hos oss?
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              class="text-none mr-4"
              v-on="on"
            >
              Behandlinger
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(treatment, index) in treatments"
              :key="index"
              @click="$router.push(treatment.link)"
            >
              <v-list-item-title>
                {{ treatment.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn @click="$router.push('bedrifter')" text class="text-none mr-4">
          <span>Bedrifter</span>
        </v-btn>

        <v-btn text class="text-none mr-4" @click="$router.push('/pasienterfaringer')">
          <span>Pasienterfaringer</span>
        </v-btn>

        <!-- <v-btn text class="text-none mr-4" @click="$router.push('/pasienterfaringer')">
          <span>Jobbe hos oss?</span>
        </v-btn> -->

        <v-btn
          href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
          target="_blank"
          color="accent"
          class="text-none"
          rounded
        >
          <!-- <span class="mr-2">Bestill time</span> -->
          <span>Bestill time</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="300"
    >
      <v-list
        nav
      >
        <v-list-item class="mb-12">
          <v-list-item-title>
            <v-btn
              href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
              target="_blank"
              color="accent"
              class="text-none"
              rounded
            >
              <span>Bestill time</span>
            </v-btn>
          </v-list-item-title>
        </v-list-item>

        <!-- active-class="deep-purple--text text--accent-4" -->
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="$router.push('/')">
              Hjem
            </v-list-item-title>
          </v-list-item>

          <!-- <v-list-item>
            <v-list-item-title @click="$router.push('om')">
              Om Innlandet Helse og Fysioterapi
            </v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Om Innlandet Helse og Fysioterapi</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="$router.push('om')">
            <v-list-item-title class="pl-6">
              <!-- Om oss / historie -->
              Vår visjon og historie
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('jobb')">
            <v-list-item-title class="pl-6">
              Lyst på jobb hos oss?
            </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          v-model="behandlinger"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Behandlinger</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in treatments"
            :key="subItem.name"
            @click="$router.push(subItem.link)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.name" class="pl-6"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="$router.push('/bedrifter')">
              Bedrifter
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="$router.push('/pasienterfaringer')">
              Pasienterfaringer
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>

    <v-content>
      <keep-alive include="Home">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    treatments: [
      {
        name: 'Fysioterapi',
        link: 'fysioterapi'
      },
      {
        name: 'Osteopati',
        link: 'osteopati'
      },
      {
        name: 'Massasje',
        link: 'massasje'
      },
      {
        name: 'Fotpleie',
        link: 'fotpleie'
      },
      {
        name: 'MediYoga',
        link: 'yoga'
      },
      {
        name: 'ViryaYoga',
        link: 'viryayoga'
      },
      {
        name: 'YinYoga',
        link: 'yinyoga'
      },
      {
        name: 'Svømming',
        link: 'svømming'
      },
      {
        name: 'Bedrifter',
        link: 'bedrifter'
      }
    ],
    behandlinger: false,

    drawer: false
  })
}
</script>

<style>
  .overflow-wrap {
    /* These are technically the same, but use both */
    overflow-wrap: break-word;
    word-wrap: break-word;

    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .line-height-18 {
    line-height: 1.9em;
  }
  h1 {
    color: #F75F49;
  }
  p, ul, td, th, table, tr {
    /*font-family: 'Roboto', sans-serif;
    color: #656969;
    font-weight: 400;*/
  }
  .ihf-extra-margin-top {
    margin-top: 200px;
  }
  .ihf-extra-margin-bottom {
    margin-bottom: 200px;
  }
  .ihf-text-width {
    max-width: 700px;
    min-width: 500px;
  }
  /* overwrite vuetify table row hover backgrond colour */
  .ihf-table tr:hover {
    background-color: #fff !important;
  }
  @media (max-width: 800px) {
    .wrap-point {
      /*flex-wrap: wrap;*/
      flex-direction: column;
    }
  }
  @media (max-width: 1100px) {
    .wrap-point-semi-large {
      /*flex-wrap: wrap;*/
      flex-direction: column;
    }
  }
  @media (max-width: 1280px) {
    .wrap-point-large {
      /*flex-wrap: wrap;*/
      flex-direction: column;
    }
  }
</style>
