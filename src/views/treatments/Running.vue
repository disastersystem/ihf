<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-container class="mb-0 pb-0 pl-0">
      <v-breadcrumbs class="pl-0" :items="[
        { text: 'Hjem', disabled: false, to: '/' },
        { text: 'Løpegrupper for bedrifter og private', disabled: true, to: 'running' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col class="pr-5" style="max-width: 700px;">
        <h1 class="display-2">Løpegrupper for bedrifter og private</h1>

        <p class="mt-10 line-height-18">
          Ingvild er osteopat og hun tilbyr løpegrupper for bedrifter og privatpersoner.
        </p>

        <p class="mt-10 line-height-18">
          For Ingvild er løping et fristed. Høy musikk på ørene, et par gode sko på beina og en planlagt løype er
          det som skal til for at hun skal føle på treningsglede. Motivasjonen ligger i gleden av å gjøre ferdig ei
          økt, og hun jakter alltid følelsen av de positive hormonene som pumpes rundt i blodet. Denne følelsen
          er ubeskrivelig deilig.
        </p>

        <p class="mt-4 line-height-18">
          Løping krever ingen spesielle ferdigheter eller utstyr, samtidig er løping en målbar treningsform som
          ofte gir raske resultater. På mange måter er løping en ærlig treningsform.
        </p>

        <p class="mt-4 line-height-18">
          Det er alltid mulig å justere nivå etter løype og terreng, samt intensitet og det er alltid gode
          muligheter for variasjon. Det finnes utallige stier, og utallige måter å kombinere en økt på. Man kan
          variere mellom harde økter og økter med lavere intensitet og puls.
        </p>

        <p class="mt-4 line-height-18">
          Ved en intervalløkt ligger helsegevinsten hovedsakelig i hjertepumpa, mens en lenger og jevnere tur
          styrker og øker utholdenhet til skjelettmuskulaturen.
        </p>

        <!-- <h4 class="mt-6">SPA fotpleiebehandling</h4> -->
        <p class="mt-10 line-height-18">
          Ingvild sin erfaring fra løpegruppen hun ledet sammen med sin osteopatkollega i Nord-Norge var at
          man kommer langt med samhold og godt humør. Motivasjonen kommer kanskje etter hvert som
          man mestrer, og den vil komme innenfra. Det hjelper alltid å være flere som har samme mål.
        </p>

        <h4 class="mt-6">Dette får du:</h4>
        <ul class="line-height-18">
          <li class="mt-4">
            Et løpeprogram utarbeidet av fysioterapeut som gjør at du gradvis får bedre kondisjon og
            kjenner at du kan løpe lenger og lenger.
          </li>
          <li class="mt-2">Et øvelsesprogram som skal gjøre kroppen sterkere og forebygge overbelastningsproblemer.</li>
          <li class="mt-2">10 økter med løpetrening med Ingvild. Her vil du få veiledning i bruk av utstyr, teknikk og hastighet. Du vil få prøve både rolige økter og mer intervalløkter.</li>
          <li class="mt-2">
            Målet finner dere sammen. For noen vil det kanskje være å kunne løpe 5 km i strekk, for
            andre kan det være å klare å holde løpeformen gjennom vinteren eller å delta på et løp til
            våren.
          </li>
        </ul>

        <h4 class="mt-8">Tid og Sted</h4>
        <p class="mt-2 line-height-18">
          For <span class="font-italic">bedrifter</span> avtales tidspunkt direkte med bedriften.
        </p>

        <p class="mt-4 mb-0 line-height-18">
          For <span class="font-italic">private</span> vil Ingvild holde løpegruppe disse tidspunktene:
        </p>
        <ul class="mt-1 line-height-18">
          <li>Nybegynner: Torsdager kl 17</li>
          <li>Litt øvet: Torsdag kl 18.30.</li>
        </ul>

        <h4 class="mt-8">Pris</h4>
        <p class="mt-2 line-height-18">2300 kr for 10 økter</p>

        <p class="mt-10">
          Løpingen vil foregå på Gjøvik. Sted for oppmøte kan variere noe fra gang til gang, men dreier seg
          rundt sentrum av byen. Det kreves ingen forhåndsferdigheter, og kun lett treningstøy og løpesko av
          utstyr.
        </p>

        <p class="mt-4">
          Ta kontakt på <a href="mailto:post@innlandethelseogfysioterapi.no">post@innlandethelseogfysioterapi.no</a> for deltakelse.
        </p>
      </v-col>

      <v-col style="max-width: 500px;" class="pl-12">
        <v-img
          :src="require('@/assets/running2.jpg')"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <!-- <v-row justify="center" class="mt-12 pt-5 wrap-point-semi-large">
      <v-col style="padding-right: 40px; max-width: 400px;">
        <v-img
          :src="require('@/assets/running.jpg')"
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
