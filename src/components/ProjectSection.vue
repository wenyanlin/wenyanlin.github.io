<template>
    <div class="w-full h-full text-left text-info">
        <div class="projectSection_image w-full aspect-[4/3] mb-2 shadow hover:scale-[1.02] duration-300">
            <RouterLink :to="dataC.path" class="block w-full h-full bg-cover"
                :style="{ 'background-image': 'url(' + dataC.img_url + ')' }">
            </RouterLink>
        </div>
        <h1 class="projectSection_title">​<RouterLink :to="dataC.path" class="font-semibold text-info">{{
                    dataC.cate_title }}</RouterLink>
        </h1>
        <p class="projectSection_category mb-2 ">​<RouterLink :to="dataC.path" class="text-grey font-normal">
                {{ dataC.category }}</RouterLink>
        </p>
        <p class="projectSection_content mb-2">​<RouterLink :to="dataC.path" class="text-info font-normal">
                {{ dataC.cate_intro }}</RouterLink>
        </p>
        <p class="projectSection_tag text-related-1"><span v-for="item in dataC.tag" :key="item">#{{ item + ' ' }} </span>
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    intro: Object
});

const dataC = computed(() => {
    return props.intro;
});

</script>

<style lang="scss" scoped>
a {
    &:hover {
        color: inherit;
    }
}
</style>