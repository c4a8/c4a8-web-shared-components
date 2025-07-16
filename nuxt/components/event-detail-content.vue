<template>
    <div class="event-detail-intro page-detail__intro-content">
        <headline level="h3">{{ headline }}</headline>
        <p>{{ intro }}</p>
        <div v-for="paragraph in paragraphs">
            <headline level="h3">{{ paragraph.headline }}</headline>
            <ul v-if="paragraph.items" class="space-bottom-1">
                <li v-for="item in paragraph.items" :key="item">{{ item }}</li>
            </ul>
        </div>
        <div v-for="bulletpoint in bulletpoints" class="space-bottom-1">
            <Circle :circleContent="bulletpoint.circleContent" :circleIcon="bulletpoint.circleIcon"
                :color="bulletpoint.color">{{ bulletpoint.headline }}</Circle>
            <p v-if="bulletpoint.text">{{ bulletpoint.text }}</p>
            <ul v-if="bulletpoint.items">
                <li v-for="item in bulletpoint.items" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'event-detail-content',
    props: {
        headline: String,
        intro: String,
        paragraphs: Array,
        bulletpoints: Array,
        headlineLevel: {
            type: String,
            default: 'h1',
        },
        headlineClasses: {
            type: String,
            default: '',
        },
    },

};
</script>
