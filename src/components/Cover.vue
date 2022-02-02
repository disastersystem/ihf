<template>
  <v-container class="ihf-max-width">
    <v-row>
      <v-col cols="auto" style="position: relative;">
        <v-col class="pa-0" style="width: 1600px;">
          <v-img
            class="ihf-max-width"
            :src="require('@/assets/neck-full-thin2.jpg')"
            gradient="to top right, rgba(25,32,72,.6), rgba(100,115,201,.01)"
            contain
            aspect-ratio="1.72"
          >
            <!-- gradient="to top right, rgb(62, 143, 178,.6), rgba(64,179,229,.0)" -->
            <!-- <div class="fill-height bottom-gradient"></div> -->
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                  role="progressbar"
                  title="Laster bilde av person som får fysioterapi behandling"
                ></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-col>

        <div class="ihf-statement">
          <!-- <div style="width: 250px; margin-left: 1%; padding-bottom: 5px; margin-bottom: 40px;">
            <v-img
              :src="require('@/assets/logo-twolines.svg')"
              contain
            ></v-img>
          </div> -->

          <div class="ihf-statement-text">
            <h1 class="
              text-h4
              text-sm-h4
              text-md-h4
              text-lg-h3
              text-xl-h3
              mb-4 font-weight-bold
              ihf-ux-copy"
              style="line-height: 1.4em;"
            >
              Vi hjelper deg til bedre helse <br>med hensyn til din situasjon
              <!-- <br>på kort og lang sikt! -->
            </h1>
            <h3 class="mt-4 mb-6 text-h6 ihf-subtitle">
              Helse- og fysioterapiklinikk i Moelv og Gjøvik
              <!-- sentrum. -->
            </h3>
          </div>

          <div>
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="600"
              v-model="dialog"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  color="accent"
                  class="pa-6 mt-6 mr-6"
                  rounded
                >
                  <!-- <v-icon>mdi-clock-outline</v-icon> -->
                  <!-- <svg style="width:21px;height:21px;opacity: 0.9;" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14V12H17V14H15M11,14V12H13V14H11M7,16H9V18H7V16M15,18V16H17V18H15M11,18V16H13V18H11Z" />
                  </svg> -->
                  <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                  </svg>
                  <span class="font-weight-bold">Bestill time</span>
                </v-btn>
              </template>
              <v-card>
                <v-card-text class="pt-10">
                  <OnlineBookingButtons/>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    @click="dialog = false"
                  >
                    Lukk
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn
              @click="$router.push('om')"
              target="_blank"
              color="secondary"
              class="text-none mt-6 mr-6"
              rounded
              large
            >
              <span class="font-weight-bold" style="color: #fff;">Bli kjent med oss</span>
            </v-btn>

            <!-- <v-btn
              href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
              target="_blank"
              color="accent"
              class="text-none mt-6"
              rounded
              large
            >
              <span>Bestill time</span>
            </v-btn> -->
            <!-- <OnlineBookingButtons/> -->
            <!-- <OnlineBookingDialog/> -->
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OnlineBookingButtons from '@/components/OnlineBookingButtons'
// import OnlineBookingDialog from '@/components/OnlineBookingDialog'

export default {
  components: {
    OnlineBookingButtons
    // OnlineBookingDialog
  },
  data () {
    return {
      mobile: false,
      dialog: false
    }
  },
  mounted () {
    const width = window.innerWidth

    if (width < 1200) {
      this.mobile = true
    }
  }
}
</script>

<style>
  .ihf-max-width {
    max-width: 1600px;
  }
  .ihf-logo {
    max-width: 200px;
    position: absolute;
    top: 80px;
    z-index: 2;
    margin-left: 48px;
  }
  .ihf-statement {
    position: absolute;
    top: 30%;
    left: 80px;
    z-index: 2;
  }
  .ihf-statement-text {
    color: #fff;
  }
  .ihf-subtitle {
    color: #eee
  }
  .ihf-ux-copy {
    color: #fff;
  }
  @media (max-width: 1200px) {
    .ihf-logo {
      position: static;
      margin-left: 0;
      margin-bottom: 50px;
    }
  }
  @media (max-width: 1100px) {
    .ihf-statement {
      top: 28%;
    }
  }
  @media (max-width: 800px) {
    .ihf-statement {
      position: static;
      margin-top: 48px;
    }
    .ihf-statement-text {
      color: #000;
    }
    .ihf-subtitle {
      color: #777;
    }
    .ihf-ux-copy {
      color: #000;
    }
  }
</style>
