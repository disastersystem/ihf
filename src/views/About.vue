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
        <v-breadcrumbs :items="[
          { text: 'Hjem', disabled: false, to: '/' },
          { text: 'Vår visjon og historie', disabled: true, to: 'om' }
        ]" style="padding-left: 0;">
          <template v-slot:divider>
            <!-- <v-icon>mdi-chevron-right</v-icon> -->
            <svg style="width:16px;height:16px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>

    <v-container class="about mt-12">
      <v-row class="justify-center wrap-point-large" style="margin-top: 40px;">
        <v-col style="max-width: 750px;" class="pr-12">
          <h1 class="display-2">Om oss</h1>

          <v-row class="mt-6 pa-0">
            <v-col class="pr-6 pl-1" cols="auto">
              <!-- <v-icon>mdi-chevron-right</v-icon> -->
              <svg style="width:24px;height:24px;margin-bottom:-6px;" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
              sentral beliggenhet
            </v-col>
            <v-col class="pr-6" cols="auto">
              <!-- <v-icon>mdi-chevron-right</v-icon> -->
              <svg style="width:24px;height:24px;margin-bottom:-6px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
              erfarne terapeuter
            </v-col>
            <v-col class="pr-6" cols="auto">
              <v-icon>mdi-chevron-right</v-icon>
              <svg style="width:24px;height:24px;margin-bottom:-6px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
              god service
            </v-col>
            <v-col class="pr-6" cols="auto">
              <!-- <v-icon>mdi-chevron-right</v-icon> -->
              <svg style="width:24px;height:24px;margin-bottom:-6px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
              kort ventetid
            </v-col>
          </v-row>
          <!-- <h3 class="mt-12">Vår visjon er</h3> -->
          <p class="headline mt-12 line-height-18" style="line-height: 1.8em;">
            Vi skal være en profesjonell helse- og fysioterapiklinikk,
            samtidig som vi skal møte den enkelte pasienten med omsorg og forståelse for dens
            situasjon. Vi skal være nære gjennom hele behandlingen, støtte og veilede pasienten
            til bedre helse gjennom erfaring og faglig kompetanse på både kort og lang sikt.
          </p>
          <!-- <h3 class="mt-12">Historie</h3> -->
          <p class="line-height-18 mt-6">
            Klinikken er helprivat, det vil si at den drives uten driftstilskudd fra det offentlige.
            Det betyr igjen at det er veldig kort ventetid for å komme inn, og pasienten betaler
            behandlingen sin selv.
          </p>
          <p class="mt-6 line-height-18">
            Alle som jobber på Innlandet helse og fysioterapi skal være opptatt av at kunden skal
            få best mulig service og bli fulgt gjennom hele behandlingen. Det vil si at vi aldri
            har flere inne til behandling samtidig og vi skal være nære og støttende i
            behandlingen. Har du tilbakemeldinger, setter vi stor pris på å få høre det.
          </p>
          <p class="mt-6 line-height-18">
            Alle timene kan bookes via telefon, mail, facebook eller online timebestilling.
          </p>
          <p class="mt-6 line-height-18">
            <!-- Du finner oss i nyoppusede lokaler i Moelv sentrum, og på Gjøvik! -->
          </p>
        </v-col>

        <!-- <v-col style="max-width: 550px;"> -->
          <!-- <v-img
            :src="require('@/assets/sofa.jpg')"
            contain
          ></v-img> -->
        <!-- </v-col> -->
      </v-row>

      <v-row class="mt-12 pt-12">
        <v-col cols="12" sm="2" md="2" lg="1" xl="1"></v-col>
        <v-col cols="12" sm="10" md="10" lg="11" xl="11">
          <h2 class="display-1 mb-5">
            Våre medarbeidere
          </h2>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <!-- <v-col class="offset-1" style="padding-left: 105px;">
          <h2 class="display-1 mb-5">
            Våre medarbeidere
          </h2>
        </v-col> -->
        <v-col sm="2" md="2" lg="1" xl="1">
          <h3 class="pt-2 subtitle-1 font-weight-bold title-location">
            Moelv
          </h3>
        </v-col>
        <v-col sm="10" md="10" lg="11" xl="11">
          <v-row>
            <v-col v-for="index in moelvGroup" :key="index" sm="6" md="6" lg="3" xl="2">
              <div class="pb-10">
                <div class="cursor-pointer mb-3" @click="showEmployee(index, 'moelv')">
                  <v-img
                    v-if="employees[index].key !== ''"
                    :src="require(`@/assets/ansatte/${employees[index].key}.jpg`)"
                    contain
                    class="mb-3"
                  ></v-img>
                  <div class="body-1" style="margin-bottom: 2px;">{{ employees[index].name }}</div>
                  <div class="body-1 font-weight-bold">{{ employees[index].title }}</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="2" md="2" lg="1" xl="1">
          <h3 class="pt-2 subtitle-1 font-weight-bold title-location">
            Gjøvik
          </h3>
        </v-col>
        <v-col sm="10" md="10" lg="11" xl="11">
          <v-row>
            <v-col v-for="index in gjovikGroup" :key="index" sm="6" md="6" lg="3" xl="2">
              <div class="pb-10">
                <div class="cursor-pointer mb-3" @click="showEmployee(index, 'gjovik')">
                  <v-img
                    v-if="employees[index].key !== ''"
                    :src="require(`@/assets/ansatte/${employees[index].key}.jpg`)"
                    contain
                    class="mb-3"
                  ></v-img>
                  <div v-else class="mb-3" style="padding-top: 100%; width: 100%; background: #ddd;"></div>
                  <div class="body-1" style="margin-bottom: 2px;">{{ employees[index].name }}</div>
                  <div class="body-1 font-weight-bold">{{ employees[index].title }}</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
      >
        <v-card>
          <v-card-text>
            <h3 class="pa-6 pt-12">{{ activeEmployee.name }}</h3>
            <div class="body-1 pa-6 pt-0" v-html="activeEmployee.desc"></div>

            <v-row>
              <v-col cols="auto" class="pl-8">
                <div v-if="activeEmployee.key === 'amalie'">
                  <v-btn
                    href="https://innlandetkiro.bestille.no/OnCust2/#!/booking"
                    target="_blank"
                    color="accent"
                    class="text-none mt-1"
                    rounded
                  >
                    <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                    </svg>
                    <span>Bestill time</span>
                  </v-btn>
                  <p class="body-1 mt-2">
                    Tlf: 951 888 73
                  </p>
                </div>

                <div v-if="activeEmployee.location === 'moelv' && activeEmployee.key !== 'amalie'">
                  <v-btn
                    href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
                    target="_blank"
                    color="accent"
                    class="text-none mt-1"
                    rounded
                  >
                    <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                    </svg>
                    <span>Bestill time</span>
                  </v-btn>
                  <p class="body-1 mt-2">
                    Tlf: 951 888 73
                  </p>
                </div>

                <div v-if="activeEmployee.location === 'gjovik'">
                  <v-btn
                    href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
                    target="_blank"
                    color="accent"
                    class="text-none mt-1"
                    rounded
                  >
                    <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                    </svg>
                    <span>Bestill time</span>
                    <!-- <span class="font-weight-bold ml-1">(Kommer Snart!)</span> -->
                  </v-btn>
                  <p class="body-1 mt-2">
                    Tlf: 973 488 73
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              text
              @click="dialog = false"
            >
              Lukk
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <OnlineBookingButtons/>

      <!-- <v-row class="mt-12 pt-12">
        <v-col>
          <h2 class="display-1">Du finner oss her</h2>
        </v-col>
      </v-row> -->

      <v-row class="justify-center mt-12 pt-12">
        <v-col style="max-width: 1054px;">
          <h2 class="display-1">Du finner oss her</h2>
        </v-col>
      </v-row>

      <v-row class="justify-center mt-6">
        <div class="mb-4 mr-6">
          <h4 class="mb-2">Moelv</h4>
          <iframe class="iframe-map" frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&zoom=13&q=place_id:EiFNw7hsbGVyZ2F0YSAzLCAyMzkwIE1vZWx2LCBOb3J3YXkiMBIuChQKEgnpa6VqIXhqRhHlI3WyV5DiYRADKhQKEgnzQctuIXhqRhGzCSOc9-Bqkw"
          ></iframe>
        </div>

        <div>
          <h4 class="mb-2">Gjøvik</h4>
          <iframe class="iframe-map" frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&zoom=13&q=place_id:ChIJ_8uuaRjaQUYR3MPSedwXKrc"
          ></iframe>
        </div>
      </v-row>

      <v-row class="justify-center mt-12 pt-12">
        <v-col style="max-width: 750px;">
          <h2 class="display-1 mb-6" style="text-align: center;">Lyst på jobb hos oss?</h2>

          <!-- <v-btn text class="text-none mr-2" @click="$router.push('/om')">
            <span style="text-decoration: underline;">Les mer her</span>
          </v-btn> -->
          <div style="text-align: center;" class="mt-6">
            <a href="/jobb" class="overflow-wrap mt-12" style="color: #2E86AB; text-decoration: underline;">
              Les mer her
            </a>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" style="margin-top: 80px;">
        <!-- <h2 class="display-1 mb-5 pa-5">Hør hva andre mener</h2> -->
        <!-- <h1 class="display-2 mb-5 pa-5" id="pasienterfaring">Pasienterfaringer</h1> -->
        <v-col cols="auto">
          <h2 class="display-1 mb-6 mt-12">Pasienterfaringer</h2>
        </v-col>
      </v-row>

      <v-row justify="center" class="ihf-extra-margin-bottom">
        <v-col
          cols="12" sm="12" md="6" lg="5" xl="4"
          v-for="(quote, index) in quotes"
          :key="index"
        >
          <div class="ihf-quote pa-5">
            <div class="line-height-18">
              <!-- <v-icon color="#F75F49">mdi-format-quote-open</v-icon> -->
              <svg style="width:24px;height:24px; margin-bottom: -5px" viewBox="0 0 24 24">
                  <path fill="#ef7b47" d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" />
              </svg>
              <span v-html="quote.text"></span>
              <!-- <v-icon>mdi-format-quote-close</v-icon> -->
            </div>
            <div class="ihf-quote-author ml-4 mt-2 caption">
              - {{ quote.author }}
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="auto">
          <LeaveReviewDialog/>
        </v-col>
      </v-row>

      <!-- <v-row justify="center" class="mt-12 pt-12">
        <v-col cols="auto">
          <div style="position: relative;">
            <div class="ihf-welcome-message">
              <h2 class="h1" style="font-weight: 400;">Velkommen inn<br>til oss!</h2>
            </div>
            <v-img
              :src="require('@/assets/sofa.jpg')"
              contain
              style="width: 800px;"
            ></v-img>
          </div>
        </v-col>
      </v-row> -->
    </v-container>

    <!-- <v-row style="margin-top: 200px; background:#F1EDEE;" class="mb-12">
      <Contact/>
    </v-row> -->
    <v-row
      style="margin-top: 200px; background:#F1EDEE;"
      class="
        mb-12
        pa-4
        pa-sm-6
        pa-md-12
        pa-lg-12
        pa-xl-12
      "
    >
      <v-layout wrap>
        <v-flex>
          <Contact/>
        </v-flex>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
