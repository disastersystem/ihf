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
