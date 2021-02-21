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
        { text: 'Massasjeterapi/massasje og akupunktur', disabled: true, to: 'massasje' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin: 100px 0;">
      <v-col style="max-width: 700px;" class="pr-5">
        <h1 class="display-2">Massasjeterapi/massasje og akupunktur</h1>

        <v-simple-table dense class="ihf-table mt-6">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left pl-0">Beh.</th>
                <th class="text-left">Tid</th>
                <th class="text-left">Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(treatment, i) in treatments" :key="i">
                <td class="pt-2 pb-2 pl-0">{{ treatment.name }}</td>
                <td>{{ treatment.time }} min</td>
                <td>{{ treatment.price }} kr</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
  components: {
    Footer
  },

  data () {
    return {
      treatments: [
        { name: 'Muskelterapi og Akupunktur', time: 45, price: 590 },
        { name: 'Muskelterapi og Akupunktur', time: 60, price: 780 },
        { name: 'Gravidmassasje', time: 60, price: 780 },
        { name: 'Idrettsmassasje', time: 60, price: 780 },
        { name: 'Lymfedrenasje', time: 60, price: 780 },
        { name: 'Klassisk massasje', time: 60, price: 780 }
      ]
    }
  }
}
</script>
