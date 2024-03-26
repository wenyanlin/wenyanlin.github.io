<template>
    <div class="header w-full h-20 backdrop-blur-lg flex  justify-center fixed top-0 left-0 border border-solid border-primary bg-secondary bg-opacity-40">
        <div class="header_inner w-inner-width flex justify-between items-center xl:w-inner-width lg:w-inner-width-lg md:w-inner-width-md sm:w-inner-width-md duration-300">
            <div class="header_logoAndNav w-full flex items-center gap-5">
                <div class="header_logo w-full text-related-1 text-3xl font-semibold flex">
                    <RouterLink to="/" class="text-related-1 hover:text-related-1">WEN YAN LIN</RouterLink>
                </div>
                <!-- <nav class="header_nav">
                    <ul class="flex gap-5">
                        <li v-for="link in links" :key="link.to">
                            <RouterLink :to="link.to" class="link-nav">{{ link.title }}</RouterLink>
                        </li>
                    </ul>
                </nav> -->
            </div>
            <div class="header_social flex justify-between gap-6">
                <div><a href="https://github.com/wenyanlin" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="xl" class="text-related-1" /></a></div>
                <div><a href="https://codepen.io/Lin-Donna" target="_blank"><font-awesome-icon :icon="['fab', 'codepen']" size="xl" class="text-related-1"/></a></div>
                <div><a href="mailto:clps10070623@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" size="xl" class="text-related-1"/></a></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const links = ref([
    { title: '網頁設計', to: '/web-design' },
    { title: '論文研究', to: '/research' },
    { title: '平面設計', to: '/graphic-design' },
    { title: '動畫設計', to: '/animation-design' },
    { title: '關於我', to: '/about-me' },
]);
</script>

<style lang="scss" scoped></style>