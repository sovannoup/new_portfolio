<template>
  <base-row md12 class="pt-4 pb-2 align-items-center">
    <base-col md3>
      <h5 class="w-75 text-center">{{ logoText }}</h5></base-col
    >
    <base-col md6>
      <div class="d-flex justify-content-center align-items-center">
        <h6 v-for="item in menu" :key="item" class="mx-3 text-primary">
          <a href="#">{{ item.title }}</a>
        </h6>
      </div>
    </base-col>
  </base-row>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";

const logoText = "Noup Sovan";
const menu = computed(() => [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Skill",
    path: "/skill",
  },
  {
    title: "Contact",
    path: "/contact",
  },
]);
</script>
