<template>
    <div id="main">
        <div class="banner">

        </div>
        <Player />
    </div>
</template>

<script>
export default {
    computed: {
        playerUrl() {
            return ""
        }
    },
    created() {
    }
}
</script>
<style lang="scss" scoped>
#main {
    width: 100%;
    position: relative;
    .banner {
        width: 100%;
        height: 500px;
        background-color: #f3edf5;
    }
}
</style>