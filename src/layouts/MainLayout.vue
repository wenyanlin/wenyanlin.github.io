<template>
    <div class="w-full flex justify-center">
        <div class="w-auto flex flex-col items-center sm:w-inner-width-md md:w-inner-width-md lg:w-inner-width-lg xl:w-inner-width duration-300">
            <div class="z-50 w-full"><SiteHeader></SiteHeader></div>
            <div class="main w-full">
                <RouterView></RouterView>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';  
</script>

<style lang="scss" scoped>

</style>