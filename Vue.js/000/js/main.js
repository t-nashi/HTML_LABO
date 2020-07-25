// [JavaScript] HTMLの準備を待たずに実行する（main.jsを読み込んだタイミングで実行）
// 使わなくてもいける
// (function() {

// Vue.jsコンポーネントの作成例
Vue.component("sample-component", {
  // コンポーネントの名前
  props: ["listdata"], // コンポーネント外から受け取れるプロパティ
  template: `
		<div>
				<slot></slot>
				<div v-if="isDataEmpty">{{ noDataMessage }}</div>
				<ol class="ol-list">
						<li v-for="item in listdata" v-bind:key="item.id" v-bind:style="listItemStyle">
								{{ item.text }}: 
								<button v-on:click="deleteItem(item.id)" v-bind:style="deleteButtonStyle">Delete</button>
						</li>
				</ol>
		</div>
	`,
  data() {
    // コンポーネント内で使えるリアクティブなデータをまとめる関数（必ず関数にする。しないとVue.jsに認識されない）
    return {
      noDataMessage: "データはありません",
      listItemStyle: {
        // CSSスタイルのプロパティはCaml形式で指定可能。
        // color: "#207720",
        // fontSize: "20px",
      },
      deleteButtonStyle: {
        // backgroundColor: "#333333",
        // color: "white",
        // borderWidth: "0px",
        // fontSize: "16px",
      },
    };
  },
  methods: {
    // コンポーネント内で使える関数をまとめるプロパティ。
    deleteItem(id) {
      this.$emit("delete", id);
    },
  },
  computed: {
    // 計算した結果を返すプロパティ。HTMLからはdataと同じように使える。
    isDataEmpty() {
      return this.listdata.length < 1;
    },
  },
});

// Vue.jsの機能の初期化
var app = new Vue({
  el: "#app", // 初期化の対象とする要素。この要素以下でVue.jsの諸機能を使える。
  data: {
    // リアクティブなデータをまとめるプロパティ。
    message: "Hello Vue!",
    listTitle: "サンプルコンポーネント",
    currentId: 3,
    sampleList: [
      {
        // 配列のデータバインディング
        id: 1,
        text: "list item 1",
      },
      {
        id: 2,
        text: "list item 2",
      },
      {
        id: 3,
        text: "list item 3",
      },
    ],
    addButtonStyle: {
      // CSSスタイルっぽいものもデータバインディングできる。
      // width: "100px",
      // height: "32px",
      // backgroundColor: "#5555cc",
      // color: "white",
      // borderWidth: "0px",
      // fontSize: "16px",
    },
  },
  methods: {
    // クリック時などに実行する関数をまとめるプロパティ。
    addItem() {
      this.currentId++;
      this.sampleList.push({
        id: this.currentId,
        text: this.message + " " + this.currentId,
      });
    },
    deleteItem(id) {
      this.sampleList.some((v, i) => {
        if (id === v.id) this.sampleList.splice(i, 1);
      });
    },
  },
});

// })();
