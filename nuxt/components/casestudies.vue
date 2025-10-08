<template>
    <div>
        <service-overview
            v-if="serviceOverview"
            :logo="serviceOverview.logo"
            :title="serviceOverview.title"
            :list="serviceOverview.list"
            :services="serviceOverview.services"
        />

        <div class="container space-top-1 space-top-lg-2">
            <div class="w-xl-80 mx-xl-auto">
                <article class="post" itemscope itemtype="http://schema.org/TechArticle">
                    <div class="post-content e-content" itemprop="articleBody">
                        <div class="post__sticky-bar post__sticky-bar--lg-only">
                            <div id="js-sticky-block-start" class="post__sticky-socials pl-xl-2">
                                <div
                                    class="js-sticky-block"
                                    :data-hs-sticky-block-options="stickyBlockOptions"
                                >
                                    <socials vertical hide-label />
                                </div>
                            </div>
                        </div>
                        <main class="mt-xl-n4 richtext">
                            <span v-html="content" />
                        </main>
                        <div id="js-sticky-block-end"></div>
                    </div>
                </article>
            </div>
        </div>

        <quotes
            v-if="quote"
            :quotes="quote"
            spacing="mt-8 mt-lg-10"
        />

        <blog-recent
            v-if="blogRecent"
            :tag="blogRecent.tag"
            :limit="blogRecent.limit"
            :headline="blogRecent.headline"
            :slider="blogRecent.slider"
            :case-studies="blogRecent.caseStudies"
        />
    </div>
</template>

<script>
export default {
    tagName: 'casestudies',
    props: {
        serviceOverview: {
            type: Object,
            default: null,
        },
        content: {
            type: String,
            required: true,
        },
        quote: {
            type: [Array, Object],
            default: null,
        },
        blogRecent: {
            type: Object,
            default: null,
        },
    },
    computed: {
        stickyBlockOptions() {
            return JSON.stringify({
                parentSelector: "#js-sticky-block-start",
                breakpoint: "xl",
                startPoint: "#js-sticky-block-start",
                endPoint: "#js-sticky-block-end",
                stickyOffsetTop: 100,
                stickyOffsetBottom: 20
            });
        }
    }
};
</script>
