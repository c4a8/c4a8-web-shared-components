import LightboxSliderComponent from '../components/lightbox-slider.vue';

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
                cloudinary: true
            },
            {
                img: "/company/locations/Offenbach/gk-Sinclair.jpg",
                cloudinary: true
            }
        ],
    },
};

