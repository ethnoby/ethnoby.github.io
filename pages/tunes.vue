<template>
  <v-container fluid class="songs">
    <h1>Найгрышы</h1>
    <v-chip-group>
      <v-chip class="ma-2" close>
        Бяседныя песні
      </v-chip>
      <v-chip class="ma-2" close>
        Калядыня песні
      </v-chip>
      <v-chip class="ma-2" close>
        Веснавыя песні
      </v-chip>
    </v-chip-group>

    <v-list>
      <template v-for="(item, i) in items">
        <v-list-item
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>mdi-play</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.location }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="100+i" />
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      items: [
        { title: 'Зазвінела пчолачка (жніво)', to: '/', location: 'в. Любоўшы, Вілейскі раён' },
        { title: 'Жыцічка йірывоя, полічка палявоя', to: '/', location: 'аг. Горы, Краснапольскі раён' },
        { title: 'І чаго сялязень (купальская)', to: '/', location: 'в. Заазер’е, Вілейскі раён' },
        { title: 'Ой па вуліцы карагод ваджу', to: '/', location: 'в. Гаўлі, Буда-Кашалёўскі раён' },
        { title: 'Зазвінела пчолачка (жніво)', to: '/', location: 'в. Любоўшы, Вілейскі раён' },
        { title: 'Жыцічка йірывоя, полічка палявоя', to: '/', location: 'аг. Горы, Краснапольскі раён' },
        { title: 'І чаго сялязень (купальская)', to: '/', location: 'в. Заазер’е, Вілейскі раён' },
        { title: 'Ой па вуліцы карагод ваджу', to: '/', location: 'в. Гаўлі, Буда-Кашалёўскі раён' },
        { title: 'Зазвінела пчолачка (жніво)', to: '/', location: 'в. Любоўшы, Вілейскі раён' },
        { title: 'Жыцічка йірывоя, полічка палявоя', to: '/', location: 'аг. Горы, Краснапольскі раён' },
        { title: 'І чаго сялязень (купальская)', to: '/', location: 'в. Заазер’е, Вілейскі раён' },
        { title: 'Ой па вуліцы карагод ваджу', to: '/', location: 'в. Гаўлі, Буда-Кашалёўскі раён' }
      ]
    }
  }
}
</script>
