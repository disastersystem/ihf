<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-container class="mb-0 pb-0 pl-0">
      <v-breadcrumbs class="pl-0" :items="[
        { text: 'Hjem', disabled: false, to: '/' },
        { text: 'MediYoga', disabled: true, to: 'yoga' }
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
      <v-col style="max-width: 700px;" class="pr-5">
        <h1 class="display-2">ViryaYoga</h1>

        <p class="mt-4 line-height-18">
          I viryayoga møter du dynamiske yogasekvenser med fokus på god bevegelseslære, og et filosofisk tankekorn for sjelen.
          Du får en tøff og morsom yogatrening som skaper kraft og energi. Hver time består av ti moduler som gir kropp og sinn en helhetlig
          praksis. Disse delene inkluderer oppvarming, solhilsener, stående posisjoner, balanse, armbalanser og magestyrkende asanas (posisjoner),
          hofteåpnere, bakoverbøyninger, foroverbøyde posisjoner, avsluttende posisjoner og avspenning. Klassen varer i 75-90 minutter,
          og avsluttes alltid med 15 minutters avspenning.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <!-- <v-img
          :src="require('@/assets/berit.jpg')"
          contain
          style="max-width: 500px;"
        ></v-img> -->
      </v-col>
    </v-row>

    <v-row class="mt-12 pt-5 wrap-point-semi-large" justify="center">
      <v-col style="padding-right: 50px; max-width: 400px;">
        <!-- <img src="@/assets/ansatte/DSC_0200.jpg" style="display: block; width: 300px;"> -->
        <!-- <v-img
          :src="require('@/assets/ansatte/jana.jpeg')"
          contain
        ></v-img> -->
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Yogalærer Jana S. Sørum</h3>
        <p class="mt-4 line-height-18">
          Jana er utdannet sosialarbeider og er mor til to. Hun er opprinnelig fra Tyskland,
          recovering perfeksjonist og viryayogalærer under utdanning.
          Interessen for yoga startet i begynnelsen av 2019. Siden har det ikke gått en dag uten at hun har lest om yogafilosofi,
          lært om biomekanikk, hørt podcast om yoga og meditasjon, meditert eller yoget selv.
          Jana fant yoga som en metode for å lege kropp, sinn og sjel fra en spiseforstyrrelse som hadde tatt over livet hennes.
          Hun er utrolig takknemlig for å ha oppdaget yoga og synes det er meningsfylt å formidle dens kraft videre.
        </p>
      </v-col>
    </v-row>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  }
}
</script>
