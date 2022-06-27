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
          { text: 'Mageplager', disabled: true, to: 'mageplager' }
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
        <h1 class="display-2">Mageplager</h1>

        <h4 class="mt-12">Symptomer</h4>
        <p class="mt-2 line-height-18">
          Mageplager som forstoppelse, sure oppstøt, kramper, magesmerter, løs mage eller luftproblemer er noe av det
          vanligste nordmenn sliter med. Går man til legen og får utelukket alvorlige tarmlidelser som ulcerøs colitt,
          Chrohns eller kreft, ender mange opp med sekkebetegnelsen irritabel tarm eller ingen diagnose i det hele tatt.
        </p>

        <h4 class="mt-6">Årsaker til mageplager</h4>
        <ul>
          <li class="mt-2 line-height-18">
              Magesekken og hjernen er koblet sammen av Vagusnerven. Denne nerveforbindelsen kan gjøre at vi alle
              kjenner på følelser som spenning i magen, grue- seg- følelse eller en klump i magen når man er lei
              seg, bekymret eller oppgiret. Dette kan igjen føre til oppblåsthet, diaré eller kvalme fordi
              nervecellene i tarmen kommuniserer med hjernecellene våre.
          </li>
          <li class="mt-2 line-height-18">
              Maten vi spiser og det vi drikker har også stor betydning for hvordan magen vår oppfører seg.
              Magen og tarmen innehar store mengder bakterier, og noen er gode for oss, mens andre kan skape problemer.
              Et riktig sammensatt kosthold for din mage er derfor veldig viktig.
          </li>
          <li class="mt-2 line-height-18">
              Stress kan forverre mageplager. Det er allikevel ikke enighet i forskningsmiljøet enda om hva som kommer
              først av stresset eller mageproblemene. Det man vet er at disse faktorene påvirker hverandre gjensidig &#8211;
              mageplager kan føre til økt stress og økt stress kan påvirke mage- og tarmbalansen.
          </li>
          <li class="mt-2 line-height-18">
              Ubalanse i muskel-skjelett og -nervesystemet. Vi som terapeuter har lang erfaring i å kartlegge muskler,
              nerver, skjelett og bindevev i mage- tarm og spiserørsregionen. Muskelknuter, hardt bindevev, redusert
              sirkulasjon og uregelmessig pustemuskulatur er funn som vi som terapeuter behandler.
          </li>
        </ul>

        <h4 class="mt-6">Mekanikk</h4>
        <p class="mt-2 line-height-18">
          Fra munnen, ned spiserøret, inn i magesekken, videre gjennom tynn og tykktarm og til slutt i ut i endetarmen
          ligger hele fordøyelsessystemet. Vagusnerven er én av de lengste nervene i kroppen vår og regnes som hovednerven
          til lunger, mage- tarm og mange andre organer. Siden vagusnerven er så lang, er det flere mulige steder denne
          nerven kan bli forstyrret. Å gjennopprette god blodforsyning til vagusnerven kan være en viktig del av det å
          bedre mage og tarmfunksjonen.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/mageplager.png')"
          contain
        ></v-img>
        <!-- <ul>
          <li>Akutte nakkesmerter</li>
          <li>Stramme og ømme nakkemuskler</li>
          <li>Nakkekink</li>
          <li>Nakkesleng (whiplash)</li>
          <li>Nakkehodepine (cervicogen hodepine)</li>
        </ul> -->
      </v-col>
    </v-row>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Mageplager',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: ``
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/mageplager'
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
