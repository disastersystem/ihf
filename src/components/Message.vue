<template>
  <v-container style="line-height: 1.8em; max-width: 760px; margin: 0 auto;">
    <!-- <v-navigation-drawer
      v-model="drawer"
      color="white"
      :right="true"
      absolute
      width="700"
      height="100vh"
    > -->
    <div class="pa-12">
      <!-- <v-icon @click="drawer = false">highlight_off</v-icon> -->
      <h2 class="mb-6">Vi har åpent igjen på mandag 20. april!</h2>

      <p>Det er kun mulig å bestille timer hos fysioterapeutene Lene, Helge og Elin den første uka. Fra <strong>27. april</strong> åpner vi for alle
      behandlerne slik at det også blir mulig å bestille timer hos Monica fotpleier og Gro massasjeterapeut og akupunktør.</p>

      <p>Yogaen er dessverre utsatt til over sommeren. De som er berørt av dette, skal ha fått beskjed.</p>

      <p class="mb-6">Vi har utarbeidet en prosedyre som alle som arbeider ved Innlandet fysioterapi og helse as plikter å følge.
      Denne er basert på bransjestandarden for helsevirksomheter som utfører 1-1 behandling fra helsedirektoratet.
      Bransjestandarden er ikke endelig vedtatt, vil det bli endringer, vil vi implementere disse.</p>

      <h4 class="mb-2">Råd til dere som kommer til oss er som følger:</h4>

      <ul style="list-style: none; margin: 0; padding: 0;">
        <li class="mb-2">
          🙂 Alle er ansvarlige for å vurdere symptomer på akutt luftveisinfeksjon og å avbestille sin behandling hvis du tror du kan ha blitt syk.
        </li>
        <li class="mb-2">
          🙂 Prøv å møte så presis til timen som mulig for å unngå at for mange oppholder seg på venteværelse samtidig.
        </li>
        <li class="mb-2">
          🙂 Det er kun tillatt å ha med seg én ledsager til behandling
        </li>
        <li class="mb-2">
          🙂 Man skal sprite hender ved ankomst til lokalet, og vaske hender og sprite seg etter at man er ferdig behandlet.
        </li>
        <li class="mb-2">
          🙂 Man skal følge 2- metersregelen i venteværelset.
        </li>
      </ul>

      <p class="mt-12">VEL MØTT! Gleder oss til å se dere!</p>

      <p>Hilsen Gro, Monica, Berit, Helge, Lene og Elin</p>
    </div>
    <!-- </v-navigation-drawer> -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: true
    }
  }
}
</script>
