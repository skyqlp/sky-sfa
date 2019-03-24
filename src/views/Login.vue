<template>
  <div class="Login">
    <!--头部-->
    <h1 class="Login-title">欢迎登录宝洁SFA系统</h1>
    <div class="top_hat"></div>
    <!--login-->
    <div class="Login-box">
      <div class="login-warp">
        <div class="logo-box"></div>
      </div>
      <!--登陆表单-->
      <div class="input-group" :class="{active: active_md===1,error:errors.has('cno')}">
        <label for="cm_code">公司编号:</label>
        <input
          name="cno"
          v-validate="{required:true ,max:6,min:4}"
          type="number"
          @focus="active_md=1"
          id="cm_code"
          v-model="cm_code"
        >
      </div>
      <div class="input-group" :class="{active: active_md===2 ,error:errors.has('pno')}">
        <label for="PNO">员工编号:</label>
        <input
          name="pno"
          v-validate="{required:true ,max:12,min:4}"
          type="number"
          @focus="active_md=2"
          id="PNO"
          v-model="PNO"
        >
      </div>
      <div class="input-group" :class="{active: active_md===3 ,error:errors.has('pass')}">
        <label for="Password">用户密码:</label>
        <input
          name="pass"
          v-validate="{required:true ,max:20,min:6}"
          type="password"
          @focus="active_md=3"
          id="Password"
          v-model="password"
        >
      </div>
      <div class="check-box-row">
        <div class="ckbox-wrap" @click="remembset" :class="{ckActive: rememb}">
          <i class="iconfont" :class="{'iconyigouxuan':rememb,'iconweigouxuan':!rememb}"></i>
          <span>记住密码</span>
        </div>
        <div class="ckbox-wrap" @click="autoLoginset" :class="{ckActive : autoLogin}">
          <i class="iconfont" :class="{'iconyigouxuan':autoLogin,'iconweigouxuan':!autoLogin}"></i>
          <span>自动登陆</span>
        </div>
      </div>
    </div>
    <div class="btn-warp" @click="loginbtnClick()">
      <p>登陆</p>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';

export default {
  name: "login",
  data() {
    return {
      cm_code: "",
      PNO: "",
      password: "",
      active_md: 1,
      rememb: false,
      autoLogin: false
    };
  },
  methods: {
    autoLoginset() {
      this.autoLogin = !this.autoLogin;
      this.autoLogin && (this.rememb = true);
    },
    remembset() {
      this.rememb = !this.rememb;
      this.rememb || (this.autoLogin = false);
    },
    loginbtnClick() {
      //判断表单是否检验通过
      if (this.errors.any()) {
        return;
      }
      /*loading加载 防止二次点击*/
      Indicator.open('加载中...')
      
      setTimeout (()=>{
        Indicator.close()
        this.$router.push('/about')
      },2000)
    }
  },
  mounted() {
    //强制校验
    this.$validator.validate()
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>


<style lang="stylus" scoped>
@import '~@/assets/style/stylus.stylus';

/* 共用类 */
.active {
  color: $bgColor !important;
  border: 2px solid $bgColor !important;
}

.error {
  color: red !important;
  border: 2px solid red !important;
}

.Login {
  height: 100%;
  width: 100%;
  background: #2ade69;

  .Login-title {
    height: 1.48rem;
    color: #ffffff;
    text-align: center;
    font-size: 0.36rem;
    line-height: 1.48rem;
    font-weight: bold;
  }

  .top_hat {
    width: 5.37rem;
    height: 0.18rem;
    background: #eeeeee;
    margin: 0 auto;
    border-radius: 0.18rem 0.18rem 0 0;
  }

  .Login-box {
    width: 6rem;
    height: 8.36rem;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 0.2rem;

    .login-warp {
      padding: 0.8rem 0;

      .logo-box {
        width: 1.9rem;
        height: 1.9rem;
        background: url('../assets/logo.jpg');
        background-size: cover;
        margin: 0 auto;
      }
    }
  }

  .input-group {
    border: 2px solid #e2e2e2;
    border-radius: 0.45rem;
    font-size: 0.28rem;
    line-height: 0.9rem;
    padding: 0 0.36rem;
    color: #757575;
    width: 4.73rem;
    margin: 0 auto 0.3rem;

    input {
      border: 0 none;
      font-size: 0.28rem;
      padding-left: 0.1rem;
    }
  }

  .check-box-row {
    display: flex;
    font-size: 0.24rem;
    width: 4.73rem;
    margin: 0 auto;
    line-height: 0.5rem;
    justify-content: space-around;
  }

  .ckActive {
    color: $bgColor !important;
  }

  .btn-warp {
    width: 6rem;
    height: 1rem;
    margin: 0 auto;
    background: #fff;
    font-size: 0.36rem;
    color: #10903d;
    border-radius: 0.2rem;
    text-align: center;
    line-height: 1rem;
    margin-top: 0.2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
}
</style>