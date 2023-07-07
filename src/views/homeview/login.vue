<template>
  <div class="w-screen h-screen p-[4vw] bg-[#fcfcfe]">
    <div class="flex items-center justify-between">
      <!-- 返回图标 -->
      <Icon
        icon="ep:arrow-up-bold"
        :rotate="3"
        class="text-[#040404] dark:text-[#e9e9e9] text-[6vw]"
        @click.native="home"
      />
      <span class="text-[#6c6c6c] text-[4vw]">游客登录</span>
    </div>
    <div class="flex items-center flex-wrap justify-center mt-[15vw]">
      <img src="\static\logo.fill.svg" alt="" class="w-[50vw]" />
      <div v-if="code === 801 || code === 800">
        <div class="flex justify-center w-[100%] my-[8vw] relative">
          <img :src="qrcode" alt="" class="w-[50vw] h-[50vw]" />
          <div
            v-if="code === 800"
            class="w-[50vw] h-[50vw] absolute flex items-center justify-center bg-[#dedede] bg-opacity-50"
          >
            <button
              @click="requestAgain"
              class="w-[20vw] h-[8vw] bg-[#fa5331] text-[#fff] rounded-[10vw] text-[3vw]"
            >
              点击刷新
            </button>
          </div>
        </div>
        <p class="text-[3vw] w-[100%] text-center">
          使用
          <span class="text-[#1462bd]">网易云音乐APP</span>
          扫码登录
        </p>
      </div>
      <div v-else-if="code === 802">
        <img
          src="/static/tangshiren.png"
          alt=""
          class="mx-[auto] my-0 h-[50vw] mt-[8vw]"
        />
        <p class="text-center text-[4vw] font-semibold my-[7vw]">扫描成功</p>
        <p class="text-center text-[3vw]">请在手机上确认登录</p>
      </div>
    </div>
    <img
      src="/static/bg-login.png"
      alt=""
      class="fixed bottom-0 left-0 w-screen"
    />
  </div>
</template>

<script>
import {
  fetchLoginQrKey,
  fetchLoginQrCreate,
  fetchLoginQrCheck,
} from '../../request/index.js';
import store from 'storejs';

export default {
  name: 'login',
  data() {
    return {
      qrcode: '', // 二维码路径
      code: 801, // 状态判断
    };
  },
  methods: {
    home() {
      this.$router.push('/HomeView');
    },
    async requestAgain() {
      const res = await fetchLoginQrKey().catch((err) => {
        console.log(err);
      });
      const qrinfo = await fetchLoginQrCreate(res.data.data.unikey).catch(
        (err) => {
          console.log(err);
        }
      );
      this.qrcode = qrinfo.data.data.qrimg;
      this.pollingCheck(res.data.data.unikey, 1000);
    },
    pollingCheck(key, interval = 1000) {
      const timer = setInterval(async () => {
        const res = await fetchLoginQrCheck(key).catch((err) => {
          console.log(err);
        });
        // 二维码过期时
        if (res.data.code === 800) {
          clearInterval(timer);
          this.code = 800; // 设置 是否过期
        }
        // 等待确认时
        else if (res.data.code === 802) {
          this.code = 802; // 设置 授权登录成功时状态
        }
        // 授权登录成功时
        else if (res.data.code === 803) {
          clearInterval(timer);
          this.$router.push('/HomeView');
          store.set('__m__cookie', res.data.cookie);
        } else {
          this.code = 801;
        }
      }, interval);

      // 在自己生命周期销毁前 关闭这个定时器
      this.$on('hook:beforeDestroy', () => clearInterval(timer));
    },
  },
  async created() {
    const res1 = await fetchLoginQrKey().catch((err) => {
      console.log(err);
    });

    const res2 = await fetchLoginQrCreate(res1.data.data.unikey).catch(
      (err) => {
        console.log(err);
      }
    );
    this.qrcode = res2.data.data.qrimg;

    this.pollingCheck(res1.data.data.unikey, 1000);
  },
  beforeDestroy() {
    // 页面销毁前做一些事情
    // console.log('beforeDestroy');
  },
};
</script>

<style>



</style>
