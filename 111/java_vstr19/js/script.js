$('document').ready(function() {
	$('.load').on('click', function() {
		event.preventDefault();
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					document.querySelector('.news')
						innerHTML = xml.responseText;
				} else {
					alert ('Ohrana');
				}
			}
		};
	});
});