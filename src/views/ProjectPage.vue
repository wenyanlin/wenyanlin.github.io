<template>
    <div class="w-full flex justify-center mt-44 text-left">
        <Transition name="fade" mode="out-in" appear>
            <div v-if="isLoading" class="loading-overlay w-full h-80 flex justify-center items-center">
                <div class="loader"></div>
            </div>
            <div class="w-8/12 min-h-screen" v-else>
                <h1 class="text-5xl font-bold tracking-wider leading-snug mb-16" v-html="header.title"></h1>
                <div class="flex mb-20 flex-wrap">
                    <p class="w-full mb-4 pr-6 xl:w-8/12 lg:w-full md:w-full md:mb-4 sm:w-full sm:mb-4 block"
                        v-html="header.intro">
                    </p>
                    <div class="w-full mb-4 flex flex-wrap xl:w-4/12 lg:w-full md:w-full md:mb-4 sm:w-full sm:mb-4">
                        <div class="w-1/2 mb-4" v-for="cate in header.others" :key="cate.title">
                            <p class="text-related-1 font-medium inline-block mb-2">{{ cate.title }}</p>
                            <p class="whitespace-nowrap" v-for="item in cate.content">
                                {{ item }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="project_content" v-html="content"></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
// import DOMPurify from 'dompurify';
import axios from 'axios';

const header = ref('');
const data = ref('');
const content = ref('');
const initContent = () => {
    content.value = marked(data.value);
};
const route = useRoute();
const isLoading = ref(false);
const loadAndParseMarkdown = async () => {
    isLoading.value = true;
    const filePath = `/apiData${route.path}`;
    // const filePath = '/apiData/project/ResearchNONOGRAM.md'
    try {
        const response = await axios.get(`${filePath}.md`, { responseType: 'text' });
        const response2 = await axios.get(`${filePath}.json`, { responseType: 'json' });
        data.value = response.data;
        header.value = response2.data;
        document.title = header.value.cate_title + '- Wen Yan'
        initContent();
    } catch (error) {
        data.value = '### 此篇文章暫時沒有內容';
        initContent();
    } finally {
        isLoading.value = false;
    }
};


watch(() => route.path, () =>
    loadAndParseMarkdown()
    , { immediate: true });

// marked.use({
//     hooks: {
//         postprocess(html) {
//             return DOMPurify.sanitize(html);
//         },
//     },
// });

onMounted(() => {
    loadAndParseMarkdown();
});

</script>

<style lang="scss" scoped>
.project_content {
    ::v-deep iframe {
        margin: 8rem 0;
    }

    ::v-deep h1 {
        margin: 4rem 0 2rem;
        letter-spacing: 1px;
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary);

        img {
            margin-bottom: .5rem;
        }
    }

    ::v-deep h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--related-1);
        margin: 4rem 0 2rem;
        letter-spacing: 1px;
    }

    ::v-deep h3{
        font-size:1.25rem;
        font-weight: 600;
        color: var(--info);
        margin: 4rem 0 2rem;
    }

    ::v-deep p {
        width: 100%;
        margin: .5rem auto 2rem;
        line-height: 2rem;
        font-size: 1rem;
    }

    ::v-deep p:has(img) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ::v-deep hr {
        border: 1px solid var(--grey-blue);
        margin: 8rem 0;
    }

    ::v-deep ol {
        padding: 1rem 0;
        li {
            list-style: decimal;
            position: relative;
            margin: .5rem 1.5em;
            padding: 0 1em;

            &:before {
                text-align: center;
                color: var(--primary);
                position: absolute;
                top: 0.2rem;
                left: 0;
            }

            p {
                margin: 0;
                padding: 0;
                text-indent: 0;
            }
        }
    }

    ::v-deep ul{
        padding: 1rem 0;
        li{
            list-style: disc;
            margin: .5rem 1.5em;
        }
    }

    ::v-deep code{
        display: inline-block;
        margin: 0 .25rem;
        padding: 0 .5rem;
        background-color: var(--sliver);
        border-radius: 10px;
        color: var(--related-1);
    }
    
}

.fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.1s ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

/* HTML: <div class="loader"></div> */
.loader {
        width: 50px;
        aspect-ratio: 1;
        border: 2px solid var(--related-1);
        box-sizing: border-box;
        --c: conic-gradient(from 180deg at 50% calc(100% - 2px), var(--primary) 90deg, #969d8b00 0);
        background: var(--c), var(--c);
        background-position: 0 0, 8px 0;
        background-size: 1rem 9.6px;
        animation: l15 1s infinite;
    }

    @keyframes l15 {
        100% {
            background-position: 0 -9.6px, 8px 9.6px
        }
    }
</style>