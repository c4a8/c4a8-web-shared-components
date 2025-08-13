<template>
    <div class="container space-bottom-3">
        <headline-row :text="headline" />
        <div class="text-teaser">
            <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                <span class="d-block small font-weight-bold text-cap mb-2"></span>
                <h2></h2>
            </div>
            <div class="mx-lg-auto">
                <div class="row">
                    <div v-for="item in items" :key="item.id" class="col-sm-3 mb-3 mb-sm-0">
                        <div class="text-center"><span
                                class="d-block font-size-5 font-size-md-down-3 text-dark font-weight-bold">{{ item.value }}</span>
                            <p>{{ item.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    tagName: 'stats',
    props: {
        headline: String,
        items: Array,
    }
}
</script>
