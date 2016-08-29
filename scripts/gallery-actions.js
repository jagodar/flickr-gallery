const galleryActions = (function () {

	function add(config, tag) {
		let gallery = galleryNodes.newComponent(tag);
		config.section.appendChild(gallery);
		galleryNodes.init(gallery);
	}

	function remove(config, tag) {
		var form = config.form;
		var section = config.section;
		var list = config.list;

		section.removeChild(document.querySelector('#'+tag));
		list.removeChild(document.querySelector('#li-'+tag));
	}

	return {
		add: add,
		remove: remove
	}
}());