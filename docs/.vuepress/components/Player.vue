<template>
    <div class="player">
        <iframe src="https://player.bilibili.com/player.html?aid=931397239&bvid=BV1GM4y1g7Lz&cid=361664839&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.player {
    width: 100%;
    height: 554px;
    padding: 0 15%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: 0;
    margin: 50px 0;
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        border-radius: 18px;
        display: block;
        margin: 0 auto;
    }
}
</style>