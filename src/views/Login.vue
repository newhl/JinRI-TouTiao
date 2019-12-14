<template>
  <div>
    <!-- 导航头 -->
    <van-nav-bar title="登录"/>
    <!-- 输入文本框 -->
    <van-cell-group>
      <van-field left-icon="phone-o" v-model="user.mobile" placeholder="请输入用户名" />
      <van-field left-icon="contact" v-model="user.code" placeholder="请输入密码">
        <van-button slot="button" type="primary" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login-btn">
    <van-button class="btn" type="info" @click="handleLogin">登录按钮</van-button>
    </div>
  </div>
</template>

<script>
import { Login } from '../api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    // 点击按钮 除了登录
    async handleLogin () {
      try {
        const res = await Login(this.user)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login-btn {
    padding: 20px;
    .btn {
      width: 100%;
    }
  }
</style>
