<template>
  <div>
    <div class="header">
      <p class="systemtitle">黄冈数理化AI人工智能教育平台</p>
      <div class="head-nav">
        <div class="activeitem active">首页</div>
        <div class="activeitem">课程学习</div>
        <div class="activeitem">错题本</div>
        <div class="activeitem">智能点评
          <ul class="itemli">
            <li>学习点评</li>
            <li>智能测评</li>
          </ul>
        </div>
        <div class="activeitem">校企合作</div>
        <div class="activeitem">关于我们</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-common",
  data() {
    return {
     
    };
  },
  mounted() {},

  methods: {
   
  }
};
</script>
<style lang="less" scoped>
  .header{
    width: 1100px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    .systemtitle{font-size:24px;font-weight:600;color: #ca0000;line-height: 100px;}
    .head-nav{position: absolute;right: 0;top: 30px; display: flex;border: 1px solid #ca0000;border-radius: 16px;
      .activeitem{padding: 15px;font-size: 16px;color: rgb(0, 0, 0);position: relative;
        &:first-child{border-radius: 16px 0 0 16px;overflow: hidden;}
        &:last-child{border-radius: 0 16px 16px 0;overflow: hidden;}
        .itemli{width: 94px;position: absolute;left: 0;top: 51px;z-index: 111;display: none;
          li{width: 100%;padding: 15px;color: rgb(0, 0, 0)}
          li:hover{color: #ca0000;}
        }
      }
      .active{background-color: #ca0000;color: #fff;}
      .activeitem:hover{background-color: #ca0000;color: #fff;cursor: pointer;
        .itemli{display: block;background-color: #fff;border-radius: 0 0 6px 6px;}
      }
    }

  }
</style>

