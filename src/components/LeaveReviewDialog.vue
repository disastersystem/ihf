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
        color="secondary"
        dark
        class="text-none pt-6 pb-6 pl-6 pr-6"
        rounded
      >
        <!-- <span>Skriv en anmeldelse</span> -->
        Skriv pasienterfaring
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="font-weight-bold pt-6">Fortell oss om din erfaring</v-card-title>
      <v-card-text class="pt-6">
        <v-text-field
          label="E-post"
          v-model="mail"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          label="Navn"
          v-model="name"
          outlined
          dense
        ></v-text-field>

        <v-select
          :items="[
            'Spedbarn', '2-4 år', '5-9 år', '10-14 år', '15-19 år', '20-29 år',
            '30-39 år', '40-49 år', '50-59 år', '60-69 år', 'Over 70 år'
          ]"
          label="Alder"
          v-model="age"
          outlined
          dense
        ></v-select>

        <!-- <v-select
          :items="[
            'Januar',
            'Februar',
            'Mars',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Desember'
          ]"
          label="Behandlet når"
          v-model="when"
          outlined
          dense
        ></v-select> -->

        <v-select
          :items="[
            'Amalie Øvergaard',
            'Monica Skjønsberg',
            'Lene Moe Sognar',
            'Elin Fossbråten Næsse',
            'Ingvild Midthaug',
            'Gro Visdal',
            'Gry Merete Håkensveen',
            'Helge Afseth',
            'Linda Wold Martinsen',
            'Ingrid Lium Gillund'
          ]"
          label="Terapaut"
          v-model="terapaut"
          outlined
          dense
        ></v-select>

        <v-textarea
          outlined
          label="Din anmeldelse"
          v-model="review"
        ></v-textarea>

        <v-checkbox
          v-model="accepted"
          class="mt-0"
          :label="`Jeg aksepterer at pasienthistorien legges ut på innlandethelseogfysioterapi.no`"
        ></v-checkbox>

        <div class="d-flex justify-center">
          <!-- <v-spacer></v-spacer> -->
          <v-btn
            :disabled="accepted === false || name === '' || review === ''"
            :loading="loading"
            @click="send()"
            color="secondary"
            class="text-none pa-4 pl-6 pr-6 mt-4"
            style="color: #fff;"
            rounded
          >
           Send
          </v-btn>
        </div>
        <div class="d-flex justify-center mt-4">
          <p style="color: green;">{{ successMessage }}</p>
          <p style="color: red;">{{ errorMessage }}</p>
        </div>
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
export default {
  data () {
    return {
      dialog: false,
      loading: false,
      errorMessage: '',
      successMessage: '',

      name: '',
      age: '',
      when: '',
      mail: '',
      terapaut: '',
      review: '',

      accepted: false
    }
  },

  methods: {
    async send () {
      this.loading = true

      var formData = new FormData()
      formData.append('navn', this.name)
      formData.append('age', this.age)
      formData.append('when', this.when)
      formData.append('email', this.mail)
      formData.append('terapaut', this.terapaut)
      formData.append('content', this.review)

      const rawResponse = await fetch('https://innlandethelseogfysioterapi.no/mail/mailer.php', {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: formData
      })
      const data = await rawResponse.json()

      if (data.success) {
        this.successMessage = data.success
      }

      if (data.error) {
        this.errorMessage = data.error
      }

      this.loading = false
    }
  }
}
</script>

<style>
  .v-input--selection-controls__input input[role=checkbox] {
    opacity: 1 !important;
  }
</style>
