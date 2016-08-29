const sort = (function () {
	function start(componentId, type) {
		var component = document.querySelector("#" + componentId);
		var li = component.querySelectorAll('li');
		var array = [];

		Array.from(li).forEach(function(element) {
			element.style.display = 'none';
			var date = element.dataset[type];
			var obj = {
				date: date,
				element: element
			};
			array.push(obj);
		});

		array.sort(function(a, b) {
			return new Date(b.date) - new Date(a.date);
		})

		for (var i = 0; i < 4; i++) {
			array[i].element.style.display = 'initial';
		}
	}

	function init(tag) {
		var published = document.querySelector("#sort-published" + tag);
		var taken = document.querySelector("#sort-taken" + tag);
		published.onclick = function() {
			sort(tag, 'published');
		};
		taken.onclick = function() {
			sort(tag, 'taken');
		};
	}

	return {
		start: start,
		init: init
	};

}());