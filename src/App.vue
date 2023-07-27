<template>
    <header>
        <MyNavBar />
        <div class="wrapper px-2 py-4">
            <RouterView />
        </div>
    </header>
</template>

<script setup>
// imports
import MyNavBar from "@/components/layout/MyNavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
