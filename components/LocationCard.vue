<template>
  <v-card v-if="item.location">
    <v-card-text v-if="item.location" class="text--secondary">
      <div>Месца паходжання</div>
      <div class="text--primary">
        {{ item.location[0] }}
      </div>
      <!-- <div v-if="checkGeoArray" class="text--secondary">
        {{ item.geo }}
      </div> -->
    </v-card-text>

    <div v-if="checkGeoArray" id="map-wrap" style="height: 300px;">
      <client-only>
        <l-map :zoom="6" :center="item.geo">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          <l-marker :lat-lng="item.geo" />
        </l-map>
      </client-only>
    </div>

    <!-- Map as image  -->
    <!-- <v-img
      v-if="item.geo"
      :src="`https://maps.googleapis.com/maps/api/staticmap?\
        zoom=6\
        &scale=2\
        &size=600x400\
        &language=be\
        &center=Minsk\
        &markers=size:tiny%7Ccolor:0x8d1802%7C${ item.geo }
        &key=AIzaSyBRXbNJRwZdkuDuGH3ES3aBbPkznjNB9c0\
        &style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.country%7Cvisibility:on&style=feature:administrative.country%7Celement:geometry%7Ccolor:0xbe7c7e%7Cvisibility:on&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.locality%7Celement:geometry%7Cvisibility:on&style=feature:administrative.locality%7Celement:labels%7Cvisibility:on&style=feature:administrative.province%7Celement:geometry%7Ccolor:0xbe7c7e%7Cvisibility:on%7Cweight:2&style=feature:landscape.natural%7Celement:geometry%7Cvisibility:on&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&key=AIzaSyBRXbNJRwZdkuDuGH3ES3aBbPkznjNB9c0
        `
      "
    /> -->
  </v-card>
</template>

<script>
export default {
  name: 'LocationCard',
  props: {
    item: Object
  },

  computed: {
    checkGeoArray () {
      return this.item.geo !== null && ![0, 0].every(v => this.item.geo.includes(v))
    }
  }
}
</script>
