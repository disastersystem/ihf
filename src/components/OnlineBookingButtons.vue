<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-row class="ma-0 pa-0" justify="center">
        <v-col cols="auto" class="ma-0 pa-0">
          <v-btn
            href="https://innlandethelse.bestille.no/OnCust2/#!/booking"
            target="_blank"
            color="accent"
            class="booking-btn moelv-btn text-none pt-6 pb-6 pl-6 pr-6"
            rounded
          >
            <span class="font-weight-regular mr-1">Bestill time</span>
            <span class="font-weight-bold">Moelv</span>
          </v-btn>
          <p class="body-1 mt-2 pl-8">
            Tlf: 951 888 73
          </p>
          <!-- <p style="max-width: 200px;">
            <strong>NB! Klinikken i Moelv er stengt til og med 1 juni!<br>Gjøvik klinikken er åpen!</strong>
            <v-tooltip top style="background: red;">
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <svg style="width:22px;height:22px" viewBox="0 0 24 24">
                    <path fill="#999" d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
                  </svg>
                </v-btn>
              </template>
              <div class="pl-2 pr-2 pt-3 pb-3 body-1" style="width: 400px;">
                Ringsaker kommune setter inn særlig høyt tiltaksnivå<br>
                Som følge av det pågående utbruddet i regionen har kommuneoverlegene og kommunenes kriseledelse i Stange,
                Hamar, Løten og Ringsaker besluttet å innføre smitteverntiltak på et særlig høyt tiltaksnivå.
                Tiltakene varer i første omgang til og med 1. juni.
              </div>
            </v-tooltip>
          </p> -->
        </v-col>
      </v-row>
      <!-- <v-row class="ma-0 pa-0" justify="center">
        <v-col cols="auto" class="ma-0 pa-0">
          <v-btn
            href="https://innlandetkiro.bestille.no/OnCust2/#!/booking"
            target="_blank"
            color="accent"
            class="booking-btn kiro-btn text-none pt-5 pb-5 pl-5 pr-5 mt-6"
            rounded
            outlined
          >
            <span>Bestill kiropraktor time Moelv</span>
          </v-btn>
          <p class="body-1 mt-2 pl-12 ml-6">
            Tlf: 951 888 73
          </p>
        </v-col>
      </v-row> -->
    </v-col>

    <v-col cols="auto">
      <v-btn
        href="https://innlandetgjovik.bestille.no/OnCust2/#!/booking"
        target="_blank"
        color="accent"
        class="booking-btn gjovik-btn text-none pt-6 pb-6 pl-6 pr-6"
        rounded
      >
        <span class="font-weight-regular mr-1">Bestill time</span>
        <span class="font-weight-bold">Gjøvik</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <p class="body-1 mt-2 pl-8">
        Tlf: 973 488 73
      </p>
    </v-col>
  </v-row>
</template>
