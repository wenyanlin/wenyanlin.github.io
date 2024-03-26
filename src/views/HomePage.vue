<template>
    <div class="w-full flex flex-col gap-32 items-center">
        <div class="w-full h-screen flex justify-center items-center"><span class="text-7xl text-info font-black">PORTFOLIO</span></div>
        <div class="w-10/12 flex flex-wrap">
            <div v-for="item in data" :key="item" class="w-1/2 h-fit p-3 xl:w-1/2 lg:w-full md:w-full sm:w-full">
                <ProjectSection :intro="item"></ProjectSection>
            </div>
        </div>
        <div class="p-28 h-fit flex flex-col text-left bg-white border xl:p-28">
            <h1 class="projectSection_title">​<RouterLink to="/project/nonogram" class="font-semibold text-info">SimsEvelyn：模擬市民4建房YouTuber</RouterLink></h1>
            <p class="projectSection_category mb-2">​<RouterLink to="/project/nonogram" class="text-grey font-normal">影片剪輯</RouterLink></p>
            <p class="projectSection_content mb-2">​<RouterLink to="/project/nonogram" class="text-info font-normal">作為興趣，曾在模擬市民4裡蓋房並以逐格動畫的形式製成影片，並發佈到YouTube上獲得一萬六千多名追蹤者，代表作是《Loft Penthouse》，近期最佳則是《Family Apartment | 121 Hakim House》。</RouterLink></p>
            <p class="projectSection_tag text-related-1 mb-4">#遊戲 #建造 #動畫 #stopmotion #illustrator #premiere #aftereffects</p>
            <div class="w-full h-fit flex gap-6 flex-wrap">
                <iframe class="grow aspect-[16/9]" src="https://www.youtube.com/embed/wV6ICnzEvoY?si=PGmJLGye8JIovjoe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe class="grow aspect-[16/9]" src="https://www.youtube.com/embed/0e5xAHCAz-8?si=mO8au6ZL1E8bLx6t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe class="grow aspect-[16/9]" src="https://www.youtube.com/embed/1siur9v5aGo?si=wvIt3NiY8LnlOqAv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from '@/components/ProjectSection.vue';
// import axios from 'axios';

// const isLoading = ref(false);
const data = ref([
    {
        "cate_title":"​非主流NONOGRAM解題方法研究",
        "img_url":"/images/nonogram/nonogram.webp",
        "path":"/project/ResearchNONOGRAM",
        "category":"​國立臺中教育大學資訊工程學系111級畢業專題",
        "cate_intro":"​益智遊戲數織（Nonogram）的相關解題方法之研究，其中本人負責研究單格導向之以邏輯規則進行單行求解，試圖為數織加快解題速度，以提升整體解題效率。",
        "tag":["nonogram", "畢業專題", "論文", "C++", "illustrator", "premiere"],
    },
    {
        "cate_title":"NONOGRAM：動畫介紹短片",
        "img_url":"/images/nonogram/1.gif",
        "path":"/project/NONOGRAMAnimatedIntroductionVideo",
        "category":"動畫設計",
        "cate_intro":"Nonogram是一種益智遊戲，我們期望能以動畫短片的方式將它推廣給更多的玩家或孩子。",
        "tag":["nonogram", "動畫", "動態設計", "illustrator", "premiere", "aftereffects", "cartoonanimator"],
    },
    {
        "cate_title":"網頁基本練習作品合集",
        "img_url":"/images/nonogram/nonogram.webp",
        "path":"/project/WebLayout",
        "category":"網頁設計",
        "cate_intro":"以做中學為主旨，以此學習零散的網頁知識，如：class命名規則、eslint、Router等等。",
        "tag":["網頁設計", "javascript", "scss", "html", "bem", "vue","vue-router"],
    },
    {
        "cate_title":"網頁基本練習作品合集",
        "img_url":"/images/nonogram/nonogram.webp",
        "path":"/project/WebLayout",
        "category":"網頁設計",
        "cate_intro":"以做中學為主旨，以此學習零散的網頁知識，如：class命名規則、eslint、Router等等。",
        "tag":["網頁設計", "javascript", "scss", "html", "bem", "vue","vue-router"],
    },
    
]);
// const loadAndParseMarkdown = async () => {
//     isLoading.value = true;
//     try {
//         const response = await axios.get('/apiData/project');
//         console.log(response.data)
//         const files = response.data;
//         for (const file of files) {
//             if (file.endsWith('.json')) {
//                 const fileUrl = '/apiData/project/' + file;
//                 const jsonResponse = await axios.get(fileUrl, { responseType: 'json' });
//                 console.log(`JSON file ${file} content:`, jsonResponse.data);
//             }
//         }
        
//     } catch (error) {
//         console.log('無法加載');
//     } finally {
//         isLoading.value = false;
//     }
// };

// onMounted(()=>{
//     loadAndParseMarkdown();
// });


</script>

<style lang="scss" scoped></style>