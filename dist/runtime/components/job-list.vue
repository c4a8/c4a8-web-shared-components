<template>
  <div
    :class="classList"
    :data-id="clientName"
    :data-max-items="maxItems"
    :data-detail-url="detailUrl"
    :data-job-id="jobId"
    :data-tags="tags"
    :data-lang="lang"
    :data-team="team"
    :data-api-url="apiUrl"
    ref="job-list"
  >
    <div class="row">
      <div class="job-list__header col-lg-12">
        <headline :text="headlineText" :level="headlineLevelValue" :classes="headlineClassValue" />
      </div>
      <div v-if="sublineText !== ''" class="job-list__meta col-lg-7">
        <div class="job-list__subline">{{ sublineText }}</div>
      </div>
      <div class="col-lg-12">
        <div class="job-list__entries">
          <div class="job-list__message h3-font-size" v-if="isEmpty">
            <div v-if="tagList.includes('young_professionals')">{{ $t('jobListYoungProfessionalsEmpty') }}</div>
            <div v-else>{{ $t('jobListEmpty') }}</div>
          </div>
          <template v-for="entry in entries" :key="entry?.id">
            <job-list-entry
              v-if="entry"
              :title="entry?.title"
              :gender="entry?.gender"
              :city="entry?.city"
              :team="entry?.team"
              :position-type="entry?.positionType"
              :is-invisible="entry?.isInvisible"
              :id="entry?.id"
              @click="handleEntryClick"
            />
          </template>
        </div>
        <div :class="expandClassList" @click="handleExpand">{{ expandText }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import JobListings from '../utils/job-listings.js';
import Loading from '../utils/loading.js';
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import StickyScroller from '../utils/sticky-scroller.js';

export default {
  tagName: 'job-list',
  computed: {
    classList() {
      return [
        'job-list container',
        `${this.hasLoading ? State.LOADING : ''}`,
        `${this.hasLoader ? 'loading' : ''}`,
        `${Tools.isTrue(this.sticky) === true ? StickyScroller.rootSelector.substring(1) : ''}`,
        'vue-component',
      ];
    },
    expandClassList() {
      return [
        'job-list__expand-button',
        `${!this.hasExpand ? State.HIDDEN : ''}`,
        `${!this.isExpandVisible ? State.INVISIBLE : ''}`,
      ];
    },
    headlineClassValue() {
      return `job-list__headline ${this.headlineClasses}`;
    },
    headlineLevelValue() {
      return `${this.headlineLevel ? this.headlineLevel : 'h2'}`;
    },
    tagList() {
      return this.tags ? this.tags.split(',') : undefined;
    },
  },
  mounted() {
    this.api = new JobListings({
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.clientName,
    });

    if (this.lang) {
      this.api.setLang(this.lang);
    }

    if (this.tagList) {
      this.api.setFilter({ tags: this.tagList });
    }

    this.loading = new Loading(this.$refs['job-list'], () => {
      this.hasLoader = true;
    });

    this.loading.on(true);

    this.init();
  },
  methods: {
    init() {
      const hasLanguageLoader = window.i18n?.loader;
      const method = this.jobId ? this.loadJob : this.loadJobs;

      if (hasLanguageLoader) {
        hasLanguageLoader.then(() => {
          this.translationData = window.i18n?.getTranslationData(['jobListEmpty']);

          method.bind(this)();
        });
      } else {
        method();
      }
    },
    handleExpand() {
      this.isExpandVisible = false;
      this.hasExpand = false;

      this.showJobs();
    },
    showJobs() {
      this.entries.forEach((entry) => {
        entry.isInvisible = false;
      });
    },
    loadJobData() {
      const url = `${this.api.jobDataUrl}jobs.json`;

      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.jobData = data;
        })
        .catch((error) => {
          console.error('Job-list Local Job Data Error:', error);
        });
    },
    loadJob(multiple) {
      const method = !multiple ? 'getOpening' : 'getAll';

      this.promises.push(this.loadJobData());

      this.api[method]()
        .then((response) => response.json())
        .then((data) => {
          this.handleJobs(data);
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    },
    loadJobs() {
      this.loadJob(true);
    },
    handleJobs(data) {
      Tools.sleep(this.sleepDelay).then(() => {
        let localData = data;

        if (typeof localData.objects !== 'object') {
          const newObject = {
            objects: [localData],
            meta: localData?.meta,
          };

          localData = newObject;
        }

        this.data = localData;

        if (!this.data.meta) return this.loading.off();

        Promise.all(this.promises)
          .then(() => {
            const orderedList = this.api.getOrderedList(localData.objects);

            this.filterJobs(data, orderedList);
          })
          .catch((error) => {
            console.error('Job-List Promises.all ~ error', error);
          });
      });
    },
    filterJobs(data, orderedList) {
      this.data.objects = orderedList;

      const gender = this.$t('gender');

      const filteredList = [];

      let counter = 0;

      for (let i = 0; i < orderedList?.length; i++) {
        const entry = orderedList[i];
        const { city } = entry?.location || {};

        if (!entry) continue;

        const { title, position_type, team } = entry;

        const entryData = {
          city,
          title,
          gender,
          team,
          positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
          isInvisible: this.maxItems > 0 && counter > this.maxItems - 1 ? true : false,
          id: i,
        };

        if (this.isAvailableEntry(entry)) {
          filteredList[i] = entryData;
          counter++;
        }
      }

      this.entries = filteredList;

      if (this.entries.length === 0) {
        this.isEmpty = true;
      }

      if (this.maxItems > 0 && data.objects?.length > this.maxItems) {
        this.showExpandButton();
      }

      this.stopLoading();
    },
    showExpandButton() {
      this.hasExpand = true;

      setTimeout(() => {
        this.isExpandVisible = true;
      }, this.loadingDelay);
    },
    isAvailableEntry(data) {
      let result = true;

      if (data.tags.includes(this.api.hiddenTag)) return false;

      if (this.team) {
        const entryTeam = data.team?.toLowerCase();
        const filterTeam = this.team.toLowerCase();

        if (entryTeam === undefined || entryTeam?.indexOf(filterTeam) === -1) {
          result = false;
        }
      }

      return result;
    },
    stopLoading() {
      setTimeout(() => {
        this.loading.off(true, true);

        this.hasLoading = false;
      }, this.loadingDelay);
    },
    handleEntryClick(e) {
      const current = e.currentTarget;

      if (current && this.detailUrl) {
        const currentData = this.getData(current);
        // TODO load component in page and don't redirect

        const detailUrl = this.getDetailUrl(currentData);
        const url = Tools.generateUrl(currentData?.title, detailUrl, currentData?.id);

        document.location.href = url;
      }
    },
    getData(element) {
      let result = null;

      if (element && element.dataset.id && this.data?.objects) {
        result = this.data.objects[element.dataset.id];
      }

      return result;
    },
    getDetailUrl(data) {
      if (typeof this.detailUrl !== 'object') return this.detailUrl;

      const lang = this.api.getLangFromEntry(data);

      return this.detailUrl[lang] || this.detailUrl.default;
    },
  },
  data() {
    return {
      translationData: null,
      loadingDelay: 300,
      sleepDelay: 1300,
      loading: {},
      hasLoading: true,
      hasLoader: false,
      api: {},
      hasExpand: false,
      isExpandVisible: false,
      entries: [],
      jobData: {},
      promises: [],
      isEmpty: false,
    };
  },
  props: {
    clientName: String,
    maxItems: String,
    detailUrl: Object,
    jobId: String,
    tags: String,
    lang: String,
    team: String,
    apiUrl: String,
    headlineClasses: String,
    headlineLevel: String,
    headlineText: String,
    expandText: String,
    sublineText: String,
    sticky: {
      default: null,
    },
  },
};
</script>
<style>
.job-list.is-loading .job-list__message,
.job-list.is-loading .job-list__header,
.job-list.is-loading .job-list__meta,
.job-list.is-loading .job-list__entry {
  opacity: 0;
}

.job-list__header {
  margin-bottom: 1.5rem;
  margin-top: 3rem;
}
.job-list__header + .job-list__meta {
  margin-top: -1rem;
  margin-bottom: 1.5rem;
}
@media (min-width: 992px) {
  .job-list__header + .job-list__meta {
    margin-top: -2rem;
    margin-bottom: 2.5rem;
  }
}
@media (min-width: 992px) {
  .job-list__header {
    margin-bottom: 2.5rem;
    margin-top: 4rem;
  }
}

.job-list__header,
.job-list__meta {
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.2, 1);
}

