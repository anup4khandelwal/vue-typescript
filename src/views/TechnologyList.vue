<template>
  <h1>Technologies</h1>
  <div class="technologies">
    <TechnologyCard
      v-for="technology in technology"
      :key="technology.id"
      :technology="technology"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TechnologyItem } from '../types'

import TechnologyCard from '../components/TechnologyCard.vue'
import TechnologyService from '../services/TechnologyService'

export default defineComponent({
  name: 'TechnologyList',
  components: {
    TechnologyCard
  },
  data() {
    return {
      technology: [] as TechnologyItem[]
    }
  },
  created() {
    TechnologyService.getTechnologys()
      .then(response => {
        this.technology = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
})
</script>

<style scoped>
.technologies {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
