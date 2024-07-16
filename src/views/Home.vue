<template>
  <main>
    <Carousel :images />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Carousel from '@/ui/Carousel.vue'

const images = ref([
  'https://placehold.co/600x400?text=1',
  'https://placehold.co/600x400?text=2',
  'https://placehold.co/600x400?text=3',
  'https://placehold.co/600x400?text=4',
  'https://placehold.co/600x400?text=5'
])
</script>
