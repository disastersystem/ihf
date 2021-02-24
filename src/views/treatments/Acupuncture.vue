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
        { text: 'Akupunktur', disabled: true, to: 'akupunktur' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin: 100px 0;">
      <v-col style="max-width: 700px;" class="pr-5">
        <h1 class="display-2">Akupunktur</h1>

        <p class="mt-4 line-height-18">
          Akupunktur er en behandlingsmetode med bruk av nåler. Akupunkturnålene er svært tynne og en
          akupunkturbehandling skal ikke være smertefull. Det finnes ulike typer akupunkturbehandlinger
          og hos oss tilbyr vi tradisjonell kinesisk akupunktur og IMS (intramuskulær stimulering).
        </p>

        <p class="mt-4 line-height-18">
          Tradisjonell kinesisk akupunktur er basert på tradisjonell kinesisk medisin hvor man ønsker
          å regulere kroppens egne måte til å lege seg. Denne type akupunktur er en flott komplementær
          behandlingsmetode ved plager og tilstander der systemer i kroppen ikke er som de skal.
          Derfor passer akupunktur som behandling for tilstander og plager knyttet til kvinnehelse
          (hetetokter, svangerskapsplager, menstruasjonssmerter/plager). Akupunktur er også et fint
          behandlingsverktøy for ulike smertetilstander som diffuse smerter, migrene og ansikt- og
          kjevesmerter.
        </p>

        <p class="mt-4 line-height-18">
          IMS - intramuskulær stimulering er en type nålebehandling som i hovedsak benyttes på
          muskel- og skjelettplager. IMS, også kalt dry-needling og triggerpunktbehandling,
          har som funksjon å løsne stramme muskelfibre, samt skape lokal sirkulasjon og
          smertelindring.
        </p>
      </v-col>

      <!-- <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/massage.jpg')"
          contain
        ></v-img>
      </v-col> -->
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
