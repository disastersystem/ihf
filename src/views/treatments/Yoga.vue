<template>
  <div class="
    pr-6 pl-6
    pr-sm-6 pl-sm-4
    pr-md-12 pl-md-12
    pr-lg-12 pl-lg-12
    pr-xl-12 pl-xl-12
  ">
    <v-breadcrumbs class="ml-3" :items="[
      { text: 'Hjem', disabled: false, to: '/' },
      { text: 'MediYoga', disabled: true, to: 'yoga' }
    ]">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-12">
        <h1 class="display-2">MediYoga</h1>

        <p class="mt-4 line-height-18">
          MediYoga er en terapeutisk yogaform som er utviklet i Sverige med røtter fra Kundaliniyoga.
          Yogaformen passer for alle enten man har fysiske begrensninger eller ikke. Instruktører og lærere i
          MediYoga har helsefaglig bakgrunn. Det er publisert flere forskningsstudier på MediYoga som
          dokumenterer dens terapeutiske effekt, se
          <a href="https://www.mediyoga.no" target="_blank" style="color: #2E86AB;">www.mediyoga.no</a>
          for mer info. Øvelsene utføres på myke ullmatter eller sittende på stol om det er det beste for din kropp.
          Vi har alt av utstyr som ullmatter, tepper, puter, stoler og pledd tilgjengelig, slik at du kan tilrettelegge
          stillingene etter dine fysiske forutsetninger.
        </p>
        <p class="mt-4 line-height-18">
          Øvelsene kan tilrettelegges, og tar utgangspunkt i den enkeltes mulighet og kapasitet. MediYoga
          passer også for deg som sliter med lite energi, smerteproblematikk eller andre helseutfordringer.
          Du kan godt være helt frisk også!
        </p>
        <p class="mt-4 line-height-18">
          MediYoga passer for deg som ønsker en yogatime der fokuset ligger på pust, bevegelighet i
          rygg/hofter, styrke kjernemusklaturen, avspenning og ro. Selv om øvelsene tilsynelatende er enkle er
          de kraftfulle, og påvirker deg på et fysisk, mentalt og emosjonelt plan. Et MediYogaprogram består av
          pusteøvelser, yogaøvelser, avspenning og meditasjon.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/berit.jpg')"
          contain
          style="max-width: 500px;"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-12 pt-5 wrap-point" justify="center">
      <v-col style="padding-right: 50px; max-width: 300px;">
        <!-- <img src="@/assets/ansatte/DSC_0200.jpg" style="display: block; width: 300px;"> -->
        <v-img
          :src="require('@/assets/ansatte/berit.jpg')"
          contain
        ></v-img>
      </v-col>
      <v-col style="max-width: 700px;">
        <!-- <h3>Kort om meg som skal være yogalæreren din</h3>
        <p class="mt-4 line-height-18">Jeg har deltatt og tatt kurs i klassisk yoga og Ashtanga yoga til og fra opp gjennom livet siste
        noen og tjue år. Sett nå i ettertid var yogautøvelsens hyppighet knyttet opp mot stressfulle perioder i livet, der jeg jevnlig gikk på
        yogaklasser når stresset var som størst for eksempel underveis i studietiden (utdannet veterinær). Jeg oppdaget MediYoga når jeg ble syk
        med ME i 2014, og begynte på instruktørutdannelse i 2015. Yogautdannelsen er tatt hos MediYoga International og jeg ble ferdigutdannet
        MediYoga lærer/terapeut (950 t) våren 2017. I tillegg til selve yogalærerutdannelsen har jeg tatt fordypning i MediYoga ved stress og utbrenthet,
        MediYoga Kidz (barne- og ungdomsyoga), MediYoga for gravide og MediYoga ved kreft. Jeg har i tillegg til MediYogautdannelsen gått kurs for
        yogalærere i Yoga Nidra. Siden starten av 2016 har jeg hatt gruppetimer i MediYoga hjemme i Veldre, hatt individuelle yogatimer og også undervist
        MediYoga ute i bedrift en periode.</p> -->

        <h3>Yogaterapeut Berit Engeset</h3>

        <p class="mt-4 line-height-18">
          Berit har deltatt og tatt kurs i klassisk- og Ashtanga yoga de siste tyve årene i tillegg til at hun er utdannet vetrinær.
          Når hun ser tilbake på sin yogautøvelses hyppighet, ser hun at hun har brukt yoga i stressfulle perioder i livet slik som f.eks.
          eksamenstider. Hun oppdaget MediYoga i 2014 da hun selv ble syk med ME*, og bestemte seg for å ta instruktør utdannelse.
          Yogautdannelsen er tatt hos MediYoga International og hun ble ferdigutdannet MediYoga lærer/terapeut 2017.
        </p>

        <p class="mt-4 line-height-18">
          I tillegg til selve yogalærerutdannelsen, samt gått kurs for yogalærere i Yoga Nidra, har Berit tatt fordypning i MediYoga ved:
        </p>

        <ul class="line-height-18">
          <li>Stress</li>
          <li>Utbrenthet</li>
          <li>MediYoga kids (barne- og ungdomsyoga)</li>
          <li>MediYoga for gravide</li>
          <li>Mediyoga ved kreft</li>
        </ul>

        <p class="caption mt-12">
          *ME er også kjent som kronisk utmattelsessyndrom
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
