<template>
    <div class="footer" id="talk">
        <div class="container">
           <p>
             <span class="spanitem">错题本</span>|
             <span class="spanitem">智能点评</span>|
             <span class="spanitem">校企合作</span>|
             <span class="spanitem">关于我们</span>
           </p>
           <p>©2016 网站模板—学校 版权所有</p>
           <p>手机版 |本站使用凡科建站搭建 | 管理登录</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer-common"
}
</script>

<style type="less" scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 25px 0;
  }
  .footer .container{
      width: 1100px;
      margin:auto;
  }
  .footer .container p {
      font-size: 16px;
      font-weight: 200;
      line-height: 30px;
  }
  .spanitem{display: inline-block;padding-left: 10px;padding-right: 10px;}
  .spanitem:first-child{padding-left: 0;}
    
</style>
