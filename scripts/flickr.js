const flickr = (function () {

	function get(tag, callback) {
		// Had to use Jquery because of CORS problems with Flickr api
		var api = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=" + tag;
		$.getJSON(api, {
			format: 'json'
		})
		.done(function(data) {
			callback(data.items);
		});
	}

	return {
		get: get
	};
}());