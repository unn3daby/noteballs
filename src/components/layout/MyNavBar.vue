<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <div class="navbar-item is-size-4 is-family-monospace">
                NoteBalls
            </div>
            <div
                :class="{ 'is-active': showMobileNav }"
                class="navbar-burger"
                data-target="navMenuColordark-example"
                @click="showMobileNav = !showMobileNav"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showMobileNav }">
            <div class="navbar-start"></div>
            <div class="navbar-end">
                <div>
                    <RouterLink
                        to="/"
                        class="navbar-custom"
                        active-class="is-active"
                        @click="showMobileNav = false"
                    >
                        Home
                    </RouterLink>
                </div>
                <div>
                    <RouterLink
                        to="/stats"
                        class="navbar-custom"
                        active-class="is-active"
                        @click="showMobileNav = false"
                    >
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
//imports
import { ref } from "vue";

//mobile nav
const showMobileNav = ref(false);
</script>

<style scoped>
div {
    border-radius: 5px;
}
.navbar {
    border-radius: 5px;
}

@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
