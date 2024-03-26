<template>
    <div class="w-full flex justify-center">
        <div class="w-inner-width flex flex-col items-center xl:w-inner-width lg:w-inner-width-lg md:w-inner-width-md sm:w-inner-width-md duration-300">
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