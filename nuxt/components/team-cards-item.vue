<template>
  <div class="team-cards-item px-2 mb-3" :class="{ 'team-cards-item--default col-sm-6 col-lg-4': !noRow }">
    <div class="card h-100 has-card-background">
      <v-img v-if="img" :src="img" :alt="alt" class="img-fluid" :class="noBorder ? '' : 'pt-4 px-4'" />
      <div class="team-cards-item__body card-body">
        <headline level="h3" class="light thin mb-1" :text="name" />
        <headline level="h5" class="thin" :text="job" />
        <p class="team-cards-item__description mt-3">{{ description }}</p>
        <br />
        <div style="display: flex; gap: 1rem" v-if="skills">
          <icon icon="ribbon" size="medium" />
          <div>{{ skills }}</div>
        </div>
      </div>
      <div class="card-footer">
        <ul class="list-inline mb-0">
          <li v-if="twitter" class="list-inline-item">
            <a :href="twitter">
              <i class="fab fa-x-twitter" style="font-size: 1.5rem"></i>
            </a>
          </li>
          <li v-if="linkedin" class="list-inline-item">
            <a :href="linkedin">
              <i class="fab fa-linkedin" style="font-size: 1.5rem"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-cards-item',
  props: {
    img: String,
    alt: String,
    name: String,
    job: String,
    description: String,
    skills: String,
    twitter: String,
    linkedin: String,
    noRow: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.team-cards-item {
  &.team-cards-item--default {
    max-width: 300px;
  }
}

.team-cards-item__description {
  flex-grow: 1;
}

.team-cards-item__body {
  display: flex;
  flex-direction: column;
}
</style>
