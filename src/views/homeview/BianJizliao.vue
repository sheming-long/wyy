<template>
    <div>
        <!-- 头部 -->
        <div class="flex text-[4.4vw] items-center pl-[4.2vw] pt-[4.2vw] mb-[3.8vw]">
            <router-link :to="{ path: '/PhotoWall' }">
                <Icon icon="ri:arrow-left-line" style="font-size: 5vw" class="font-600  text-[black]" />
            </router-link>
            <p>我的资料</p>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class=" h-[15vw] mt-[3vw]" style="border-bottom: 1px solid #f5f5f5;">
                <div class="h-[12vw] flex items-center justify-between">
                    <p>头像</p>
                    <img :src="headImg" alt="" class="w-[11vw] h-[11vw] rounded-[50%]">
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>昵称</p>
                <p class="text-[#ccc]">{{ userName }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>性别</p>
                <p class="text-[#ccc]">{{ sex }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]">
                <p>二维码</p>
                <p>
                    <Icon icon="mingcute:qrcode-line" class=" text-[#ccc]" />
                </p>
            </div>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>生日</p>
                <p class="text-[#ccc]">{{ birthday }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>地区</p>
                <p class="text-[#ccc]">{{ region }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>大学</p>
                <p class="text-[#ccc]">{{ university }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>音乐标签</p>
                <p class="text-[#ccc]">{{ musicTags }}</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>简介</p>
                <p class="text-[#ccc]">{{ briefIntroduction }}</p>
            </div>
        </div>
        <div class="h-[1.9vw] bg-[#f5f5f5]"></div>
        <div class="pl-[4.2vw] pr-[4.2vw]">
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
                <p>个人主页隐私设置</p>
            </div>
            <div class="flex items-center justify-between h-[12vw] mb-[2vw]" style="border-bottom: 1px solid #f5f5f5;">
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
import { loginStatus, userDetail, fetchUserAccount,fetchUserSubcount } from '@/request'
export default {
    data() {
        return {
            //用户名
            userName: '游客',
            //头像
            headImg: '',
            //性别
            sex: '未设置',
            // 生日
            birthday: '未设置',
            // 地区
            region: '湖北省 宜昌市',
            // 大学
            university: '未填写',
            // 音乐标签
            musicTags: '选择标签',
            // 简介
            briefIntroduction: '还没有简介',
        }
    },
    methods: {
        // 获取生日
        getBirthday(timestamp){
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; 
            const day = date.getDate();
            return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        }
    },
    async created() {
        //用户等级
        const loginStatu = await loginStatus()
        //获取登录后的用户名
        this.userName = loginStatu.data.data.profile.nickname
        //头像
        this.headImg = loginStatu.data.data.profile.avatarUrl

        
        
        //获取用户详情
        const userSubcount = await fetchUserSubcount()
        const userAccount = await fetchUserAccount()
        const userDateil = await userDetail(userAccount.data.account.id)
        console.log(userDateil, userAccount,userSubcount)
        //判断有没有设置生日
        if (userAccount.data.profile.birthday > 0) {
            this.birthday = this.getBirthday(userAccount.data.profile.birthday)
        }
        //判断男女
        if (userAccount.data.profile.gender == 1) {
            this.sex = '男'
        } else if (userAccount.data.profile.gender == 0) {
            this.sex = '保密'
        } else {
            this.sex = '女'
        }
        
        //简介
        this.briefIntroduction = userDateil.data.profile.signature
        
    }
}
</script>