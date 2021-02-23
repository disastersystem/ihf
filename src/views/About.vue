<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-container class="mb-0 pb-0">
      <v-breadcrumbs :items="[
        { text: 'Hjem', disabled: false, to: '/' },
        { text: 'Vår visjon og historie', disabled: true, to: 'om' }
      ]" style="padding-left: 0;">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-container class="about mt-12">
      <v-row class="justify-center wrap-point-large" style="margin-top: 40px;">
        <v-col style="max-width: 750px;" class="pr-12">
          <h1 class="display-2">Om oss</h1>
          <!-- <h3 class="mt-12">Vår visjon er</h3> -->
          <p class="headline mt-12 line-height-18" style="line-height: 1.8em;">
            Vår visjon er: Vi skal være en profesjonell helse- og fysioterapiklinikk,
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

          <v-row>
            <v-col class="pr-6" cols="auto">
              <v-icon>mdi-chevron-right</v-icon>
              sentral beliggenhet
            </v-col>
            <v-col class="pr-6" cols="auto">
              <v-icon>mdi-chevron-right</v-icon>
              erfarne terapeuter
            </v-col>
            <v-col class="pr-6" cols="auto">
              <v-icon>mdi-chevron-right</v-icon>
              god service
            </v-col>
            <v-col class="pr-6" cols="auto">
              <v-icon>mdi-chevron-right</v-icon>
              kort ventetid
            </v-col>
          </v-row>
        </v-col>

        <!-- <v-col style="max-width: 550px;"> -->
          <!-- <v-img
            :src="require('@/assets/sofa.jpg')"
            contain
          ></v-img> -->
        <!-- </v-col> -->
      </v-row>

      <v-row class="mt-12 pt-6">
        <!-- <v-col cols="1"></v-col> -->
        <v-col cols="12">
          <h2 class="display-1 mb-5">Våre medarbeidere</h2>
        </v-col>
      </v-row>

      <v-row>
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
            <div class="text-h2 pa-6 pt-0" v-html="activeEmployee.desc"></div>

            <v-row>
              <v-col cols="auto" class="pl-8">
                <v-btn
                  v-if="activeEmployee.key === 'amalie'"
                  href="https://innlandetkiro.bestille.no/OnCust2/#!/booking"
                  target="_blank"
                  color="accent"
                  class="text-none mt-1"
                  rounded
                >
                  <span>Bestill time</span>
                </v-btn>
                <v-btn
                  v-if="activeEmployee.location === 'moelv' && activeEmployee.key !== 'amalie'"
                  href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
                  target="_blank"
                  color="accent"
                  class="text-none mt-1"
                  rounded
                >
                  <span>Bestill time</span>
                </v-btn>
                <v-btn
                  v-if="activeEmployee.location === 'gjovik'"
                  href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
                  target="_blank"
                  color="accent"
                  class="text-none mt-1"
                  rounded
                >
                  <span>Bestill time</span>
                  <!-- <span class="font-weight-bold ml-1">(Kommer Snart!)</span> -->
                </v-btn>
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

      <v-row class="mt-12 pt-12">
        <!-- <v-col cols="1"></v-col> -->
        <v-col>
          <!-- <h3>Du finner oss her</h3> -->
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
        <v-col style="max-width: 750px;" class="pr-12">
          <h2 class="display-1">Lyst på jobb hos oss?</h2>
          <p class="line-height-18 mt-6">
            Vi er en voksende bedrift, og har avdeling både på Moelv og Gjøvik. Send oss gjerne en åpen søknad om du er utdannet
            fysioterapeut, osteopat, kiropraktor, massasjeterapeut, akupunktør eller naprapat og fortell om hvorfor du ønsker å jobbe hos oss.
            Er du interessert i å holde foredrag eller ha gruppetimer er det også mulighet til å ha det i våre lokaler på Moelv.
          </p>
          <p class="line-height-18 mt-6">
            Den ene fysioterapeuten vår, skal ut i permisjon i starten av oktober, og vi ønsker å få inn noen til å vikariere for henne da.
            Det vil være mulighet for forlengelse av kontrakt utover tiden man fungerer som vikar for henne.
          </p>
          <p class="line-height-18 mt-6">
            Ta kontakt med oss på telefon, mail eller sosiale medier om du ønsker å vite mer.
          </p>

          <div class="mt-4" style="display: flex;">
            <div class="mr-3">
              <v-icon>mdi-cellphone-iphone</v-icon>
            </div>
            <div>Tlf Moelv: 951 888 73</div>
          </div>
          <div class="mt-4" style="display: flex;">
            <div class="mr-3">
              <v-icon>mdi-cellphone-iphone</v-icon>
            </div>
            <div>Tlf Gjøvik: 973 488 73</div>
          </div>

          <div class="mt-4" style="display: flex;">
            <div class="mr-3">
              <v-icon>mdi-email-outline</v-icon>
            </div>
            <div class="overflow-wrap">
              <a href="mailto:post@innlandethelseogfysioterapi.no" class="overflow-wrap" style="color: #2E86AB; text-decoration: underline;">
                post@innlandethelseogfysioterapi.no
              </a>
            </div>
          </div>

          <div class="mt-4">
            <div>
              <a href="https://www.facebook.com/innlandethelseogfysio/" target="_blank" style="text-decoration: none; margin-left: 0; padding-left: 0;">
                <!-- <v-icon large color="rgb(66, 103, 178)">mdi-facebook-box</v-icon> -->
                <img src="@/assets/facebook.svg" alt="Facebook link" style="width: 35px;">
              </a>
            </div>
          </div>
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
import employees from '@/employees.js'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Om oss',
    // all titles will be injected into this template
    titleTemplate: '%s | Innlandet Helse og Fysioterapi, Moelv og Gjøvik',
    meta: [
      { name: 'description', content: '' }
    ]
  },

  components: {
    Contact,
    OnlineBookingButtons
  },

  data () {
    return {
      dialog: false,

      employees: employees,

      // who works at which place? (each item is a index in the employees array)
      moelvGroup: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      gjovikGroup: [7, 3, 10, 11, 4],

      activeEmployee: {}
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
