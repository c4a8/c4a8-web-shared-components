<template>
  <div class="team-cards-item col-sm-6 col-lg-4 px-2 mb-3" style="max-width: 300px">
    <div class="card h-100">
      <div class="card-body has-card-background">
        <div style="margin-bottom: 50px">
          <v-img v-if="img" :src="img" :alt="alt" class="img-fluid" />
        </div>
        <headline level="h3" :text="name" />
        <headline level="h4" :text="job" />
        <p>{{ description }}</p>
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
  },
};
</script>
