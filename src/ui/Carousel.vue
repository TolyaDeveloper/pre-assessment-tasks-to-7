<template>
  <div class="carousel" ref="carouselTemplateRef">
    <div v-for="(image, index) in images" :key="index" class="carousel-item" :data-src="image" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  images: string[]
}>()

const carouselTemplateRef = ref<HTMLElement | null>(null)

function handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target as HTMLDivElement
      image.style.backgroundImage = `url(${image.dataset.src})`

      observer.unobserve(entry.target)
    }
  })
}

function initializeCarouselObserver() {
  const observer = new IntersectionObserver(handleIntersection, {
    root: carouselTemplateRef.value,
    rootMargin: '10px'
  })

  // one image in front will be preloaded. It's better for UX in my opinion

  carouselTemplateRef.value?.querySelectorAll('.carousel-item').forEach(carouselItem => {
    observer.observe(carouselItem)
  })
}

onMounted(() => {
  initializeCarouselObserver()
})
</script>

<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

.carousel-item {
  min-width: 100%;
  max-width: 600px;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
