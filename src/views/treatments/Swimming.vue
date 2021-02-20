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
        { text: 'Svømming', disabled: true, to: 'svømming' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-12">
        <h1 class="display-2">Svømming</h1>

        <p class="mt-4 line-height-18">
          Det arrangeres svømmetilbud for barn i Moelv-hallen i samarbeid mellom Innlandet Helse og Fysioterapi og Moleven IL.
          Svømmeinstruktøren for disse kursene er Lene Moe Sognar som er utdannet fysioterapeut og svømmeinstruktør gjennom Norges svømmeforbund.
        </p>
        <h4 class="mt-5 pt-5">Konseptet for svømmeopplæringen</h4>
        <p class="mt-2 line-height-18">
          <!-- Konseptet for svømmeopplæringen<br> -->
          Lære de fire kjernefunksjonene: dykke – flyte – gli – fremdrift.<br>
          Vanntilvenning – bli kjent med vannets egenskaper
        </p>
        <p class="mt-12 line-height-18">
          Norges svømmeforbunds definisjon på svømmedyktighet:
          Svømmedyktig er den som trygt kan ta seg frem i vannet med effektive svømmebevegelser, som trives i vann, og mestrer forskjellige
          ferdigheter over og under vann.
        </p>
        <!-- <p class="mt-12 line-height-18">
          Finn ut mer her: <a href="https://www.moelvenil.no/allidrett">https://www.moelvenil.no/allidrett</a>
        </p> -->
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/swimming.png')"
          contain
          style="max-width: 500px;"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-12 pt-5 wrap-point" justify="center">
      <v-col style="padding-right: 50px; max-width: 300px;">
        <!-- <img src="@/assets/ansatte/DSC_0200.jpg" style="display: block; width: 300px;"> -->
        <v-img
          :src="require('@/assets/ansatte/lene.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Fysioterapeut Lene Moe Sognar</h3>

        <p class="mt-4 line-height-18">
          Lene har jobbet som fysioterapeut siden 2014. Hun har vært privatpraktiserende ved
          Innlandet Helse og Fysioterapi sine lokaler siden 2016. Lene har god erfaring med
          både forebygging og behandling av ulike plager og diagnoser.
        </p>

        <p class="mt-4 line-height-18">
          Basert på individuell undersøkelse og vurdering av problemet og hva kunden selv
          ønsker gir hun behandling. Noen av behandlingsmetodene Lene ser god effekt av er
          massasje/triggerpunktsbehandling sammen med mobiliseringsteknikker og
          tøyning/avspenning av muskler og vev, samt trenings- og øvelsesformer.
        </p>

        <p class="mt-4 line-height-18">
          Lene er svømmeinstruktør og har startet svømming for barn i Moelv-hallen i
          samarbeid med Moelven IL.
        </p>
      </v-col>
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
