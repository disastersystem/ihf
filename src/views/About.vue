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
      style="margin-top: 200px; background:#003a5d;"
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
      moelvGroup: [0, 1, 5, 7, 8],
      gjovikGroup: [2, 3, 4, 6],

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
          key: 'charlotte',
          name: 'Charlotte Eide',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Charlotte er utdannet ved Oslomet og har jobbet som fysioterapeut siden 2023. Hun har erfaring med behandling og oppfølging innen revmatiske sykdommer og arbeid i kommunen med blant annet barselgrupper og muskel - og skjelettplager. Med utgangspunkt i en helhetlig tilnærming, ønsker Charlotte å ivareta den enkeltes behov og prioriteringer, samt å bedre deres helse i et langsiktig perspektiv. Behandlingen kan bestå av massasje, tøying av vev og øvelser. På fritiden er Charlotte en ivrig orienteringsløper og driver eget småbruk på Biristrand.
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
          key: 'kjersti',
          name: 'Kjersti',
          title: 'Osteopat',
          desc: `
            <p class="mt-4 line-height-18">
              Kjersti ble ferdig utdannet Osteopat i 2017 og har siden jobbet fulltid i privat klinikk. Hun er autorisert osteopat og medlem av norsk osteopatforbund.
            </p>
            <p class="mt-4 line-height-18">
              Hun gleder seg til å gå på jobb hver dag for å hjelpe sine pasienter til en bedre helse med mindre smerter og plager. Kjersti bruker både massasjeteknikker, triggerpunktsbehandling, tøyninger og mobilisering av ledd i behandlingen. Hun er opptatt av å finne ut av hva som er viktig for deg og sammen jobbe mot en hverdag med mindre plager.
            </p>
          `
        },
        {
          key: 'henrik',
          name: 'Henrik',
          title: 'Fysioterapeut',
          desc: `
            <p class="mt-4 line-height-18">
              Henrik er utdannet fysioterapeut ved Oslomet, og har fullført sin turnus ved Sykehuset Innlandet HF og Elverum Helsehus. Han har god erfaring med klinikkarbeid og har jobbet hos oss siden 2023. I sin turnus fikk han erfaring med fysioterapi for eldre, slagpasienter, lungefysioterapi, hofte- og kneproteser samt rehabilitering etter funksjonsfall.
            </p>
            <p class="mt-4 line-height-18">
              Henrik intresserer seg for idrett og spiller selv håndball for Storhamar herrelag. Han baserer behandlingen på en grundig undersøkelse og er opptatt av at pasientene skal føle seg ivaretatt.
            </p>
            <p class="mt-4 line-height-18">
              Henrik har kurs i idrettsmassasje, nåler og tilpasser behandlingen individuelt med trening og øvelser.  Han er opptatt av å øke pasientens forståelse for egen helse og bidra til bedring utfra felles forståelse og mål.
            </p>
          `
        },
        {
          key: 'rina',
          name: 'Rina Fallingen Larsen',
          title: 'Fotterapistudent',
          desc: `
            <p class="mt-4 line-height-18">
              Rina er utdannet autorisert helsefagarbeider og har jobbet ved Brumunddal sykehjem siden 2009. I sitt arbeid med mennesker har hun sett behovet og viktigheten av god fothelse.
            </p>
            <p class="mt-4 line-height-18">
              Hun er nå under utdannelse ved fot-og helseakademiet i Oslo der hun studerer fotterapifaget.
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
