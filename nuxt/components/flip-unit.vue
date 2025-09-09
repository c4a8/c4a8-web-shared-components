<template>
    <div>
        <div class="flip-unit-container h1" :style="style">
            <div class="upper-card">
                <div>{{ next }}</div>
            </div>
            <div class="lower-card">
                <div class="lower_num">{{ current }}</div>
            </div>
            <div class="flip-card first" :class="{ animate: isFlipping }">
                <div class="upper_num">{{ current }}</div>
            </div>
            <div class="flip-card second" :class="{ animate: isFlipping }"><span>{{ next }}</span></div>
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
    computed: {
        color() {
            return this.bgColor ? this.bgColor : null;
        },
        style() {
            this.style = [
                this.bgColor ? `--flip-unit-background-color: ${this.bgColor};` : '',
                this.fontColor ? `--flip-unit-font-color: ${this.fontColor};` : ''
            ];
        },
    },
}
</script>
