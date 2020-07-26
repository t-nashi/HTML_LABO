// [JavaScript] HTMLの準備を待たずに実行する（main.jsを読み込んだタイミングで実行）
// 使わなくてもいける
// (function() {

new Vue({
  el: "#app",
  data: {
    show: true,
  },
  computed: {
    label: function () {
      return this.show ? "閉じる" : "開く";
    },
  },
});

// })();
