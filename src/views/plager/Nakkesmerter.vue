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
          { text: 'Nakkesmerter', disabled: true, to: 'nakkesmerter' }
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
        <h1 class="display-2">Nakkesmerter</h1>

        <p class="mt-4 line-height-18">
          Nakkesmerter er smerte som sitter i nakkeregionen, disse kan gå både oppover mot hodet eller utover mot skuldrene.
        </p>

        <p class="mt-2 line-height-18">
          Smerter i nakken og stivhet er svært vanlig og så mange som 30-50 prosent av den voksne befolkningen opplever
          smerter i løpet av et år.
        </p>

        <h4 class="mt-6">Mekanisme</h4>
        <p class="mt-2 line-height-18">
          Nakken består av 7 virvler med mellomskivevirvler. Mellom hver virvel er det mange små ledd i tillegg til mange
          leddbånd, muskler og sener. Det er også er område med tetthet av nerver. Alle disse strukturene kan ved skade,
          slitasje eller sykdom føre til smerter i nakken.
        </p>

        <h4 class="mt-6">Type smerte</h4>
        <ul>
          <li class="mt-2">Akutte nakkesmerter</li>
          <li class="mt-2">Stramme og ømme nakkemuskler</li>
          <li class="mt-2">Nakkekink</li>
          <li class="mt-2">Nakkesleng (whiplash)</li>
          <li class="mt-2">Nakkehodepine (cervicogen hodepine)</li>
        </ul>

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
        <!-- <v-img
          :src="require('@/assets/fotpleie.jpeg')"
          contain
        ></v-img> -->
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
    title: 'Nakkesmerter',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `Smerter i nakken og stivhet er svært vanlig og så mange som 30-50 prosent av den voksne befolkningen opplever smerter i løpet av et år.`
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/nakkesmerter'
      }
    ]
  },

  components: {
    Footer
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
</style>
