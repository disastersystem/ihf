<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-breadcrumbs class="ml-3" :items="[
      { text: 'Hjem', disabled: false, to: '/' },
      { text: 'Fotpleie', disabled: true, to: 'fotpleie' }
    ]">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col class="pr-5" style="max-width: 700px;">
        <h1 class="display-2">Fotpleie</h1>

        <p class="mt-4 line-height-18">
          Føttene er ofte en glemt del av det daglig stellet vi gjør med resten av kroppen. Føttene
          bruker vi hver dag og det er de som bærer oss gjennom hele livet. Hver dag går vi flere tusen
          skritt og de blir stengt inne i sko. De trenger vedlikehold og pleie.
          <!-- Hvis vi forsømmer føttene våre vil
          det etterhvert gi smerter og plager i føttene som over tid kan få innvirkning på andre deler av
          kroppen vår. Velpleide føtter er fint og særlig på sommeren da vi går i sandaler og barbeint.
          Men det er like viktig på vinteren selv om vi gjemmer de bort i sko. -->
        </p>

        <h4 class="mt-10">Fotpleiebehandling</h4>
        <p class="mt-2 line-height-18">
          Denne behandlingen inkluderer et deilig fotbad som renser, setter i gang blodsirkulasjon og løser opp hard hud før man fjerner den harde huden.
          Behandleren vil også klippe og rense neglene og stelle neglebåndene (alt etter behov).
          Avslutningsvis påføres det en fuktighetsgivende krem, og du får en behagelig massasje.
        </p>

        <h4 class="mt-6">SPA fotpleiebehandling</h4>
        <p class="mt-2 line-height-18">
          I tillegg til vanlig fotbehandling får man skrubbet beina med salt fra Dødehavet. Den skrubber bort døde hudceller og er
          tilsatt olje slik at den etterlater huden myk. Etter fotbehandlingen legger man på en energigivende Collagen maske.
          Denne masken vil etterlate huden myk og fuktig. Spesielt laget for å mykgjøre de røffere områdene.
          Behandlingen avsluttes med legg og fotmassasje med bruk av en behagelig massasje olje.
        </p>

        <h4 class="mt-6">Gelish/Shellac tær</h4>
        <p class="mt-2 line-height-18">
          Gelish er en gelebasert neglelakk som påføres som en vanlig lakk, og sitter som en hard gele.
          Lakken herdes i UV-lampe. Den kan sitte i opptil 3 uker eller lengre, dette avhenger om man ikke piller på
          neglene eller lakken. Den kan ikke fjernes med vanlig neglelakkfjerner, men fjernes med bruk av aceton eller slipes av.
        </p>

        <h4 class="mt-6">Parafinvoksbehandling</h4>
        <p class="mt-2 line-height-18">
          Parafinvoksbehandling kan utføres på hender og/eller føtter og gir en deilig fuktighet til huden. Den kan kombineres med f.eks.
          fotpleiebehandling eller pedikyr behandling. Etter desinfisering, skrubb og fuktighetskrem, dyppes føttene eller hendene ned i den
          smeltende voksen. Den legger seg som en hinne rundt huden og du pakkes deretter inn i plastpose og frotté vanter eller sokker.
          Porene åpner seg og urenheter slipper ut. Etter ca 15 min dras vokslaget av og fotpleier gir en deilig massasje.
        </p>
        <!-- <p class="mt-4 line-height-18">
          Etter ca 15 min dras vokslaget av og fotpleier gir en deilig massasje.
        </p> -->

        <h4 class="mt-5 pt-5">Priser</h4>

        <v-simple-table dense class="ihf-table">
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
        </v-simple-table>

        <div class="mt-4">
          <p style="font-size: 0.9em;">* Moelv sentrum er uten tillegg i prisen. Bor du mer enn 1 km. unna, koster det 10 kr. pr. km.
          kjøring.</p>
        </div>
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/foot.jpeg')"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12 pt-5 wrap-point-semi-large">
      <v-col style="padding-right: 40px; max-width: 400px;">
        <v-img
          :src="require('@/assets/ansatte/monica.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Fotpleier Monica Skjønsberg</h3>
        <p class="mt-4 line-height-18">
          Monica er utdannet helsefagarbeider med etterutdanning i rehabilitering*. Gjennom erfaringer som helsefagarbeider
          i flere år har hun sett viktigheten av godt benstell og bestemte seg for å ta fotterapeut utdannelse.
          Hun har erfaring med praktisk pleie, omsorg og miljøarbeid for pasienter, kunder og brukere av helse- og sosialtjenesten.
          Monica er ferdigutdannet sommeren 2020 og jobber frem til da som fotpleier. Monica tilbyr behandling i institusjon, klinikk og hjemmebehandlinger.
        </p>
        <p class="caption mt-12 line-height-18">
          *<i>Rehabilitering</i> har til formål å gjenvinne fysisk, kognitiv eller sosial funksjonsevne som er tapt på grunn av sykdom eller skade.
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
  },

  data () {
    return {
      treatments: [
        { name: 'Fotpleie behandling', time: 45, price: 620 },
        { name: 'SPA fotpleie behandling', time: 90, price: 1250 },
        { name: 'Gelish/Shellac tær', time: 30, price: 395 },
        { name: 'Fot og leggmassasje', time: 30, price: 445 },
        { name: 'Parafinvoks behandling', time: 30, price: 395 },
        { name: 'Fotpleie hjemmebehandling *', time: 45, price: 790 }
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
</style>
