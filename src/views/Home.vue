<template>
  <div class="
    pa-4
    pa-sm-6
    pa-md-12
    pa-lg-12
    pa-xl-12
  ">
    <Cover/>

    <!-- <Message/> -->

    <OnlineBookingButtons style="margin-top: 50px;"/>

    <v-row justify="center" class="ihf-extra-margin-top">
      <h2 class="display-1 mb-5 pa-5">Våre tjenester</h2>
    </v-row>

    <v-row justify="center" class="ihf-extra-margin-bottom">
      <v-col
        cols="12" xs="12" sm="6" md="4" lg="3" xl="3"
        v-for="(treatment, index) in treatments"
        :key="index"
        @click="$router.push(treatment.link)"
        class="ihf-card"
      >
        <div>
          <!-- <v-img
            v-if="treatment.image"
            :src="require('@/assets/' + treatment.image)"
            contain
          ></v-img> -->
          <!-- <v-responsive v-else :aspect-ratio="16/11" style="background: #ddd;"></v-responsive> -->
          <v-img
            v-if="treatment.image !== ''"
            :src="require('@/assets/' + treatment.image)"
            contain
            :aspect-ratio="treatment.ratio"
          >
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
          <v-responsive v-else :aspect-ratio="16/11" style="background: #ddd;"></v-responsive>
        </div>

        <div class="ihf-treatment-desc">
          <h2 v-html="treatment.name"></h2>

          <div v-html="treatment.text"></div>
        </div>

        <v-row justify="center" class="pt-0 ml-2 mr-2">
          <v-btn
            @click="$router.push(treatment.link)"
            target="_blank"
            color="secondary"
            class="text-none mb-8"
            text
          >
            <span>Les mer</span>
            <v-icon right dark>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" class="ihf-extra-margin-top">
      <h2 class="display-1 mb-5 pa-5" id="pasienterfaring">
        Pasienterfaringer
      </h2>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="12" sm="12" md="6" lg="5" xl="4"
        v-for="(quote, index) in quotes"
        :key="index"
      >
        <div class="ihf-quote pa-5">
          <div class="line-height-18">
            <v-icon color="#F75F49">mdi-format-quote-open</v-icon>
            <span v-html="quote.text"></span>
          </div>
          <div class="ihf-quote-author ml-4 mt-2">
            - {{ quote.author }}
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="ihf-extra-margin-bottom">
      <v-btn
        @click="$router.push('/pasienterfaringer')"
        target="_blank"
        color="secondary"
        class="text-none mb-8"
        text
      >
        <span>Se flere</span>
        <v-icon right dark>mdi-arrow-right</v-icon>
      </v-btn>
    </v-row>

    <Footer/>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import OnlineBookingButtons from '@/components/OnlineBookingButtons'
import Footer from '@/components/Footer'

