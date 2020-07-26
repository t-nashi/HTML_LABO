// [JavaScript] HTMLの準備を待たずに実行する（main.jsを読み込んだタイミングで実行）
// 使わなくてもいける
// (function() {

const app = new Vue({
  el: "#navMenu",
  data: {
		target: null,
		classValue: 'is-active',
  },
  methods: {
    toggleMenu: function(e) {
      // console.log(e);
      this.target = e.currentTarget;
      this.target.classList.toggle(this.classValue);
    },
  },
});

// })();
