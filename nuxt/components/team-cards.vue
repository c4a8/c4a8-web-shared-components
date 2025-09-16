<template>
  <div v-if="teamCards">
    <div class="team-cards container space-2">
      <div class="row mx-n2 mb-5">
        <team-cards-item v-for="(item, index) in teamCards.items" :key="index" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-cards',
  props: {
    teamCards: {
      type: Object,
      required: true,
    },
  },
};
</script>
