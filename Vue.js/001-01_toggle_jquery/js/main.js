// [jQuery] ページ読み込み後の処理
$(function() {
	$('.menu li').on('click', function() {
			$(this).toggleClass('is-active');
	});
});
