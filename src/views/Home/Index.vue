<template>
<div class="px-3">
  <swiper
    :pagination="true"
    :modules="modules"
    class="mySwiper"
    :direction="'vertical'"
  >
    <swiper-slide><home /></swiper-slide>
    <swiper-slide><field /></swiper-slide>
    <swiper-slide><about /></swiper-slide>
    <swiper-slide><project /></swiper-slide>
    <swiper-slide><skill /></swiper-slide>
    <swiper-slide><contact /></swiper-slide>
    <div
      class="
        swiper-pagination
        swiper-pagination-clickable
        swiper-pagination-bullets
        swiper-pagination-vertical
      "
    >
      <span
        class="swiper-pagination-bullet swiper-pagination-bullet-active"
      ></span>
      <span class="swiper-pagination-bullet"></span>
      <span class="swiper-pagination-bullet"></span>
      <span class="swiper-pagination-bullet"></span>
      <span class="swiper-pagination-bullet"></span>
      <span class="swiper-pagination-bullet"></span>
    </div>
  </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Home from "./home.vue";
import Field from '../Field/Index.vue';
import About from "../About/Index.vue";
import Project from "../Projects/Index.vue";
import Skill from "../Skill/Index.vue";
import Contact from "../Contact/Index.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Home,
    Field,
    About,
    Project,
    Skill,
    Contact,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
