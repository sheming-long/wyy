import Vue from "vue";
import Dialog from "./Dialog.vue";

// 创建一个Dialog的vue子类
export default function (option) {
  return new Promise(function (resolve, reject) {
    const VueDialog = Vue.extend(Dialog);
    const instanceOfDialog = new VueDialog({
      // 将visible属性作为选项传递
      visible: option.visible,
      data() {
        return {
          title: option.title,
          message: option.message,
        }
      },
      methods: { resolve, reject }
    });
    instanceOfDialog.$mount();
    document.querySelector('body').appendChild(instanceOfDialog.$el);
  })
}
