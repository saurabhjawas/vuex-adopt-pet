<template>
  <div>
    <PetTable species="cats" :pets="cats"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '../components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  computed: {
    ...mapState(['cats'])
    // cats () { return this.$store.state.cats }
  }
}
</script>
