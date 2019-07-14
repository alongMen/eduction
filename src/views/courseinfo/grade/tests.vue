<template>
    <div class="courseinfobox">
        <el-card class="box-card" style="width:100%;background-color:#f5f5f5;">
            <div slot="header" class="clearfix title-head">
                <div class="opt-title">填空题</div>
            </div>
            <el-row class="test-content">
                <el-col :span="20">
                    <div class="grid-content">
                        <span>1、中国的国家领导是人</span><input type="text" class="answer-content"><span>。</span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content comment">
                        <span class="el-icon-video-play"></span> 点评                      
                    </div>
                </el-col>
            </el-row>
            <el-row class="test-content">
                <el-col :span="20">
                    <div class="grid-content">
                        <span>2、中国的国家领导是人</span><input type="text" class="answer-content"><span>。</span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content comment">
                        <span class="el-icon-video-play"></span> 点评                      
                    </div>
                </el-col>
            </el-row>
            <el-row class="test-ans">
                <p style="color:#23794a">答案：A</p>
                <p style="color:#23794a">解析：哈哈哈哈哈哈</p>
            </el-row>
        </el-card>
        <el-card class="box-card" style="width:100%;background-color:#f5f5f5;">
            <div slot="header" class="clearfix title-head">
                <div class="opt-title">判断题</div>
            </div>
            <div v-for="o in 2" :key="o">
                <el-row class="test-content">
                    <el-col :span="20">
                        <div class="grid-content">
                            <span>{{o}}、曹县的国家领导是人奥巴马。</span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content comment">
                            <span class="el-icon-video-play"></span> 点评                      
                        </div>
                    </el-col>
                </el-row>
                <el-row class="test-answer">
                    <el-radio  v-model="radio1" label="正确">正确</el-radio><br>
                    <el-radio  v-model="radio1" label="错误">错误</el-radio>
                </el-row>
                <el-row class="test-ans">
                    <p style="color:#23794a">答案：A</p>
                    <p style="color:#23794a">解析：哈哈哈哈哈哈</p>
                </el-row>
            </div>
        </el-card>
        <el-card class="box-card" style="width:100%;background-color:#f5f5f5;">
            <div slot="header" class="clearfix title-head">
                <div class="opt-title">选择题</div>
            </div>
            <div v-for="(item,index) in 1" :key="index">
                <el-row class="test-content">
                    <el-col :span="20">
                        <div class="grid-content" style="height:100%;">
                            {{index+1}}、辅导费
                            <img style="width:30px;" src="http://47.112.137.215/uploads/file/image/20190602/1559477391299023538.png" title="1559477391299023538.png" alt="word.png"/>
                            <img style="width:40px;" class="kfformula" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABACAYAAACa5WD/AAAFA0lEQVR4Xu2bWch1UxjHf595nueQmRRRyJBM4UJx9SW+j1JIRC6kpMiYMVwgciUy3HFB4cJ4QZRkzDzP8zzrp2fXbve+zt7nPed5j9V66tT37rPWXmf/1rOf9Tz/tb4lVEshsCRllDoIFXSSE1TQFXQSgaRhqkdX0EkEkoapHl1BJxFIGqZ6dAWdRCBpmOrRFfRYBDYGvgH+BtYHvgd+Abz+E/BjXP8L+HasEcbsVJJHrwPsAzwD/AnsAbwJfAIcAHwEvA3sCfwGvDQms7G6lQR6CIANgJWAz4Z0WkjbkkDvAPwBvNMDiG1XA17s0XYiTUoCvXWEjA97kFkR/lUunZgUKwn0EGBrAsL+bkinhbQtCfRW4aEf9wBSQ0cPSPM12TFAm1mMstWBFSLdG9V2It+X5NFDgKwcMdo0L8WyQR8H7A/cCrwCWDhsBiwDfgBubj31hsANwAPAg8DXgJ64N7AcuBR4r9XeosT7fdmDXPGhQ6B3dEC8C1wI3A382gF9J3Bkp/29wHnAW53ruwK/A6/3AL1uLIZf9Wg7kSbZHi1oS2QLBVf+T6N6m+sV1qPPBu4CNgmIrwLCscTumjFX06tnzhYDtAXFUz1ICPp04Brg5x7t9VIhq2+Msu2jYEkrw0sCPSR0GM9dENU/Uqwk0GtESOnj/Slw24MsBmhBbB7ZgbF5X8BF74VO7DV0nAk8C/iqvwbsHvKmC6qSZ9vULozd7QV1PqCW66sAb2QRXwzQplZXteLuNsAtwOXAY60HF/T18Xkurvt7zwJ2As7twDZ0uCA6IVvGoqnm7P1NHb8AtmjdR9B9ipuJzEU2aL1OIact5vgbzo/8+JSWdCk02yvYt21n4B7g6ngTmu/ULtaKCdwFsBT/HNgtMp33ASdZS/Pk5sdlg57PO44G7gOOAB4e4UJmF7cF0DN6ZhkT8cqF3GRWQLsD8iRwWoSR/3omq8PrAD3bvDwtc/g/gHZCTwQOBi4AfI3b1oD2u0sAlbiLgUeB2zuLZAPaRfTYiMkLYZDSN8ujjbXXxt7d8cDLnac7HHgIOAa4PzIR/7ZYuSwE/abL2sCNoXucnL3JOu6sZIH2950EuPshwLY1i+GhwAnRxvTP1O6KOcT5ZjEUtrF6rnJ8XB5T65cJ2mrsIuCm1l6d4x8SQM8BHm896VJg21DwmtxYb74ydrHNVNq5tLvgBwFPxBuwX7w5Tq5vjOKVqZ9hyiMITco4Nbhdb0oZKAZRSFLi3Cty2O3iOICyaVvytLmTYIFyani1ypzivsXKI/MUJlaHQtQMVxZEppJet78fr5s6Nn+nPH+mR0/7gTYKUamP9Fm8Hj1N2ENEpfXiXIfVYoqV5NEeiNHSjhAMmaGSQLtQqkd3xaa5eLjIGqvdTkuxkkAPCR2bhh79QQrlWNmzxpr2OGY05tRdEWra4/a6f0ke7Y6JZto2ypRRlUm7G7yj+o39fUmgh4QOtRRBe6w3xUoC7VFcF0N32WfOSgI9BK7HF0wH0yTWkkC7q2IO3Wf3xD3IVedQEYdM1qC2JYFW8TN0eChn5qwk0EPguh1m6OhzTm/IfedtWxJolUBDhyqg6pw5tZ/2v5vnbU4q1f9aMYYbqXfrqS5wh0X8NX07KjYTngcODPhPl35sdwx+ZXQpKXTM9IxU0EnTU0FX0EkEkoapHl1BJxFIGqZ6dAWdRCBpmOrRFXQSgaRhqkcngf4HhjjvQZ+rW3IAAAAASUVORK5CYII=" data-latex="{55}^{\placeholder }_{\placeholder }"/>                          
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
        </el-card>
        <el-card class="box-card" style="width:100%;background-color:#f5f5f5;">
            <div slot="header" class="clearfix title-head">
                <div class="opt-title">综合题</div>
            </div>
            <div v-for="o in 2" :key="o">
                <el-row class="test-content">
                    <el-col :span="20">
                        <div class="grid-content">
                            <span>{{o}}、证明1+1=2。</span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content comment">
                            <span class="el-icon-video-play"></span> 点评                      
                        </div>
                    </el-col>
                </el-row>
                <el-row class="test-opt1">
                    <textarea  id="" cols="30" rows="10"></textarea>
                </el-row>
                <el-row class="test-ans">
                    <p style="color:#23794a">答案：A</p>
                    <p style="color:#23794a">解析：哈哈哈哈哈哈</p>
                </el-row>
            </div>
        </el-card>
        <el-row class="subrow">
            <el-button class="submitbtn">提交</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "tests",
        data() {
            return {
                radio1:  true,

            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>
.box-card{box-shadow: none!important;border-radius: none!important;}
.courseinfobox{padding: 20px}
.box-card{width: 100%}
.text {font-size: 14px;}
.clearfix:before,.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
.box-card {width: 480px;}
.title-head{background-color: #fff;height: 60px;padding-left: 50px;padding-top: 20px;}
.opt-title{border-left:2px solid #24794b;padding-left: 10px;}
.test-content{background-color: #fff;margin-left: 50px;min-height: 60px;padding: 20px;margin-bottom: 10px;}
.test-answer{background-color: #fff;margin-left: 50px;min-height: 60px;padding: 10px;margin-bottom: 10px;padding-left: 60px;margin-top: -20px;}
.test-opt{background-color: #fff;margin-left: 50px;min-height: 60px;padding: 10px;margin-bottom: 10px;padding-left: 60px;margin-top: -20px;}
.test-opt1{background-color: #fff;margin-left: 50px;min-height: 60px;padding: 10px;margin-bottom: 10px;margin-top: -20px;}
.test-ans{padding:10px 80px;font-size: 14px;}
.answer-content{border:none;font-size: 14px;border-bottom: 1px solid #000;background-color: rgba(0, 0, 0，0);line-height: 20px;margin-top: -20px;}
.answer-content:focus {border: none;outline: none;line-height: 20px;border-bottom: 1px solid #000;margin-top: -20px;}
.comment{color: #24794b;}
.subrow{display: flex;justify-content: center;margin-top: 60px;}
.submitbtn{background-color: #24794b;color: #fff;width:160px;border-radius: 10px;}
textarea{border:none;width: 100%;text-indent: 2em;padding: 10px;}
textarea:focus{border:none;width: 100%;text-indent: 2em;padding: 10px;outline: none;}
</style>
