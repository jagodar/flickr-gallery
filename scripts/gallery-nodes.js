const galleryNodes = (function () {

	function newComponent(tag) {
		var component = document.createElement('div');
		component.setAttribute('data-tag', tag);
		component.setAttribute('class', 'gallery component');
		component.setAttribute('id', tag);

		var header = document.createElement('div');
		header.setAttribute('class', 'gallery-header');

		var sort = document.createElement('div');
		sort.setAttribute('class', 'gallery-sort');
		sort.innerHTML += `
			Sort by:
	        <a id='sort-published-` +  tag + `' onclick="sort.start('` + tag + `', 'published')">date published</a>
	        <a id='sort-taken-` +  tag + `' onclick="sort.start('` + tag + `', 'taken')">date taken</a>
	    `;

	    header.appendChild(sort);
	    component.appendChild(header);

	    return component;
	}

	function init(gallery) {
		const tag = gallery.dataset.tag;
		var header = gallery.querySelector('.gallery-header');
		var h1 = document.createElement('h1');
		h1.setAttribute('class', 'gallery-title');
		h1.innerHTML = tag;
		header.appendChild(h1);
		var list = document.createElement('ul');
		
		flickr.get(tag, function(response) {
			for (var i = 0; i < response.length; i++) {
				let li = document.createElement('li');
				let img = document.createElement('img');
				img.setAttribute('src', response[i].media.m);
				img.onclick = (function(i) {
					return () => { 
						window.open(response[i].link)
					};
				})(i)

				li.dataset.taken = response[i].date_taken;
				li.dataset.published = response[i].published;

				if (i >= 4) {
					li.style.display = 'none';
				} 

				li.appendChild(img);
				list.appendChild(li);
			}
		});
		gallery.appendChild(list);
	}

	return {
		newComponent: newComponent,
		init: init
	};
}());