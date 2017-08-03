<template>
  <div class="wrapper">
    <header class="navbar">
    </header>
    <main class="main">
      <div class="login-wrap">
        <transition name="form-fade" mode="in-out" v-show="showLogin">
          <section class="login-container" v-show="showLogin">
            <div class="login-title">{{loginTitle}}</div>
            <div class="login-form">
              <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px">
                <el-form-item prop="username">
                  <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                  <el-button type="primary" @click="submitForm('loginForm')" :loading="isloading">登录</el-button>
                </div>
              </el-form>
            </div>
          </section>
        </transition>
      </div>
    </main>
    <footer class="footer">
      <a href=''>Chrome下载</a>
      <span class="pull-right text-muted" v-html="copyRight">
      </span>
    </footer>
  </div>
</template>

<script>
import { requestLogin } from '@/api/api'
// import NProgress from 'nprogress'
export default {
  data () {
    return {
      loginTitle: '苏州市公安局交警警务平台',
      copyRight: '<a href="http://10.35.243.54:88/sjjg">苏州市公安局交警警务平台</a> © 2016 苏州市公安局交通警察支队. 技术支持 <a href="http://www.cybertech.com.cn">苏州广达</a>',
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      showLogin: false,
      isloading: false
    }
  },
  mounted () {
    this.showLogin = true
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isloading = true
          // NProgress.start()
          let loginParams = { username: this.loginForm.username, password: this.loginForm.password }
          requestLogin(loginParams).then(data => {
            this.isloading = false
            // NProgress.done()
            let { msg, code, user } = data
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('user', JSON.stringify(user))
              this.$router.push({ path: '/home' })
            }
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          })
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
header.navbar {
  height: 70px;
  background: url(~@/assets/img/logo.png) no-repeat;
  background-position: 10px;
  margin-bottom: 0px;
}

.main {
  height: calc(100% - 70px - 70px);
}

.login-wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #020031 0, #6d3353 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-wrap:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(~@/assets/img/bs-docs-masthead-pattern.png) repeat center center;
  opacity: .6;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-title {
  height: 80px;
  font-size: 40px;
  color: #fff;
}

.login-form {
  z-index: 1;
  padding: 10px;
  width: 300px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}

.footer {
  height: 70px;
  padding: 40px 10px;
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}

.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -100px, 0);
}
</style>



