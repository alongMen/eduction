<!--  -->
<template>
  <div class="home">
    <div class="banner">
      <swiper :options="swiperOption" >
        <swiper-slide>
          <img src="@/assets/img/swipe1.png" alt="" width="100%" height="600">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/swipe2.png" alt="" width="100%" height="600">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="container">
      <div class="title">
        <h2>特色课程</h2>
        <el-divider><i class="el-icon-guide titleicon"></i></el-divider>
        <h3>以学员满意度、以学员学习效果为本</h3>
      </div>
      <div class="demoList">
        <ul class="clearfix">
          <li class="typeitem">
            <img src="/static/image/ts1.png" class="image"><p class="teacher">预习模式</p>
          </li>
          <li class="typeitem">
            <img src="/static/image/ts2.png" class="image"><p class="teacher">复习模式</p>
          </li>
          <li class="typeitem">
            <img src="/static/image/ts3.png" class="image"><p class="teacher">专题模式</p>
          </li>
          <li class="typeitem">
            <img src="/static/image/ts4.png" class="image"><p class="teacher">题库模式</p>
          </li>
        </ul>
      </div>
       <div class="title">
          <h2>明星教师</h2>
          <el-divider><i class="el-icon-guide titleicon"></i></el-divider>
          <h3>以学员满意度、以学员学习效果为本</h3>
        </div>
       <div class="demoList">
        <ul class="clearfix">
          <li class="typeitem" v-for="(item,index) in 4" :key="index">
            <div class="pic">
              <img src="/static/image/ts1.png" class="image">
              <i class="el-icon-edit iconedit"></i>
            </div>
            <p class="teacher">王老师（数学）</p>
            <p class="teacherinfo">主讲数学，注重学生的兴趣和引导 实用结合；被评为受欢迎的女神教师...</p>
            <div class="starbox">
              <img src="/static/image/star.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
      <div class="advantage">
        <div class="adbox">
          <div class="title">
            <h2>明星教师</h2>
            <el-divider><i class="el-icon-guide titleicon" style="color: #fff;background-color:#595E64;"></i></el-divider>
            <h3 style="color: #fff">以学员满意度、以学员学习效果为本</h3>
          </div>
          <div class="adboxinfo">
            <div class="infoitem" v-for="(item,index) in 4" :key="index">
              <img src="/static/image/ad1.png" alt="">
              <p class="adinfotitile">专业课程</p>
              <p class="adinfocontent">上百多种专业任您挑选</p>
              <div class="adbtn">查看详情</div>
            </div>
          </div>

        </div>
      </div>
   
  </div>
</template>

<script>
  import  { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    components:{
      swiper, swiperSlide 
    },
    data () {
      return {
        swiperOption: {
          autoplay: {
              disableOnInteraction: false,
              delay:3000
          },
          autoplayDisableOnInteraction: false,
          loop: true
        }
      };
    },
    methods:{
      hahaha(){
        this.$router.push("/course")
      }
    }
    // components: {},

    // computed: {},

    // mounted: {},

    // methods: {}
  }

</script>

<style lang='scss' scoped>
  h2 {
    font-size: 36px;
    text-align: center;
    margin: 40px 0;
    font-weight: normal;
  }
  h3 {
    font-size: 18px;
    text-align: center;
    color: #737373;
    margin: 40px 0;
    font-weight: normal;
  }
  .el-divider__text, .el-link {
      font-weight: 500;
      font-size: 45px;
  }

  .demoList ul {
    margin-bottom: 100px;
  }
  .demoList{
    padding-top: 30px;
  }
  .demoList li {
    color: #737373;
    width: 260px;
    min-height: 260px;
    float: left;
    margin-right: 50px;
    border-left: 1px solid #eaeceb;
    border-right: 1px solid #eaeceb;
    box-shadow: 0 2px 3px #b2b2b2;
    text-align: center;
  }
  .teacherinfo{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .demoList li:last-child {
    margin-right: -50px;
  }
  .demoList li .teacher {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: center;
  }
  .typeitem{
    cursor: pointer;
  }
  .demoList li .pic {
    position: relative;
    height: 200px;
    width: 260px;
    border-bottom: 2px solid #CA0000;
    margin-bottom: 15px;
  }
   .demoList li .iconedit{
     position: absolute;
     left: 120px;
     bottom: -25px;
     width: 50px;
     height: 50px;
     line-height: 50px;
     border-radius: 100%;
     border: 2px solid #fff;
     text-align: center;
     background-color: #CA0000;
     color: #fff;
     font-size: 24px;
   }
  .demoList li .image {
    height: 199px;
    width: 100%;
    display: block;
  }
  .demoList li .starbox{
    margin: 30px auto;
    width: 230px;
  }
  .demoList li .starbox img{
    width: 100%;
    height: 100%;
  }
  .advantage{width:100%;height: 800px;background-color:#595E64;padding-top: 30px;color: #fff; margin-bottom: 40px;}
  .advantage .adbox{width: 1100px;margin: 0 auto;}
  .adboxinfo{color: #fff;display: flex}
  .adboxinfo .infoitem{text-align: center;width: 288px;width: 25%;padding: 20px;}
  .adboxinfo .infoitem img{width: 200px;margin-bottom: 30px;}
  .adinfotitile{font-size: 16px;font-weight: 500;line-height: 40px}
  .adinfocontent{line-height: 30px}
  .adbtn{width: 100px;height: 40px;line-height: 40px;background-color: #CA0000;border-radius: 5px;text-align: center;margin: 20px auto;cursor: pointer;}
  .advantage .el-divider__text.is-center{background-color: #595E64;}
</style>
