<template>
  <div style="color: #666;" class="pa-sm-6 pa-md-12"> <!-- background: #F1EDEE;  -->
    <div>
      <h2 class="display-1 mb-10">Kontakt oss</h2>
    </div>
    <div style="display: flex;">
      <div class="mr-3">
        <!-- <img src="mdi-email-outline"/> -->
        <v-icon>mdi-email-outline</v-icon>
      </div>
      <div class="overflow-wrap">
        <a href="mailto:post@innlandethelseogfysioterapi.no" class="overflow-wrap" style="color: #2E86AB; text-decoration: underline;">
          post@innlandethelseogfysioterapi.no
        </a>
      </div>
    </div>

    <div class="mb-8 mt-8">
      <div class="mt-3" style="display: flex;">
        <div class="mr-3">
          <!-- <img src="phone.svg"/> -->
          <v-icon>mdi-cellphone-iphone</v-icon>
        </div>
        <div>Tlf Moelv: 951 888 73</div>
      </div>

      <div class="mt-3" style="display: flex;">
        <div class="mr-3">
          <!-- <img src="location.svg"/> -->
          <v-icon>mdi-map-marker</v-icon>
        </div>
        <div>Møllergata 3A<br>2390 Moelv</div>
      </div>
    </div>

    <div class="mb-8 mt-8">
      <div class="mt-3" style="display: flex;">
        <div class="mr-3">
          <!-- <img src="phone.svg"/> -->
          <v-icon>mdi-cellphone-iphone</v-icon>
        </div>
        <div>Tlf Gjøvik: 973 488 73</div>
      </div>
      <div class="mt-3" style="display: flex;">
        <div class="mr-3">
          <!-- <img src="location.svg"/> -->
          <v-icon>mdi-map-marker</v-icon>
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
          <div>8-16</div>
        </div>
        <div class="d-flex">
          <div class="flex-grow-1 mr-3">Tirsdag: </div>
          <div>8-20</div>
        </div>
        <div class="d-flex">
          <div class="flex-grow-1 mr-3">Onsdag: </div>
          <div>8-1730</div>
        </div>
        <div class="d-flex">
          <div class="flex-grow-1 mr-3">Torsdag: </div>
          <div>8-16</div>
        </div>
        <div class="d-flex">
          <div class="flex-grow-1 mr-3">Fredag: </div>
          <div>8-16</div>
        </div>
        <div class="d-flex">
          <div class="flex-grow-1 mr-3">Lørdag: </div>
          <div>10-14</div>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <div style="display: flex;">
        <div class="mr-3" style="width: 20px;"></div>
        <div><b>Org nr</b></div>
      </div>
      <div style="display: flex;">
        <div class="mr-3" style="width: 20px;"></div>
        <div>924 533 900</div>
      </div>
    </div>

    <div class="mt-12">
      <div style="display: flex;">
        <div class="mr-3" style="width: 16px;"></div>
        <div>
          <a href="https://www.facebook.com/innlandethelseogfysio/" target="_blank" style="text-decoration: none; margin-left: 0; padding-left: 0;">
            <!-- <v-icon large color="rgb(66, 103, 178)">mdi-facebook-box</v-icon> -->
            <img src="@/assets/facebook.svg" alt="Facebook link" style="width: 35px; margin-left: 5px;">
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12 pl-8">
      <a href="/personvern" class="overflow-wrap" style="color: #2E86AB; text-decoration: underline;">
        Personvernerklæring
      </a>
    </div>
  </div>
</template>
