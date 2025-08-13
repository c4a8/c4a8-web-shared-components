<template>
  <div :class="['people-square', { 'people-square--absolute': absolute }]">
    <div class="people-square__grid" :style="{
      gridTemplateColumns: `repeat(${width}, 1fr)`,
      gridTemplateRows: `repeat(${height}, 1fr)`,
      '--people-square-size': peopleSquareSize + '%',
    }">
      <div v-for="(element, index) in grid" :key="index" class="people-square__element"
        :class="{ 'people-square__element--extended': isExtended(element) }" :style="getElementStyle(element, index)">
        <v-img v-if="element.img" :img="element.img.src" :cloudinary="element.img.cloudinary"
          :lottie="element.img.lottie" />
        <template v-else>
          <div class="people-square__background" :style="element.color ? { backgroundColor: element.color } : null">
            <img v-if="element.shape" :src="element.shape.src" :cloudinary="element.shape.cloudinary" />
          </div>
          <div class="people-square__content">
            <div v-if="element.number" class="people-square__number" :class="playAnimation(element.number)">
              {{ numberValue(element.number).toFixed(0) }} {{ element.numberSuffix || '' }}
            </div>
            <div v-if="element.number" class="people-square__text">
              {{ element.text }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import gsap from 'gsap'



export default {
  tagName: 'people-square',
  props: {
    grid: {
      type: Array,
      required: true,
    },
    width: {
      type: Number,
      default: 3,
    },
    height: {
      type: Number,
      default: 3,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      animatedValues: {},

    };
  },
  computed: {
    peopleSquareSize() {
      return 100 / this.width;
    },
  },
  methods: {
    isExtended(element) {
      return element.rowStart === element.rowEnd && element.rowStart !== null;
    },
    getElementStyle(element, index) {
      let colStart, colEnd;

      if (element.colStart !== undefined || element.colEnd !== undefined) {
        colStart = element.colStart;
        colEnd = (element.colEnd || element.colStart) + 1;
      } else {
        colStart = (index % this.width) + 1;
        colEnd = colStart;
      }

      if (element.rowStart && element.rowEnd) {
        return {
          gridRowStart: element.rowStart,
          gridRowEnd: element.rowEnd + 1,
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
        };
      }

      return {};
    },
    numberValue(n) {
      return this.animatedValues[n]?.number || 0;
    },

    playAnimation(n) {

      gsap.to(this.animatedValues[n], { duration: 0.5, number: Number(n) || 0 })
    }
  },
  mounted() {
    this.grid.forEach(element => {
      if (element.number) {
        this.animatedValues[element.number] = reactive({ number: 0 });
      }
    });

  },

};
</script>
