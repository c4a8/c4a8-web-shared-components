<template>
    <div class="tab-content">
        <tab-start v-for="tab in tabs" :id="tab.id" :open="tab.open" :headlineText="tab.headlineText" :headlineLevel="tab.headlineLevel" :headlineClasses="tab.headlineClasses">
            <div v-html="tab.content"></div>
        </tab-start>
    </div>
</template>
<script>
export default {
    props: {
        tabs: Array
    }
};
</script>