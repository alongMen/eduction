<template>
    <div class="courseinfobox">
        <div class="nodata" v-show="!iscourse">
            <img src="../../../assets/img/nodata.png" alt=""><br>
            <span style="color:#ccc;padding-left:30px;font-size:12px;">暂无课程，期待更多课程 ~</span>
        </div>
        <el-row  class="row-bg" justify="space-around" v-show="iscourse">
            <el-col :span="8" v-for="(item,index) in 3" :key="index">
                <div class="grid-content">
                    <img src="../../../assets/img/coursepic.png" alt="">
                    <p>{{item}}</p>
                </div>
            </el-col>
        </el-row>
        <div class="block navblock" v-show="iscourse">
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "subject",
        data() {
            return {
                iscourse:true,
                currentPage3: 5,
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style scoped>
.main{overflow-y: auto!important;}
.courseinfobox{padding: 20px}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
.grid-content img{width: 145px;height: 198px;}
  .row-bg {
    padding: 10px 0;
    background-color: #fff;
  }
  .navblock{margin-top: 40px;margin-bottom: 60px;}
  .nodata{text-align: center;margin-top: 100px;}
</style>
