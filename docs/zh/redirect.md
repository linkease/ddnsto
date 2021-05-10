<script>
  export default{
    created(){
       var url = ""
        var locHost = window.location.hostname;
        if (locHost.indexOf("toany.net") >= 0 || locHost == "localhost") {
            url = "https://www.toany.net:9445/app/#/login"
        } else {
            url = "https://www.ddnsto.com/app/#/login";
        }
        window.open(url, "_blank'")
        this.$router.go(-1)
    }
}
</script>