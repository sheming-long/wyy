import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
//添加请求拦截器
http.interceptors.request.use(function (config) {
  const cookie = store.get('__m__cookie') ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config;
});

// 主页
export async function fetchToplistDetail() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(res.data.list.map(({ id }) => http.get('playlist/detail', { params: { id } })));
  return playlist.map(item => item.data.playlist)
}
export const Homeblock = () => http.get('/homepage/block/page')
export const Homedragon = () => http.get('/homepage/dragon/ball')
export const Homecal = () => http.get('/calendar?startTime=1677417600000&endTime=1677417600000')



// login 登录
export const fetchLoginQrKey = () => http.get('/login/qr/key')

/**
* @descriptiong 二维码生成接口
*/
export const fetchLoginQrCreate = (key, qrimg = 1) => http.get('/login/qr/create', { params: { key, qrimg } })

/**
* @descriptiong 二维码检测扫码状态接口
*/
export const fetchLoginQrCheck = (key) => http.get('/login/qr/check', { params: { key, timestamp: Date.now() } })



export const loginStatus = () => http.get('/login/status')
/**
* @descriptiong 获取账户信息
*/
export const fetchUserAccount = () => http.get('/user/account', { params: { id: 123 } })

/**
* @descriptiong 获取账户信息
*/
export const fetchUserDetail = (uid) => http.get('/user/detail', { params: { uid } });

/**
* @descriptiong 获取用户歌单
*/
export const fetchUserPlaylist = (uid) => http.get('/user/playlist', { params: { uid } });

/**
* @descriptiong 获取用户评论
*/
export const fetchUserHistory = (uid) => http.get('/user/comment/history', { params: { uid } });
/**
* @descriptiong 转发的动态
*/
export const fetchUserdynamics = (uid) => http.get('/user/event/forward', { params: { uid } });

/**
* @descriptiong 播客/电台
*/
export const fetchdj = (uid) => http.get('/user/subcount', { params: { uid } });

//获取用户信息 , 歌单，收藏，mv, dj 数量
export const userSubcount = (uid) => http.get('/user/subcount')

//获取用户等级
export const userLevel = (uid) => http.get('/user/level')

//获取用户关注
export const userGuanZhu = (uid) => http.get(`/user/follows`,{ params: { uid } })

//获取用户粉丝
export const userFolloweds = (uid) => http.get(`/user/followeds`,{ params: { uid } })
// 获取用户信息
export const fetchUserSubcount = () => http.get('/user/subcount')

//获取实际地址
export const myIP = ()=>ipData.get(`/${params}`)

//获取用户详情
export const userDetail = (uid) => http.get(`/user/detail`,{ params: { uid } })
/**
* @description 获取默认搜索关键词
*/
export const fetchSearchDefault = () => http.get('/search/default');

/**
* @description 搜索
*/
export const fetchCloudsearch = (keywords) => http.get('/cloudsearch', {
  params: { keywords },
});

/**
* @description 播放器
*/
export const getMP3 = (id) =>
	http.get(`/song/url/v1`, { params: { id, level: 'standard' } })

export const getTrackDetail = (id) => http.get('/song/detail', { params: { ids: id } });

/**
* @description 重复昵称检测
*/
export const featNicknameCheck = (nickname) => http.get('/nickname/check', { params: { nickname } });


/**
* @description 更新用户信息
*/
export const fetchUserUpdata = (nickname,gender, province, city, birthday) => http.get('/user/update', {
  params: {
    nickname, // 用户昵称
    gender, // 性别 0:保密 1:男性 2:女性
    province, // 省份id
    city, // 城市id
    birthday, // 出生日期,时间戳 unix timestamp
  }
});