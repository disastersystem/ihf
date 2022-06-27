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
          { text: 'Finn din plage', disabled: false, to: 'finn-din-plage' },
          { text: 'Hodepine', disabled: true, to: 'hodepine' }
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
      <v-col class="pr-5" style="max-width: 700px;">
        <h1 class="display-2">Hodepine</h1>

        <p class="mt-4 line-height-18">
          8 av 10 opplever hodepine fra tid til annen. Hos færre enn 1 prosent av dem som oppsøker lege for hodepine,
          finner man en sykdom som er skyld i hodepinen.
        </p>

        <p class="mt-2 line-height-18">
          Symptomer på hodepine kan være verking, murring, sprengningsfølelse, stråling, trykk eller banking.
          Smerten kan sitte i pannen, i tinningen, bak øynene, i bakhodet, i øvre del av nakken eller være en følelse
          av at den sitter midt inne i hodet.
        </p>

        <h4 class="mt-6">Symptomer</h4>
        <ul>
          <li class="mt-2">Ryggen er stiv og vond</li>
          <li class="mt-2">Utstråling i seteregionen eller nedover beina</li>
          <li class="mt-2">Nummenhet og prikking i seteregionen eller nedover beina</li>
          <li class="mt-2">Smerte i ryggen ved hosting og nysing</li>
          <li class="mt-2">Hvilesmerter</li>
          <li class="mt-2">Konstante smerter</li>
          <li class="mt-2">Ribbeinssmerter</li>
        </ul>

        <h4 class="mt-6">Årsaker</h4>
        <p class="mt-2 line-height-18">
          Det kan være flere ulike årsaker til hodepine, men 75% av all hodepine er spenningsrelatert. Man opplever
          da hodepinen ofte som et stramt bånd rundt hodet med trykk bak øynene. Den forverres ofte utover dagen,
          og kan opptre sammen med lysskyhet og svimmelhet. Denne hodepinen forverres av stress eller psykiske påkjenninger.
          Ofte er anspent nakke sammen med dårlig holdning en opprettholdende faktor.
        </p>
        <p class="mt-2 line-height-18">
          Akutt hodepine er mindre vanlig, men dette er en tilstand som kan komme av underliggende sykdommer som
          bihulebetennelse, høyt blodtrykk eller øye eller hjernesykdommer.
        </p>

        <p class="mt-2 line-height-18">
          Om du opplever hodepine ofte, kan det være fornuftig å tenke på om du har fått i deg nok væske, nok søvn,
          om inneklimaet/arbeidsklimaet ditt er luktfritt og luftig, og om du har fått nok frisk luft. Pass på at du
          ofte varierer mellom å stå, gå og sitte og at du bruker amenene i forskjellig høyde. Unn deg en liten gåtur
          med ampendling og lange skritt hver eneste dag.
        </p>

        <!-- <v-simple-table dense class="ihf-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left pl-0">Beh.</th>
                <th class="text-left">Tid</th>
                <th class="text-left">Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="treatment in treatments" :key="treatment.name">
                <td class="pt-2 pb-2 pl-0">{{ treatment.name }}</td>
                <td>{{ treatment.time }} min</td>
                <td>{{ treatment.price }} kr</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->

        <!-- <v-btn
          href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
          target="_blank"
          color="accent"
          class="text-none pt-6 pb-6 pl-6 pr-6 mr-6 mt-12"
          rounded
        >
          <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
          </svg>
          <span class="font-weight-regular mr-1">Bestill time</span>
          <span class="font-weight-bold">Moelv</span>
        </v-btn>
        <p class="body-1 mt-2 pl-7">
          Tlf: 951 888 73
        </p> -->
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/hodepine.png')"
          contain
        ></v-img>
        <!-- <ul>
          <li>Akutte nakkesmerter</li>
          <li>Stramme og ømme nakkemuskler</li>
          <li>Nakkekink</li>
          <li>Nakkesleng (whiplash)</li>
          <li>Nakkehodepine (cervicogen hodepine)</li>
        </ul> -->
      </v-col>
    </v-row>

    <!-- <v-row justify="center" class="mt-12 pt-5 wrap-point-semi-large">
      <v-col style="padding-right: 40px; max-width: 400px;">
        <v-img
          :src="require('@/assets/ansatte/monica.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Fotterapeut Monica Skjønsberg</h3>
        <p class="mt-4 line-height-18">
          Monica er utdannet helsefagarbeider med etterutdanning i rehabilitering*.
          Gjennom erfaringer som helsefagarbeider
          i flere år har hun sett viktigheten av godt benstell og bestemte seg derfor for å ta fotterapeututdannelse.
          Hun har erfaring med praktisk pleie, omsorg og miljøarbeid for pasienter,
          kunder og brukere av helse- og sosialtjenesten.
          Monica tilbyr behandling i institusjon, klinikk og hjemmebehandlinger.
        </p>
        <p class="caption mt-12 line-height-18">
          *<i>Rehabilitering</i> har til formål å gjenvinne fysisk, kognitiv eller sosial funksjonsevne som er tapt på grunn av sykdom eller skade.
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
    title: 'Hodepine',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: ``
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/hodepine'
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
