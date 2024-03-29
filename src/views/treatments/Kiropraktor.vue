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
          { text: 'Kiropraktor', disabled: true, to: 'kiropraktor' }
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
        <h1 class="display-2">Kiropraktor</h1>

        <p class="mt-4 line-height-18">
          En kiropraktor er offentlig autorisert helsepersonell, som undersøker og behandler muskel-, nerve- og skjelettlidelser.
          Kiropraktorer i Norge er en primærhelsekontakt med 5 års universitetsutdannelse, samt ett år obligatorisk turnustjeneste.
          Kiropraktorer har selvstendig behandleransvar på lik linje med leger, tannleger og psykologer.
        </p>

        <h4 class="mt-10">En autorisert kiropraktor kan</h4>
        <p class="mt-2 line-height-18">
          <ul>
            <li class="mt-4">Undersøke og behandle med refusjon uten henvisning fra lege</li>
            <li class="mt-2">Henvise pasienter videre til legespesialist, røntgen, MR, CT eller fysioterapeut</li>
            <li class="mt-2">Sykemelde pasientene sine i opptil tolv uker</li>
          </ul>
        </p>

        <p class="mt-10 line-height-18">
          En kiropraktor er ofte assosiert med leddmanipulasjonsbehandling, men hos oss benytter vi også varierte behandlingsmetoder som
        </p>
        <ul>
          <li class="mt-4">Behandling av bløtvev</li>
          <li class="mt-2">Hjemmeøvelser</li>
          <li class="mt-2">Kinesiotape</li>
          <li class="mt-2">Theragun</li>
          <li class="mt-2">Triggerpunktbehandling</li>
        </ul>

        <p class="mt-10 line-height-18">
          Kiropraktoren hos Innlandet helse og fysioterapi behandler daglig pasienter med
        </p>
        <ul>
          <li class="mt-4">Rygg og bekkensmeter</li>
          <li class="mt-2">Nakkesmerter</li>
          <li class="mt-2">Hodepine og migrene</li>
          <li class="mt-2">Isjias</li>
          <li class="mt-2">Kjevesmerter</li>
          <li class="mt-2">Strålinger/smerter i armene</li>
          <li class="mt-2">Skuldersmerter</li>
          <li class="mt-2">Svimmelhet</li>
          <li class="mt-2">Knesmerter</li>
          <li class="mt-2">Idrettsskader</li>
          <li class="mt-2">Senebetennelse, slik som musearm, tennis albue, akilles betennelse etc.</li>
          <li class="mt-2">Kroniske betennelser</li>
        </ul>

        <p class="mt-10 line-height-18">
          Kiropraktoren hos oss har også spesialisert seg i behandling av gravide og spedbarn/barn.<br>
          Gravide og barn som oppsøker henne kommer ofte for
        </p>
        <ul>
          <li class="mt-4">Bekkenløsning eller låsning hos gravide</li>
          <li class="mt-2">Smerter i lysken, hoftene eller symfysen ved graviditet</li>
          <li class="mt-2">Isjiasplager hos gravide</li>
          <li class="mt-2">Ammeproblemer</li>
          <li class="mt-2">Refluks</li>
          <li class="mt-2">Barn med kolikk/ irritabelt barn</li>
          <li class="mt-2">Stramt tungebånd som ofte forårsaker ammeproblemer og refluks</li>
          <li class="mt-2">Bananbarn, ofte låst mot en side</li>
          <li class="mt-2">Barn som ikke liker å ligge på rygg, mage, sitte i bilstol etc.</li>
          <li class="mt-2">Søvnproblemer hos barn</li>
          <li class="mt-2">Skjevheter og nakkepåkjenninger etter fødsel</li>
        </ul>

        <p class="mt-10 line-height-18">
          De aller fleste barn og spedbarn liker å få kiropraktisk behandling. Du skal føle deg trygg når du tar barnet
          ditt med deg til en barnekiropraktor. Vi bruker lette spesifikke trykk når vi behandler barn, hos
          spedbarn bruker vi ikke mer press enn den man kan bruke på et lukket øye.
        </p>

        <v-btn
          href="https://innlandetkiro.bestille.no/OnCust2/#!/booking"
          target="_blank"
          color="accent"
          class="text-none pt-6 pb-6 pl-6 pr-6 mt-8"
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
        </p>
      </v-col>

      <!-- <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/foot.jpeg')"
          contain
        ></v-img>
      </v-col> -->
    </v-row>

    <!-- <v-row justify="center" class="mt-12 pt-5 wrap-point-semi-large">
      <v-col style="padding-right: 40px; max-width: 400px;">
        <v-img
          :src="require('@/assets/ansatte/amalie.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Amalie Øvergaard, BSC (Hons) Human Science, Master of Chiropractic</h3>
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
      </v-col>
    </v-row> -->

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Kiropraktor',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `Kiropraktikk kan hjelpe deg med plagene. Les mer om behandlingene og hvilke plager vår kiropraktor kan hjelpe med. Book time online`
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/kiropraktor'
      }
    ]
  },

  components: {
    Footer
  },

  data () {
    return {
      treatments: [
        { name: 'Fotpleiebehandling', time: 45, price: 620 },
        { name: 'SPA fotpleiebehandling', time: 90, price: 1250 },
        { name: 'Gelish/Shellac tær', time: 30, price: 395 },
        { name: 'Fot og leggmassasje', time: 30, price: 445 },
        // { name: 'Parafinvoksbehandling', time: 30, price: 395 },
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
