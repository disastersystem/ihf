<template>
  <v-container class="ihf-max-width">
    <v-row>
      <v-col cols="auto" style="position: relative;">
        <v-col class="pa-0" style="width: 1600px;">
          <v-img
            class="ihf-max-width"
            :src="require('@/assets/neck-full-thin.jpg')"
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
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-col>

        <div class="ihf-statement">
          <div class="ihf-statement-text">
            <h2 class="display-1 mb-6 font-weight-bold" style="line-height: 1.4em;">
              Vi hjelper deg til bedre helse <br>med hensyn til din situasjon
              <!-- <br>på kort og lang sikt! -->
            </h2>
            <p class="title mt-6 font-weight-thin">
              Helse- og fysioterapiklinikk<br>i Moelv og Gjøvik sentrum.
            </p>
          </div>

          <div>
            <v-btn
              @click="$router.push('om')"
              target="_blank"
              color="secondary"
              class="text-none mt-6 mr-6"
              rounded
              large
            >
              <span>Bli kjent med oss</span>
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
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      mobile: false
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
  @media (max-width: 1200px) {
    .ihf-logo {
      position: static;
      margin-left: 0;
      margin-bottom: 50px;
    }
  }
  @media (max-width: 1100px) {
    .ihf-statement {
      top: 20%;
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
  }
</style>
