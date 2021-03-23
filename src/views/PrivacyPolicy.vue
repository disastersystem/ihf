<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-container class="mb-0 pb-0 pl-0">
      <v-row justify="center" class="wrap-point-large">
        <v-col class="pr-5" style="max-width: 700px;">
          <v-breadcrumbs class="pl-0" :items="[
            { text: 'Hjem', disabled: false, to: '/' },
            { text: 'Kiropraktor', disabled: true, to: 'kiropraktor' }
          ]">
            <template v-slot:divider>
              <!-- <v-icon>mdi-chevron-right</v-icon> -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-container>

    <v-row justify="center" class="wrap-point-large" style="margin-top: 100px;">
      <v-col class="pr-5" style="max-width: 700px;">
        <h1 class="display-2">Personvernerklæring</h1>

        <p class="mt-4 line-height-18">
          Denne erklæringen redegjør for Innlandet Helse og Fysioterapi AS avd. Moelv of Gjøvik,
          sin behandling av personopplysninger på sine nettsider, og behandling
          av personopplysninger ved bruk av våre tjenester. Vi på Innlandet Helse og Fysioterapi er svært opptatt av å
          til enhver tid beskytte våre pasienters personopplysninger, og er ansvarlig for at din
          informasjon behandles i samsvar med Norges lover.
        </p>

        <h4 class="mt-10">Personopplysninger behandlet på denne siden</h4>
        <p class="mt-4 line-height-18">
          Klinikken innhenter vanlig besøksstatistikk for sin nettside. Dette innebærer statistikk som
          genereres automatisk av serveren over besøkendes IP-adresse, hvilke sider som er lastet ned,
          tidspunkt, hvilken side vedkommende kom fra, samt type nettleser og operativsystem som
          benyttes. Vi samler ikke inn eller lagrer andre personlige data, f.eks. navn, fødselsnummer
          eller e-postadresser. På våre nettsider har vi timebestilling på nett som lagrer personalia
          du legger inn direkte i programvaren Hano som er klinikkens journalsystem. Journalprogrammet
          er passordbeskyttet og taushetsbelagt. Informasjonen i klinikkens journalsystem kan kun leses
          av din behandler.
        </p>

        <h4 class="mt-10">Hva brukes informasjonen til</h4>
        <p class="mt-4 line-height-18">
          Opplysninger som omhandler besøksstatistikk benyttes kun i forbindelse med drift og
          videreutvikling av nettsiden.
        </p>
        <p class="mt-4 line-height-18">
          Opplysninger som omhandler sensitiv pasientdata ved timebestilling på nett, er påkrevd i
          lovgivningen om helsepersonell om elektronisk journalføring.
        </p>
        <p class="mt-4 line-height-18">
          Opplysninger som omhandler pasientdata ved kjøp av tjenester eller journalpliktig
          informasjon er vi pålagt å oppbevare. Du har rett til innsyn i all informasjon knyttet
          til deg selv, og kan endre og korrigere vesentlige feil. Journalen skal være skrevet
          på et forstårlig språk, slik at hovedkonteksten er forstårlig dersom pasienten ønsker
          innsyn. Pasienten, brukeren eller den som disse opplysningene gjelder, kan kreve at
          opplysningene i journalen rettes eller slettes etter reglene i helsepersonelloven
          §42 til §44. Ta gjerne kontakt med oss på post@innlandethelseogfysioterapi.no hvis du har
          ytterligere spørsmål.
        </p>

        <h4 class="mt-10">Hvem har tilgang til informasjonen</h4>
        <p class="mt-4 line-height-18">
          Ingen opplysninger om besøksstatistikk utleveres til andre utover klinikkens daglige leder og
          klinikkens IT-ansvarlig.
          Sensitiv persondata i journalføring er kun tilgjengelig for behandlende terapeuter på klinikken.
          Terapeuter som ikke inngår som autorisert helsepersonell har alle undertegnet taushetserklæring.
          <!-- Terapeuter på Innlandet Helse of Fysioterapi har kun tilgang til journal til sine egne pasienter.
          Din journal oppbevares i et kryptert journalsystem. -->
        </p>

        <h4 class="mt-10">Deling av data</h4>
        <p class="mt-4 line-height-18">
          Ved behov og samtykke fra pasient kan personopplysninger bli delt for tilstrekkelig
          helsehjelp fra en tredjepart. Dette er eksempelvis epikrise til fastlege, sykemelding
          eller henvisninger til spesialist. Personopplysninger vil aldri bli delt med uvedkommende.
        </p>

        <h4 class="mt-10">Samler nettsiden inn personopplysninger?</h4>
        <p class="mt-4 line-height-18">
          Klinikken samler ikke inn eller oppbevarer ikke personopplysninger på nettsiden.
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
