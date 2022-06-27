<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-row justify="center" class="wrap-point-large">
      <v-col style="max-width: 1200px;" class="pr-12">
        <v-breadcrumbs class="pl-0" :items="[
          { text: 'Hjem', disabled: false, to: '/' },
          { text: 'Finn din plage', disabled: true, to: 'finn-din-plage' }
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
      <v-col style="max-width: 1200px;" class="pr-5">
        <h1 class="display-2 mb-8">
            Finn din plage
        </h1>

        <v-row justify="center" class="ihf-extra-margin-bottom">
          <v-col
            cols="12" xs="12" sm="6" md="4" lg="3" xl="3"
            v-for="(type, index) in types"
            :key="index"
            class="ihf-card"
            @click="$router.push(type.link)"
          >
              <div>
                <v-img
                  v-if="type.image !== ''"
                  contain
                  :aspect-ratio="type.ratio"
                  :src="require('@/assets/' + type.image)"
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
                <v-responsive v-else :aspect-ratio="16/11" style="background: #ddd;"></v-responsive>
              </div>

              <div class="ihf-treatment-desc">
                <h2 v-html="type.name"></h2>

                <div v-html="type.text"></div>
              </div>

              <v-row justify="center" class="pt-0 ml-2 mr-2">
                <!-- @click="$router.push(type.link)" -->
              <v-btn
                target="_blank"
                color="secondary"
                class="text-none mb-8"
                text
              >
                <span class="pr-1">Les mer</span>
                <!-- <v-icon right dark>mdi-arrow-right</v-icon> -->
                <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
              </v-btn>
            </v-row>
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
    title: 'Finn din plage',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: ``
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/finn-din-plage'
      }
    ]
  },

  components: {
    Footer
  },

  data () {
      return {
        types: [
          // {
          //   name: 'Nakkesmerter',
          //   image: '',
          //   ratio: 1.5,
          //   link: 'nakkesmerter',
          //   text: ``
          // },
          // {
          //   name: 'Skulderplager',
          //   image: '',
          //   ratio: 1.5,
          //   link: 'skulderplager',
          //   text: ``
          // },
          {
            name: 'Hodepine',
            image: 'hodepine.png',
            ratio: 1.5,
            link: 'hodepine',
            text: ``
          },
          // {
          //   name: 'Armsmerte',
          //   image: '',
          //   ratio: 1.5,
          //   link: 'armsmerte',
          //   text: ``
          // },
          {
            name: 'Hånd- og håndleddssmerter',
            image: 'håndledd.png',
            ratio: 1.5,
            link: 'h%C3%A5ndleddsmerter',
            text: ``
          },
          {
            name: 'Korsryggplager',
            image: 'ryggplager.png',
            ratio: 1.5,
            link: 'korsryggplager',
            text: ``
          },
          {
            name: 'Mageplager',
            image: 'mageplager.png',
            ratio: 1.5,
            link: 'mageplager',
            text: ``
          },
          // {
          //   name: 'Hoftesmerte',
          //   image: '',
          //   ratio: 1.5,
          //   link: 'Hoftesmerte',
          //   text: ``
          // },
          {
            name: 'Kneplager',
            image: 'kneplager.png',
            ratio: 1.5,
            link: 'kneplager',
            text: ``
          }
          // {
          //   name: 'Ankel- og fotplager',
          //   image: '',
          //   ratio: 1.5,
          //   link: 'ankelplager',
          //   text: ``
          // }
        ]
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
  .ihf-treatment-desc {
    padding: 20px;
    background: #F1EDEE;
    border-radius: 5px;
    height: auto;
    transform: translateY(-30px);
    margin: 0 3%;
    width: 94%;
  }
</style>
