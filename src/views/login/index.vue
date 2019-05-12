<template>
  <div class="login-container" :style="bgimg">
    <el-form style="background-color:rgb(250, 250, 240);" ref="loginForm" 
    :model="loginForm" class="login-form" 
       auto-complete="on" label-position="left">
      <h3 class="title">智慧校园考勤管理系统登录</h3>
      <el-form-item prop="username" style="border:solid 1px black;">
        <span class="svg-container"><svg-icon icon-class="user" /> </span>
        <el-input v-model="loginForm.username" name="username" type="text" 
        auto-complete="on" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password" style="border:solid 1px black;">
        <span class="svg-container"><svg-icon icon-class="password" /></span>
        <el-input :type="pwdType"  v-model="loginForm.password" name="password" 
        auto-complete="on" placeholder="密码"
           @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <!-- <el-radio-group v-model="identity" style="padding-bottom:20px;">
        <el-radio :label="0">学生</el-radio>
        <el-radio :label="1">教师</el-radio>
      </el-radio-group> -->
      <div style="width:100%;text-align:center;">
        <el-button type="primary" style="width:48%;" @click="resetAll">重置</el-button>
        <el-button :loading="loading" type="primary" style="width:48%;" @click.native.prevent="handleLogin">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '12345'
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined,
      identity:0,
      bgimg:{
        backgroundImage: "url(" + require("@/assets/101_images/shouye.jpg") + ")"
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    resetAll(){
      $('#show-list').find('input,select').each(function () {
        $(this).val('');
    });
    this.loginForm = {}
     },

    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
      
    },
    //登录接口
    async handleLogin() {
      var param = {
        UserCode:'1001',
        Password:'1001'
      }
      const data = await api.login(param)
      console.log(data)
      if(data.status!='200'){
        this.$message('用戶名或密碼錯誤');
      }else{
        localStorage.setItem('token',data.data.token)
        // this.$router.push({ path: '/dashboard' })
        this.$store.dispatch('Login', this.loginForm).then(() => {
          this.loading = false
          this.$router.push({ path: this.redirect || '/' })
        }).catch(() => {
          this.loading = false
        })
      }
      // if(data.data.token){
      //   // localStorage.setItem('token',data.data.token)
      //   // this.$refs.loginForm.validate(valid => {
      //   //   if (valid) {
      //       this.loading = true
      //       this.$store.dispatch('Login', this.loginForm).then(() => {
      //         this.loading = false
      //         this.$router.push({ path: this.redirect || '/' })
      //       }).catch(() => {
      //         this.loading = false
      //       })
      // }
      //   //   } else {
      //   //     console.log('error submit!!')
      //   //     return false
      //   //   }
      //   // })
      // }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:rgb(250, 251, 252);
$light_gray:rgb(8, 8, 8);

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: rgb(0, 0, 0) !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #141313;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
// $bg:url(require("../../src/assets/101_images/shouye.jpg"));
$bg:rgb(255, 255, 255);
$dark_gray:#29285c;
$light_gray:rgb(0, 0, 0);
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  //background: $bg;
  background-repeat: no-repeat;
  background-size: 100%;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
