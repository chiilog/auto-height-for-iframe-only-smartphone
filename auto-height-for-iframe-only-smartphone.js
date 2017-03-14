jQuery(function($) {
	$(window).on('load', resizeIframe() );

	var resizeTimer = false;
	$(window).resize(function() {
		if (resizeTimer !== false) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			resizeIframe();
		}, 200);
	});

	function resizeIframe() {
		$('.iframe-height').each(function() {
			var D = $(this)[0].contentWindow.document;
			if( D.body == null ) {
				$(this).on('load', function() {
					// 初回読み込み時
					$(this).removeAttr('height').css('height', resizeHeight( D.getElementsByTagName('html')[0] ) + 'px');
				});
			} else {
				$(this).removeAttr('style').css('height', resizeHeight( D.getElementsByTagName('html')[0] ) + 'px');
			}
		});
	}

	function resizeHeight( t ) {
		var num = Math.max( t.scrollHeight, t.offsetHeight, t.clientHeight );
		return num;
	}
});
