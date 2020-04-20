<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>
    {{ animalsCount }}
    {{ getAllCats.length }}
    <button class="btn btn-primary"
      @click="togglePetForm"
    >
      Add New Pet
    </button>
    <form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="exampInputGroup1" label="Pet's name" label-for="exampInputGroup1">
        <b-form-input id="exampleInput1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter Name"
        />
      </b-form-group>

      <b-form-group id="exampInputGroup2" label="Species" label-for="exampInputGroup2">
        <b-form-select id="exampInput2"
          :options="['cats', 'dogs']"
          required
          v-model="formData.species"
          placeholder="Choose Species"
        />
      </b-form-group>

      <b-form-group id="exampInputGroup3" label="Pet's age" label-for="exampInputGroup3">
        <b-form-input id="exampleInput3"
          type="text"
          v-model="formData.age"
          required
          placeholder="Enter age"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: ''
      }
    }
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit(event) {
      // event.preventDefault()
      const { species, name, age } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      // console.log(payload)
      this.addPet(payload)

      // reset the form after submit
      this.formData = {
        name: '',
        age: 0,
        species: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  }
}
</script>
