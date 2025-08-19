<template>
  <div :class="classList">
    <div class="container space-1 space-lg-3">
      <div class="row justify-content-md-end" v-if="location">
        <div class="col-md-6 col-lg-5">
          <div class="bg-white position-relative z-index-999 p-5 p-sm-7">
            <div class="mb-5">
              <span class="d-block font-size-2 text-dark text-lh-sm">{{ location?.office }},</span>
              <span class="d-block font-size-4 text-dark font-weight-bold text-lh-sm">{{ location?.city }}</span>
            </div>

            <template v-for="(entry, index) in entries" v-bind:key="index">
              <google-map-entry v-bind="entry" />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="position-md-absolute top-0 right-0 bottom-0 left-0">
      <div class="google-map__container min-h-300rem h-100 rounded-lg">
        <ClientOnly>
          <l-map
            ref="map"
            v-model:zoom="zoom"
            :options="leafletOptions"
            :center="center"
            :useGlobalLeaflet="false"
            class="min-h-300rem"
            v-if="loaded"
          >
            <l-tile-layer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"></l-tile-layer>
            <l-marker :lat-lng="center" :icon="markerIcon"
              ><l-popup>{{ location?.street }}<br />{{ location?.city }}</l-popup></l-marker
            >
          </l-map>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';

import Tools from '../utils/tools.js';

export default {
  tagName: 'google-map',
  components: { LMap, LTileLayer, LMarker, LPopup },
  data() {
    return {
      zoom: 13,
      loaded: false,
      icon: null,
    };
  },
  computed: {
    classList() {
      return ['google-map position-relative mx-3 mx-md-8 vue-component'];
    },
    center() {
      const defaultCenter = [50.10343087097074, 8.760059035466721];

      return this.location ? [this.location.coordinates[0], this.location.coordinates[1]] : defaultCenter;
    },
    markerIcon() {
      if (!this.icon) return;

      const iconSize = [50, 45];

      return this.icon({
        iconUrl: Tools.getAssetPath('svg/icons/map-pin.svg'),
        iconSize: iconSize,
      });
    },
    leafletOptions() {
      return {
        scrollWheelZoom: false,
        id: 'mapbox/streets-v11',
      };
    },
  },
  async beforeMount() {
    const { icon } = await import('leaflet/dist/leaflet-src.esm');

    this.icon = icon;
  },
  mounted() {
    this.loaded = true;
  },
  methods: {},
  props: {
    location: {
      default: null,
    },
    entries: {
      default: null,
    },
  },
};
</script>
