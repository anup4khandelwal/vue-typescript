<template>
  <div v-if="technology">
    <h1>{{ technology.title }}</h1>
    <p>
      {{ technology.time }} on {{ technology.date }} @ {{ technology.location }}
    </p>
    <p>{{ technology.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TechnologyItem } from '../types'
import TechnologyService from '../services/TechnologyService'
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      technology: {} as TechnologyItem
    }
  },
  created() {
    TechnologyService.getTechnology(this.id)
      .then(response => {
        this.technology = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
})
</script>
