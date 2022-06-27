<template>
  <div
    style="margin-top: 150px; background: #003a5d;"
    class="
      mb-12
      pt-4 pl-4 pr-4
      pt-sm-6 pl-sm-6 pr-sm-6
      pt-md-12 pl-md-12 pr-md-12
      pt-lg-12 pl-lg-12 pr-lg-12
      pt-xl-12 pl-xl-12 pr-xl-12
    "
  >
    <v-row wrap>
      <v-col>
        <Contact/>
      </v-col>
    </v-row>

    <v-row class="pb-6 pt-6 mt-12" justify="center" style="border-top: 1px solid #1A5B82; color: #C6EAFF;">
      {{ new Date().getFullYear() }} — <span class="ml-1">Innlandet Helse og Fysioterapi</span>

      <div style="display: flex;">
        <span class="ml-4 mr-4">//</span>
        <span class="mr-2">Org nr.</span>
        924 533 900
        <span class="ml-4 mr-4">//</span>
        <a href="/personvern" class="overflow-wrap" style="color: #C6EAFF; text-decoration: underline;">
          Personvernerklæring
        </a>
      </div>
    </v-row>
  </div>
</template>

<script>
import Contact from '@/components/Contact'

export default {
  components: {
    Contact
  }
}
</script>

<style lang="css" scoped>
  .iframe-map {
    height: 300px;
    width: 500px;
  }
  @media (max-width: 1640px) {
    .break-it {
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    .iframe-map {
      height: 200px;
      width: 400px;
    }
  }
  @media (max-width: 525px) {
    .iframe-map {
      height: 200px;
      width: 300px;
    }
  }
 @media (max-width: 380px) {
    .iframe-map {
      height: 200px;
      width: 270px;
    }
  }
</style>
