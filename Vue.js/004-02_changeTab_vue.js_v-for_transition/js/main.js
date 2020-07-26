// [JavaScript] HTMLの準備を待たずに実行する（main.jsを読み込んだタイミングで実行）
// 使わなくてもいける
// (function() {

new Vue({
  el: "#app",
  data: {
    current: 1,
    list: [
      {
        id: 1,
        label: "menu1",
        content: "content1",
      },
      {
        id: 2,
        label: "menu2",
        content: "content2",
      },
      {
        id: 3,
        label: "menu3",
        content: "content3",
      },
    ],
  },
  methods: {
    active: function (id) {
      return this.current == id;
    },
    changeTab: function (id) {
      this.current = id;
    },
  },
});

// })();