import Contact from '@/components/Contact'
import OnlineBookingButtons from '@/components/OnlineBookingButtons'
import LeaveReviewDialog from '@/components/LeaveReviewDialog'
// import employees from '@/employees.js'

export default {
  metaInfo: {
    title: 'Om oss - Fysioterapi',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'Vår visjon: Vi skal møte den enkelte pasienten med omsorg og forståelse for dens situasjon. Samtidig som vi skal være en profesjonell helse- og fysioterapiklinikk'
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/om'
      }
    ]
  },

  components: {
    Contact,
    OnlineBookingButtons,
    LeaveReviewDialog
  },

  data () {
    return {
      dialog: false,

      // employees: employees,

      // who works at which place? (each item is a index in the employees array)
      moelvGroup: [0, 2, 8, 14, 13],
      gjovikGroup: [7, 10, 11, 15],

      activeEmployee: {},

      employees: [
        {
          key: 'lene',
          name: 'Lene Moe Sognar',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Lene har jobbet som fysioterapeut siden 2014. Hun har vært privatpraktiserende ved
              Innlandet Helse og Fysioterapi sine lokaler siden 2016. Lene har god erfaring med
              både forebygging og behandling av ulike plager og diagnoser.
            </p>

            <p class="mt-4 line-height-18">
              Basert på individuell undersøkelse og vurdering av problemet og hva kunden selv
              ønsker gir hun behandling. Noen av behandlingsmetodene Lene ser god effekt av er
              massasje/triggerpunktsbehandling sammen med mobiliseringsteknikker og
              tøyning/avspenning av muskler og vev, samt trenings- og øvelsesformer.
            </p>

            <p class="mt-4 line-height-18">
              Lene er svømmeinstruktør og har startet svømming for barn i Moelv-hallen i
              samarbeid med Moelven IL.
            </p>
          `
        },
        {
          key: 'amalie',
          name: 'Amalie Øvergaard',
          title: 'Kiropraktor',
          desc: `
            <p class="mt-4 line-height-18">
              Amalie ble uteksaminert ved Anglo-European College of Chiropractic (AECC) i 2016. Hun jobbet sine første år som
              kiropraktor i London før hun flyttet tilbake til Norge.<br>
              Hun er medlem av Norsk Kiropraktorforening.
            </p>
            <p class="mt-5 line-height-18">
              Amalie har alltid likt det å kunne hjelpe personer med plagene deres uten å måtte benytte medisiner eller operative tiltak. Som kiropraktor jobber hun mye med nakke og ryggsmerter,
              men også med hodepine, kjeveproblematikk, skuldersmerter og andre plager i bevegelsesapparatet.
            </p>
            <p class="mt-5 line-height-18">
              Amalie har bred erfaring og spesialisering innen behandling av gravide og spedbarn/barn. Dette fagfeltet er
              hennes spesialfelt. Hun jobber blant annet med kolikk, refluksplager, stramt tungebånd, ammeproblemer,
              torticollis og asymmetri i nakke/kropp hos barn, samt bekkenproblematikk og isjas hos gravide. Hun er
              sertifisert i webster teknikk og utfører også kranium behandling på spedbarn. Hun utarbeider hjemmetreningsprogram
              for gravide og barn ved behov, for å forebygge ytterligere ubehag og plager.
            </p>
          `
        },
        {
          key: 'monica2',
          name: 'Monica Skjønsberg',
          title: 'Aut. fotterapeut',
          desc: `
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
          `
        },
        {
          key: 'ingvild',
          name: 'Ingvild Midthaug',
          title: 'Osteopat D.O.',
          desc: `
            <p class="mt-4 line-height-18">
              Ingvild er utdannet Osteopat D.O., som er en fireårig helseutdannelse fra Høyskolen Kristiania.
              Hun har siden 2015 jobbet i helsevesenet og har blant annet erfaring innen rehabilitering,
              barn og eldreomsorg.
            </p>
            <p class="mt-4 line-height-18">
              Det settes av god tid til førstegangskonsultasjon som varer opp mot 60 minutter. For å kunne tilby
              best behandling for deg, vektlegges god kommunikasjon og undersøkelse for bedre forståelse av din
              problemstilling. Dine plager/smerter, samt din sykehistorie legger grunnlaget for undersøkelse og
              behandling. Sammen setter vi mål for behandlingen, og vurderer nødvendige tiltak som kan bestå av
              øvelsesprogram eller eventuelle endringer i din hverdag.
            </p>
            <p class="mt-4 line-height-18">
              Ingvild jobber målrettet for å tilrettelegge for god helse og en aktiv hverdag, tilpasset ditt
              utgangspunkt. Hun er dyktig på å tilpasse behandlingen etter ønske og mål uansett alder eller
              forutsetning. Mange oppsøker Ingvild for hennes kompetanse på langvarige smerter, kvinnerelaterte
              plager og idrettsskader. Hun kan også undersøke og behandle barn med ulike problemer relatert til
              gulp, luftplager, mye uro og gråt.
            </p>
            <p class="mt-4 line-height-18">
              Ingvild har kurs i behandling av inkontinens og bekkenbunnsplager hos kvinner. Behandlingen kan
              inneholde et behandlingshjelpemiddel med elektrostimuelring og biofeedback. Det er et apparat
              som blant annet veileder deg i bekkenbunnstrening via en vaginal probe. Apparatet kan man låne
              gratis med rekvisisjon. Ingvild kan hjelpe deg med rekvisisjon og opplæring av apparatet. Du
              får også oppfølging i perioden du bruker apparatet. Behandlingshjelpemiddelet benyttes kun ved
              behov og der det vurderes som nødvendig i behandlingen av din problematikk.
            </p>
            <p class="mt-4 mb-1 line-height-18">
              Ingvild tilbyr ved behov:
            </p>
            <ul>
              <li class="mb-1">Epikrise til fastlege</li>
              <li class="mb-1">Hverdagsmestring</li>
              <li class="mb-1">Øvelsesprogram</li>
              <li class="mb-1">Bedriftsbehandling</li>
              <li class="mb-1">Forsikringsbehandling</li>
              <li class="mb-1">Rekvisisjon til behandlingshjelpemidler</li>
            </ul>
          `
        },
        {
          key: 'gro2',
          name: 'Gro Visdal',
          title: 'Akupunktør og massasjeterapeut',
          desc: `
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
          `
        },
        {
          key: 'gry2',
          name: 'Gry Merete Haakensveen',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Gry har jobbet som fysioterapeut siden 2003, og har lang erfaring med pasienter i alle aldersgrupper og med bredde
              i ulike diagnoser. De siste årene har hun jobbet privat med tilskudd samtidig som hun har tatt en master i
              idrettsfysioterapi. Hun er utdannet personlig trener, yogalærer og gruppetreningsinstruktør.
            </p>

            <p class="mt-4 line-height-18">
              Gry ser helheten hos kunden/pasienten og har god erfaring med kombinert behandling av tøyninger,
              triggerpunkter, veiledete øvelser og treningsterapi.
            </p>
          `
        },
        {
          key: 'helge',
          name: 'Helge Afseth',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Den med lengst fartstid hos oss er Helge. Helge har jobbet som fysioterapeut siden 1980,
              og startet sin karriere i Oslo ved Rikshospitalet og Statens attføringsinstitutt. Videre gikk veien inn
              i Oslo kommune der han jobbet i hjemmetjenesten i mange år. Denne stillingen resulterte i at Helge
              fikk stor interesse for nevrologi* og rehabilitering*.
            </p>

            <p class="mt-4 line-height-18">
              Helge var med å åpne Ringen Rehabiliteringssenter* i 1989 og var avdelingsleder for fysioterapi frem til 2013.
            </p>

            <p class="mt-4 line-height-18">
              De siste årene har Helge jobbet som privatpraktiserende fysioterapeut i Møllergården, der han startet opp sammen med Lene.
            </p>

            <div class="mt-8">
              <p class="caption mb-2 mt-4">
                *<i>Nevrologi</i> er den medisinske spesialiteten som omhandler sykdommer i nervesystemet.
              </p>
              <p class="caption mb-2">
                *<i>Rehabilitering</i> har til formål å gjenvinne fysisk, kognitiv eller sosial funksjonsevne
                som er tapt på grunn av sykdom eller skade.
              </p>
              <p class="caption">
                *<i>Ringen Rehabiliteringssenter</i> As er et privat rehabiliteringssenter like nord for Moelv sentrum.
                Ringen driver spesialisert rehabilitering og har avtale med Helse Sør-Øst RHF om drift av rehabiliteringsplasser.
                Les mer på: https://www.ringen-rehab.no
              </p>
            </div>  
          `
        },
        {
          key: 'elin',
          name: 'Elin Fossbråten Næsse',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Elin ble ferdig utdannet fysioterapeut i 2011. Hun har jobbet bredt siden da, og har blant annet jobbet på ortopedisk avdeling på sykehus,
              i kommunehelsetjeneste, i psykiatrien i stillingen til en psykomotorisk fysioterapeut, og i privat helsetjeneste. Hun har arbeidet i
              klinikk siden 2016.
            </p>

            <p class="mt-4 line-height-18">
              Elin er opptatt av å ha en helhetlig tilnærming, og å se sammenhengen mellom mentale og fysiske belastninger, sammen med kosthold og livsstil.
              Hun bruker mye massasje og tøyinger i sin behandling, men viser også øvelser og gir øvelsesprogram.
            </p>
          `
        },
        {
          key: 'unn-therese',
          name: 'Unn-Therese Marken',
          title: 'Jordmor',
          desc: `
            <p class="mt-4 line-height-18">
              Unn-Therese Marken er utdannet jordmor og har bred erfaring fra fødeavdeling. Daglig jobber hun i svangerskapsomsorgen her på
              Innlandet. Hun mener at det er å kunne tilby helhetlig og individuell tilpasset oppfølging til den gravide og partner er viktig.
              Du skal føle deg ivaretatt og trygg igjennom svangerskap, fødsel og barseltid.
            </p>

            <p class="mt-4 line-height-18">
              Fra tidligere er Unn-Therese utdannet barnevernspedagog, og har jobbet i barnevernstjenesten der hun hadde foreldreveiledning og
              saksbehandling.
            </p>

            <p class="mt-4 line-height-18">
              Unn-Therese startet som jordmor ved Ullevål sykehus, deretter Gjøvik og Lillehammer.
              I dag tilbyr hun hjemmefødsler i Mjøs-regionen i tillegg til svangerskap- og fødselsforberedende kurs
              ved Innlandet helse og fysioterapi.
            </p>

            <p class="mt-4 line-height-18">
              Innlandet helse og fysioterapi kan tilby deg god oppfølging i ditt
              svangerskap og etter fødsel. Vi jobber tett tverrfaglig, og tilbyr
              fysioterapi, gravidmassaje, modningsakupunktur, osteopati, fotpleie i
              tillegg til jordmor.
            </p>
          `
        },
        {
          key: 'berit',
          name: 'Berit Engeset',
          title: 'Yogaterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Berit har deltatt og tatt kurs i klassisk- og Ashtanga yoga de siste tyve årene i tillegg til at hun er utdannet vetrinær.
              Når hun ser tilbake på sin yogautøvelses hyppighet, ser hun at hun har brukt yoga i stressfulle perioder i livet.
            </p>
          `
        },
        {
          key: 'linda',
          name: 'Linda Wold Martinsen',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Linda har mer enn 15 års erfaring som fysioterapeut. Hun har jobbet både i
              sykehus og kommune, men har lengst erfaring fra tverrfaglig spesialisert
              rehabilitering. Linda har fokus på en helhetlig tilnærming, og har erfaring
              med arbeid innenfor ulike diagnoser, blant annet nevrologi, kreft, ortopedi,
              muskel- og skjelett, brudd- og slitasje, langvarig og akutte smerter.
            </p>
            <p class="mt-4 line-height-18">
              Behandlingen baseres på kundens mål og ønsker, samt historie og grundig
              undersøkelse. Behandlingsmetoder kan være massasje, triggerpunktbehandling
              med og uten nåler, tøyning og mobilisering. Passive behandlingsmetoder
              kombineres gjerne med aktive øvelser for best mulig effekt. Linda veileder
              i hvordan finne en god balanse mellom aktivitet og hvile i hverdagen, og i
              ulike avspenningsteknikker.
            </p>
          `
        },
        {
          key: 'ingrid2',
          name: 'Ingrid Gillund Lium',
          title: 'Fysioterapeut og osteopat',
          desc: `
            <p class="mt-4 line-height-18">
              Ingrid har arbeidet ved ulike klinikker i Mjøs- regionen siden hun var ferdigutdannet
              fysioterapeut (2005) og osteopat (2010). Hun er opptatt av å hjelpe med det akutte
              problemet pasienten presenterer, men er også opptatt av det langsiktige perspektivet
              ved å forstå hvorfor skaden/smerten har oppstått og hvordan det påvirker kroppen.
            </p>
            <p class="mt-4 line-height-18">
              For Ingrid er god dialog med pasienten sammen med en grundig undersøkelse av hele
              kroppen et viktig utgangspunkt for videre behandling. Å forstå helheten pasienten
              presenterer at skaden/smerten kan ha sammenheng med livssituasjon og at årsaken til
              smerten/skaden kan være i et helt annet område av kroppen, er viktig for Ingrid å ha
              med i helhetsbilde, for å kunne gi pasienten en skreddersydd behandling som forbedrer
              og avhjelper det gitte smerte/skadebilde pasienten presenterer.
            </p>
            <p class="mt-4 line-height-18">
              Behandlingsmetoder
              vil varierer utfra hva pasienten presenterer og spenner seg fra skånsomme
              avspenningsteknikker til mer direkte teknikker som leddmanipulasjonsbehandling.
              Hvis det er hensiktsmessig vil Ingrid veilede hjemmeøvelser som kan støtte og
              effektivisere behandlingen.
            </p>
            <p class="mt-4 line-height-18">
              Ingrid er særlige interessert i kvinnehelse og spedbarn/barn.
              Hun har også god erfaring innen behandling av gravide og plager som kan oppstå under
              graviditet eller etter fødsel.
            </p>
          `
        },
        {
          key: 'benjamin2',
          name: 'Benjamin Frankø',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Benjamin ble ferdig utdannet fysioterapeut i 2020 fra Danmark. Siden da har han jobbet på
              sykehus, rehabiliteringssenter og i privat praksis. Han har bred erfaring med ulike
              pasientgrupper, blant annet gjennom rehabilitering hvor han har beskjeftiget seg med
              revmatologiske og ortopedkirurgiske pasienter, samt pasienter med langvarige smerter og
              utmattelse. Benjamin har også erfaring fra elitesport og militæret, hvor han har fått
              god kompetanse på akutte skader og skadeforebygging.
            </p>
            <p class="mt-4 line-height-18">
              Som fysioterapeut er Benjamin opptatt av en evidensbasert og helhetlig tilnærming. En
              behandling hos Benjamin vil typisk begynne med en grunnleggende undersøkelse med
              kartlegging av problematikk og målsetting. Heretter den fysioterapeutiske behandling,
              der kan bestå av en rekke forskjellige manuelle teknikker, supplert med veiledning og
              øvelser som du selvstendig kan gjennomgå hjemme.
            </p>
          `
        },
        {
          key: 'kristian',
          name: 'Kristian Aasen',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Kristian studerte fysioterapi i Danmark og har nå flyttet hjem til Moelv. Turnustjeneste gjennomførte han ved Ringen Rehabilitering og KMS Tømmerli.
            </p>
            <p class="mt-4 line-height-18">
              Han har god erfaring med muskel- og skjelettsmerter, brudd og andre traumeskader. Kristian interesserer seg spesielt for rygg og nakkeplager og jobber alltid for at du som pasient skal oppleve bedring i behandlingsforløpet.
            </p>
          `
        },
        {
          key: 'astri',
          name: 'Astri Ekre',
          title: 'Massasjeterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Astri Ekre er utdannet massasjeterapeut fra Axelsons institute i Oslo i 2018. Hun er en blid Lillehamring som er veldig glad i å hjelpe mennesker (og dyr) med å løsne opp i spenninger og redusere smerter. Astri bor på en gård på Lillehammer med hester, hund, katt, høner og kaniner. Hun tilbyr behandlinger som klassisk massasje, idrettsmassasje, bindevevsbehandling, triggerpunktsmassasje, gravidmassasje og lymfemassasje.
            </p>
          `
        },
        {
          key: 'julie',
          name: 'Julie Torkehagen',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Julie ble ferdigutdannet fysioterapeut i 2021. Hun gjennomførte turnustjeneste i Råde kommune og ved Revmatismesykehuset på Lillehammer. I etterkant har hun blant annet jobbet på ortopedisk avdeling på sykehus, samt avdeling for geriatri, slag og rehabilitering. For tiden jobber hun både i privat- og spesialisthelsetjeneste.
            </p>
            <p class="mt-4 line-height-18">
              Julie er opptatt av at mennesker skal føle seg sett, hørt og ivaretatt. Behandlingen baserer seg på undersøkelse og samtale der pasientens ønsker og mål er i fokus. Hun har et ønske om å hjelpe andre til en aktiv hverdag med tilpasset behandling.
            </p>
            <p class="mt-4 line-height-18">
              Behandlingen inkluderer både bløtvevsbehandling som massasje og aktive øvelser.
            </p>
          `
        }
      ],

      quotes: [
        {
          author: 'Christian, 35 år.',
          text: `
            Lokaliserte problemet med nakke/skulder fort og videre behandling både
            fungerer og er veldig behagelig.
          `
        },
        {
          author: 'Olav H.',
          text: `
            Dyktig og humørfylt behandling;  anbefales til alle oppegående mennesker på egne gode føtter !!!!!
            Monica er unik...
          `
        },
        {
          author: 'Kristine, 28 år.',
          text: `
            Anbefales!<br>
            Lene er veldig flink og har god oppfølging.
          `
        },
        {
          author: 'Anette, 35 år.',
          text: `
            Har mottatt svært god behandling, både i forbindelse med svangerskap og
            tiden etter. Veldig flinke terapeuter, med høy kompetanse.
          `
        },
        {
          author: 'Bjørn, 72 år.',
          text: `
            Den hjelpen jeg har mottatt er veldig bra. Behagelige terapeuter.
          `
        },
        {
          author: 'Øyvind, 29 år.',
          text: `
            Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!
          `
        },
        {
          author: 'Rebecka',
          text: `
            Kan varmt anbefale osteopat Ingvild, om du har smerter og plager relatert til muskel- og skjelettsystemet ❣️
            Super dyktig og hyggelig dama som virkelig ønsker å hjelpe deg med dine plager! 
          `
        },
        {
          author: 'Erland',
          text: `
            Faglig dyktige folk, trivelige lokaler og veldig god service. 
          `
        },
        {
          author: 'Hege',
          text: `
            Ingvild lytter til deg og forklarer hva hun gjør. Her blir du behandlet godt.
          `
        },
        {
          author: 'Astrid',
          text: `
            Jeg ble kjent med dere gjennom min venninne, og flere med meg har blitt kjent med deres gode kunnskap og imøtekommelse.
            Man blir godt tatt vare på. Mine plager er nakke, skuldre og armer.
            Kan anbefale dere til disse flotte damene i Moelv eller Gjøvik
          `
        },
        {
          author: 'Anny',
          text: `
            Med min nakkeplage får jeg ikke fullrost den imøtekommenhet og "profesjonell" behandling jeg har fått,
            først flere timer hos fysioterapeut Linda som etter noen behandlinger ikke var helt fornøyd med framgangen
            og videre henviste meg til deres osteopat Ingvild. Linda satte opp fine treningsøvelser som "hjemmelekse".
            Jeg fått en så mye bedre hverdag inkl. nattesøvn. Ingvild finner punkter med smerter jeg ikke visste jeg
            hadde og dette har hjulpet stort. I tillegg har jeg hatt to alle tiders behandlinger/fotterapi hos Monica.
            Det bør prøves! Jeg takker så mye og anbefaler dem alle tre.
          `
        },
        {
          author: 'Bjørn Erik, 69 år',
          text: `
            Etter årevis med muskelplager, særlig i ryggen og korsryggen, har jeg lang erfaring med fysioterapibehandling som ikke har hjulpet meg.
            Først da jeg kom til Elin fikk jeg fysikalsk behandling som virker.
            Jeg gir de aller beste anbefalinger. Bedre fysikalsk behandling har jeg ikke fått fra noen fysioterapeut i årenes løp.
          `
        },
        {
          author: 'Frank, 41 år.',
          text: `
            Jeg har fått veldig bra behandling og utbytte hos fysioterapeut. De har et veldig bra tilbud for dem som sliter med rygg og muskulatur.
            Trivelig personale, kort ventetid og det virker som at alt er etter skjema.
          `
        },
        {
          author: 'Astrid, 77 år.',
          text: `
            Elin er kjempeflink og en behagelig person. Jeg har stor nytte av hennes behandling på nakke, skulder, hofter og knær.
            En helt ny tilværelse å leve med Artrose.
          `
        },
        {
          author: 'Stein Roger, 55 år.',
          text: `
            Jeg hadde konstante smerter, nummenhet og prikking i hele beinet etter et brudd i 2013.
            Jeg kunne bare gå korte distanser og sykle, og beinet var hovent hele tiden.
            Etter vurdering av lege og spesialist, ble det konstatert at jeg måtte leve med smertene
            hele livet og at jeg aldri kunne bli helt bra igjen. Jeg ble til og med uføretrygdet på grunn av dette.
            Etter at jeg begynte med behandling hos fysioterapeut på Innlandet helse og fysioterapi,
            har foten blitt nesten helt bra igjen, jeg kan gå flere mil og til og med jogge.<br>
            Jeg lever nå nesten helt smertefritt, og dette skjedde etter bare to-tre behandlinger.
          `
        }
      ]
    }
  },

  methods: {
    showEmployee (index, location) {
      this.activeEmployee = this.employees[index]
      this.activeEmployee.location = location
      this.dialog = true
    }
  }
}
</script>

<style lang="css" scoped>
  .iframe-map {
    height: 300px;
    width: 500px;
  }
  .ihf-welcome-message {
    position: absolute;
    left: 6%;
    top: 10%;
    z-index: 2;
  }
  .cursor-pointer {
    cursor: pointer;
    transition: transform 0.3s, opacity 0.6s;
  }
  .cursor-pointer:hover {
    transform: scale(1.02);
  }
  @media (max-width: 1200px) {
    .iframe-map {
      height: 200px;
      width: 400px;
    }
  }
  @media (max-width: 560px) {
    .title-location {
      font-size: 1.4em !important;
    }
  }
 /* @media (max-width: 1000px) {
    .iframe-map {
      height: 200px;
      width: 200px;
    }
  }*/
</style>
