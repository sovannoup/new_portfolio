<template>
    <Navbar />
    <router-view />
    <Footer />
</template>

<script setup>
import Navbar from '../layouts/partials/Navbar.vue';
import Footer from '../layouts/partials/Footer.vue';
</script>
