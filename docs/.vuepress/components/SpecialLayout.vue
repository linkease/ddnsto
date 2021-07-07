<template>
    <div id="home">
        <NavLayout></NavLayout>
        <IndexHome></IndexHome>
        <IndexHomeMobile></IndexHomeMobile>
        <footer>
            <a :href="gvUrl" target="_blank" class="" title="版权所有 2021 易有云网络科技有限责任公司 | 粤ICP备20024441号">版权所有 2021 易有云网络科技有限责任公司 | 粤ICP备20024441号</a>
        </footer>
    </div>
</template>
<script>
export default {
    computed: {
        gvUrl() {
            return "https://beian.miit.gov.cn/"
        },
    },
}
</script>
<style lang="scss" scoped>
footer {
    margin-top: 3.125rem;
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    a {
        color: #4e6e8e;
        cursor: pointer;
    }
}
</style>