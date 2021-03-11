function counter() {
	var count = setInterval(function () {
		var c = parseInt($('.counter').text());
		$('.counter').text((++c).toString());
		if (c == 99) {
			clearInterval(count);
		}
	}, 60)
}
counter();