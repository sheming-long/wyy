import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
export const fetchPlaylistHot = () => http.get('/playlist/hot');
export const fetchPlaylists = (cat) =>
  http.get('/top/playlist', { params: { cat } });
/**
 * @description 获取默认搜索关键词
 */
export const fetchSearchDefault = () => http.get('/search/default');

export const fetchSearchResult = (params) => http.get('/search', { params });

export const fetchSearchSuggest = (keywords) =>
  http.get('/search/suggest', { params: { keywords } });

export const fetchHomeData = () => http.get('/homepage/block/page');

export async function fetchToplistDetail() {
    const res = await http.get('/toplist/detail');
    const playlist = await Promise.all(res.data.list.map(({ id }) => http.get('playlist/detail', { params: { id } })));
    return playlist.map(item => item.data.playlist)
  }
  