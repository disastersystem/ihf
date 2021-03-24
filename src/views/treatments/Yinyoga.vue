<template>
  <div class="
    pr-6 pl-6
    pr-sm-6 pl-sm-4
    pr-md-12 pl-md-12
    pr-lg-12 pl-lg-12
    pr-xl-12 pl-xl-12
  ">
    <v-container class="mb-0 pb-0 pl-0">
      <v-breadcrumbs class="pl-3" :items="[
        { text: 'Hjem', disabled: false, to: '/' },
        { text: 'YinYoga', disabled: true, to: 'yinyoga' }
      ]">
        <template v-slot:divider>
          <!-- <v-icon>mdi-chevron-right</v-icon> -->
          <svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-12">
        <h1 class="display-2">YinYoga</h1>

        <p class="mt-4 line-height-18">
          YinYoga er en terapeutisk og meditativ form for yoga. Det er lange gode
          strekk som er bra for stive muskler, bidevev og ledd.
        </p>
        <p class="mt-4 line-height-18">
          YinYoga er en rolig terapeutisk yogaform og gir en god avspenning i en
          krevende hverdag. Noen av YinYoga stillingene holdes i flere minutter
          for å åpne og tøye bindevev, dyp muskulatur og ledd/leddbånd. Dette får
          deg til å gi slipp på spenninger og du får mer energi. Det er også lagt til
          dynamiske overganger fra stilling til stilling for å styrke
          kjernemuskulatur.
        </p>
        <p class="mt-4 line-height-18">
          På et YinYoga kurs lærer du yogaøvelser, pusteteknikker, guidet
          meditasjon, samt hvordan å ta hensyn til deg selv i hverdagen.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/berit-sun.jpg')"
          contain
          style="max-width: 500px;"
        ></v-img>
      </v-col>
    </v-row>

    <!-- <v-row class="mt-12 pt-5 wrap-point" justify="center">
      <v-col style="padding-right: 50px; max-width: 300px;">
        <v-img
          :src="require('@/assets/berit-beach.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Yogaterapeut Berit Engeset</h3>

        <p class="mt-4 line-height-18">
          Berit har deltatt og tatt kurs i klassisk- og Ashtanga yoga de siste tyve årene i tillegg til at hun er utdannet vetrinær.
          Når hun ser tilbake på sin yogautøvelses hyppighet, ser hun at hun har brukt yoga i stressfulle perioder i livet.
        </p>
      </v-col>
    </v-row> -->

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Yinyoga / yoga',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `YinYoga er en rolig terapeutisk yogaform og gir en god avspenning i en krevende hverdag. Det er lange gode strekk som er bra for stive muskler, bidevev og ledd.`
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
