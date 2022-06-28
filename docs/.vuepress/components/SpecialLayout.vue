<template>
    <div id="home">
        <NavLayout></NavLayout>
        <IndexHome></IndexHome>
        <IndexHomeMobile></IndexHomeMobile>
        <!-- <PriseComponent></PriseComponent> -->
        <FooterComponent />
    </div>
</template>
<script>
import FooterComponent from "./FooterComponent.vue"
// import PriseComponent from "./Prise.vue"
export default {
    computed: {
        gvUrl() {
            return "https://beian.miit.gov.cn/"
        },
    },
    components: {
        // PriseComponent,
        FooterComponent
    },
    mounted() {
    }
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