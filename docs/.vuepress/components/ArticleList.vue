<template>
    <div class="body">
        <div class="articles">
            <Article v-for="item in pages" :key="item.key" :article="item"></Article>
        </div>
        <div class="pagination">
            <Pagination />
        </div>
    </div>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    props: ["pages"],
    components: {
        Pagination
    },
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
.body .pagination {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
<style lang="scss" scoped>
.body {
    max-width: 820px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
    .articles {
        width: 100%;
        display: block;
        position: relative;
    }
    .pagination {
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
}
</style>