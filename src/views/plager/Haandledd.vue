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
          { text: 'Hånd- og håndleddssmerter', disabled: true, to: 'haandleddsmerter' }
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
        <h1 class="display-2">Hånd- og håndleddssmerter</h1>

        <p class="mt-4 line-height-18">
          Vondt i hånd eller håndledd kan ofte komme av en type overbelastning eller skade. Dvs at ofte er årsaken til
          smertene kjent eller ganske tydelige. Her beskrives noen av de vanligste symptomene og årsakene til hånd- og
          håndleddssmerter.
        </p>

        <h4 class="mt-6">Symptomer</h4>
        <p class="mt-2 line-height-18">
          Er det snakk om et fall eller en plutselig skade som skjer på annet vis, kjenner man seg ofte hoven, varm,
          det verker og noen ganger brenner. Da skal man med en gang ise ned, holde hånden inntil kroppen og litt opp
          og gjerne legge på en kompress (RICE-prinsippet). Ofte må det tas en røntgen eller annen form for
          bildediagnostikk for å finne ut hva som har skjedd. Brudd sees på røntgen, mens skadde bløtvevsstrukturer
          sees på MR.
        </p>
        <p class="mt-2 line-height-18">
          Hvis smerten har kommet gradvis over tid, kan det være snakk om en betennelse i sener, hvis det er numment
          eller stråler ut i fingrene, kan nervene være irriterte. Dette kan enten komme fra nakke, skulder, bryst,
          underarm eller noe som heter karpaltunnelen som ligger i håndleddet og noen ganger kan bli forsnevret.
          Hevelse og stivhet, kan ofte tyde på noe reumatisk (gikt).
        </p>

        <h4 class="mt-6">Årsaker</h4>
        <ul>
          <li class="mt-2 line-height-18">Senebetennelse &#8212; Repeterende eller statisk bruk av hånden over tid som fører til en overbelastning.</li>
          <li class="mt-2 line-height-18">Slitasjeforandringer i fingerledd &#8212; ofte pga arbeid som har vært belastende for leddene. Kjennes som hevelse, ømhet, redusert evne til belastning.</li>
          <li class="mt-2 line-height-18">
            Karpaltunnelsyndrom &#8212; en tunnel som nervus medianus ligger i kan få forkalkninger eller på annen
            måte bli innklemt. Man kjenner da prikking, nummenhet, lett for å glippe ting. Det kjennes best i tommel,
            pekefinger og tommel og du kan ha problemer med pinsettgrepet.
          </li>
          <li class="mt-2 line-height-18">
            Dupuytrens kontraktur &#8212; Vanligst hos menn, senene og musklene inni hånden bli så stramme at du
            ikke klarer å strekke ut hånden eller fingrene. Noen ganger kan dette skje i bare én finger, det kalles da
            «springfinger».
          </li>
          <li class="mt-2 line-height-18">
            Leddbetennelser som RA (Reumatoid artritt). Dette er en sykdom som angriper leddene dine.
            Du blir ofte hoven og stiv. Det starter ofte i de ytterste leddene, og kan sette seg lengre inn etter hvert
            som tiden går.
          </li>
          <li class="mt-2 line-height-18">
            Brudd eller seneavrivninger &#8212; Går mer under plutselige akutte skader.
            Se under «symptomer».
          </li>
        </ul>
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/håndledd.png')"
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
    title: 'h%C3%A5ndleddsmerter',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: ``
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/h%C3%A5ndleddsmerter'
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
