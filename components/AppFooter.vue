<template>
  <v-footer padless class="mt-4">
    <v-col
      class="text-left"
      cols="4"
    >
      &copy; {{ new Date().getFullYear() }} <strong>Ethnoby.org </strong>
    </v-col>
    <v-col class="text-right">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        icon
        :to="icon.url"
      >
        <v-icon size="24px">
          {{ icon.icon }}
        </v-icon>
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'mdi-facebook', url: 'htpps://' },
      { icon: 'mdi-linkedin', url: 'htpps://' }
    ]
  })
}
</script>
