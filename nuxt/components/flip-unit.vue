<template>
    <div class="flip-unit-container">
        <div class="upper-card">{{ next }}</div>
        <div class="lower-card">{{ current }}</div>
        <div class="flip-card first" :class="{ animate: isFlipping }">
            <span>{{ current }}</span>
        </div>
        <div class="flip-card second" :class="{ animate: isFlipping }">
            <span>{{ next }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    value: {
        type: [String, Number],
        required: true,
    }
})

const current = ref(props.value)
const next = ref(props.value)
const isFlipping = ref(false)

watch(
    () => props.value,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            next.value = newVal
            isFlipping.value = true

            setTimeout(() => {
                current.value = newVal
                isFlipping.value = false
            }, 800)
        }
    }
)
</script>

<style scoped>
.flip-unit-container {
    position: relative;
    width: auto;
    perspective: 1000px;
    display: inline-block;
    margin: 0 5px;
    

}

.upper-card,
.lower-card {
    background: #fdda45;
    color: black;
    font-size: 10rem;

    text-align: center;
    overflow: hidden;
    border-radius: 5px;
}

.upper-card {
    border-bottom: 2px solid #fff;

}

.lower-card {
    border-top: 2px solid #fff;
}

.flip-card {
    position: absolute;
    left: 0;
    width: auto;
    height: 70px;
    text-align: center;
    background: #fdda45;
    overflow: hidden;
    font-size: 10rem;
    line-height: 70px;
    backface-visibility: hidden;

}

.flip-card.first {
    top: 0;
    transform-origin: bottom;

}

.flip-card.second {
    bottom: 0;
    transform-origin: top;
    transform: rotateX(180deg);
}

.flip-card.animate.first {
    animation: flipTop 0.6s forwards;

}

.flip-card.animate.second {
    animation: flipBottom 0.6s forwards;
}


.upper-card,
.flip-card.first {
    padding-top:0.9em;
    overflow: hidden;
    height: 1.5em !important;
    line-height: 1.2em !important;
    padding-left: 0.5em;
    padding-right: 0.5em;

}

.lower-card,
.flip-card.second {
    padding-bottom: 3.6rem;
    overflow: hidden;
    height: 1.5em !important;
    line-height: 0em !important;
    padding-left: 0.5em;
    padding-right: 0.5em;

}

@keyframes flipTop {
    0% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(-180deg);
    }
}

@keyframes flipBottom {
    0% {
        transform: rotateX(180deg);
    }

    100% {
        transform: rotateX(0deg);
    }
}
</style>
