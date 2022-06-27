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
          { text: 'Langvarige ryggsmerter', disabled: true, to: 'ryggsmerter' }
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
      <v-col style="max-width: 700px;" class="pr-5">
        <h1 class="display-2">
            Gruppetrening for deg med langvarige ryggsmerter
        </h1>

        <p class="mt-4 line-height-18">

        </p>

        <div class="mt-12">
          <h4 class="mt-6">Hvor</h4>
          <p class="mt-2 line-height-18">
            I fysioterapiinstituttet til Storgata 23 fysioterapi på Gjøvik. 3. etasje i Skattumgården.
          </p>

          <h4 class="mt-6">Når</h4>
          <p class="mt-2 line-height-18">
            Tirsdager kl 16.30 - 17.25
            <br>Oppstart 8. mars. Treningen går over 8 ettermiddager på følgende datoer:<br>
            8. mars, 15. mars, 22. mars., 29. mars, 5. april, påskeferie (ingen trening), 19. april, 26. april og 3. mai.
          </p>

          <h4 class="mt-6">Pris</h4>
          <p class="mt-2 line-height-18">
            2350 for hele kurset på 8 ganger
          </p>

          <h4 class="mt-6">Hva</h4>
          <p class="mt-2 line-height-18">
            <b>Styrketrening for langvarige ryggsmerter med osteopat Ingvild.</b> Her vil du få forskningsbaserte øvelser som
            styrker hele ryggkomplekset ditt. Du får øvelser som inkluderer støttemuskulatur, som hjelper å avlaste
            nerver som kan være i klem og som gjør muskulaturen din mer utholdende. Passer for deg som hatt ryggplager
            over tid. Du blir veiledet i treningen, og får alternativer om noen øvelser skulle være utfordrende for
            deg å gjennomføre.
          </p>

          <p class="mt-2 line-height-18">
            Obs! Vi trenger 10 påmeldte på hver gruppe for å kunne gjennomføre kursene.
          </p>

          <h4 class="mt-12">Bli med!</h4>
          <v-row class="mt-2 line-height-18">
            <v-col cols="12">
              <div style="display: flex;">
                <div class="mr-3">
                  <!-- <img src="mdi-email-outline"/> -->
                  <!-- <v-icon>mdi-email-outline</v-icon> -->
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                  </svg>
                </div>
                <div class="overflow-wrap">
                  <a href="mailto:post@innlandethelseogfysioterapi.no" class="overflow-wrap" style="color: #2E86AB; text-decoration: underline;">
                    post@innlandethelseogfysioterapi.no
                  </a>
                </div>
              </div>

              <div class="mb-8 mt-2">
                <div class="mt-3" style="display: flex;">
                  <div class="mr-3">
                    <!-- <img src="phone.svg"/> -->
                    <!-- <v-icon>mdi-cellphone-iphone</v-icon> -->
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </svg>
                  </div>
                  <div>Tlf Gjøvik: 973 488 73</div>
                </div>
              </div>
            </v-col>

            <v-col cols="12">
              <div style="width: 270px; padding-bottom: 5px;">
                <v-img
                  style="width: 270px;"
                  :src="require('@/assets/logo-twolines-long.svg')"
                  contain
                ></v-img>
              </div>
            </v-col>
          </v-row>

          <!-- <v-row>
            <v-col cols="auto">
              <v-btn
                href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
                target="_blank"
                color="accent"
                class="text-none pt-6 pb-6 pl-6 pr-6 mt-8"
                rounded
              >
                <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                </svg>
                <span class="font-weight-regular mr-1">Bestill time</span>
                <span class="font-weight-bold">Gjøvik</span>
              </v-btn>
              <p class="body-1 mt-2 pl-8">
                Tlf: 973 488 73
              </p>
            </v-col>
          </v-row> -->
        </div>
      </v-col>

      <v-col style="max-width: 500px;">
        <!-- <img src="berit.jpg" style="display: block; width: 100%;"> -->
        <v-img
          :src="require('@/assets/rygg.png')"
          contain
          style="max-width: 500px;"
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
    title: 'Langvarige ryggsmerter',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `Styrketrening for langvarige ryggsmerter. Bli med her!`
      },
      {
        rel: 'canonical',
        href: 'https://innlandethelseogfysioterapi.no/langvarige-ryggsmerter'
      }
    ]
  },

  components: {
    Footer
  }
}
</script>
