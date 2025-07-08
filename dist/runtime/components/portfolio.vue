<template>
<div class="container space-2">
  <div display="flex" class="portfolio-items">
    <div v-for="item in items" v-if="items" style="width: 378px; left: 0px; top: 0px;">
      <a :href="item.href" v-if="item.href">
        <div class="overflow-hidden">
          <div class="zoom" style="transition: transform .2s;">
            <v-img
              :img="item.image"
              :cloudinary="item.cloudinary"
              :alt="item.alt" />
          </div>
        </div>
        <div class="p-4">
          <span class="d-block small text-body font-weight-bold text-cap" v-if="item.overline">{{ item.overline }}</span>
          <span class="d-block h3 mb-0" v-if="item.headline">{{ item.headline }}</span>
        </div>
      </a>
    </div>
  </div>
</div>
</template>
<style>
.zoom:hover {
  -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}

.portfolio-items {
    column-gap: 40px;
}
@media (min-width: 380px) {
    .portfolio-items {
        column-count: 1;
    }
}
@media (min-width: 480px) {
    .portfolio-items {
        column-count: 2;
    }
}
@media (min-width: 800px) {
    .portfolio-items {
        column-count: 3;
    }
}
@media (min-width: 1100px) {
    .portfolio-items {
        column-count: 3;
    }
}
</style>
<script>
export default {
  tagName: 'portfolio',
  props: {
    items: Array,
  }
};
</script>

