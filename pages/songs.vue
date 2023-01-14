<template>
  <div class="songs">
    <h1>Спіс песень</h1>
    <v-list>
      <template v-for="(item, i) in items">
        <v-list-item
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.location }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="i" />
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Зазвінела пчолачка (жніво)', to: 'IndexPage', location: 'в. Любоўшы, Вілейскі раён' },
        { title: 'Жыцічка йірывоя, полічка палявоя', to: 'IndexPage', location: 'аг. Горы, Краснапольскі раён' },
        { title: 'І чаго сялязень (купальская)', to: 'IndexPage', location: 'в. Заазер’е, Вілейскі раён' },
        { title: 'Ой па вуліцы карагод ваджу', to: 'IndexPage', location: 'в. Гаўлі, Буда-Кашалёўскі раён' },
        { title: 'Зазвінела пчолачка (жніво)', to: 'IndexPage', location: 'в. Любоўшы, Вілейскі раён' },
        { title: 'Жыцічка йірывоя, полічка палявоя', to: 'IndexPage', location: 'аг. Горы, Краснапольскі раён' },
        { title: 'І чаго сялязень (купальская)', to: 'IndexPage', location: 'в. Заазер’е, Вілейскі раён' },
        { title: 'Ой па вуліцы карагод ваджу', to: 'IndexPage', location: 'в. Гаўлі, Буда-Кашалёўскі раён' },
        { title: 'Зазвінела пчолачка (жніво)', to: 'IndexPage', location: 'в. Любоўшы, Вілейскі раён' },
        { title: 'Жыцічка йірывоя, полічка палявоя', to: 'IndexPage', location: 'аг. Горы, Краснапольскі раён' },
        { title: 'І чаго сялязень (купальская)', to: 'IndexPage', location: 'в. Заазер’е, Вілейскі раён' },
        { title: 'Ой па вуліцы карагод ваджу', to: 'IndexPage', location: 'в. Гаўлі, Буда-Кашалёўскі раён' }
      ]
    }
  }
}
</script>
