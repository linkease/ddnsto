<template>
    <div>
        <!-- 默认布局 -->
        <DefaultLayout> </DefaultLayout>
        <ArticleList :pages="pages"></ArticleList>
    </div>
</template>

<script>
import DefaultLayout from "@vuepress/theme-default/layouts/Layout.vue"
export default {
    name: 'BlogLayout',
    components: {
        DefaultLayout,
    },
    computed: {
        pages() {
            return this.$pagination?.pages || []
        }
    },
}
</script>
<style scoped>
</style>