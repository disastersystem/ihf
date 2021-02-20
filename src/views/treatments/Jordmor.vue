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
        { text: 'Jordmor', disabled: true, to: 'bedrifter' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col style="max-width: 700px;" class="pr-12">
        <h1 class="display-2" style="line-height: 1.3em; overflow-wrap: break-word;">
          Jordmor
        </h1>

        <!-- <p class="mt-6 line-height-18" style="font-size: 1.4em;">
          Svangerskap-, fødsel- og foreldreforberedende kurs med jordmor Unn-Therese.
          Grunnet situasjonen med Covid-19 har vi begrenset med plasser.
        </p> -->
        <h2 class="mt-6 font-weight-medium">Pakke 1</h2>
        <p class="mt-4 line-height-18 font-weight-bold">Dette er inkludert</p>
        <ul>
          <li class="mt-4">Svangerskap-, fødsel- og foreldreforberedende kurs over to kvelder.</li>
          <li class="mt-2">*50% rabatt på første undersøkelse/behandlingstime hos vår dyktige osteopat, Ingvild Midthaug.</li>
          <li class="mt-2">
            Et standardisert øvelsesprogram for bekkenbunnen og muskulatur som er
            nødvendig å ta vare på under svangerskap og etter fødsel, utarbeidet av
            fysioterapeut.
          </li>
        </ul>

        <p class="mt-6 line-height-18 font-weight-bold">Tidspunkt</p>
        <p class="mt-4 line-height-18">Kursdatoer kommer, ta kontakt om du ønsker å stå på venteliste.</p>
        <!-- <p>Mandag 26.10 kl. 16.30-20.00</p>
        <p>Torsdag 29.10 kl. 16.30-20.00</p> -->

        <p class="mt-6 line-height-18 font-weight-bold">Pris</p>
        <p>2300 kr</p>

        <h2 class="mt-12 line-height-18 font-weight-medium">Pakke 2</h2>
        <p class="mt-4 line-height-18 font-weight-bold">Dette er inkludert</p>
        <ul>
          <li class="mt-4">
            Svangerskap-, fødsel- og foreldreforberedende kurs over to kvelder.
          </li>
          <li class="mt-2">*50% rabatt på første undersøkelse/behandlingstime hos vår dyktige osteopat, Ingvild Midthaug.</li>
          <li class="mt-2">Et standardisert øvelsesprogram for bekkenbunnen og muskulatur som er nødvendig å ta vare på under svangerskap
          og etter fødsel, utarbeidet av fysioterapeut.</li>
        </ul>
        <p class="mt-8 line-height-18 font-weight-bold">I tillegg får du</p>
        <ul>
          <li class="mt-4">
            To 60 minutters én til én jordmorkonsultasjoner i våre lokaler på Moelv. Tidspunkt for disse avtales individuelt.
          </li>
        </ul>
        <p class="mt-6 line-height-18 font-weight-bold">Pris</p>
        <p>3900 kr</p>

        <!-- <p class="mt-12 line-height-18">
          Kursene vil gjøre deg/dere bedre forberedt til fødsel, amming,
          barseltiden og foreldrerollen. Det vil bli anledning til å stille
          spørsmål underveis, eller snakke med jordmor alene etter kurset hvis
          dere har behov for det.
        </p> -->

        <h3 class="mt-12">Svangerskap-, fødsel- og foreldreforberedende kurs – disse temaene vil bli diskutert</h3>
        <p class="mt-4 line-height-18">
          Vi går igjennom 4 temaer på våre kurs og det vil være rom for spørsmål og god dialog med jordmor, både underveis og etter kurset.
        </p>

        <ol>
          <li class="mt-8">
            1. Svangerskapet Bekkenbunn og underliv:
            <ul>
              <li class="mt-3">Øvelser og informasjon</li>
              <li class="mt-3">Vanlige plager (smerter, utflod, såre slimhinner/blødninger, lekkasje, hemoroider)</li>
              <li class="mt-3">Bekken- og ryggsmerter</li>
              <li class="mt-3">Gode og lindrende stillinger (i jobb, aktivitet, hvile)</li>
              <li class="mt-3">
                Andre plager (kvalme, ligamentsmerter, halsbrann, hodepine, magesmerter, lite liv i magen, høyt blodtrykk,
                svangerskapsforgiftning/preeklampsi)
              </li>
            </ul>
          </li>
          <li class="mt-8">
            2. Forberedelser til foreldrerollen. Tilknytning til barnet i magen:
            <ul>
              <li class="mt-3">Forventninger</li>
              <li class="mt-3">Parforholdet</li>
              <li class="mt-3">Hva trenger babyen?</li>
            </ul>
          </li>
          <li class="mt-8">
            3. Fødsel:
            <ul>
              <li class="mt-3">Hvor vil du føde? Alternativer og medbestemmelse</li>
              <li class="mt-3">Mental forberedelse – hva gjør deg trygg og hva trenger du?</li>
              <li class="mt-3">Praktiske forberedelser – hva skal du ha i fødebagen?</li>
              <li class="mt-3">Tegn på at fødselen er i gang – hva skjer i kroppen? Rier eller kynnere?</li>
              <li class="mt-3">Når skal man ringe sykehuset – og hva skjer når man kommer dit?</li>
              <li class="mt-3">Latens – hvor lenge? Hva kan du gjøre for å lindre?</li>
              <li class="mt-3">Aktiv fase – varighet?</li>
              <li class="mt-3">Fosterovervåking</li>
              <li class="mt-3">Partners rolle</li>
              <li class="mt-3">Stillingsendringer, smertelindring</li>
              <li class="mt-3">Morkake, rifter, suturering, blødninger</li>
              <li class="mt-3">Overflytting fra fødestue til barsel</li>
              <li class="mt-3">Operative inngrep og igangsetting</li>
            </ul>
          </li>
          <li class="mt-8">
            4. Barsel, amming og barnestell:
            <ul>
              <li class="mt-4">Hva skjer på barselavdelingen? Hva skjer med barnet - hva skjer med deg/dere?</li>
              <li class="mt-4">Hva skjer med kroppen din etter fødsel? Blødning, sting, etterrier, knipeøvelser</li>
              <li class="mt-4">Amming – vanlige utfordringer, ammefilm, hud mot hud</li>
              <li class="mt-4">Fødselsdepresjon – hvem kan hjelpe? (Kroppsbilde, lite søvn, hormoner)</li>
              <li class="mt-4">Partners rolle i barseltiden</li>
              <li class="mt-4">Hva trenger du til barnet?</li>
              <li class="mt-4">Hvordan stelle barnet?</li>
              <li class="mt-4">Trenger du noen å snakke med etter fødselen?</li>
            </ul>
          </li>
        </ol>

        <p class="mt-8 line-height-18">
          Ta kontakt med oss om dette er noe for deg/dere.
        </p>
      </v-col>

      <v-col style="max-width: 500px;">
        <v-img
          :src="require('@/assets/baby.png')"
          contain
          style="max-width: 500px;"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-12 pt-5 wrap-point" justify="center">
      <v-col style="padding-right: 50px; max-width: 300px;">
        <v-img
          :src="require('@/assets/ansatte/unn-therese.jpg')"
          contain
        ></v-img>

        <p class="mt-4 font-italic" style="font-size: 1.2em;">
          «Kunnskap gir trygghet og trygghet gir bedre fødselsopplevelser!»
        </p>
      </v-col>
      <v-col style="max-width: 700px;">
        <h3>Jordmor Unn-Therese</h3>

        <p class="mt-4 line-height-18">
          Unn-Therese Marken er utdannet jordmor og har bred erfaring fra fødeavdeling. Daglig jobber hun i svangerskapsomsorgen her på
          Innlandet. Hun mener at det er å kunne tilby helhetlig og individuell tilpasset oppfølging til den gravide og partner er viktig.
          Du skal føle deg ivaretatt og trygg igjennom svangerskap, fødsel og barseltid.
        </p>

        <p class="mt-4 line-height-18">
          Fra tidligere er Unn-Therese utdannet barnevernspedagog, og har jobbet i barnevernstjenesten der hun hadde foreldreveiledning og
          saksbehandling.
        </p>

        <p class="mt-4 line-height-18">
          Unn-Therese startet som jordmor ved Ullevål sykehus, deretter Gjøvik og Lillehammer.
          I dag tilbyr hun hjemmefødsler i Mjøs-regionen i tillegg til svangerskap- og fødselsforberedende kurs
          ved Innlandet helse og fysioterapi.
        </p>

        <p class="mt-4 line-height-18">
          Innlandet helse og fysioterapi kan tilby deg god oppfølging i ditt
          svangerskap og etter fødsel. Vi jobber tett tverrfaglig, og tilbyr
          fysioterapi, gravidmassaje, modningsakupunktur, osteopati, fotpleie i
          tillegg til jordmor.
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
