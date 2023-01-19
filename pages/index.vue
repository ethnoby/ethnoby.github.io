<template>
  <v-container fluid>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :key="i"
        :src="item"
      />
    </v-carousel>
    <div class="cards d-flex flex-wrap align-start align-self-start">
      <v-skeleton-loader
        v-for="i in 20"
        :key="i"
        class="ma-2"
        width="220"
        type="card"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    model: 0,
    carouselItems: [
      'https://picsum.photos/750/250',
      'https://picsum.photos/800/250',
      'https://picsum.photos/801/250'
    ]
  })
}
</script>
