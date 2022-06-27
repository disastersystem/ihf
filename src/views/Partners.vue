<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-row justify="center" class="wrap-point-large">
      <v-col style="max-width: 750px;" class="pr-12">
        <v-breadcrumbs class="pl-0" :items="[
          { text: 'Hjem', disabled: false, to: '/' },
          { text: 'Våre samarbeidspartnere', disabled: true, to: 'samarbeidspartnere' }
        ]">
          <template v-slot:divider>
            <!-- <v-icon>mdi-chevron-right</v-icon> -->
            <svg style="width:16px;height:16px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 750px;" class="pr-5">
        <h1 class="display-2 mb-8">
            Våre samarbeidspartnere
        </h1>

        <!-- justify="center" -->
        <v-row class="ihf-extra-margin-bottom">
          <v-col
            cols="12" xs="12" sm="8" md="8" lg="8" xl="8"
            class="ihf-card"
            @click="openLink('https://rudikompetansesenter.no')"
          >
              <div class="mt-12">
                <v-img
                  contain
                  :src="require('@/assets/rudikompetansesenter.png')"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                        role="progressbar"
                        title="Laster bilde som illustrer behandling"
                      ></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
                <!-- <v-responsive v-else :aspect-ratio="16/11" style="background: #ddd;"></v-responsive> -->
              </div>

              <div class="ihf-treatment-desc mt-8">
                <p class="line-height-18">
                    Vi er opptatt av kvalitet og helhetlig behandling, og anbefaler derfor vår samarbeidspartner
                    <a href="https://rudikompetansesenter.no/">Rudi Kompetansesenter</a>. De tilbyr individuelle samtaler, par- og familieterapi, coaching og
                    økonomisk veiledning. Ta kontakt med dem for å få din personlige støttespiller i dag.
                </p>
              </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Våre samarbeidspartnere',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: ``
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/samarbeidspartnere'
      }
    ]
  },

  components: {
    Footer
  },

  data () {
      return {
        types: [
          {
            name: 'Rudikompetansesenter',
            image: 'rudikompetansesenter.png',
            ratio: 1.5,
            link: 'https://rudikompetansesenter.no/',
            text: `Vi er opptatt av kvalitet og helhetlig behandling, og anbefaler derfor vår samarbeidspartner Rudi Kompetansesenter. De tilbyr individuelle samtaler, par- og familieterapi, coaching og økonomisk veiledning. Ta kontakt med dem for å få din personlige støttespiller i dag.`
          }
          // {
          //   name: 'Skulderplager',
          //   image: '',
          //   ratio: 1.5,
          //   link: 'skulderplager',
          //   text: ``
          // }
        ]
      }
  },

  methods: {
    openLink (path) {
        window.open(path)
    }
  }
}
</script>

<style lang="css" scoped>
  .ratio-wrapper {
    height: 0;
    overflow: hidden;
    padding-top: 60%;
    /*background: #eee;*/
    position: relative;
  }
  .ratio-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .ihf-card {
    cursor: pointer;
  }
</style>
