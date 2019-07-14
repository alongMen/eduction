<template>
    <div class="container learnstyle-page">
        <el-row class="grid-head">
            <el-col :span="12"><div class="grid-content-left">学习模式 ></div></el-col>
            <el-col :span="12"><div class="grid-content-right">< 返回</div></el-col>
        </el-row>
          <el-tabs :tab-position="tabPosition">
            <el-tab-pane class="tab-title" label="基本知识点">
                <H4 class="title">第一单元 走进化学世界</H4>
                <ul >
                    <li class="list-item" v-for="(item,index) in content" :key="index">{{index+1}}、{{item}}</li>
                </ul>
                <div class="block">
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
            </el-tab-pane>
            <el-tab-pane label="视频讲解">
                <div class="items">
                    <el-row class="grid-head-item">
                        <el-col :span="12"><div class="grid-content-left"><h5>基本知识点视频</h5></div></el-col>
                        <el-col :span="12"><div class="grid-content-right">更多 >></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../../assets/img/vedio.png" class="image">
                                <div style="padding: 14px;text-align:center">
                                    <span>初二物理</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="items">
                    <el-row class="grid-head-item">
                        <el-col :span="12"><div class="grid-content-left"><h5>基本例题视频</h5></div></el-col>
                        <el-col :span="12"><div class="grid-content-right">更多 >></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../../assets/img/vedio.png" class="image">
                                <div style="padding: 14px;text-align:center">
                                    <span>初二物理</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="../../../assets/img/vedio.png" class="image">
                                <div style="padding: 14px;text-align:center">
                                    <span>初二物理</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                
                <div class="block navblock">
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
            </el-tab-pane>
            
            <el-tab-pane label="测试题">
                <el-card class="box-card" style="width:100%;background-color:#f5f5f5;">
                    <div slot="header" class="clearfix title-head">
                        <div class="opt-title">选择题</div>
                    </div>
                    <div>
                        <el-row class="test-content">
                            <el-col :span="20">
                                <div class="grid-content" style="height:100%;" v-for="(item,index) in 1" :key="index">
                                    {{index+1}}、辅导费
                                    <p>
                                        <img style="width:30px;" src="http://47.112.137.215/uploads/file/image/20190602/1559477391299023538.png" title="1559477391299023538.png" alt="word.png"/>
                                        <img style="width:40px;" class="kfformula" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABACAYAAACa5WD/AAAFA0lEQVR4Xu2bWch1UxjHf595nueQmRRRyJBM4UJx9SW+j1JIRC6kpMiYMVwgciUy3HFB4cJ4QZRkzDzP8zzrp2fXbve+zt7nPed5j9V66tT37rPWXmf/1rOf9Tz/tb4lVEshsCRllDoIFXSSE1TQFXQSgaRhqkdX0EkEkoapHl1BJxFIGqZ6dAWdRCBpmOrRFfRYBDYGvgH+BtYHvgd+Abz+E/BjXP8L+HasEcbsVJJHrwPsAzwD/AnsAbwJfAIcAHwEvA3sCfwGvDQms7G6lQR6CIANgJWAz4Z0WkjbkkDvAPwBvNMDiG1XA17s0XYiTUoCvXWEjA97kFkR/lUunZgUKwn0EGBrAsL+bkinhbQtCfRW4aEf9wBSQ0cPSPM12TFAm1mMstWBFSLdG9V2It+X5NFDgKwcMdo0L8WyQR8H7A/cCrwCWDhsBiwDfgBubj31hsANwAPAg8DXgJ64N7AcuBR4r9XeosT7fdmDXPGhQ6B3dEC8C1wI3A382gF9J3Bkp/29wHnAW53ruwK/A6/3AL1uLIZf9Wg7kSbZHi1oS2QLBVf+T6N6m+sV1qPPBu4CNgmIrwLCscTumjFX06tnzhYDtAXFUz1ICPp04Brg5x7t9VIhq2+Msu2jYEkrw0sCPSR0GM9dENU/Uqwk0GtESOnj/Slw24MsBmhBbB7ZgbF5X8BF74VO7DV0nAk8C/iqvwbsHvKmC6qSZ9vULozd7QV1PqCW66sAb2QRXwzQplZXteLuNsAtwOXAY60HF/T18Xkurvt7zwJ2As7twDZ0uCA6IVvGoqnm7P1NHb8AtmjdR9B9ipuJzEU2aL1OIact5vgbzo/8+JSWdCk02yvYt21n4B7g6ngTmu/ULtaKCdwFsBT/HNgtMp33ASdZS/Pk5sdlg57PO44G7gOOAB4e4UJmF7cF0DN6ZhkT8cqF3GRWQLsD8iRwWoSR/3omq8PrAD3bvDwtc/g/gHZCTwQOBi4AfI3b1oD2u0sAlbiLgUeB2zuLZAPaRfTYiMkLYZDSN8ujjbXXxt7d8cDLnac7HHgIOAa4PzIR/7ZYuSwE/abL2sCNoXucnL3JOu6sZIH2950EuPshwLY1i+GhwAnRxvTP1O6KOcT5ZjEUtrF6rnJ8XB5T65cJ2mrsIuCm1l6d4x8SQM8BHm896VJg21DwmtxYb74ydrHNVNq5tLvgBwFPxBuwX7w5Tq5vjOKVqZ9hyiMITco4Nbhdb0oZKAZRSFLi3Cty2O3iOICyaVvytLmTYIFyani1ypzivsXKI/MUJlaHQtQMVxZEppJet78fr5s6Nn+nPH+mR0/7gTYKUamP9Fm8Hj1N2ENEpfXiXIfVYoqV5NEeiNHSjhAMmaGSQLtQqkd3xaa5eLjIGqvdTkuxkkAPCR2bhh79QQrlWNmzxpr2OGY05tRdEWra4/a6f0ke7Y6JZto2ypRRlUm7G7yj+o39fUmgh4QOtRRBe6w3xUoC7VFcF0N32WfOSgI9BK7HF0wH0yTWkkC7q2IO3Wf3xD3IVedQEYdM1qC2JYFW8TN0eChn5qwk0EPguh1m6OhzTm/IfedtWxJolUBDhyqg6pw5tZ/2v5vnbU4q1f9aMYYbqXfrqS5wh0X8NX07KjYTngcODPhPl35sdwx+ZXQpKXTM9IxU0EnTU0FX0EkEkoapHl1BJxFIGqZ6dAWdRCBpmOrRFXQSgaRhqkcngf4HhjjvQZ+rW3IAAAAASUVORK5CYII=" data-latex="{55}^{\placeholder }_{\placeholder }"/>                          
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content comment">
                                    <span class="el-icon-video-play"></span> 点评                      
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="test-opt">
                            <el-radio  v-model="radio1" label="1">A、1</el-radio><br>
                            <el-radio  v-model="radio1" label="2">B、2</el-radio><br>
                            <el-radio  v-model="radio1" label="3">C、3</el-radio><br>
                            <el-radio  v-model="radio1" label="4">D、4</el-radio>
                        </el-row>
                        <el-row class="test-ans">
                            <p style="color:#23794a">答案：A</p>
                            <p style="color:#23794a">解析：哈哈哈哈哈哈</p>
                        </el-row>
                    </div>
                    <el-row>
                        <el-button-group class="btngroup">
                            <el-button icon="el-icon-arrow-left" class="pretest" size="small">上一题</el-button>
                            <el-button  class="nexttest" size="small">下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                        </el-button-group>
                    </el-row>
                </el-card>
                <el-row class="subrow">
                    <el-button class="submitbtn">提交</el-button>
                </el-row>
                

            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "learnstyle",
        data() {
            return {
                tabPosition: 'left',
                content:[
                    '化学是研究物质的组成、结构、性质以及变化规律的基础科学。',
                    '我国劳动人民商代会制造青铜器，春秋战国时会炼铁、炼钢。',
                    '绿色化学-----环境友好化学    (化合反应符合绿色化学反应) ①四特点P6（原料、条件、零排放、产品）    ②核心：利用化学原理从源头消除污染 。',
                    '蜡烛燃烧实验（描述现象时不可出现产物名称）  （1）火焰：焰心、内焰（最明亮）、外焰（温度最高）  （2）比较各火焰层温度：用一火柴梗平放入火焰中。现象：两端先碳化；结论：外焰温度最高  （3）检验产物    H2O：用干冷烧杯罩火焰上方，烧杯内有水雾 CO2：取下烧杯，倒入澄清石灰水，振荡，变浑浊  （4）熄灭后：有白烟（为石蜡蒸气），点燃白烟，蜡烛复燃。说明石蜡蒸气燃烧。',
                    `吸入空气与呼出气体的比较 结论：与吸入空气相比，呼出气体中O2的量减少，CO2和H2O的量增多     （吸入空气与呼出气体成分是相同的） 6、学习化学的重要途径——科学探究 一般步骤：提出问题→猜想与假设→设计实验→实验验证→记录与结论→反思与评价 化学学习的特点：关注物质的性质、变化、变化过程及其现象； 7、化学实验（化学是一门以实验为基础的科学） 一、常用仪器及使用方法 （一）用于加热的仪器－－试管、烧杯、烧瓶、蒸发皿、锥形瓶      可以直接加热的仪器是－－试管、蒸发皿、燃烧匙 只能间接加热的仪器是－－烧杯、烧瓶、锥形瓶（垫石棉网—受热均匀）      可用于固体加热的仪器是－－试管、蒸发皿      可用于液体加热的仪器是－－试管、烧杯、蒸发皿、烧瓶、锥形瓶      不可加热的仪器——量筒、漏斗、集气瓶 （二）测容器－－量筒   
                    量取液体体积时，量筒必须放平稳。视线与刻度线及量筒内液体凹液面的最低点保持水平。
量筒不能用来加热，不能用作反应容器。量程为10毫升的量筒，一般只能读到0.1毫升。`
                ],
                currentPage3: 1,
            }
        },
        methods: {
        handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
.learnstyle-page{padding-left: 114px;min-height: 700px;}
.grid-head{margin-bottom: 30px;}
.grid-content-right{text-align: right;color:#24794b;}
.grid-content-left{text-align: left;color:#24794b;}
.items{margin-bottom: 40px;}
.grid-head-item{margin-bottom: 20px}
.grid-head-item .grid-content-left{text-align: left;color:#ff662f;font-size: 20px;padding-left: 10px;border-left: 2px solid #ff662f}
.grid-head-item .grid-content-right{text-align: right;color:#ff662f;font-size: 14px;}
.learnstyle-page .title{color: #24794b}
.list-item{margin-top: 20px;}
.learnstyle-page .block{margin-left: 130px;margin-top: 30px;margin-bottom: 20px}
.courseinfobox{padding: 20px}
.box-card{width: 100%}
.text {font-size: 14px;}
.clearfix:before,.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
.box-card {width: 480px;}
.title-head{background-color: #fff;height: 60px;padding-left: 50px;padding-top: 20px;}
.opt-title{border-left:2px solid #24794b;padding-left: 10px;}
.box-card >>> .test-content{background-color: #fff;margin-left: 50px;min-height: 60px;padding: 20px;}
.box-card >>> .test-opt{background-color: #fff;margin-left: 50px;min-height: 60px;padding: 10px;margin-bottom: 10px;padding-left: 60px;margin-top: -20px;}
.box-card >>> .test-ans{padding:10px 80px;font-size: 14px;}
.answer-content{border:none;font-size: 14px;border-bottom: 1px solid #000;background-color: rgba(0, 0, 0，0);line-height: 20px;}
.answer-content:focus {border: none;outline: none;line-height: 20px;border-bottom: 1px solid #000;}
.navblock{margin-bottom: 50px!important;}
.comment{color: #24794b;}
.btngroup{display: flex;justify-content:space-between;margin-top: 20px;}
.pretest{background-color: #24794b;color: #fff;font-size: 12px;}
.nexttest{background-color: #24794b;color: #fff;font-size: 12px;}
.subrow{display: flex;justify-content: center;margin-top: 60px;}
.submitbtn{background-color: #24794b;color: #fff;width:160px;border-radius: 10px;}
</style>
