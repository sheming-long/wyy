<template>
  <div>
    <!-- 头部 -->
    <div
      class="flex text-[4.4vw] items-center pl-[4.2vw] pt-[4.2vw] mb-[3.8vw]"
    >
      <router-link :to="{ path: '/PhotoWall' }">
        <Icon
          icon="ri:arrow-left-line"
          style="font-size: 5vw"
          class="font-600 text-[black]"
        />
      </router-link>
      <p>我的资料</p>
    </div>
    <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
    <div class="pl-[4.2vw] pr-[4.2vw]">
      <div class="h-[15vw] mt-[3vw]" style="border-bottom: 1px solid #f5f5f5">
        <div class="h-[12vw] flex items-center justify-between">
          <p>头像</p>
          <img :src="headImg" alt="" class="w-[11vw] h-[11vw] rounded-[50%]" />
        </div>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p >昵称</p>
        <p class="text-[#ccc]" @click="nickNamePopupt()">{{ userName }}</p>

        <van-popup 
        v-model="nickNameBoolean" 
        position="bottom" 
        :style="{ height: '100%' }"

        >
      <div class="flex text-[4.4vw] items-center pl-[1vw] pt-[4.2vw] mb-[3.8vw] w-[100%] pr-[1vw]" style="justify-content: space-between; align-items: center;">
            <div class="flex" style="justify-content: space-between; align-items: center;">
              <Icon
                icon="ri:arrow-left-line"
                style="font-size: 7vw"
                class="font-600 text-[black] w-[10vw]" 
                @click.native="nickNamePopuptf()"
              />
               <p class="font-[600]">修改昵称</p>
            </div>
            <span class="font-[600]" @click="NMconfirmation()">保存</span>
      </div>
            <input
                  type="text"
                  v-model="userName"
                  ref="inputField"
                  class="w-[100%] h-[12vw] px-[4vw] font-[600] text-[#333334] mb-[3vw] "
                  @input="userNameDetection" 
                  placeholder="请输入昵称"
                  style="text-indent: ;font-size:4vw; border-bottom: 1px solid gray;"
                  
                />
            <div
              class="px-[4vw] flex items-center text-[#eb4d44] text-[2.6vw]"
             :style="{ display: !promptText ? 'none' : 'flex' }"
            >
              <Icon :icon="promptText === '昵称可用～' ? 'icon-park-twotone:correct' : 'dashicons:warning'"
               ></Icon>
              {{promptText}}
            </div>
            <span
              class="px-[3vw] py-[2.5vw] bg-[#f1f1f1] mx-[4vw] mt-[3vw] rounded-[2vw] text-[5vw]"
              :style="!candidateNicknames ? 'display: none;' : 'display: inline-block;'"
              @click="dianjiqi(),userNameDetection()"
            >
              {{candidateNicknames}}
            </span>
        </van-popup>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p >性别</p>
        <p class="text-[#ccc]" @click="genderPopup()">{{this.genderList[this.gender] }}</p>

        <van-popup
            v-model="genderBoolean"
            position="bottom"
            style="height: 50vh;"
          >
            <van-picker
              show-toolbar
              :columns="genderList"
              :default-index="gender"
              @confirm="genderConfirm"
              @cancel="gendercancel"
              @confirm-button-text="完成"
              @cancel-button-text="取消"
            />
          </van-popup>
      </div>
      <div class="flex items-center justify-between h-[12vw] mb-[2vw]">
        <p>二维码</p>
        <p>
          <Icon icon="mingcute:qrcode-line" class="text-[#ccc]" />
        </p>
      </div>
    </div>
    <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
    <div class="pl-[4.2vw] pr-[4.2vw]">
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
       
      >
        <p clickable>生日</p>
        <p class="text-[#ccc]"  @click="showPopupsr">{{ birthday }}</p>
        <van-popup v-model="showsr">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel ="showxxsr"
            @confirm="confirmsr"
          />
        </van-popup>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p>地区</p>
        <div clickable @click="showPopup" style="padding: 0">
          <p class="text-[#ccc] text-right">
            {{ this?.province[0] }}{{ this?.city[0] }}
          </p>
        </div>
        <van-popup v-model="show">
          <p class="p-[5vw] font-bold">请选择省市</p>
          <van-area
            :area-list="areaList"
            :columns-num="2"
            @confirm="confirm"
            @cancel="showxx"
          />
        </van-popup>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p>大学</p>
        <p class="text-[#ccc]">{{ university }}</p>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p>音乐标签</p>
        <p class="text-[#ccc]">{{ musicTags }}</p>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p>简介</p>
        <p class="text-[#ccc]">{{ briefIntroduction }}</p>
      </div>
    </div>
    <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
    <div class="pl-[4.2vw] pr-[4.2vw]">
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p>个人主页隐私设置</p>
      </div>
      <div
        class="flex items-center justify-between h-[12vw] mb-[2vw]"
        style="border-bottom: 1px solid #f5f5f5"
      >
        <p>主页模块顺序设置</p>
      </div>
    </div>
    <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
    <div class="pl-[4.2vw] pr-[4.2vw]">
      <div class="flex items-center justify-between h-[12vw] mb-[2vw]">
        <p>账号和绑定设置</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { areaList } from '@vant/area-data';
