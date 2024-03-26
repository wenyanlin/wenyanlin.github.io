<template>
    <div class="w-full flex justify-center mt-44 text-left">
        <div class="w-8/12 min-h-screen">
            <h1 class="text-5xl font-bold tracking-wider leading-snug mb-16" v-html="header.title"></h1>
            <div class="flex gap-6 mb-20">
                <p class="w-8/12" v-html="header.intro">
                </p>
                <div class="w-4/12 flex flex-wrap">
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
        console.log(header.value)
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
        font-size: larger;
        font-weight: 700;
        color: var(--related-1);
        margin: 4rem 0 2rem;
        letter-spacing: 1px;
    }

    ::v-deep p {
        width: 100%;
        margin: .5rem auto 2rem;
        letter-spacing: 1px;
        text-indent: 2em;

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
        li {
            counter-increment: step;
            position: relative;
            margin-bottom: 1rem;

            &:before {
                text-align: center;
                color: var(--primary);
                content: counter(step);
                position: absolute;
            }

            p{
                margin: 0;
                padding: 0;
            }
        }
    }
}
</style>