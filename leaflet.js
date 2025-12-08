function loadLeafletMap(){
	    /* je centre la carte sur Saint-Denis coordonnées 48.941221, 2.351197 avec un zoom 15 */
		const map = L.map('map').setView([48.941221, 2.351197], 15);
		const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
	 
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}
	map.on('click', onMapClick);