import { DatetimePicker } from 'vant';
import { Picker } from 'vant';
Vue.use(Picker);
Vue.use(DatetimePicker);
import {
  loginStatus,
  userDetail,
  fetchUserAccount,
  fetchUserSubcount,
  fetchUserDetail,
  featNicknameCheck,
  fetchUserUpdata,
} from '@/request';
export default {
  data() {
    return {
      province: [], // 省
      
      city: [], // 市
      //用户名
      userName: '游客',
      userNamecopy :0,
      //头像
      headImg: '',

      gender: '', // 性别
      genderList: ['保密', '男', '女'], // 性别列表

      birthday: '未设置',
      // 大学
      university: '未填写',
      // 音乐标签
      musicTags: '选择标签',
      // 简介
      briefIntroduction: '还没有简介',

      areaList,
      //弹出层
      show: false,//地区
      showsr:false,//生日
      genderBoolean: false,//性别
      nickNameBoolean: false,//昵称
      
      // 细日期
      birthday: 0,
      minDate: new Date(1970, 1, 1), //最小日期
      maxDate: new Date(2025, 10, 1), //最大日期
      currentDate: new Date(this.birthday), //当前日期
      day:0,
      promptText: null, //提示文本
      candidateNicknames: null, //推荐用户名
    };
  },
  async created() {
    const res1 = await fetchUserAccount();
    this.userName = res1.data.profile.nickname; // 用户名
    this.userNamecopy = this.userName
    this.userNameUrl = res1.data.profile.avatarUrl; // 用户头像
    const res2 = await fetchUserDetail(res1.data.profile.userId);
    this.gender = res2.data.profile.gender; // 性别
    this.birthday = new Date(res2.data.profile.birthday); //截取日期
    this.getBirthday(this.birthday);
    

    //用户等级
    const loginStatu = await loginStatus();
    //头像
    this.headImg = loginStatu.data.data.profile.avatarUrl;
    // 获取用户详情

    //获取用户详情
    const userSubcount = await fetchUserSubcount();
    const userAccount = await fetchUserAccount();
    const userDateil = await userDetail(userAccount.data.account.id);
    console.log(userDateil, userAccount, userSubcount);

   
    
    //简介
    this.briefIntroduction = userDateil.data.profile.signature;
    this.province[0] = this.postalCodeSearch(
      // 省
      'province_list',
      res2?.data?.profile?.province
    );
    this.province[1] = res2?.data?.profile?.province + ''; // 省的邮编

    this.city[0] = this.postalCodeSearch(
      // 市
      'city_list',
      res2?.data?.profile?.city
    );
    this.city[1] = res2?.data?.profile?.city + ''; // 市的邮编
  },

  methods: {



    // 昵称弹出
    async nickNamePopupt() {
      this.nickNameBoolean = true
    
    },
    // 昵称的变更
    dianjiqi (){
     this.userName=this.candidateNicknames
    },
    // 昵称收起
    async nickNamePopuptf() {
      this.nickNameBoolean = false
      this.userName=this.userNamecopy
    },
    //昵称的验证
    async userNameDetection() {
      const res1 = await featNicknameCheck(this.userName);
      this.candidateNicknames = res1?.data?.candidateNicknames
        ?.slice(0, 1)
        .join('');
      if (res1.data.code === 400) {
        this.promptText = '昵称不能少于4个英文或2个汉字';
      } else if (res1.data.code === 200 && this.candidateNicknames) {
        this.promptText = '昵称已经被注册，请换一个';
      } else if (res1.data.code === 200) {
        this.promptText = '昵称可用～';
      }
    },
    //昵称的确认
    NMconfirmation(){
      this.nickNameBoolean = false
      this.userNamecopy=this.userName
      this.updateUserInformation()
    },




    // 省市区的查找
    postalCodeSearch(key, zipCode) {
      if (areaList.hasOwnProperty(key) && areaList[key][zipCode]) {
        let src = areaList[key][zipCode];
        return src;
      }
    },
    // 获取生日
    getBirthday(birthday) {
      const date = new Date(birthday);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
     
      this.birthday =  `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
      console.log(this.day);
    },



    // 生日弹窗true
    showPopupsr() {
      this.showsr = true;
    },
   // 生日弹窗false
    showxxsr() {
      this.showsr = false;
      console.log(this.showsr);
    },
    // 生日确定
    confirmsr(e) {
      this.showsr = false;
      console.log(e);
      this.getBirthday(e)
      this.updateUserInformation();
    },


    // 地区弹窗开
    showPopup() {
      this.show = true;
    },
    // 地区弹窗关
    showxx() {
      this.show = false;
    },
    // 地区点击事件
    confirm(e) {
      this.show = false;
      this.province[0] = e[0].name;
      this.city[0] = e[1].name;
      this.province[1] = e[0].code;
      this.city[1] = e[1].code;
      this.updateUserInformation();
    },

    // 性别操作
    // 弹出层的显示隐藏
    genderPopup() {
      this.genderBoolean = true
    },
    genderConfirm(e) {
      this.genderBoolean = false
      this.gender = this.genderList.indexOf(e); // 查找对应性别 获取对应的下标
      this.updateUserInformation();
    },
    gendercancel() {
      this.genderBoolean = false
      
    },

    // 传信息
    async updateUserInformation() {
      const res1 = await fetchUserUpdata(
        this.userName,
        this.gender,
        this.province[1], 
        this.city[1],
        new Date(this.birthday).getTime(),

        );
      console.log(res1);
      
    },
  },
};
</script>
<style>
.van-cell {
  padding: 0 !important;
  width: 20vw !important;
}
/* .van-ellipsis {
  color: red;
} */

.van-popup {
  border-radius: 3vw;
}

.van-picker {
  border-radius: 3vw;
  width: 80vw;
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
}

.van-picker__toolbar {
  justify-content: flex-end;
}

.van-picker-column__item--selected > .van-ellipsis {
  color: red;
}

.van-picker__cancel {
  color: red !important;
}
.van-picker__toolbar {
  /* display: -webkit-box; */
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: flex-end !important;
  height: 44px;
}

.van-picker__confirm {
  color: red !important;
}

</style>