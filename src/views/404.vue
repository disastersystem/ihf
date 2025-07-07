<template>
  <div class="
    mr-6 ml-6
    mr-sm-6 ml-sm-4
    mr-md-12 ml-md-12
    mr-lg-12 ml-lg-12
    mr-xl-12 ml-xl-12
  ">
    <!-- <v-row justify="center" class="wrap-point-large">
      <v-col style="max-width: 1300px;" class="pr-12">
        <v-breadcrumbs class="pl-0" :items="[
          { text: 'Hjem', disabled: false, to: '/' },
          { text: 'Lyst på jobb hos oss?', disabled: true, to: 'om' }
        ]">
          <template v-slot:divider>
            <svg style="width:16px;height:16px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row> -->

    <v-container class="about mt-12">
      <v-row justify="center" class="wrap-point-large" style="margin-top: 40px;">
        <v-col style="max-width: 750px;" class="pr-12">
          <h1 class="display-2">404 - Siden finnes ikke</h1>

          <p class="line-height-18 mt-6">
            Siden du leter etter finnes ikke, eller har blitt flyttet.
            <br>Bruk menyen eller gå til <router-link to="/">forsiden</router-link>!
            <!-- Du kan prøve å søke etter det du leter etter, eller gå tilbake til <router-link to="/">hjemmesiden</router-link>. -->
          </p>

          <!-- <ul>
            <li class="mt-4"></li>
            <li class="mt-2"></li>
          </ul> -->
        </v-col>

        <v-col style="max-width: 550px;">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
