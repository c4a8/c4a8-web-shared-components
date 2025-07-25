import TestimonialSliderComponent from "../components/testimonial-slider.vue";

export default {
    title: 'Components/TestimonialSlider',
    component: TestimonialSliderComponent,
    argTypes: {
    },
};

export const TestimonialSlider = {
    args: {


        slides: [
            {
                hidden: false,
                url: "https://www.glueckkanja.com",
                name: "Christian Kordel",
                title: "Consultant M365 Architecture",
                location: "Deggendorf",
                image: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    cloudinary: true,
                    alt: "Christian Kordel",
                },
                sliderImg: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    alt: "Christian Kordel",
                    cloudinary: true,
                },
                aspectRatio: "4/3",
            },
            {
                hidden: true,
                url: "https://www.glueckkanja.com",
                name: "Matti Puolitaival",
                title: "Designer",
                sliderImg: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    cloudinary: true,
                    alt: "lorem ipsum",
                },
            },
            {
                hidden: false,
                url: "https://www.glueckkanja.com",
                name: "Matti Puolitaival",
                title: "Designer",
                sliderImg: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    cloudinary: true,
                    alt: "lorem ipsum",
                },
            },
            {
                hidden: false,
                url: "https://www.glueckkanja.com",
                name: "Matti Puolitaival",
                title: "Designer",
                sliderImg: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    cloudinary: true,
                    alt: "lorem ipsum",
                },
            },
            {
                hidden: false,
                url: "https://www.glueckkanja.com",
                name: "Matti Puolitaival",
                title: "Designer",
                sliderImg: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    cloudinary: true,
                    alt: "lorem ipsum",
                },
            },
            {
                hidden: false,
                url: "https://www.glueckkanja.com",
                name: "Matti Puolitaival",
                title: "Designer",
                sliderImg: {
                    img: "/people/testimonials/matti-puolitaival.png",
                    cloudinary: true,
                    alt: "lorem ipsum",
                },
            },
        ],
    },
};
