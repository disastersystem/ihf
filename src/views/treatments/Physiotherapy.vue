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
        { text: 'Fysioterapi', disabled: true, to: 'fysioterapi' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-5">
        <h1 class="display-2">
          Fysioterapi
        </h1>

        <p class="mt-4 line-height-18">
          Vi gjør en grundig undersøkelse sammen med en samtale for å kartlegge hvor plagene dine kommer fra.
          Vi starter behandling første time. Denne behandlingen består ofte av leddmobilisering, tøyinger og dyp behandling av muskler og vev.
          Du får råd og tips om øvelser som du kan gjøre hjemme.
        </p>

        <div class="mt-12">
          <!-- <h4 class="mt-4">Priser</h4> -->
          <!-- <ul>
            <li>Fysikalsk behandling/muskelterapi 30 min: <span class="mr-2"></span>350,-</li>
            <li>Fysikalsk behandling/muskelterapi 45 min: <span class="mr-2"></span>525,-</li>
            <li>Fysikalsk behandling/muskelterapi 60 min: <span class="mr-2"></span>700,-</li>
          </ul> -->

          <!-- <v-simple-table dense class="ihf-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left pl-0">Behandling</th>
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

          <!-- <v-simple-table dense class="ihf-table mt-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left pl-0">Tilleggstjenester</th>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pt-2 pb-2 pl-0">Notater til lege, nav, søknader osv.</td>
                  <td></td>
                  <td>350 kr</td>
                </tr>
                <tr>
                  <td class="pt-2 pb-2 pl-0">Spesialtilpasset treningsprogram fra fysioterapeut</td>
                  <td></td>
                  <td>350 kr</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table> -->
        </div>

        <div class="mt-12">
          <h4 class="mt-6">Trenger jeg henvisning?</h4>
          <p class="mt-2 line-height-18">
            <!-- Innlandet helse og fysioterapi er privat og har derfor ikke tilskuddsordning fra det offentlige.
            Du behøver ikke henvisning fra lege og du slipper ventetiden. -->
            <!-- <a href="#" style="text-decoration: underline;" class="coral">link</a> -->
            Innlandet helse og fysioterapi er helprivat, det vil si at den drives uten driftstilskudd fra det offentlige. Det betyr
            igjen at det er veldig kort ventetid for å komme inn, og pasienten betaler behandlingen sin selv.
          </p>

          <h4 class="mt-6">Hvor mange behandlinger er vanlig?</h4>
          <p class="mt-2 line-height-18">
            <!-- Dette varierer fra hvilken problematikk du søker hjelp for, -->
            Dette vil variere ut i fra problemstillingen, men de fleste vil kun trenge et par behandlinger.
            <!-- men de aller fleste trenger kun et par behandlinger for å bli bedre. -->
            Hvis du ønsker legger vi opp behandlingen slik at du kan gjøre mye hjemme på egen hånd.
            <!-- Vi legger ofte opp behandlingene slik at du kan gjøre mye hjemme på egen hånd dersom du ønsker dette,
            og dermed trenger færre behandlinger. -->
          </p>

          <h4 class="mt-6">Kan jeg bruke min helseforsikring?</h4>
          <p class="mt-2 line-height-18">
            Ja det kan du. Ta kontakt med forsikringsselskap ditt, så hjelper de deg med dette.
            <!-- Ja det kan du, ta direkte kontakt med ditt forsikringsselskap så hjelper de deg med dette. -->
            Ofte dekker de hele eller deler av behandlingen din slik at du kan komme raskere tilbake i jobb.
          </p>
        </div>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/neck.jpg')"
          contain
          style="max-width: 500px;"
        ></v-img>
      </v-col>
    </v-row>

    <!-- <v-row class="mt-5 pt-5" justify="center">
      <h2 class="mb-4">Fysioterapeutene</h2>
    </v-row> -->

    <!-- <v-row style="margin-top: 100px; display: flex; justify-content: center;">
      <div class="mt-5 pt-5" style="max-width: 1000px;">
        <h2 class="mb-4" style="text-align: center;">
          Fysioterapeutene
        </h2>

        <div style="display: flex; flex-wrap: wrap;">
          <v-row class="mt-12 wrap-point">
            <v-col cols="auto" class="pr-8">
              <v-img
                :src="require('@/assets/ansatte/lene.jpg')"
                contain
                style="max-width: 200px;"
              ></v-img>
            </v-col>

            <v-col>
              <h3>Lene Moe Sognar</h3>

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
            </v-col>
          </v-row>

          <v-row class="mt-12 wrap-point">
            <v-col cols="auto" class="pr-8">
              <v-img
                :src="require('@/assets/ansatte/elin.jpg')"
                contain
                style="max-width: 200px;"
              ></v-img>
            </v-col>

            <v-col>
              <h3>Elin Fossbråten Næsse</h3>

              <p class="mt-4 line-height-18">
                Elin ble ferdig utdannet fysioterapeut i 2011. Hun har jobbet bredt siden da, og har blant annet jobbet på ortopedisk avdeling på sykehus,
                i kommunehelsetjeneste, i psykiatrien i stillingen til en psykomotorisk fysioterapeut, og i privat helsetjeneste. Hun har arbeidet i
                klinikk siden 2016.
              </p>

              <p class="mt-4 line-height-18">
                Elin er opptatt av å ha en helhetlig tilnærming, og å se sammenhengen mellom mentale og fysiske belastninger, sammen med kosthold og livsstil.
                Hun bruker mye massasje og tøyinger i sin behandling, men viser også øvelser og gir øvelsesprogram.
              </p>
            </v-col>
          </v-row>

          <v-row class="mt-12 wrap-point">
            <v-col cols="auto" class="pr-8">
              <v-img
                :src="require('@/assets/ansatte/helge.jpg')"
                contain
                style="max-width: 200px;"
              ></v-img>
            </v-col>

            <v-col>
              <h3>Helge Afseth</h3>

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
            </v-col>
          </v-row>

          <v-row class="mt-12 wrap-point">
            <v-col cols="auto" class="pr-8">
              <v-img
                :src="require('@/assets/ansatte/gry.jpg')"
                contain
                style="max-width: 200px;"
              ></v-img>
            </v-col>

            <v-col>
              <h3>Gry Merete Haakensveen</h3>

              <p class="mt-4 line-height-18">
                Gry har jobbet som fysioterapeut siden 2003, og har lang erfaring med pasienter i alle aldersgrupper og med bredde
                i ulike diagnoser. De siste årene har hun jobbet privat med tilskudd samtidig som hun har tatt en master i
                idrettsfysioterapi. Hun er utdannet personlig trener, yogalærer og gruppetreningsinstruktør.
              </p>

              <p class="mt-4 line-height-18">
                Gry ser helheten hos kunden/pasienten og har god erfaring med kombinert behandling av tøyninger,
                triggerpunkter, veiledete øvelser og treningsterapi.
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
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
        { name: 'Fysikalsk behandling/muskelterapi 30 min', time: 30, price: 445 },
        { name: 'Fysikalsk behandling/muskelterapi 45 min', time: 45, price: 590 },
        { name: 'Fysikalsk behandling/muskelterapi 60 min', time: 60, price: 780 }
      ]
    }
  }
}
</script>
