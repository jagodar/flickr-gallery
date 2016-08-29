const tagsList = (function () {
	
	function init(config) {
		Array.from(config.tags).forEach(function(element) {
			let tag = element.innerText;
			galleryActions.add(config, tag);
			element.setAttribute('id', 'li-' + tag);
			element.innerHTML += ` <a id="a-` + tag + `">Remove</a>`;
			var a = element.querySelector('a');
			a.onclick = function() {
				galleryActions.remove(config, tag);
			}
		});
		addButton(config);
	}

	function addButton(config) {
		config.button.onclick = function(e) {
			e.preventDefault();
			let value = config.input.value;
			let tag = document.createElement('li');

			galleryActions.add(config, value);

			tag.setAttribute('id', 'li-' + value);
			tag.innerHTML = value + ` <a id="a-` + value + `">Remove</a>`;
			config.list.appendChild(tag);
			var a = tag.querySelector('a');
			a.onclick = function() {
				galleryActions.remove(config, value);
			}
			config.input.value = "";		
		}
	}

	return {
		init: init
	};
}());
