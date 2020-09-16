<template>
  <div class="
    pr-6 pl-6
    pr-sm-6 pl-sm-4
    pr-md-12 pl-md-12
    pr-lg-12 pl-lg-12
    pr-xl-12 pl-xl-12
  ">
    <v-container class="mb-0 pb-0 pl-0">
      <v-breadcrumbs class="pl-0" :items="[
        { text: 'Hjem', disabled: false, to: '/' },
        { text: 'Bedrifter', disabled: true, to: 'bedrifter' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-12">
        <h1 class="display-2" style="line-height: 1.3em; overflow-wrap: break-word;">
          Fysioterapi/Massasjeterapi på arbeidsplassen
        </h1>

        <p class="mt-6 line-height-18">
          Muskel- og skjelettplager er den vanligste årsaken til sykefravær på norske arbeidsplasser. Vi som fysioterapeuter er eksperter på å
          forebygge og behandle nettopp dette. Vi har lang erfaring med å hjelpe lokale bedrifter med å redusere sykefravær på både kort og lang sikt.
        </p>
        <p class="mt-4 line-height-18 font-italic">
          Vi vet at de fleste bedrifter er opptatt av å spare både tid og penger. Vi planlegger og organiserer derfor
          behandlingstimene direkte med den enkelte ansatte for å unngå unødvendig bruk av ressurser.
        </p>
        <h4 class="mt-12">Hvordan jobber vi?</h4>
        <ul>
          <li class="mt-4">Vi låner et rom i bedriften og tar med oss egen benk og alt annet utstyr vi trenger.</li>
          <li class="mt-2">Vi undersøker og behandler hver enkelt i 30 minutter.</li>
          <li class="mt-2">
            Vi bruker dyp muskel- og vevsbehandling, sammen med tøying og mobilisering. Dette fungerer veldig godt på stiv og smertefull nakke,
            skuldre, rygg og hofter. Vi gir i tillegg tips om øvelser, aktivitet og kostholdsråd for de som ønsker det.
            Alt skal være tilpasset den enkelte.
          </li>
          <li class="mt-2">Betaling vil skje med kort eller vipps, om ikke alt skal faktureres bedriften.</li>
          <li class="mt-2">Terapeuten behandler opptil 15 stk per gang.</li>
        </ul>

        <h4 class="mt-12 line-height-18">Hvorfor fysioterapi i bedrift?</h4>
        <ul>
          <li class="mt-4">
            Å tilby behandlinger i bedriften din er <b>kostnadseffektivt</b>, da sykefraværet reduseres og de ansattes
            trivsel og arbeidsevne øker.
          </li>
          <li class="mt-2">Det er <b>tidsbesparende</b> da det ikke er noen reisevei for de ansatte.</li>
          <li class="mt-2">Tidlig intervensjon, vi oppdager og behandler plager på et tidlig stadium.</li>
          <li class="mt-2">Tilpasset og målrettet behandling med god effekt.</li>
        </ul>

        <p class="mt-4 line-height-18 font-italic">
          Vi sammenligner oss ikke med bedriftshelsetjeneste eller forsikringsselskaper, da vi jobber forebyggende og aktivt
          for at ansatte skal kunne være i arbeid til enhver tid.
        </p>

        <h4 class="mt-12">Priser</h4>
        <p class="mt-4 line-height-18">
          Det settes av 30 minutter til hver ansatt. Veiledende pris er 445 per behandling. Hvis ansatte skal betale egenandel
          gjøres dette opp etter hver konsultasjon med vipps eller bankterminal. Bedriften faktureres resterende beløp månedlig.
        </p>

        <h4 class="mt-12">Statistikk</h4>
        <p class="mt-4 line-height-18">
          I følge NAV sine beregninger ligger sykefraværet hos norske bedrifter på gjennomsnittlig ca. 6% i andre kvartal 2019.
          I Oppland er det gjennomsnittlige sykefraværet på 45 dager og i Hedmark 46 dager (2018). 44% av fraværet hos menn skyldes
          muskel og skjelettlidelser, mens 32,9% hos kvinner skyldes muskel og skjelettlidelser.

          De mest framtredende plagene er ryggsmerter, nakke og skulder/armplager.
        </p>

        <p class="mt-4 line-height-18">
          NHO viser til rapport utarbeidet av Sintef, "Bedriftenes kostnader ved sykefravær", som belyser viktigheten av bedriftenes
          viten om at kostnader knyttet til sykefravær er mer enn rene lønnskostnader. Ekstrakostnader som produksjonstap, vikar,
          overtid o.l. er estimert til ukentlig kostnad på 14.900 kr.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/bedrift2.png')"
          contain
          style="max-width: 500px;"
        ></v-img>
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
  }
}
</script>
