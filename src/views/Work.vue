<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <v-container class="mb-0 pb-0">
      <v-breadcrumbs class="pl-0" :items="[
        { text: 'Hjem', disabled: false, to: '/' },
        { text: 'Lyst på jobb hos oss?', disabled: true, to: 'om' }
      ]">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-container class="about mt-12">
      <v-row justify="center" class="wrap-point-large" style="margin-top: 40px;">
        <v-col style="max-width: 750px;" class="pr-12">
          <h1 class="display-2">Lyst på jobb hos oss?</h1>

          <p class="line-height-18 mt-6">
            Vi er en bedrift i sterk vekst og har avdelinger både i Moelv og på Gjøvik.
            Innlandet helse og fysioterapi er til enhver tid åpne for nye terapeuter og medarbeidere
            til våre klinikker, vi oppfordrer derfor alle som ønsker til å søke. Send oss gjerne en
            åpen søknad om hvorfor du ønsker å jobbe hos oss. Er du interessert i å holde foredrag
            eller ha gruppetimer er det også mulighet til å ha det i våre lokaler på Moelv.
          </p>
          <p class="line-height-18 mt-6">
            Innlandet helse og fysioterapi er et etablert tverrfaglig team med fokus på kompetanse,
            service, kunnskap og resultater.
          </p>

          <!-- <p class="line-height-18 mt-6">
          </p> -->
          <h4 class="mt-6">Ønskede kvalifikasjoner for terapeuter:</h4>
          <ul>
            <li class="mt-4">Kvalifisert og/eller autorisert terapeut</li>
            <li class="mt-2">En motivert og engasjert person som ønsker å jobber i et tverrfaglig miljø</li>
            <li class="mt-2">Er selvstendig, og kan utvikle og skape nye relasjoner til nærmiljøet og samarbeidspartnere</li>
            <li class="mt-2">Inneha gode kommunikasjonsevner</li>
            <li class="mt-2">Ha en sterk drivkraft i å utvikle sin egen og klinikkens praksis og renommé</li>
            <li class="mt-2">Et sterkt ønske om faglig kompetanseutvikling</li>
            <li class="mt-2">Er åpen for å arbeide ute i bedrifter ved behov</li>
          </ul>

          <div class="mt-12" style="display: flex;">
            <div class="mr-3">
              <v-icon>mdi-cellphone-iphone</v-icon>
            </div>
            <div>Tlf Moelv: 951 888 73</div>
          </div>
          <div class="mt-4" style="display: flex;">
            <div class="mr-3">
              <v-icon>mdi-cellphone-iphone</v-icon>
            </div>
            <div>Tlf Gjøvik: 973 488 73</div>
          </div>

          <div class="mt-4" style="display: flex;">
            <div class="mr-3">
              <v-icon>mdi-email-outline</v-icon>
            </div>
            <div class="overflow-wrap">
              <a href="mailto:post@innlandethelseogfysioterapi.no" class="overflow-wrap" style="color: #2E86AB; text-decoration: underline;">
                post@innlandethelseogfysioterapi.no
              </a>
            </div>
          </div>

          <!-- <div class="mt-4">
            <div>
              <a href="https://www.facebook.com/innlandethelseogfysio/" target="_blank" style="text-decoration: none; margin-left: 0; padding-left: 0;">
                <v-icon large color="rgb(66, 103, 178)">mdi-facebook-box</v-icon>
                <img src="@/assets/facebook.svg" alt="Facebook link" style="width: 35px;">
              </a>
            </div>
          </div> -->
        </v-col>

        <v-col style="max-width: 550px;">
          <v-img
            :src="require('@/assets/sofa.jpg')"
            contain
          ></v-img>
        </v-col>
      </v-row>

      <!-- <v-row class="justify-center mt-12">
        <div class="mb-4 mr-6">
          <h4 class="mb-2">Moelv</h4>
          <iframe class="iframe-map" frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&zoom=13&q=place_id:EiFNw7hsbGVyZ2F0YSAzLCAyMzkwIE1vZWx2LCBOb3J3YXkiMBIuChQKEgnpa6VqIXhqRhHlI3WyV5DiYRADKhQKEgnzQctuIXhqRhGzCSOc9-Bqkw"
          ></iframe>
        </div>

        <div>
          <h4 class="mb-2">Gjøvik</h4>
          <iframe class="iframe-map" frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&zoom=13&q=place_id:ChIJ_8uuaRjaQUYR3MPSedwXKrc"
          ></iframe>
        </div>
      </v-row> -->
    </v-container>

    <v-row
      style="margin-top: 200px; background:#F1EDEE;"
      class="
        mb-12
        pa-4
        pa-sm-6
        pa-md-12
        pa-lg-12
        pa-xl-12
      "
    >
      <v-layout wrap>
        <v-flex>
          <Contact/>
        </v-flex>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
import Contact from '@/components/Contact'

export default {
  components: {
    Contact
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
  .iframe-map {
    height: 300px;
    width: 500px;
  }
  .ihf-welcome-message {
    position: absolute;
    left: 6%;
    top: 10%;
    z-index: 2;
  }
  @media (max-width: 1200px) {
    .iframe-map {
      height: 200px;
      width: 400px;
    }
  }
 /* @media (max-width: 1000px) {
    .iframe-map {
      height: 200px;
      width: 200px;
    }
  }*/
</style>
