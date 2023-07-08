import { areaList } from '@vant/area-data';
import styled from 'styled-components-vue';
const Wrapper = styled.div`
   
    `
export default {
  render() {
    return (
      <div>
        <van-popup
          v-model={this.popupVisible}
          position="bottom"
          style={{ height: '40%' }}
        >
          <van-area
            columns-num="2"
            confirm-button-text="完成"
            area-list={areaList}
            onConfirm={this.confirm}
          />
        </van-popup>
      </div>
    );
  },
  data() {
    return {
      popupVisible: true,
    };
  },
  methods: {
    confirm(e) {
      this.popupVisible = false;
      console.log(e);
    },
  },
};