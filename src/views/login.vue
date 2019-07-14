<template>
  <div class="site-wrapper site-page--login">

    <el-dialog @open="openActivateForm" title="账户激活" :visible.sync="activateFormVisible">
      <el-form :model="activateForm" :rules="activateFormRules" ref="activateForm">
        <el-form-item label="激活码">
          <el-input v-model="activateForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学员">
          <el-select v-model="activateForm.student_id" placeholder="请选择活动区域">
            <el-option
              v-for="item in studentList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="activateFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="activateAccount">确 定</el-button>
      </div>
    </el-dialog>

    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="brand-info">
          <p class="brand-info__intro">欢迎使用教育教学系统</p>
        </div>
        <div class="login-main">
          <h3 class="login-title">教育教学系统平台学生登录</h3>
          <el-form :model="form" :rules="rules" ref="form" @keyup.enter.native="doLogin()" status-icon>
            <el-form-item prop="userName">
              <el-input v-model="form.userName" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item  prop="code">
              <el-row :gutter="20">
                <el-col :span="14">
                  <el-input v-model="form.code" placeholder="验证码">
                  </el-input>
                </el-col>
                <el-col :span="10" class="login-captcha">
                  <img :src="imgUrl" @click="changeCode()" title="换一张" alt="换一张">
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn-submit" type="primary" @click="doLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activateFormVisible: false,
        studentList: [],
        imgUrl: '',
        activateForm: {
          code: '',
          student_id: ''
        },
        school_id: '',
        form: {
          userName: '',
          password: '',
          code: ''
        },
        activateFormRules: {
          code: [
            { required: true, message: '请输入激活码', trigger: 'blur' }
          ],
          student_id: [
            { required: true, message: '请选择学员', trigger: 'blur' }
          ],
        },
        rules: {
          userName: [
            { required: true, message: '帐号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
      }
    },

    created () {

    },

    methods: {

      changeCode () {
        this.imgUrl = this.imgUrl + '?' + new Date().getTime()
      },

      activateAccount () {
        let that = this
        that.$refs['activateForm'].validate(function (valid, rules) {
          if (valid) {
            that.axios.post(that.$httpApi.httpUrl('/front/userInfo/activateAccount'), that.form)
              .then(function (response) {
                if (response.data.code === 1) {
                  that.activateFormVisible = false
                  that.$message({
                    type: 'success',
                    message: response.data.message
                  })

                } else {

                }
              })
          } else {
            that.showErrorMessage(that, rules)
          }
        })
      },

      openActivateForm () {
        let that = this
        that.axios.get(that.$httpApi.httpUrl('/api/pagination'), {
          params: {
            sqlId: 'student.info.list',
            schoolId: that.school_id
          }
        }).then(function (response) {
           that.studentList = response.data.data
        })
      },

      // 提交表单
      doLogin () {
        let that = this
        that.$refs['form'].validate(function (valid, rules) {
          if (valid) {
            that.axios.post(that.$httpApi.httpUrl('/front/userInfo/login'), that.form)
              .then(function (response) {
                if (response.data.code === 1) {
                  that.$message({
                    type: 'success',
                    message: response.data.message
                  })
                  sessionStorage.setItem('front_token', response.data.token)
                  setTimeout(function () {
                    location.href = '/#/home'
                  }, 2000)
                } else if (response.data.code === 2) { // 未激活状态
                  that.school_id = response.data.school_id
                  that.activateFormVisible = true
                } else {
                  that.$message({
                    type: 'error',
                    message: response.data.message
                  })
                  that.changeCode()
                }
              })
          } else {
            that.showErrorMessage(that, rules)
          }
        })

      }
    },

    showErrorMessage (that, rules) {
      let message = ''
      for (let rule in rules) {
        message = rules[rule][0].message
        if (message) {
          break
        }
      }
      that.$message({
        type: 'error',
        message: message
      })
      return false
    }
  }
</script>

<style lang="scss" scoped>
  .site-wrapper.site-page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(~@/assets/img/login_bg.jpg);
      background-size: cover;
    }
    .site-content__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }
    .site-content {
      min-height: 100%;
      padding: 30px 500px 30px 30px;
    }
    .brand-info {
      margin: 220px 100px 0 90px;
      color: #fff;
    }
    .brand-info__text {
      margin:  0 0 22px 0;
      font-size: 48px;
      font-weight: 400;
      text-transform : uppercase;
    }
    .brand-info__intro {
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.58;
      opacity: .6;
    }
    .login-main {
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }
    .login-title {
      font-size: 16px;
    }
    .login-captcha {
      overflow: hidden;
      > img {
        width: 100%;
        cursor: pointer;
      }
    }
    .login-btn-submit {
      width: 100%;
      margin-top: 38px;
    }
  }
</style>
