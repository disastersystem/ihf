<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="dialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="accent"
        class="text-none"
        rounded
      >
        <svg style="width:22px;height:22px; opacity: 0.8;" class="mr-2" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
        </svg>
        <span>Bestill time</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <OnlineBookingButtons class="pt-12"/>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="dialog = false"
        >
          Lukk
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import OnlineBookingButtons from '@/components/OnlineBookingButtons'

export default {
  components: {
    OnlineBookingButtons
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
