<template>
  <router-link
    class="technology-link"
    :to="{ name: 'TechnologyDetails', params: { id: technology.id } }"
  >
    <div class="technology-card">
      <span>@{{ technology.time }} on {{ technology.date }}</span>
      <h4>{{ technology.title }}</h4>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TechnologyItem } from '../types'
export default defineComponent({
  props: {
    technology: {
      type: Object as PropType<TechnologyItem>,
      required: true
    }
  }
})
</script>

<style scoped>
.technology-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.technology-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.technology-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
