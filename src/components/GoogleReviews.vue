<template>
  <v-card
    class="mx-auto"
    max-width="344"
    style="min-height: 80px; width: 320px; position: fixed; bottom: 30px; right: 30px; z-index: 2; border-radius: 10px;"
    @click.prevent="_blank"
    v-if="show === true && hide === false"
  >
    <div style="position: absolute; top: 0; right: 0; z-index: 3;" class="pa-4">
      <!-- <v-icon @click.prevent="hide = true" small class="pa-4">
        mdi-close
      </v-icon> -->
      <svg @click.prevent="hide = true" style="width:18px;height:18px" viewBox="0 0 24 24">
        <path fill="#777" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    </div>
    <v-card-text>
      <!-- <transition name="fade"> -->
      <v-carousel
        :continuous="true"
        :cycle="true"
        :interval="4000"
        :show-arrows="false"
        show-arrows-on-hover
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="60"
      >
        <v-carousel-item
          v-for="(review, i) in reviews.reviews"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet light height="100%" tile>
            <div class="d-flex">
              <!-- <a href="https://www.google.com/maps/place/Innlandet+helse+og+fysioterapi/@60.9293545,10.7016516,17z/data=!4m7!3m6!1s0x466a7821156874a3:0xefc837dace3aa5bd!8m2!3d60.9293545!4d10.7038403!9m1!1b1">
                hh
              </a> -->
              <div class="pr-4 pt-1">
                <v-img v-if="review.type === 'google'" src="@/assets/google-logo.svg" style="width: 30px;"></v-img>
                <v-img
                  v-if="review.type === 'facebook.review' || review.type === 'facebook.recommends'"
                  src="@/assets/facebook-logo.svg" style="width: 30px;"
                ></v-img>
              </div>
              <div>
                <div class="pl-1">{{ review.author_name }}</div>
                <div class="d-flex align-center" v-if="review.type === 'google'">
                  <v-rating
                    v-model="review.rating"
                    dense
                    size="18"
                    half-increments
                    color="rgb(251, 188, 5)"
                  >
                    <template v-slot:item="props">
                      <svg v-if="props.isFilled" style="width:18px;height:18px;margin-bottom:-5px;" viewBox="0 0 24 24">
                        <path fill="rgb(251, 188, 5)" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      <svg v-if="props.isHalfFilled" style="width:18px;height:18px;margin-bottom:-5px;" viewBox="0 0 24 24">
                        <path fill="rgb(251, 188, 5)" d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                      </svg>
                      <svg v-if="!props.isFilled && !props.isHalfFilled" style="width:18px;height:18px;margin-bottom:-5px;" viewBox="0 0 24 24">
                        <path fill="rgb(251, 188, 5)" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                      </svg>
                    </template>
                  </v-rating>
                  <div class="grey--text caption mr-2 ml-1 mb-2 pl-1 pt-3">
                    {{ review.rating }} av 5 stjerner
                  </div>
                </div>

                <div class="d-flex align-center" v-if="review.type === 'facebook.recommends'">
                  <div class="grey--text caption mr-2 mb-2 pl-1 pt-3 d-flex align-center">
                    <v-img src="@/assets/thumb.svg" style="width: 20px;"></v-img>
                    <span class="ml-2">anbefaler</span>
                  </div>
                </div>

                <div class="d-flex align-center" v-if="review.type === 'facebook.review'">
                  <div class="grey--text caption mr-2 mb-2 pl-1 pt-3 d-flex align-center">
                    <v-img src="@/assets/review.png" style="width: 25px;"></v-img>
                    <span class="ml-2">5 stjerner</span>
                  </div>
                </div>

                <div class="text--primary pl-1">
                  <!-- {{ limitLength(review.text) }} -->
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <!-- </transition> -->
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      show: false,
      hide: false,

      reviews: {
        reviews: [
          {
            type: 'google',
            author_name: 'Marte Bergseth',
            author_url: 'https://www.google.com/maps/contrib/102651844660476963214/reviews',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kfEbutaiIBM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn71XBRLRoSYhZF1e70JkJnYdCp0w/s40-c0x00000000-cc-rp/photo.jpg',
            text: 'Flotte nye fine lokaler,  blide og hyggelige ansatte med mye forskjellig fagkunnskap! Ligger lett tilgjengelig når man ankommer med bil.',
            rating: 5,
            time: 1491144016,
            relative_time_description: 'a month ago'
          },
          {
            type: 'facebook.recommends',
            author_name: 'Stein R Johansen',
            author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
            text: '',
            rating: 5
          },
          // {
          //   type: 'facebook.review',
          //   author_name: 'Sandra Øvrås',
          //   author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
          //   text: '',
          //   rating: 5
          // },
          {
            type: 'google',
            author_name: 'Øyvind Humlen',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'google',
            author_name: 'Silje Cathrine Sigvathsen',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: '',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'facebook.recommends',
            author_name: 'Juliane Håkenåsen',
            author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
            text: '',
            rating: 5
          },
          {
            type: 'google',
            author_name: 'Christian Nordlien',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'facebook.recommends',
            author_name: 'Trine McPac Hoel',
            author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
            text: '',
            rating: 5
          },
          {
            type: 'facebook.recommends',
            author_name: 'Eli Rigmor Mæhlumshagen',
            author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
            text: '',
            rating: 5
          },
          {
            type: 'google',
            author_name: 'Kristine vanem',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'google',
            author_name: 'Anette Nicolaisen',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'google',
            author_name: 'Jonas Engholm',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          // {
          //   author_name: 'Gro Visdal',
          //   author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
          //   profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
          //   text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
          //   rating: 5,
          //   time: 1491150012,
          //   relative_time_description: 'a month ago'
          // },
          {
            type: 'google',
            author_name: 'Lena Ulven',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: 'Var på ferie og fikk snarlig hjelp for akutte nakkesmerter. Fikk time med en gang, og fikk veldig god hjelp! Anbefales!',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'facebook.recommends',
            author_name: 'Elin Kvikstadhagen',
            author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
            text: '',
            rating: 5
          },
          {
            type: 'google',
            author_name: 'Stefan F',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: '',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'google',
            author_name: 'Simon Huhtimo',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: '',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          // {
          //   type: 'facebook.review',
          //   author_name: 'Tine Iselin Løvhøiden',
          //   author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
          //   text: '',
          //   rating: 5
          // },
          // {
          //   type: 'facebook.review',
          //   author_name: 'Andreas Jacobsen',
          //   author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
          //   text: '',
          //   rating: 5
          // },
          // {
          //   type: 'facebook.review',
          //   author_name: 'May-Britt Larsen',
          //   author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
          //   text: '',
          //   rating: 5
          // },
          // {
          //   type: 'facebook.review',
          //   author_name: 'Simon Huhtimo',
          //   author_url: 'https://www.facebook.com/innlandethelseogfysio/reviews',
          //   text: '',
          //   rating: 5
          // },
          {
            type: 'google',
            author_name: 'Ane Sakshaug',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: '',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          },
          {
            type: 'google',
            author_name: 'Are Narten Hovde',
            author_url: 'https://www.google.com/maps/contrib/103528405088566813062/reviews/@60.9293545,10.7038403,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
            profile_photo_url: 'https://lh5.googleusercontent.com/-kDISVqhHnpo/AAAAAAAAAAI/AAAAAAAAAAA/MSBwxa2vb4g/w75-h75-p-rp-mo-br100/photo.jpg',
            text: '',
            rating: 5,
            time: 1491150012,
            relative_time_description: 'a month ago'
          }
        ],
        averageRating: 4,
        totalReviewCount: 30,
        nextPageToken: 'string'
      }
    }
  },

  created () {
    window.setInterval(() => {
      if (window.pageYOffset > 399) { // or 199?
        // clearInterval('show')
        this.show = true
      } else {
        // this.show = false
      }
    }, 1000)

    // const accountId = 'n45h34kj5hjkad'
    // const locationId = 'Moelv'

    // fetch(`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU&placeid=ChIJ_8uuaRjaQUYR3MPSedwXKrc`)
    // fetch('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ_8uuaRjaQUYR3MPSedwXKrc&fields=name,rating,formatted_phone_number&key=AIzaSyA3XoI6mFmPf-oUGScPxrl0HFP5OeRluxU')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  },

  methods: {
    /**
     * If the provided string is longer than 60 characters take the first 60
     * characters of the string and a add three dots (...) at the end,
     * otherwise return the original string.
     */
    limitLength (text) {
      text.trim()
      let string = (text.length > 60) ? text.substring(0, 60) + '...' : text
      return string
    },

    _blank () {
      const url = 'https://www.google.com/maps/place/Innlandet+helse+og+fysioterapi/@60.9293545,10.7016516,17z/data=!4m7!3m6!1s0x0:0xefc837dace3aa5bd!8m2!3d60.9293545!4d10.7038403!9m1!1b1'
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
