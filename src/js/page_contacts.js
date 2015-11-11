var ContactPage = function () {

    return {

    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,
				lat: 15.669856,
				lng: -87.946715,
                  zoom: 11
			  });

			  var marker = map.addMarker({
				lat: 15.669856,
				lng: -87.946715,
	            title: 'Company, Inc.',
                  zoom: 11
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 15.669856,
		        lng : -87.946715,
                  zoom: 11
		      });
		    });
		}

    };
}();
