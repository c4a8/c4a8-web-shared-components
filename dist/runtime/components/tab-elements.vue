<template>
    <div class="tab-content space-bottom-4">
        <tab-start v-for="tab in tabs" :id="tab.id" :open="tab.open" :headlineText="tab.headlineText"
            :headlineLevel="tab.headlineLevel" :headlineClasses="tab.headlineClasses">
            <div v-if="tab.content"  >
                <people-square v-if="tab.content.grid" :grid="tab.content.grid" :absolute="tab.content.absolute"/> 
                <div class=" container space-bottom-lg-1">
                <div class="row">
                <div class="offset-lg-6 col-lg-6 pt-2 pt-lg-4 pl-lg-6">
                    <headline v-if="tab.content.headline" :classes="['tab-start__headline-small', 'mb-6']" :level="tab.content.headlineLevel" :text="tab.content.headline"/>
                    <p v-if="tab.content.copy" v-html="tab.content.copy"></p>
                </div>
              </div>
              </div>
            </div>
        </tab-start>
    </div>
</template>
<script>
export default {
    props: {
        //tabs: Array
        tabs: [
            {
                id: String,
                open: Boolean,
                headlineText: String,
                headlineLevel: [String, Number],
                headlineClasses: [String, Array, Object],
                content: 
                    {
                        headline: String,
                        headlineLevel: String,
                        copy: String,
                        grid: Object
                    }
                
            }
        ]
    },

};
</script>