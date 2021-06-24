<template>
    <div>
        <!-- 默认布局 -->
        <DefaultLayout> </DefaultLayout>
        <div class="body">
            <div class="articles">
                <Article v-for="item in pages" :key="item.key" :article="item"></Article>
            </div>
            <div class="pagination">
                <Pagination />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultLayout from "@vuepress/theme-default/layouts/Layout.vue"
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
    name: 'BlogLayout',
    components: {
        DefaultLayout,
        Pagination
    },
    computed: {
        pages() {
            return this.$pagination.pages
        }
    },
    created() {
        console.log(this.pages);
    }
}
</script>
<style scoped>
.body {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
}
.body .articles {
    width: 100%;
    display: block;
    position: relative;
}
</style>