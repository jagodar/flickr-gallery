(function() {
	var form = document.querySelector('.form');
	const config = {
		form: form,
		tags: form.querySelectorAll('li'),
		list: form.querySelector('ul'),
		input: form.querySelector('input'),
		button: form.querySelector('button'),
		section: document.querySelector('section')
	}

	tagsList.init(config);

}());