export default {
  name: 'Home',

  components: {
    Cover,
    OnlineBookingButtons,
    Footer
  },

  data: () => ({
    cards: [
      {
        name: 'Fysioterapi',
        image: 'fysio.svg',
        ratio: 1.72,
        bookingBtn: true,
        link: 'fysioterapi'
      },
      {
        name: 'Kiropraktor',
        image: '',
        ratio: 1.5,
        bookingBtn: true,
        link: 'kiropraktor'
      },
      {
        name: 'Massasje',
        image: 'relax.svg',
        ratio: 1.72,
        bookingBtn: true,
        link: 'massasje'
      },
      {
        name: 'Fotpleie',
        image: 'massage.svg',
        ratio: 1.72,
        bookingBtn: true,
        link: 'fotpleie'
      },
      {
        name: 'Osteopati',
        image: 'exercise.svg',
        ratio: 1.72,
        bookingBtn: null,
        link: 'osteopati'
      },
      {
        name: 'MediYoga',
        image: 'lotus-position.svg',
        ratio: 1.72,
        bookingBtn: null,
        link: 'yoga'
      },
      {
        name: 'YinYoga',
        image: 'exercise.svg',
        ratio: 1.72,
        bookingBtn: null,
        link: 'yinyoga'
      }
    ],

    treatments: [
      {
        name: 'Fysioterapi',
        image: 'neck-small.jpg',
        ratio: 1.5,
        bookingBtn: true,
        link: 'fysioterapi',
        text: ``
      },
      {
        name: 'Massasje',
        image: 'massage.jpg',
        ratio: 1.5,
        bookingBtn: true,
        link: 'massasje',
        text: ``
      },
      {
        name: 'Fotterapi- og pleie',
        image: 'foot.jpeg',
        ratio: 1.55,
        bookingBtn: true,
        link: 'fotpleie',
        text: ``
      },
      {
        name: 'Osteopati',
        image: '',
        ratio: 1.55,
        bookingBtn: true,
        link: 'osteopati',
        text: ``
      },
      {
        name: 'Akupunktur',
        image: '',
        ratio: 1.5,
        bookingBtn: true,
        link: 'akupunktur',
        text: ``
      },
      {
        name: 'Kiropraktor',
        image: '',
        ratio: 1.5,
        bookingBtn: true,
        link: 'kiropraktor',
        text: ``
      },
      {
        name: 'YinYoga',
        image: 'berit-sun.jpg',
        ratio: 1.55,
        bookingBtn: true,
        link: 'yinyoga',
        text: ``
      },
      {
        name: 'MediYoga',
        image: 'berit-small.jpg',
        ratio: 1.5,
        bookingBtn: null,
        link: 'yoga',
        text: ``
      },
      {
        name: 'Bedrifter',
        image: 'bedrift3.png',
        ratio: 1,
        bookingBtn: null,
        link: 'bedrifter',
        text: ``
      },
      {
        name: 'Jordmor',
        image: 'baby.png',
        ratio: 1,
        bookingBtn: null,
        link: 'jordmor',
        text: ``
      },
      {
        name: 'Løpegrupper for bedrifter og private',
        image: 'running2.jpg',
        ratio: 1,
        bookingBtn: null,
        link: 'løping',
        text: ``
      },
      {
        name: 'Svømming',
        image: 'swimming.png',
        ratio: 2.6,
        bookingBtn: null,
        link: 'svømming',
        text: ``
      }
    ],

    quotes: [
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
      },
      {
        author: 'Kirsten Franciska, 36 år.',
        text: `
          Gro er utrolig flink. Hun hjelper meg med fibromyalgi plager og sliten
          kropp. Verd å la Gro prøve seg.
        `
      }
      // ,
      // {
      //   author: 'Christian, 35 år.',
      //   text: `
      //     Lokaliserte problemet med nakke/skulder fort og videre behandling både
      //     fungerer og er veldig behagelig.
      //   `
      // },
      // {
      //   author: 'Kristine, 28 år.',
      //   text: `
      //     Anbefales!<br>
      //     Lene er veldig flink og har god oppfølging.
      //   `
      // },
      // {
      //   author: 'Anette, 35 år.',
      //   text: `
      //     Har mottatt svært god behandling, både i forbindelse med svangerskap og
      //     tiden etter. Veldig flinke terapeuter, med høy kompetanse.
      //   `
      // },
      // {
      //   author: 'Bjørn, 72 år.',
      //   text: `
      //     Den hjelpen jeg har mottatt er veldig bra. Behagelige terapeuter.
      //   `
      // },
      // {
      //   author: 'Øyvind, 29 år.',
      //   text: `
      //     Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!
      //   `
      // }
    ]
  })
}
</script>

<style lang="css" scoped>
  .treatment-card {
    background: #F1EDEE;
    border-radius: 6px;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .treatment-card:hover {
    transform: scale(1.1);
  }
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(100,115,201,.33) 0%, transparent 50%);
  }
  .ihf-cover {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1600px;
    justify-content: space-between;
  }
  .ihf-statement {
    margin-left: 20%;
    /*transform: translateX(140px);*/
    /*background: red;*/
    margin-top: 100px;
    font-family: 'Segoe UI';
    font-style: italic;
  }
  .ihf-treatment-desc {
    padding: 20px;
    background: #F1EDEE;
    border-radius: 5px;
    height: auto;
    transform: translateY(-30px);
    margin: 0 3%;
    width: 94%;
  }
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
  .ihf-welcome-message {
    position: absolute;
    left: -20%;
    top: 10%;
    z-index: 2;
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
