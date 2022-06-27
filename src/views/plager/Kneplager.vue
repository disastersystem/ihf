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
          { text: 'Finn din plage', disabled: false, to: 'finn-din-plage' },
          { text: 'Hodepine', disabled: true, to: 'hodepine' }
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
        <h1 class="display-2">Kneplager</h1>

        <p class="mt-4 line-height-18">
          Knesmerter kan være smerter som sitter på fremsiden, baksiden, utsiden eller innsiden av kneet. Noen kan også
          oppleve at smerten sitter inne i kneleddet.
          I kneleddet er det ben, brusk, leddhinner, menisker, leddbånd og slimposer. Rundt kneleddet er det dessuten
          sener og muskler. Alle disse strukturene kan gi opphav til smerter i kneet.
        </p>

        <p class="mt-2 line-height-18">
          Det sees en økende forekomst av kneplager, noe som kan ha sammenheng med flere idrettsskader (håndball,
          fotball, alpin) og ensidig belastning å gjøre.
        </p>

        <p class="mt-2 line-height-18">
          Det er viktig å vite at selv om man skader strukturer i og rundt kneet kan man i de fleste tilfeller trene
          seg smertefri og ha høye krav til aktivitet. Noen ganger kan smerten i kneet oppleves verre enn skaden er,
          fordi kneet har veldig mange smertesensorer som reagerer.
        </p>

        <h4 class="mt-6">Symptomer</h4>

        <p class="mt-2 line-height-18">
          Ved kneplager kan du oppleve smerter i bevegelse, dette kan være både hvilesmerter og smerter som fremkommer
          etter økt belastning. Noen av de vanlige symptomene ved kneplager kan også være:
        </p>
        <ul>
          <li class="mt-2">Hevelse, en følelse av trykk eller at det er trangt å bøye kneet</li>
          <li class="mt-2">Varmefølelse</li>
          <li class="mt-2">Smertefullt å stekke ut eller bøye kneleddet</li>
          <li class="mt-2">Knepping i kneet</li>
          <li class="mt-2">Verking, iling eller stikkende følelse</li>
          <li class="mt-2">Vonde punkter ved berøring</li>
          <li class="mt-2">Svikt- og/eller låsningsfølelse</li>
        </ul>

        <h4 class="mt-6">Årsaker</h4>
        <p class="mt-2 line-height-18">
          Det kan være mange grunner til at du får knesmerter. Knærne er store ledd som utsettes for høy belastning i hverdagen.
        </p>
        <p class="mt-2 line-height-18">
          Noen av de vanligste årsakene til knesmerter kan være:
        </p>
        <ul>
          <li class="mt-2">
            Ensidig og repeterende belastning over tid som gir slitasjeforandringer.
            Dette kan for eksempel være gange på hardt underlag eller utførelse av idrett med høy intensitet
          </li>
          <li class="mt-2">Ulike typer skader, ofte vridninger kombinert med fall</li>
          <li class="mt-2">Overvekt, og i tillegg lite styrketrening og annen aktivitet</li>
          <li class="mt-2">Vekstrelaterte skader hos barn</li>
        </ul>

        <h4 class="mt-6">Mekanisme </h4>
        <p class="mt-2 line-height-18">
          I kneleddet møtes lårbein og leggbein i tillegg til at kneskålen ligger over og beskytter kneleddet.
          Det er i hovedsak et ledd som bøyes og strekkes, men innehar også noen grader rotasjon når det bøyes.
          <br>
          Smerter i hofter, fot eller legg kan komme fra knestrukturene.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/kneplager.png')"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Kneplager',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: ``
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/kneplager'
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
