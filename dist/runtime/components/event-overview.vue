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
                  <event
                    :key="event.url"
                    v-bind="updatedEvent(event)"
                    :bgColor="bgColor"
                    :color="color"
                    :timeColor="timeColor"
                  />
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
    bgColor: String,
    color: String,
    timeColor: String,
  },
};
</script>
<style scoped>
.event-overview {
  --event-overview-vertical-padding: 1.5rem;
  --event-overview-margin-bottom: 1.5rem;
  --event-overview-more-color: var(--color-copy);
  --event-overview-more-background: var(--color-copy-light);
  display: flex;
  flex-direction: column;
  padding-top: var(--event-overview-vertical-padding);
  padding-bottom: var(--event-overview-vertical-padding);
  margin-bottom: 2.5rem;
}
@media (min-width: 992px) {
  .event-overview {
    --event-overview-vertical-padding: spacing(12);
  }
}
.event-overview [data-utility-animation-step][data-utility-animation-step] {
  --utility-animation-distance: 15%;
}
.event-overview [data-utility-animation-step][data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 200ms + 0ms);
  animation-duration: 0.8s;
}
.event-overview.event-overview--overlap {
  --event-overview-vertical-padding: 0;
  z-index: 170;
  position: relative;
  margin-top: -2.5rem;
}
.event-overview.event-overview--overlap .event-overview__headline {
  display: none;
}
@media (min-width: 992px) {
  .event-overview.event-overview--overlap {
    margin-top: -7.5rem;
  }
}
.event-overview .event-overview__headline {
  margin-bottom: 1.5rem;
}

.event-overview__item {
  opacity: 1;
  height: auto;
  margin-bottom: var(--event-overview-margin-bottom);
  transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out;
}
.event-overview__item:not(.is-visible) {
  visibility: collapse;
  opacity: 0;
  height: 0;
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
  border-width: 0;
  pointer-events: none;
}

.event-overview__more {
  cursor: pointer;
  border: 2px solid var(--event-overview-more-color);
  color: var(--event-overview-more-color);
  background-color: var(--event-overview-more-background);
  text-align: center;
  padding: 0.75rem;
  margin-top: 1.5rem;
  align-self: center;
  width: 100%;
}
.event-overview__more:hover {
  --event-overview-more-color: var(--color-copy-light);
  --event-overview-more-background: var(--color-copy);
}
@media (min-width: 992px) {
  .event-overview__more {
    width: 60%;
  }
}
</style>
