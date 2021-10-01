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
          { text: 'Massasje', disabled: true, to: 'massasje' }
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

    <v-row justify="center" class="wrap-point-large" style="margin: 100px 0;">
      <v-col style="max-width: 700px;" class="pr-5">
        <h1 class="display-2">Massasje</h1>

        <p class="mt-4 line-height-18">
          Massasje er en behandlingsteknikk som har eksistert i mange tusen år og blir i dag anvendt av mange forskjellige terapeuter. Hensikten med massasje er å påvirke kroppens blodsirkulasjonen, nerve- og hormonssystem. Dette fører til reduksjon av stressreaksjoner og øke kroppens evne til avspenning og restitusjon.
          Det finnes flere underkategorier innen massasje. De ulike typene massasje har ulike formål.
        </p>

        <p class="mt-4 line-height-18">
          <b>Klassisk massasje</b> består av fem hovedteknikker som er effleurage (stryking), petrissage (knaing),
          tapotement (rytmisk tapping), friksjon og vibrering. Dette er en slags grunnbehandling som
          både kan ha som formål å løsne spenninger i muskulatur og øke velvære og avspenning.
          Andre massasjeteknikker er som regel basert på den klassiske massasjen.
        </p>

        <p class="mt-4 line-height-18">
          <b>Lymfedrenasje</b> er en massasjeteknikk for å bedre sirkulasjon av lymfesystemet.
          Dette er en gunstig behandling for de som opplever hevelser i kroppen grunnet medisinbruk,
          operasjoner eller generelt nedsatt lymfesirkulasjon.
        </p>

        <p class="mt-4 line-height-18">
          <b>Idrettsmassasje</b> består av massasjeteknikker for å optimalisere sirkulasjon i muskulatur
          som skal prestere 100% og restitusjon av muskulatur som har høy belastning.
        </p>

        <p class="mt-4 line-height-18">
          <b>Gravidmassasje</b> er en massasje som er tilpasset gravide. Massasje under svangerskapet er
          svært populært og har som formål å lindre smerter i anspent muskulatur grunnet svangerskap
          og fremme god sirkulasjon. Økt velvære er positivt for både mor og barn.
        </p>

        <p class="mt-4 line-height-18">
          <b>Bindevevsmassasje</b> er en type massasje som har som hensikt å løse opp i "opphenget"
          til muskulatur og organer. Senefester, hud og bindevev påvirkes ofte ved langvarige
          smerter og spent muskulatur. Disse strukturene kan bli svært stramme og skape en
          sekundær smerte som kan kjennes muskulært ut.
        </p>

        <v-row>
          <v-col cols="auto">
            <v-btn
              href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
              target="_blank"
              color="accent"
              class="text-none pt-6 pb-6 pl-6 pr-6 mr-6 mt-8"
              rounded
            >
              <span class="font-weight-regular mr-1">Bestill time</span>
              <span class="font-weight-bold">Moelv</span>
            </v-btn>
            <p class="body-1 mt-2 pl-8">
              Tlf: 951 888 73
            </p>
          </v-col>
          <v-col cols="auto">
            <v-btn
              href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
              target="_blank"
              color="accent"
              class="text-none pt-6 pb-6 pl-6 pr-6 mt-8"
              rounded
            >
              <span class="font-weight-regular mr-1">Bestill time</span>
              <span class="font-weight-bold">Gjøvik</span>
              <!-- <v-icon>mdi-open-in-new</v-icon> -->
            </v-btn>
            <p class="body-1 mt-2 pl-8">
              Tlf: 973 488 73
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/massage.jpg')"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <!-- <v-row class="mt-12 pt-5 wrap-point" justify="center">
      <v-col style="padding-right: 50px; max-width: 300px;">
        <v-img
          :src="require('@/assets/ansatte/gro.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Massasjeterapeut og akupunktør Gro Visdal</h3>

        <p class="mt-4 line-height-18">
          Gro er utdannet massasjeterapeut og har en bachelor i akupunktur fra IHF og Høyskolen Kristiania i Oslo. Hun har erfaring fra
          tverrfaglige team i Oslo og Gudbrandsdalen.
        </p>
        <p class="mt-4 line-height-18">
          Gro har alltid fokus på en helhetlig behandling og tilpasser behandlingene etter pasientens ønsker, men da med en faglig anbefaling.
          Behandlingsformer hun tilbyr er:
        </p>

        <ul>
          <li>Terapeutisk/fysikalsk massasje</li>
          <li>Klassisk massasje</li>
          <li>Idrettsmassasje</li>
          <li>Velværemassasje</li>
          <li>Lymfedrenasje</li>
          <li>Gravidmassasje</li>
          <li>Triggerpunktbehandling med massasje og/eller nåler</li>
          <li>Kopping</li>
          <li>Kinesioteiping</li>
          <li>IMS (intramuskulær stimulering)</li>
          <li>Elektroakupunktur</li>
          <li>Tradisjonell kinesisk akupunktur</li>
          <li>Øreakupunktur</li>
        </ul>

        <p class="mt-4 line-height-18">
          Ofte komplementerer Gro behandlingene med generell kosthold- og treningsveiledning og ergonomiske råd.
        </p>

        <p class="mt-4 line-height-18">
          Hun er medlem av Massasjeforbundet og Akupunkturforeningen.
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
    title: 'Massasje',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        // content: `Massasje påvirker kroppens blodsirkulasjonen, nerve- og hormonssystem. Dette fører til reduksjon av stressreaksjoner og øker kroppens evne til avspenning og restitusjon.`
        content: `Øk velvære og avspenning, og reduser stressreaksjoner. Klassisk massasje, Idrettsmassasje, Lymfedrenasje, Gravidmassasje, Bindevevsmassasje`
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/massasje'
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
