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
        { text: 'Osteopati', disabled: true, to: 'osteopati' }
      ]">
        <template v-slot:divider>
          <!-- <v-icon>mdi-chevron-right</v-icon> -->
          <svg style="width:16px;height:16px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-12">
        <h1 class="display-2">Osteopati</h1>

        <p class="mt-4 line-height-18">
          En osteopat finner sammenhengen mellom dine plager, din kropp og din
          hverdag. Osteopaten bruker ulike teknikker for muskler og ledd og
          forsøker å velge de som passer deg best.
        </p>
        <p class="mt-4 line-height-18">
          En osteopat fungerer som din individuelle problemløser, hvor du er i
          fokus og får skreddersydd behandling. Vi tar oss god tid, med samtale,
          grundig undersøkelse og behandling. Sammen finner vi sammenhengen mellom
          dine plager, din kropp og hverdag. En osteopat bruker ulike teknikker
          for muskler og ledd og forsøker å velge de som passer deg best. Det kan
          være lette og kraftige teknikker, tøyninger, bløtvevsbehandling og
          manipulasjoner (knekking). En osteopat kan også gi deg treningsøvelser
          og aktivitetsråd.
        </p>
        <p class="mt-4 line-height-18">
          En osteopat oppsøkes ofte ved følgende smerter og plager i muskel og
          skjelettsystemet:
        </p>
        <ul>
          <li class="mt-4">Rygg-, bryst- og nakkesmerter</li>
          <li class="mt-2">Skulder-, albue- og håndleddssmerter</li>
          <li class="mt-2">Hofte-, kne-, ankel- og fotsmerter</li>
          <li class="mt-2">Hodepine, svimmelhet og balanseproblemer</li>
          <li class="mt-2">Bekkensmerter og andre plager i forbindelse med svangerskap</li>
          <li class="mt-2">Akutte- og belastningsrelaterte plager</li>
          <li class="mt-2">Idrettsskader</li>
        </ul>
        <p class="mt-4 line-height-18">
          I tillegg til dette kan en osteopat oppsøkes ved funksjonelle plager i
          mage-, tarm- og urinveisplager, fordøyelsesbesvær, halsbrann og sure
          oppstøt, tung pust og pustebesvær.
        </p>
        <p class="mt-4 line-height-18">
          En osteopat har blant annet kompetanse i undersøkelse og behandling av bekkenrelaterte
          plager hos både kvinner og menn. Slike plager kan eksempelvis være relatert til fødsel,
          graviditet, seksuelle plager og sykdom eller operasjon i bekkenregionen.
        </p>

        <v-btn
          href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
          target="_blank"
          color="accent"
          class="text-none pt-6 pb-6 pl-6 pr-6 mr-6 mt-8"
          rounded
        >
          <span class="font-weight-regular mr-1">Bestill time</span>
          <span class="font-weight-bold">Moelv</span>
        </v-btn>
        <v-btn
          href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
          target="_blank"
          color="accent"
          class="text-none pt-6 pb-6 pl-6 pr-6 mt-8"
          rounded
        >
          <span class="font-weight-regular mr-1">Bestill time</span>
          <span class="font-weight-bold">Gjøvik</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/osteopati2.jpg')"
          contain
          style="max-width: 500px;"
        ></v-img>
      </v-col>
    </v-row>

    <!-- <v-row class="mt-12 pt-5 wrap-point" justify="center">
      <v-col style="padding-right: 50px; max-width: 300px;">
        <v-img
          :src="require('@/assets/ansatte/ingvild.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Osteopat D.O. Ingvild Midthaug</h3>

        <p class="mt-4 line-height-18">
          Ingvild er utdannet Osteopat D.O., som er en 4 årig utdannelse fra
          Høyskolen Krisitiania.
          Hun har interesse for menneskets helse, funksjon og forbedring, og
          arbeider målrettet for pasientens bedring uansett problemstilling,
          alder, forutsetning, ønske eller mål.
          Ingvilds interessefelt er langvarige plager, bekken og andre
          kvinnerelaterte plager, samt idrett og det som setter høye krav til
          kroppens funksjon.
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
    title: 'Osteopat',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `Sammen finner vi sammenhengen mellom dine plager, din kropp og hverdag.`
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
