import LightboxSliderComponent from '../components/lightbox-slider.vue';
import Cta from '../components/cta.vue';

export default {
    component: LightboxSliderComponent,
    title: 'Components/LightboxSlider',
};

export const Default = {
    args: {
        teaser: {
            img: "/company/locations/Offenbach/_JR_8285-HDR.jpg",
            cloudinary: true
        },
        images: [
            {
                img: "/company/locations/Offenbach/_JR_8285-HDR.jpg",
                cloudinary: true,
                caption: 'Photo 1'
            },
            {
                img: "/company/locations/Offenbach/gk-Sinclair.jpg",
                cloudinary: true,
                caption: 'Photo 2'
            }
        ],
    },
};

export const NoImg = {
    args: {
        variant: 'noImg',
        images: [
            {
                img: "/company/locations/Offenbach/_JR_8285-HDR.jpg",
                cloudinary: true,
                caption: 'Photo 1'
            },
            {
                img: "/company/locations/Offenbach/gk-Sinclair.jpg",
                cloudinary: true,
                caption: 'Photo 2'
            }
        ],
    },
    render: (args) => ({
        components: { LightboxSliderComponent, Cta },
        setup() {
            return { args };
        },
        template: `
            <LightboxSliderComponent v-bind="args">
               <div class="d-flex" style="flex-direction: column; align-items: center; gap: 1rem;">
                   <cta variant="button" text="Click me to open the lightbox slider!" color="primary" size="large"/>
                   <p>This content is provided via <strong>slot</strong> using the <strong>"noImg"</strong>-variant</p>
                </div>
            </LightboxSliderComponent>
        `,
    }),
};
