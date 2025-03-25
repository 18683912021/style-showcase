<template>
  <div class="photo-scroller">
    <div class="main">
      <div class="section">
        <img
          v-for="(item, index) in leftImage"
          :key="index"
          :src="item.src"
          alt=""
        />
      </div>
      <div class="section">
        <img
          v-for="(item, index) in centerImage"
          :key="index"
          :src="item.src"
          alt=""
        />
      </div>
      <div class="section">
        <img
          v-for="(item, index) in rightImage"
          :key="index"
          :src="item.src"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../../styles/Photo-scroller.less";
</style>

<script setup>
import { ref, toRefs } from "vue";

import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/3.jpeg";
import image4 from "../../assets/4.jpeg";
import image5 from "../../assets/5.jpeg";
const props = defineProps({
  leftImage: {
    type: Array,
    default: [
      { src: image1 },
      { src: image2 },
      { src: image3 },
      { src: image4 },
      { src: image5 },
      { src: image3 },
      { src: image4 },
    ],
  },
  centerImage: {
    type: Array,
    default: [
      { src: image5 },
      { src: image3 },
      { src: image4 },
      { src: image1 },
      { src: image2 },
      { src: image3 },
      { src: image2 },
    ],
  },
  rightImage: {
    type: Array,
    default: [
      { src: image4 },
      { src: image1 },
      { src: image5 },
      { src: image2 },
      { src: image3 },
      { src: image1 },
      { src: image5 },
    ],
  },
});
const { leftImage, centerImage, rightImage } = toRefs(props);
console.log(leftImage);
</script>
