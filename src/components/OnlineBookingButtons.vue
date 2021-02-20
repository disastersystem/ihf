<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-row class="ma-0 pa-0" justify="center">
        <v-col cols="auto" class="ma-0 pa-0" >
          <v-btn
            href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
            target="_blank"
            color="accent"
            class="text-none pt-6 pb-6 pl-6 pr-6"
            rounded
          >
            <span class="font-weight-regular mr-1">Bestill time</span>
            <span class="font-weight-bold">Moelv</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0" justify="center">
        <v-col cols="auto" class="ma-0 pa-0">
          <v-btn
            href="https://innlandetkiro.bestille.no/OnCust2/#!/booking"
            target="_blank"
            color="accent"
            class="text-none pt-5 pb-5 pl-5 pr-5 mt-6"
            rounded
            outlined
          >
            <span>Bestill kiropraktor time Moelv</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="auto">
      <v-btn
        href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
        target="_blank"
        color="accent"
        class="text-none pt-6 pb-6 pl-6 pr-6"
        rounded
      >
        <!-- <span class="mr-2">Bestill time</span> -->
        <span class="font-weight-regular mr-1">Bestill time</span>
        <span class="font-weight-bold">Gjøvik</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-col>
  </v-row>
</template>
