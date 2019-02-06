<template>
  <div>
    <div style="padding-left:25%;padding-right:25%;padding-top:3%">
      <v-card flat>
      <v-snackbar
        v-model="snackbar"
        absolute
        top
        right
        color="success"
        >
        <span>Registration successful!</span>
        <v-icon dark>check_circle</v-icon>
      </v-snackbar>
      <v-form ref="form" @submit.prevent="submit" class="carw">
        <v-container grid-list-xl fluid>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                v-model="form.first"
                :rules="rules.name"
                color="purple darken-2"
                label="Base de datos"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                v-model="form.last"
                :rules="rules.name"
                color="blue darken-2"
                label="Usuario"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                v-model="bio"
                auto-grow
                box
                color="deep-purple"
                label="Bio"
                rows="1"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat @click="resetForm">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            type="submit"
          >Register</v-btn>
        </v-card-actions>
      </v-form>
      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="title">Terms</v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="purple"
              @click="terms = false"
            >Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="title">Conditions</v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="purple"
              @click="conditions = false"
            >Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
    </div>
    
  </div>
</template>

<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false
      })

      return {
        form: Object.assign({}, defaultForm),
        show1: false,
        animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
        conditions: false,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
        snackbar: false,
        terms: false,
        defaultForm,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.favoriteAnimal &&
          this.form.terms
        )
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>

<style>
    .carw{
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75); padding-left: 12px; padding-top:22px; padding-right: 12px; border-radius: 7px 
    }
</style>
