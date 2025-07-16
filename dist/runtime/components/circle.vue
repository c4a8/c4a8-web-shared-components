<template>
    <div class="circle-row display-flex">
        <div class="circle-container align-items-center">
            <div class="icon-circle align-items-center justify-content-center"
                :style="[circleStyle]">
                <div class="circle-content">
                    <div v-if="circleContent" class="h4-font-size" >{{ circleContent }}</div>
                    <icon v-if="circleIcon" :icon='circleIcon' size="medium"/>
                </div>
            </div>
            <div class="circle-slot align-items-center h4-font-size">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    tagName: 'circle',
    props: {
        circleContent: String,
        circleIcon: String,
        headline: String,
        color: {
            type: String,
            default: '#6BB8FF'
        }
    },
computed: {
    circleStyle() {
        return {
            backgroundColor: this.color
        };
    },
}
}
</script>