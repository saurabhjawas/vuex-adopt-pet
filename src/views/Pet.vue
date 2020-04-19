<template>
  <div>
    <h1>{{ pet.name }}({{ $route.params.species }})</h1>
    <p>Age: {{ pet.age }} years old</p>
    <p>Breed: {{ pet.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
    /*
    other way to get a particular state values. e.g. alternative to above statement would be as follows
    cats() {
      return this.$store.state.cats
    },
    dogs() {
      return this.$store.state.cats
    }
    */
  },
  mounted () {
    const species = this.$route.params.species
    const animals = this[species]
    // if this.$route.params.species -> 'dog', then animals -> this['dog'] -> this.dog -> the dog array
    this.pet = animals[this.$route.params.id]
  } /*,
  methods: {
    pet () {
      const animals = this[this.$route.params.species]
      // if this.$route.params.species -> 'dog', then animals -> this['dog'] -> this.dog -> the dog array
      return animals[this.$route.params.id]
    }
  } */
}
</script>
