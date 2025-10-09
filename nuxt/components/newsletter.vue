<template>
    <div ref="root">
        <div class="container" :style="newsletterStyle" ref="modal">
            <div class="d-flex justify-content-end pt-5" ref="close">
                <icon icon="close" :circle="false" :hover="true" size="medium" />
            </div>

            <div class="d-flex p-10">
                <div class="col-10">
                    <headline level="h2">{{ showMessage ? 'success.headline' : headline }}</headline>
                    <p class="font-size-3 pt-8">{{ showMessage ? 'success.text' : text }}</p>
                    <formular v-if="!showMessage" v-bind="formular" />

   
                </div>
                <div class="col-4 d-flex align-items-center z-index-1 align-content-center">
                    <v-img :lottie="lottie" :lazy="true" />
                   
                </div>
            </div>

        </div>
    </div>
</template>



<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';


import lottieFile from '/Users/lisa.nagl/Code/c4a8-web-shared-components/src/stories/data/lottie-azure.json'
export default {
    tagName: 'newsletter',
    props: {
        headline: {
            type: String,
            default: 'Newsletter Subscription'
        },
        text: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est '
        },
        success: {
            type: Object,
            default: () => ({
                headline: 'Danke für deine Anmeldung!',
                text: 'Du hast dich erfolgreich für unseren Newsletter angemeldet. Wir freuen uns, dich als Abonnent:in begrüßen zu dürfen! Schau gerne in deinem Posteingang nach einer Bestätigungs-E-Mail von uns.'
            })
        },
        formular: {
            type: Object,
            default: () => ({

                form: {
                    cta: {
                        skin: 'primary',
                        width: 'w-20',
                    },
                    ctaText: 'Abbonieren',
                    ctaPosition: 'justify-content-end',
                    method: 'post',
                    action: '../',
                    fields: [
                        {
                            label: 'E-Mail Adresse',
                            type: 'email',

                            rowStart: true,
                            required: true,
                            id: 'email',
                        },
                        {
                            label: "Deine Daten werden zur Bearbeitung und Beantwortung deiner Anfrage bei uns gespeichert. Weitere Informationen zum Datenschutz findest du in unserer <a href='/de/datenschutz/'>Datenschutzerklärung</a>.",
                            type: "checkbox",
                            id: "dataprotection",
                            required: true,
                            requiredMsg: "Bitte bestätigen"
                        },
                        {
                            type: 'hidden',
                            id: '_gotcha',
                        },
                    ],
                },
            })
        },
        lottie: {
            type: Object,
            default: () => lottieFile
        },
    },
    computed: {
        newsletterStyle() {
            return {
                backgroundColor: "var(--color-yellow)",
            }
        },
    },
    mounted() {
        this.modalElement = this.$refs.modal;
        this.closeElement = this.$refs.close;
        this.root = this.$refs.root;
        this.init();
    },

    methods: {
        init() {
            this.bindEvents();
        },
        bindEvents() {
            this.closeElement?.addEventListener('click', this.handleClose);
            document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
            window.addEventListener('click', this.handleOutsideClick);
        },
        handleOutsideClick(e) {
            //this.handleClose();
        },
        handleSubmit() {
            //this.handleClose();
            this.showMessage = true;
        },
        handleClose() {
            this.modalElement.style.visibility = 'hidden';
        },
    },
}

</script>