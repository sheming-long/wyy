import MusicPlayback from './MusicPlayback.vue';
import player from '../Player/player.js';
Vue.use(player)
MusicPlayback.install = function (V) {
  V.component(this.name, this);
};
export default MusicPlayback;