.job-list__entry {
  border: 2px solid var(--color-border);
  padding: 2rem;
  opacity: 1;
  transition: opacity 1.3s cubic-bezier(0.19, 1, 0.2, 1);
  flex: 1 0 100%;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.job-list__entry .job-list__entry-title {
  text-decoration: none;
  background-image: linear-gradient(var(--color-white), var(--color-white));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 3px;
  transition: background-size 0.4s ease-in-out;
}
.job-list__entry:hover .job-list__entry-title {
  background-size: 100% 3px;
}
.job-list__entry:hover {
  background-color: var(--color-primary-accent);
  border-color: var(--color-primary-accent);
  color: var(--color-white);
}
@media (min-width: 992px) {
  .job-list__entry {
    flex: 0 0 calc(50% - 0.75rem);
  }
}

.job-list__entries {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (min-width: 992px) {
  .job-list__entries {
    gap: 0.75rem;
  }
}

.job-list__entry-content {
  margin-top: 1rem;
}

.job-list__entry-title {
  display: inline;
}
.job-list__entry-title {
  font-size: 1.375rem;
  line-height: 1.6365em;
}
@media (min-width: 992px) {
  .job-list__entry-title {
    font-size: 1.5625rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .job-list__entry-title {
    font-size: 1.95313rem;
    line-height: 1.7em;
  }
}

.job-list__entry-gender {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .job-list__entry-gender {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .job-list__entry-gender {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}

.job-list__expand-button {
  margin: 2rem auto;
  border: 2px solid var(--color-border);
  width: 100%;
  transition: opacity 1.1s 0.5s cubic-bezier(0.19, 1, 0.2, 1);
  padding: 0.75rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.job-list__expand-button:hover {
  background-color: var(--color-primary-accent);
  border-color: var(--color-primary-accent);
  color: var(--color-white);
}
@media (min-width: 992px) {
  .job-list__expand-button {
    margin: 4rem auto;
    width: 50%;
  }
}

.job-list__detail.is-loading::before {
  width: 0;
}
.job-list__detail.is-loading .job-list__detail-animation-1,
.job-list__detail.is-loading .job-list__detail-animation-2,
.job-list__detail.is-loading .cta,
.job-list__detail.is-loading .job-list__detail-gender,
.job-list__detail.is-loading .job-list__detail-headline {
  opacity: 0;
  transition: none;
  pointer-events: none;
}
.job-list__detail .job-list__detail-animation-1,
.job-list__detail .job-list__detail-headline {
  color: var(--color-job-list-detail-copy);
  word-break: break-word;
}
.job-list__detail .job-list__detail-animation-1,
.job-list__detail .job-list__detail-headline {
  font-size: calc(3.75rem / 1.8);
  line-height: 1.2em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .job-list__detail .job-list__detail-animation-1,
  .job-list__detail .job-list__detail-headline {
    font-size: calc(3.75rem / 1.3);
    line-height: 1.2em;
  }
}
@media (min-width: 1200px) {
  .job-list__detail .job-list__detail-animation-1,
  .job-list__detail .job-list__detail-headline {
    font-size: 3.75rem;
    line-height: 1.2em;
  }
}
.job-list__detail .job-list__detail-animation-1,
.job-list__detail .job-list__detail-headline {
  font-weight: bold !important;
}
.job-list__detail .job-list__detail-gender {
  transition: opacity 0.6s 1.3s cubic-bezier(0.19, 1, 0.2, 1);
}

.job-list__detail-start {
  padding-top: 9rem;
}

.job-list__detail-gender {
  font-size: 1.375rem;
  line-height: 1.6365em;
}
@media (min-width: 992px) {
  .job-list__detail-gender {
    font-size: 1.5625rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .job-list__detail-gender {
    font-size: 1.95313rem;
    line-height: 1.7em;
  }
}
.job-list__detail-gender {
  font-weight: bold !important;
}

.job-list__detail-share {
  margin-bottom: 2.5rem;
}

.job-list__detail-maps {
  margin-top: 5.5rem;
}

job-list-detail {
  min-height: 100vh;
  display: block;
}

.job-list__detail-description.richtext span,
.job-list__detail-description.richtext p {
  font-family: inherit !important;
}
</style>
