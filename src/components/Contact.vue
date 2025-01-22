<template>
  <div style="color: #C6EAFF;" class="pa-sm-6 pa-md-12"> <!-- background: #F1EDEE;  -->
    <v-row justify="center" class="mb-8">
      <v-col cols="auto">
        <!-- <h2 class="display-1 mb-10" style="color: #E8F6FF;">Kontakt oss</h2> -->

        <div style="display: flex;">
          <div class="mr-2">
            <a href="https://www.facebook.com/innlandethelseogfysio/" target="_blank" style="text-decoration: none; margin-left: 0; padding-left: 0;">
              <!-- <v-icon large color="rgb(66, 103, 178)">mdi-facebook-box</v-icon> -->
              <img src="@/assets/facebook.svg" alt="Facebook link" style="width: 35px; margin-left: 5px;">
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/innlandethelseogfysioterapi" target="_blank" style="text-decoration: none; margin-left: 0; padding-left: 0;">
              <!-- <v-icon large color="rgb(66, 103, 178)">mdi-facebook-box</v-icon> -->
              <img src="@/assets/insta.png" alt="Instagram link" style="width: 35px; margin-left: 5px;">
            </a>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="justify-center" justify-center>
      <v-col cols="auto" class="pr-8 pb-12">
        <div class="mb-6">
          <h3 class="text-h5">Avd Moelv</h3>
        </div>
        <div style="display: flex;">
          <div class="mr-3">
            <!-- <img src="mdi-email-outline"/> -->
            <!-- <v-icon>mdi-email-outline</v-icon> -->
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
          </div>
          <div class="overflow-wrap">
            <a href="mailto:post@innlandethelseogfysioterapi.no" class="overflow-wrap" style="color: #EDB69E; text-decoration: underline;">
              post@innlandethelseogfysioterapi.no
            </a>
          </div>
        </div>

        <div class="mb-8 mt-8">
          <div class="mt-3" style="display: flex;">
            <div class="mr-3">
              <!-- <img src="phone.svg"/> -->
              <!-- <v-icon>mdi-cellphone-iphone</v-icon> -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
            </div>
            <div>Tlf Moelv: 951 888 73
              <!-- <br>
              <p style="max-width: 200px;">
                <strong>NB! Klinikken i Moelv er stengt til og med 1 juni! Gjøvik klinikken er åpen!</strong>
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
                    Tiltakene varer i første omgang fram til 1. juni.
                  </div>
                </v-tooltip>
              </p> -->
            </div>
          </div>

          <div class="mt-3" style="display: flex;">
            <div class="mr-3">
              <!-- <img src="location.svg"/> -->
              <!-- <v-icon>mdi-map-marker</v-icon> -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            </div>
            <div>Møllergata 3A<br>2390 Moelv</div>
          </div>
        </div>

        <div class="mt-3" style="display: flex;">
          <div style="width: 20px; height: 2px;" class="mr-3"></div>
          <div>
            <div><b>Åpningstider</b></div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Mandag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Tirsdag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Onsdag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Torsdag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Fredag: </div>
              <div>8-15.30</div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="auto" class="
        pl-sm-0 pl-md-0 pl-lg-12 pl-xl-12
      ">
        <div class="mb-6">
          <h3 class="text-h5">Avd Gjøvik</h3>
        </div>

        <div style="display: flex;">
          <div class="mr-3">
            <!-- <img src="mdi-email-outline"/> -->
            <!-- <v-icon>mdi-email-outline</v-icon> -->
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
          </div>
          <div class="overflow-wrap">
            <a href="mailto:post@innlandethelseogfysioterapi.no" class="overflow-wrap" style="color: #EDB69E; text-decoration: underline;">
              post@innlandethelseogfysioterapi.no
            </a>
          </div>
        </div>

        <div class="mb-8 mt-8">
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
          <div class="mt-3" style="display: flex;">
            <div class="mr-3">
              <!-- <img src="location.svg"/> -->
              <!-- <v-icon>mdi-map-marker</v-icon> -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            </div>
            <div>Trondhjemsvegen 10<br>2821 Gjøvik</div>
          </div>
        </div>

        <div class="mt-3" style="display: flex;">
          <div style="width: 20px; height: 2px;" class="mr-3"></div>
          <div>
            <div><b>Åpningstider</b></div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Mandag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Tirsdag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Onsdag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Torsdag: </div>
              <div>8-15.30</div>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1 mr-3">Fredag: </div>
              <div>8-15.30</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
