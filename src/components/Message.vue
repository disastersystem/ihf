<template>
  <v-container style="line-height: 1.8em; max-width: 900px; margin: 0 auto;">
    <!-- <v-navigation-drawer
      v-model="drawer"
      color="white"
      :right="true"
      absolute
      width="700"
      height="100vh"
    > -->
    <div class="pa-12">
      <!-- <v-icon @click="drawer = false">highlight_off</v-icon> -->
      <h2 class="mb-6">Klinikken i Moelv er stengt frem til 1 juni!</h2>

      <h4 class="mb-2">Ringsaker kommune setter inn særlig høyt tiltaksnivå</h4>
      <!-- <p>Ringsaker kommune setter inn særlig høyt tiltaksnivå</p> -->

      <p>
        Som følge av det pågående utbruddet i regionen har kommuneoverlegene og kommunenes kriseledelse i Stange,
        Hamar, Løten og Ringsaker besluttet å innføre smitteverntiltak på et særlig høyt tiltaksnivå.
        Tiltakene varer i første omgang fram til 1. juni.
      </p>
    </div>
    <!-- </v-navigation-drawer> -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: true
    }
  }
}
</script>
