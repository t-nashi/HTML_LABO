// ・ES5までの変数宣言は「var」のみ
// ・letは「再宣言するとエラーが出る」
// ・constは「定数としてあつかえる宣言」

// js読み込みと同時に実行
(function () {
	console.log("js読み込みと同時に実行");
}());

// html内容読み込み完了後に実行
window.onload = function() {
  console.log("html内容読み込み完了後に実行");
	const e = document.querySelector('.title');
	// console.log(e.innerHTML);
	console.log(e.textContent);
}