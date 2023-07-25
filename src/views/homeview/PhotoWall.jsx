import styled from 'styled-components-vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import { areaList } from '@vant/area-data';
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');
// console.log(dayjs(1688776267489).fromNow());
import {
    fetchUserAccount,
    fetchUserDetail,
    fetchUserPlaylist,
    fetchUserHistory,
    fetchUserdynamics,
    fetchdj,
    userFolloweds,//粉丝
    loginStatus,//用户信息
    userLevel,//用户等级
    userGuanZhu, //用户关注
} from '../../request/index';
const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    background: url(/static/R.jpg);
    background-size: cover;
    
    .xuanxiangka{
        background-color: #f5f5f5;
        padding:3vw;
        border-radius: 3vw;
        min-height: 100vh;
        margin-top: 49vw;
       
    }
    .custom-class {
    white-space: normal;
  }

  div::-webkit-scrollbar {
  width: 0;
  }
  div::-webkit-scrollbar-thumb {
  opacity: 0;
}
div::-webkit-scrollbar-track {
  opacity: 0;
}
.element {
 
  background-color: #f5f5f5;
  position: sticky;
  top: 0;
}

.sticky-color {
  background-color: white; /* 设置为你想要的颜色 */
  position:fixed;
  width: 100%;
  top: 9vw;
  margin-left: -3vw;
}
`
export default {
    render() {
        return (
        <Wrapper>

                {/* 头部  */}
                {this.scrollThreshold<30&&
                <div class="flex justify-between pt-[3vw] pl-[3vw] pr-[3vw]">
                <Icon icon="ri:arrow-left-line" style="font-size: 7vw; color:white" class="font-600 text-[5vw] "
                    nativeOnClick={this.home}
                />
                <p style="width: calc(22vw);align-items: center;justify-content: space-between;" class="flex">
                    <span class="h-[4vw]  rounded-[2vw] text-right text-[2vw] bg-white flex "
                        style="align-items: center;justify-content: space-around; width: calc(12vw)"
                    >照片墙</span>
                    <span class="  h-[3vw] rounded-[50%] " style="background:#dabca3;width:3vw"></span>
                    <span class="  h-[2vw] rounded-[50%] " style="background:#dabca3;width:2vw"></span>
                </p>
                <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-white" style="font-size: 7vw; color:white" />
            </div>
                 }
                 {this.scrollThreshold>30&this.scrollThreshold<=258&&
                         <div class="flex justify-between pt-[3vw] pl-[3vw] pr-[3vw] " style="position: sticky;top: 0;">
                         <Icon icon="ri:arrow-left-line" style="font-size: 7vw; color:white" class="font-600 text-[5vw] "
                             nativeOnClick={this.home}
                         />
                         <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-white" style="font-size: 7vw; color:white" />
                     </div>
                 }
                 {this.scrollThreshold >485&&
                         <div class="flex justify-between pt-[3vw] pl-[3vw] pr-[3vw] z-[999] bg-white w-[100%]" style="position: fixed;top: 0; ">
                         <Icon icon="ri:arrow-left-line" style="font-size: 7vw; color:black" class="font-600 text-[5vw] "
                             nativeOnClick={this.home}
                         />
                         <p class=" font-[550]" style="font-size:4vw; margin-left:-68vw ;display: flex;align-items: flex-end;">麹伊</p>
                         <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-black" style="font-size: 7vw;" />
                     </div>
                 }
                {this.scrollThreshold>258&this.scrollThreshold<485&&
                         <div class="flex justify-between pt-[3vw] pl-[3vw] pr-[3vw] z-[50]  bg-white w-[100%] sticky top-0" style={{ opacity:this.scrollThreshold * 0.002849 }}>
                         <Icon icon="ri:arrow-left-line" style="font-size: 7vw; color:black" class="font-600 text-[5vw] "
                             nativeOnClick={this.home}
                         />
                         <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-black" style="font-size: 7vw;" />
                     </div>
                 }
                
                     
                {/* 内容部分 */}
                <div class="xuanxiangka">
                    {/* 上部分 个人信息 */}
                    <div class=" text-center relative bg-white" style="border-radius: 5vw;">
                        <div class="flex flex-col items-center relative"  style={{ opacity:1-this.scrollThreshold * 0.002849 }}>
                            <img src={this.headImg} alt="" class=" absolute top-[-9vw]  w-[18vw] h-[18vw] rounded-[50%]" style="" />
                            <p class="mt-[10vw] font-[550] text-[5vw]" style=""  >{this.userName}</p>
                        </div>
                        <div class="flex justify-center mt-[3vw]">
                            <p class="mr-4 text-[#999ba2]" style="font-size:3vw">{this.guanzhu} 关注</p><span  class="mr-4 text-[#e6e6e6]" style="font-size:3vw">|</span>
                            <p class="mr-4 text-[#999ba2]" style="font-size:3vw">{this.fenshiNum} 粉丝</p><span  class="mr-4 text-[#e6e6e6]" style="font-size:3vw">|</span>
                            <p class="mr-4 text-[#999ba2]" style="font-size:3vw">LV.{this.level}</p>
                        </div>
                        <div class="flex justify-center mt-[3vw] mb-[4vw]">
                            <p class="mr-4 pl-[1.5vw] pr-[1.5vw]  rounded-[1.2vw] text-[3vw] h-[6.1vw] flex" style="border: 1px solid #e6e6e6;align-items: center;">IP：东京</p>
                            <p class="mr-4 pl-[1.5vw] pr-[1.5vw]  rounded-[1.2vw] text-[3vw] h-[6.1vw] flex" style="border: 1px solid #e6e6e6; align-items: center;">{this?.province[0]}{this?.city[0]}</p>
                            <p class="mr-4 pl-[1.5vw] pr-[1.5vw]  rounded-[1.2vw] text-[3vw] h-[6.1vw] flex" style="border: 1px solid #e6e6e6; align-items: center;">村龄 4年</p>
                        </div>
                        <div class="flex justify-center items-center pb-[3vw]">
                            <router-link to={`/BianJizliao/`}>
                                <p class="w-[24vw] p-[2vw] mr-[1vw] h-[8.15vw] font-[600]" style="border-radius: 15vw;border: 1px solid #e6e6e6; font-size:3.3vw">编辑资料</p>
                            </router-link>
                            <button onClick={this.change} style="transition: all 1s;"
                                class={this.isHeight ? 'rotate-0' : 'rotate-180'} >
                                <Icon icon="system-uicons:chevron-down-circle" color="#E6e6e6" class=" text-[10vw]" />
                            </button>
                        </div>
                        <div class="overflow-auto" id='more' style="transition: all 1s;height:0vw">
                            <div class="flex w-[150vw] mb-[3.7vw]" >
                                <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                    <p class="text-[3vw]">麹义</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了麹义
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                    <p class="text-[3vw]">麹义</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了麹义
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                    <p class="text-[3vw]">麹义</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了麹义
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                    <p class="text-[3vw]">麹义</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了麹义
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                                <div class="w-[28vw] h-[40vw] bg-slate-200 ml-[4vw] flex-wrap justify-center items-center flex flex-col" style="border-radius: 2vw;">
                                    <img src={this.headImg} alt="" class="w-[11.5vw] h-[11.5vw] mb-[1.5vw]" style="border-radius: 50%;" />
                                    <p class="text-[3vw]">麹义</p>
                                    <p class="text-[2.3vw] w-[17vw] mb-[2vw] text-[#ccc]" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                        共同关注了麹义
                                    </p>
                                    <p class="text-[2.5vw] pl-[3vw] pr-[3vw] py-[1.5vw] text-[#ea4d44]" style="border-radius: 5vw;border: 1px solid #ed9e9c;">
                                        +关注
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 点击部分 */}        
                    <div class={this.isColorAdded ?"sticky-color":"element"}  >
                        <p class="text-[4vw] font-[600] flex h-[13vw] w-[100%]" style="justify-content: space-around;     align-items: center; ">
                            <span class="text-[#919398]"
                                onClick={() => this.value = 0}
                            >主页</span>
                            <span class="text-[#919398]"
                                onClick={() => this.value = 1}
                            >动态</span>
                            <span class="text-[#919398]"
                                onClick={() => this.value = 2}
                            >播客</span>
                        </p>
                    </div>
                    {/* 下部分 */}
                    <div>
                        {/* 主页 */}
                        {this.value === 0 && <div>

                            {/* 音乐品味 */}
                            <div class="w-[94vw]  pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw] pb-[3vw]">
                                <p class="text-[5vw] font-[700]">音乐品味</p>
                                <div class="w-[85.5vw] h-[32.13vw] flex mt-[2.8vw]" style="justify-content: space-around;">
                                    <div class="w-[26.57vw] h-[32.13vw] rounded-[3vw] pt-[3vw] pl-[3.1vw] pb-[2.6vw]"
                                        style="background: rgb(254,243,242);background: linear-gradient(180deg, rgba(254,243,242,1) 0%, rgba(254,254,249,1) 100%);"
                                    >
                                        <p class="text-[#7d808c] text-[3.5vw] font-[600]" style="font-size:3.06vw">我的喜欢</p>
                                        <p class="text-[4vw] font-[700] text-[#515a6a] mt-[3vw]" style="font-size:3.46vw">{this?.establishList[0]?.trackCount}首</p>
                                        <p class="flex mt-[9.5vw] text-[#a5acb7]" style="font-size:2.69vw; align-items: center;"><Icon icon="ph:heart-fill" class="w-[3vw] " /><span class="text-[3vw] text-[#a5acb7]">&nbsp;喜欢的音乐</span></p>

                                    </div>
                                    <div class="w-[26.57vw] h-[32.13vw] rounded-[3vw] pt-[3vw] pl-[3.1vw] pb-[2.6vw]"
                                        style="background: rgb(253,247,230); background: linear-gradient(180deg, rgba(253,247,230,1) 0%, rgba(254,254,249,1) 100%);"
                                    >
                                        <p class="text-[#7d808c] text-[3.5vw] font-[600]" style="font-size:3.06vw">累计听歌</p>
                                        <p class="text-[4vw] font-[700] text-[#515a6a] mt-[3vw]" style="font-size:3.46vw" >{this.listenSongs}首</p>
                                        <p class="flex mt-[9.5vw] text-[#a5acb7]" style="font-size:2.69vw; align-items: center;"><Icon icon="fa6-solid:ranking-star" class="w-[3vw]" /><span class="text-[3vw] text-[#a5acb7]">&nbsp;喜欢的音乐</span></p>

                                    </div>
                                    <div class="w-[26.57vw] h-[32.13vw] rounded-[3vw] pt-[3vw] pl-[3.1vw] pb-[2.6vw]"
                                        style="background: rgb(204,229,247);background: linear-gradient(180deg, rgba(204,229,247,1) 0%, rgba(251,251,254,1) 100%);"
                                    >
                                        <p class="text-[#7d808c] text-[3.5vw] font-[600]" style="font-size:3.06vw">本周关键词</p>
                                        <p class="text-[4vw] font-[700] text-[#515a6a] mt-[2vw] pr-[7vw]" style="font-size:3.46vw">属于你的音乐档案</p>
                                        <p class="flex mt-[5vw] text-[#a5acb7]" style="font-size:2.69vw; align-items: center;"><Icon icon="ant-design:hourglass-filled" class="w-[3vw]" /><span class="text-[3vw] text-[#a5acb7]">&nbsp;黑胶时光机</span></p>

                                    </div>
                                </div>
                            </div>
                            {/* 创建歌单 */}
                            <div class="w-[94vw]  pl-[4.4vw] pb-[3.8vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-semibold" style="font-size:4.63vw">创建的歌单 <span class="text-[#d5d5d5] text-[3vw]">({this.establishList.length}个)</span></p>

                                {this.establishList.map((item) => (
                                    <div class="flex  mt-[3vw]" >
                                        <div class="w-[14.35vw] h-[14.35vw]">
                                            <img
                                                src={item.coverImgUrl}
                                                alt=""
                                                class="w-[14.35vw] h-[14.35vw] rounded-[2vw] bg-black z-[2] "
                                                style=";"
                                            />
                                        </div>
                                        <div class="ml-[3vw] w-[64vw] flex " style="flex-direction: column;justify-content: space-around">
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  font-[530] w-[64vw]" style="font-size:4.1vw">{item.name}</p>
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  text-[#808080] w-[64vw]" style="font-size:3vw">
                                                {item.trackCount}首，{item.creator.nickname}，播放
                                                {this.dataTruncation(item.playCount)}次</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                            {/* 收藏的歌单 */}
                            <div class="w-[94vw]  pl-[4.4vw] pb-[3.8vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-semibold" style="font-size:4.63vw">收藏的歌单 <span class="text-[#d5d5d5] text-[3vw]">({this.songList.length})</span></p>

                                {this.songList.slice(0, 10).map((item) => (
                                    <div class="flex  mt-[3vw]" >
                                        <div class="w-[14.35vw] h-[14.35vw]">
                                            <img
                                                src={item.coverImgUrl}
                                                alt=""
                                                class="w-[14.35vw] h-[14.35vw] rounded-[2vw] bg-black z-[2] "
                                                style=";"
                                            />
                                        </div>
                                        <div class="ml-[3vw] w-[64vw] flex " style="flex-direction: column;justify-content: space-around">
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  font-[530] w-[64vw]" style="font-size:4.1vw">{item.name}</p>
                                            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  text-[#808080] w-[64vw]" style="font-size:3vw">
                                                {item.trackCount}首，{item.creator.nickname}，播放
                                                {this.dataTruncation(item.playCount)}次</p>
                                        </div>
                                    </div>))}

                            </div>
                            {/* 我的评论 */}
                            <div class="w-[94vw]  pl-[4.4vw] pb-[3.8vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <div class="flex justify-between mb-[4.4vw]">
                                    <p class=" font-semibold text-[5vw] " style="font-size:4.63vw">
                                        我的评论
                                        <span class="text-[#d5d5d5] text-[2.7vw] ml-[1.6vw] font-semibold">
                                            ({this.commentCount})
                                        </span>
                                    </p>
                                    <Icon icon="entypo:lock" color="#b3b3b3" class="text-[4vw]" />
                                </div>
                                {this?.comments?.map((item) => (
                                    <div>
                                        {/* 评论歌曲 */}
                                        <div class="flex justify-between" style="align-items: center;">
                                            <div class="flex">
                                                <div class="w-[7.3vw] h-[7.3vw] rounded-[1.2vw] flex bg-[#e5e4e5]" style="align-items: center;justify-content: space-around;">
                                                    <Icon icon="icon-park-outline:broadcast" style="font-size:[3vw];color:#ffffff" />
                                                </div>
                                                <div class="text-[rgb(177,180,187)] text-[2.8vw] ml-[2.3vw] flex" style="align-items: center;">
                                                    {item.user.nickname}的动态-分享声音
                                                </div>
                                            </div>
                                            <Icon
                                                icon="tabler:thumb-up-filled"
                                                color="#b3b3b3"
                                                class="text-[3.7vw]"
                                            />
                                        </div>
                                        {/* 评论文字 */}
                                        <div class="mt-[3.6vw] font-extrabold text-[3.6vw] text-[#2a3146]">
                                            {item?.content}
                                        </div>
                                        {/* 多久之前 */}
                                        <p class="mt-[3vw] text-[rgb(169,173,181)] text-[3vw]">
                                            {dayjs(item?.time).fromNow()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            {/* 基本信息 */}
                            <div class="w-[94vw] pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw] pb-[3vw]">
                                <p class="text-[5vw] font-semibold flex"
                                    style="justify-content: space-between;align-items: center; font-size:4.63vw"
                                ><span class="flex">基本信息 </span>
                                    <span class="flex w-[22.8vw] h-[6.5vw] rounded-[3.75vw] text-[3.24vw]"
                                        style="border:1px solid #e6e6e6; justify-content: space-around; line-height:6.5vw">领取村民证</span></p>
                                <p class=" text-[#666666] mt-[4.8vw]" style="font-size:3.43vw">村龄:&nbsp;&nbsp;4年(2019年3月注册) </p>
                                <p class=" text-[#666666] mt-[4.8vw]" style="font-size:3.43vw">地区:&nbsp;&nbsp;湖北&nbsp;宜昌</p>
                            </div>

                        </div>}
                        {/* 动态 */}
                        {this.value === 1 && <div class="mt-[3vw]">

                            {this.events.map((item) => (
                                <div>
                                    <div class=" h-[10vw] flex">
                                        <div class="w-[10vw] h-[10vw]">
                                            <img 
                                            src={item.user.avatarUrl} 
                                            alt="" class="w-[10vw] h-[10vw] rounded-[5vw]" />
                                        </div>
                                        <div class="ml-[3.7vw]">
                                            <p class="text-[4vw] font-[600]" style="font-szie:3.9vw">{item.user.nickname}<span class=" text-[#666666] text-[3.9vw]" style="font-szie:3.9vw">&nbsp;分享声音:</span></p>
                                            <p class="text-[2vw] text-[#666666]">{dayjs(item?.eventTime).fromNow()}</p>
                                        </div>
                                    </div>

                                    <div class="pl-[13.5vw]  w-[100%]">

                                        <div class=" w-[75vw] line-clamp-2 custom-class font-[540] mt-[5.5vw]"
                                            style="word-wrap: break-word; font-size:3.8vw; color:black"
                                        >
                                           {this.extract(item.json)}
                                        </div>

                                        <div class="w-[78.24vw] h-[13.43vw] rounded-[3vw] flex bg-[#e8e6e6] mt-[3.0vw]" style="align-items: center;">
                                            
                                                 <div class="w-[10vw] ml-[2vw] h-[10vw] rounded-[1.2vw] flex bg-[#bcbbbc]" style="align-items: center;justify-content: space-around;">
                                                    <Icon icon="icon-park-outline:broadcast" style="font-size:6vw;color:#ffffff" />
                                                </div>
                                          
                                            <div class="ml-[2vw]">
                                                <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  font-[500] w-[60vw]" style="font-size:3.9vw">{item.info.commentThread.resourceInfo.name}</p>
                                                <p class="overflow-hidden overflow-ellipsis whitespace-nowrap  text-[#808080]" style="font-size:2.8vw">{item.user.nickname}的播客 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>}
                        {/* 播客 */}
                        {this.value === 2 && <div>
                            {/* 创建的播客 */}
                            <div class="w-[94vw] pb-[3.8vw] pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-semibold" style="font-size:4.63vw">创建的播客 <span class="text-[#d5d5d5] text-[3vw]">(1)</span></p>
                                <div class="flex  mt-[3vw]">
                                    <div class="w-[14.35vw] h-[14.35vw]">
                                        <img src="/static/cj.jpg" alt="" class="w-[14.35vw] h-[14.35vw] rounded-[2vw]" />
                                    </div>
                                    <div class="ml-[3vw] flex" style="flex-direction: column;justify-content: space-around;">
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4.1vw] font-[500]">麹义</p>
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3.15vw] text-[#808080]">0播放</p>
                                    </div>
                                </div>
                            </div>
                            {/* 收藏的播客*/}
                            <div class="w-[94vw] pb-[3.8vw] pl-[4.4vw] pr-[4.4vw] pt-[5.2vw] bg-[#fff] rounded-[3vw] mt-[3vw]">
                                <p class="text-[5vw] font-semibold" style="font-size:4.63vw"> 收藏的播客 <span class="text-[#d5d5d5] text-[3vw]">(1)</span></p>
                                <div class="flex  mt-[3vw]">
                                    <div class="w-[14.35vw] h-[14.35vw]">
                                        <img src="/static/sc.jpg" alt="" class="w-[14.35vw] h-[14.35vw] rounded-[2vw]" />
                                    </div>
                                    <div class="ml-[3vw] flex" style="flex-direction: column;justify-content: space-around;">
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4.1vw] font-[500]">2023抖音歌曲翻唱</p>
                                        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3.15vw] text-[#808080]">by&nbsp;温顺良人</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </Wrapper>
        )
    },

    data() {
        return {
            isColorAdded: false, //按钮
            scrollThreshold: 0, // 退出
            value: 0,
            listenSongs: '', // 累计听歌
            songList: [], // 收藏的歌单
            establishList: [], // 创建的歌单
            commentCount: null, // 评论数量
            comments: null, // 评论内容
            events: [],//动态
            proples: [1, 2, 3, 4, 5, 6],
            msg: 'asdasdas',
            //用户名
            userName: '游客',
            //头像
            headImg: '',
            //用户等级
            level: '',
            //用户id
            uid: '',
            //IP地址
            IP: '',
            //实际地址
            dizhi: '',
            //关注
            guanzhu: '',
            //粉丝
            fenshiNum: '',
            //箭头拉伸
            isHeight: false,
            //用户动态
            userDynamics: '',
            // 省
            province:[],
            // 市
            city:[],
            // 暂存
            areaList
        }
    },
    async created() {
        // 获取账户信息
        const res1 = await fetchUserAccount();

        // 获取用户详情
        const res2 = await fetchUserDetail(res1.data.profile?.userId);
        this.listenSongs = res2.data.listenSongs; // 累计听歌
        this.gender = res2.data.profile.gender; // 性别
        // 省市
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
       
        // 收藏、创建歌单
        const res3 = await fetchUserPlaylist(res1.data.profile.userId);
        this.establishList = res3.data.playlist.filter((item) => !item.subscribed); // 创建的歌单
        this.songList = res3.data.playlist.filter((item) => item.subscribed); // 收藏的歌单

        // 评论
        const res4 = await fetchUserHistory(res1.data.profile.userId);
        this.commentCount = res4.data.data.commentCount;
        this.comments = res4.data.data.comments;


        //转发的动态
        const res5 = await fetchUserdynamics(res1.data.profile.userId)
        this.events = res5.data.events
        
        //电台
         const res6 = await fetchdj(res1.data.profile.userId)
         console.log(res6);
         //用户等级
         const userLevelNum = await userLevel()
         this.level = userLevelNum.data.data.level
         //用户关注
         const userGuanZhuNum = await userGuanZhu(userLevelNum.data.data.userId)
         this.guanzhu = userGuanZhuNum.data.follow.length
         //用户粉丝
         const fenshi = await userFolloweds(userLevelNum.data.data.userId)
         this.fenshiNum = fenshi.data.followeds.length
         //获取登录后的用户名
         const loginStatu = await loginStatus()
         this.userName = loginStatu.data.data.profile.nickname
         //头像
         this.headImg = loginStatu.data.data.profile.avatarUrl
 
    },
    methods: {
        // 搜寻省市
        postalCodeSearch(key, zipCode) {
            if (areaList.hasOwnProperty(key) && areaList[key][zipCode]) {
              let src = areaList[key][zipCode];
              return src;
            }
          },
        // 截取汉字
        extract(jsonString) {
            const jsonStringObj = JSON.parse(jsonString); // 转换为JSON对象
            const msg = jsonStringObj.msg; // 获取msg的值
            const chineseCharacters = msg.match(/[\u4e00-\u9fa5]+/g).join(''); // 提取汉字部分
            return chineseCharacters;
          },
        home() {
            this.$router.push('/HomeView');
        },
        // 截取时间
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${Math.floor(playVolume / 100000000)}亿`;
            } else if (playVolume > 100000) {
                return `${Math.floor(playVolume / 10000)}万`;
            } else {
                return playVolume?.toString();
            }
        },
        //轮播高度
        change() {
            const more = document.getElementById('more')
            if (this.isHeight) {
                more.style.opacity = '0'
                more.style.height = '1vw'
                this.isHeight = !this.isHeight
            } else {
                more.style.opacity = '1'
                more.style.height = '47.5vw'
                this.isHeight = !this.isHeight
            }
        },
        // 滚动条
        handleScroll() {
            this.scrollThreshold = window.scrollY
            if(window.scrollY>485){
                this.isColorAdded= true
            }
            else{
               this.isColorAdded= false
            }
           
          }
       
      
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
      },
   
}
