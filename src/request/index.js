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

/**
* @descriptiong 获取账户信息
*/
export const fetchUserAccount = () => http.get('/user/account', { params: { id: 123 } })

/**
* @descriptiong 获取账户信息
*/
export const fetchUserDetail = (uid) => http.get('/user/detail', { params: { uid } });