<template>
  <div class="
    pa-4
    pa-sm-6
    pa-md-12
    pa-lg-12
    pa-xl-12
  ">
    <v-row justify="center" style="margin-top: 80px;">
      <!-- <h2 class="display-1 mb-5 pa-5">Hør hva andre mener</h2> -->
      <h2 class="display-1 mb-5 pa-5" id="pasienterfaring">Pasienterfaringer</h2>
    </v-row>

    <v-row justify="center" class="ihf-extra-margin-bottom">
      <v-col
        cols="12" sm="12" md="6" lg="5" xl="4"
        v-for="(quote, index) in quotes"
        :key="index"
      >
        <div class="ihf-quote pa-5">
          <div class="line-height-18">
            <v-icon color="#F75F49">mdi-format-quote-open</v-icon>
            <span v-html="quote.text"></span>
            <!-- <v-icon>mdi-format-quote-close</v-icon> -->
          </div>
          <div class="ihf-quote-author ml-4 mt-2">
            - {{ quote.author }}
          </div>
        </div>
      </v-col>
    </v-row>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Reviews',

  components: {
    Footer
  },

  data: () => ({
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
