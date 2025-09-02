<template>
    <div class="display-flex">
        <div class="flip-unit-container h1">
            <div class="upper-card" :style="style">{{ next }}</div>
            <div class="lower-card" :style="style">{{ current }}</div>
            <div class="flip-card first" :style="style" :class="{ animate: isFlipping }"><span>{{ current }}</span></div>
            <div class="flip-card second" :style="style" :class="{ animate: isFlipping }"><span>{{ next }}</span></div>
        </div>
        <div class="label font-size-4">{{ label }}</div>
    </div>
</template>

<script>
export default {
    name: "FlipUnit",
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        bgColor: {
            type: String,
            required: false,
        },
        fontColor: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            current: this.value,
            next: this.value,
            isFlipping: false
        }
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.next = newVal
                this.isFlipping = true

                setTimeout(() => {
                    this.current = newVal
                    this.isFlipping = false
                }, 600)
            }
        }
    },
    methods: {
        setStyle() {
            this.style = [
                this.bgColor ? `--flip-unit-background-color: ${this.bgColor};` : '',
                this.fontColor ? `--flip-unit-font-color: ${this.fontColor};` : ''
            ];
        },
    },

    mounted() {
        this.setStyle();
    },

    computed: {
        color() {
            return this.bgColor ? this.bgColor : null;
        },
    },
}
</script>
