<template>
  <wrapper :class="classList" ref="root">
    <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
    <transition-group name="event-overview__item">
      <SharedContentList :data-list="eventsValue" :query="query" v-slot="{ list, strategy }" :key="0">
        <markdown-files :list="list" v-slot="{ files }" :sort="sort" :strategy="strategy" :limit="maxLimitValue">
          <template v-if="updateFiles(files)">
            <template v-for="(event, index) in files" :key="index">
              <div :class="{ 'is-visible': isVisible(index), 'event-overview__item': true }">
                <div
                  class="fade-in-bottom"
                  data-utility-animation-step="1"
                  :style="{ '--utility-animation-index': index + 1 }"
                >
                  <event :key="event.url" v-bind="updatedEvent(event)" />
                </div>
              </div>
            </template>
          </template>
        </markdown-files>
      </SharedContentList>
    </transition-group>

    <div
      class="event-overview__more font-size-1 bold fade-in-bottom"
      v-show="hasMore"
      @click="handleShowMore"
      data-utility-animation-step="1"
      :style="{ '--utility-animation-index': lastIndex }"
    >
      {{ $t('moreEvents') }}
    </div>
  </wrapper>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'event-overview',
  data() {
    return {
      translationData: null,
      defaultLimit: 3,
      maxLimitDefault: 6,
      showMore: false,
      filesValue: [],
    };
  },
  computed: {
    classList() {
      return [
        'event-overview has-no-row is-component utility-animation vue-component',
        Tools.isTrue(this.overlap) ? 'event-overview--overlap' : null,
      ];
    },
    lastIndex() {
      const radix = 10;

      return parseInt(this.limitValue, radix) + 1;
    },
    limitValue() {
      return this.limit ? this.limit : this.defaultLimit;
    },
    maxLimitValue() {
      return this.maxLimit > 0 ? this.maxLimit : this.maxLimitDefault;
    },
    eventsValue() {
      if (!this.events) return [];

      return this.events.slice(0, this.maxLimitValue) || [];
    },
    hasMore() {
      return this.showMore ? false : this.filesValue.length > this.limitValue;
    },
    query() {
      let query = {};

      if (this.order && Array.isArray(this.order)) {
        query.where = {
          eventid: { IN: this.order },
        };
      }

      query.path = '/events';

      return query;
    },
    sort() {
      return this.sortBy || { moment: 1 };
    },
  },
  mounted() {
    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    updatedEvent(event) {
      if (event.cta) {
        event.url = event.cta.href;
        event.external = event.cta.external || false;
      } else {
        event.external = false;
      }

      return event;
    },
    isVisible(index) {
      return this.showMore || index + 1 <= this.limitValue;
    },
    handleShowMore() {
      if (this.moreUrl) document.location.href = this.moreUrl;

      this.showMore = true;
    },
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    events: Array,
    headline: String,
    headlineLevel: String,
    overlap: Boolean,
    limit: Number,
    maxLimit: Number,
    moreUrl: String,
    order: Array,
    sortBy: Object,
  },
};
</script>
