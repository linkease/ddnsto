<template>
  <div id="main" class="desktop">
    <div class="notice-box">
      <p>最新公告</p>
      <div
        class="item"
        v-for="(item, index) in noticeList"
        :key="index"
        @click="openLink(item.url)"
      >
        <span
          >{{ index + 1 + "." }}{{ "【" + item.title + "】" }}
          {{ item.detail }}</span
        >
        <img v-if="item.url" :src="Arrow" />
      </div>
    </div>
  </div>
</template>
<script>
import Arrow from "../public/image/arrow.png";
import axios from "axios";
export default {
  data() {
    return {
      Arrow,
      websiteType: false,
      noticeList: [],
    };
  },
  computed: {
    bannerImage() {
      switch (this.$themeConfig.domain) {
        case "kooldns.cn":
        case "kooldns.com":
          this.websiteType = true;
          return "/assets/banner/banner2@2x.png";
        case "tocmcc.cn":
          this.websiteType = true;
          return "/assets/banner/banner3@2x.png";
      }
      // ddnsto.com
      this.websiteType = false;
      return "/assets/banner/banner_new@2x.png";
    },
  },
  created() {
    axios.get("/api/announcement/announcements", {}).then((res) => {
      if (res.status === 200) {
        this.noticeList = res.data;
      }
    });
  },
  methods: {
    openLink(e) {
      if (e) {
        window.open(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#main * {
  -webkit-box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  word-wrap: break-word;
  outline: 0;
}
#main {
  width: 100%;
  position: relative;
  margin-top: 5.125rem;
  display: flex;
  justify-content: center;
  .notice-box {
    display: flex;
    flex-direction: column;
    p {
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.83);
      line-height: 28px;
    }
    .item {
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      padding: 16px 0;
      align-items: center;
      cursor: pointer;
      span {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
@media screen and (min-width: 860px) {
  #main {
    .notice-box {
      width: 800px;
      .item {
        span {
          display: inline-block;
          width: 770px;
        }
      }
    }
  }
}
@media screen and (max-width: 860px) {
  #main {
    .notice-box {
      box-sizing: border-box;
      padding: 0 30px;
    }
  }
}
</style>
