<template>
    <li class="post">
        <router-link :to="article.path" class="thumbnail" v-if="thumbnail" :title="title">
            <img :src="thumbnail" alt="">
        </router-link>
        <div class="content" :class="{ offset : thumbnail}">
            <router-link :to="article.path" class="title" :title="title">
                {{title}}
            </router-link>
            <!-- <div class="excerpt" v-if="article.excerpt" v-html="article.excerpt"></div> -->
            <div class="lastUpdated">
                <span>更新日期：{{lastUpdated}}</span>
            </div>

            <div class="description" :title="description">
                <span>{{ description }}</span>
            </div>

            <div class="tags">
                <template v-if="article.frontmatter.tags">
                    <router-link class="tag" v-for="tag in article.frontmatter.tags" :key="tag" :to="`/tag/${tag}/`">
                        <span>{{tag}}</span>
                    </router-link>
                </template>
            </div>

        </div>

    </li>
</template>
<script>
export default {
    props: {
        article: {
            path: "",
            excerpt: "",
            frontmatter: {
                title: "",
                description: "",
                thumbnail: "",
                tags: []
            },
            lastUpdated: ""
        }
    },
    computed: {
        getCurllDate() {
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            let hours = date.getHours()
            if (hours < 10) {
                hours = `0${hours}`
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            let minutes = date.getMinutes()
            return `${year}/${month}/${day} ${hours}:${minutes}`
        },
        lastUpdated() {
            return this.article?.lastUpdated || this.getCurllDate
        },
        title() {
            return this.article.frontmatter.title
        },
        thumbnail() {
            return this.article?.frontmatter?.thumbnail || ""
        },
        description() {
            return this.article?.frontmatter?.description || ""
        }
    }
}
</script>
<style lang="scss" scoped>
li {
    list-style: none;
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    .thumbnail {
        flex: 0 0 100%;
        max-width: 160px;
        width: 160px;
        height: 110px;
        margin-right: 20px;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
    .offset {
        max-width: calc(100% - 180px);
    }
    .content {
        flex: 0 0 100%;

        .title {
            display: block;
            width: 100%;
            color: #333;
            font-size: 26px;
            line-height: 1;
            margin-bottom: 10px;
        }
        .title:hover {
            color: #0255fe;
        }
        .excerpt {
            display: block;
            width: calc(100% - 30px);
            padding-left: 30px;
            color: #777;
        }
        .lastUpdated {
            text-align: left;
            color: #999;
            font-size: 14px;
            margin-top: 5px;
        }
        .description {
            font-size: 12px;
            color: #999;
            word-wrap: break-word;
            line-height: 20px;
            margin: 5px 0;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
            a.tag {
                padding: 5px;
                margin: 5px;
                border: 1px solid;
                border-radius: 3px;
                margin-left: 0;
                font-size: 14px;
                color: #0255fe;
            }
            a.tag:hover {
                opacity: 0.9;
            }
        }
    }
}
</style>