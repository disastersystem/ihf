<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-row justify="center" class="wrap-point-large">
      <v-col cols="auto" class="pr-12">
        <v-breadcrumbs :items="[
          { text: 'Hjem', disabled: false, to: '/' },
          { text: 'Pasienterfaringer', disabled: true, to: '' }
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

    <v-row justify="center" style="margin-top: 80px;">
      <!-- <h2 class="display-1 mb-5 pa-5">Hør hva andre mener</h2> -->
      <h1 class="display-2 mb-5 pa-5" id="pasienterfaring">Pasienterfaringer</h1>
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

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import LeaveReviewDialog from '@/components/LeaveReviewDialog'

export default {
  name: 'Reviews',

  metaInfo: {
    title: 'Pasienterfaringer',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `Les hva andre sier om oss i Innlandet helse og fysioterapi.`
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/pasienterfaringer'
      }
    ]
  },

  components: {
    Footer,
    LeaveReviewDialog
  },

  data: () => ({
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
  })
}
</script>

<style lang="css" scoped>
  .ihf-quote {
    border-radius: 5px;
    /*padding: 20px;*/
    /*background:#F1EDEE;*/
    /*min-width: 300px;*/
    /*max-width: 600px;*/
  }
  .ihf-quote-author {
    font-family: 'Caveat', cursive;
    font-size: 1.1em;
  }
  .ihf-placeholder-card {
    width: 100%;
    height: 300px;
    background: #ddd;
  }
  .ihf-card {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    .ihf-cover {
      justify-content: center;
    }
    .ihf-statement {
      /*transform: translateX(0px);*/
      margin-left: 0;
      margin-top: 80px;
      margin-bottom: 80px;
      text-align: center;
    }
    .ihf-welcome-message {
      left: 3%;
    }
    .ihf-wrap {
      flex-wrap: wrap;
    }
  }
</style>
