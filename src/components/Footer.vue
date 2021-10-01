<template>
  <div
    style="margin-top: 150px; background:#F1EDEE;"
    class="
      mb-12
      pt-4 pl-4 pr-4
      pt-sm-6 pl-sm-6 pr-sm-6
      pt-md-12 pl-md-12 pr-md-12
      pt-lg-12 pl-lg-12 pr-lg-12
      pt-xl-12 pl-xl-12 pr-xl-12
    "
  >
    <v-row>
      <v-row wrap>
        <v-col cols="auto">
          <Contact/>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-row class="break-it" justify="center">
            <v-col cols="auto">
              <!-- <div v-if="$route.name !== 'home'" class="mb-4 mt-12">
                <h4 class="mb-2">Moelv</h4>
                <iframe title="Google maps plassering for avdeling Moelv" class="iframe-map" frameborder="0" style="border:0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&zoom=13&q=place_id:EiFNw7hsbGVyZ2F0YSAzLCAyMzkwIE1vZWx2LCBOb3J3YXkiMBIuChQKEgnpa6VqIXhqRhHlI3WyV5DiYRADKhQKEgnzQctuIXhqRhGzCSOc9-Bqkw"
                ></iframe>
              </div> -->
            </v-col>

            <v-col cols="auto">
              <!-- <div v-if="$route.name !== 'home'" class="mb-4 mt-12">
                <h4 class="mb-2">Gjøvik</h4>
                <iframe title="Google maps plassering for avdeling Gjøvik" class="iframe-map" frameborder="0" style="border:0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&zoom=13&q=place_id:ChIJ_8uuaRjaQUYR3MPSedwXKrc"
                ></iframe>
              </div> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>

    <v-row class="pb-6 pt-6 mt-12" justify="center" style="border-top: 1px solid #ddd;">
      {{ new Date().getFullYear() }} — <strong>Innlandet Helse og Fysioterapi</strong>
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
