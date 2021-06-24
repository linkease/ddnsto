<template>
    <li>
        <router-link :to="article.path">
            <div class="title">
                {{ article.frontmatter.title }}
            </div>
            <div class="lastUpdated">
                <span>更新日期：{{article.lastUpdated}}</span>
            </div>
            <div class="description">
                <span>{{ article.frontmatter.description }}</span>
            </div>
        </router-link>
    </li>
</template>
<script>
export default {
    props: {
        article: {
            path: "",
            frontmatter: {
                title: "",
                description: "",
            },
        }
    },
}
</script>
<style scoped>
li {
    list-style: none;
    width: 100%;
    display: block;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}
li a {
    display: block;
    width: 100%;

    margin: 10px 0;
}
li a .title {
    color: #333;
    font-size: 26px;
}
li a .title:hover {
    color: #0255fe;
}
.lastUpdated {
    text-align: left;
    color: #999;
    font-size: 14px;
    margin-top: 5px;
}
</style>