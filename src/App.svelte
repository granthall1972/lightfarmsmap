<script>
	import * as L from "leaflet";
	// If you're playing with this in the Svelte REPL, import the CSS using the
	// syntax in svelte:head instead. For normal development, this is better.
	import "leaflet/dist/leaflet.css";
	let map;

	// L.tileLayer(
	// 		"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
	// 		{
	// 			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	//       &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
	// 			subdomains: "abcd",
	// 			maxZoom: 14,
	// 		}

	function createMap(container) {
		let map = L.map(container).setView(
			[33.27487915010839, -96.80071416973279],
			15
		);
		L.tileLayer(
			"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
			{
				maxZoom: 18,
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
					'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				id: "mapbox/streets-v11",
				tileSize: 512,
				zoomOffset: -1,
			}
		).addTo(map);

		var grange = L.polygon(
			[
				[33.274556, -96.801567],
				[33.279005, -96.808434],
				[33.280512, -96.806974],
				[33.280979, -96.804614],
				[33.279239, -96.803327],
				[33.278467, -96.802275],
				[33.275866, -96.801202],
			],
			{ color: "#bdb2ff" }
		).addTo(map);
		grange.bindTooltip("grange");

		var graham = L.polygon(
			[
				[33.278521, -96.801524],
				[33.279131, -96.799893],
				[33.278736, -96.797662],
				[33.276081, -96.798177],
				[33.275866, -96.800666],
			],
			{ color: "#ffadad" }
		).addTo(map);
		graham.bindTooltip("graham");

		var eastland = L.polygon(
			[
				[33.275077, -96.79616],
				[33.274395, -96.793542],
				[33.271776, -96.792855],
				[33.271812, -96.794658],
				[33.27235, -96.796803],
				[33.275005, -96.796203],
			],
			{ color: "#ffd6a5" }
		).addTo(map);
		eastland.bindTooltip("eastland");

		var indigo = L.polygon(
			[
				[33.272368, -96.807758],
				[33.272601, -96.807543],
				[33.273139, -96.80824],
				[33.274494, -96.806781],
				[33.275139, -96.805751],
				[33.276305, -96.805269],
				[33.273713, -96.801889],
				[33.272816, -96.802769],
				[33.271838, -96.804839],
				[33.271847, -96.80662],
				[33.272368, -96.807758],
			],
			{ color: "#fdffb6" }
		).addTo(map);
		indigo.bindTooltip("indigo");

		var bluestem = L.polygon(
			[
				[33.272942, -96.808691],
				[33.274664, -96.806867],
				[33.275005, -96.805966],
				[33.276314, -96.805429],
				[33.278467, -96.808584],
				[33.275525, -96.80985],
				[33.2747, -96.809721],
				[33.27461, -96.809399],
				[33.273982, -96.809828],
				[33.273839, -96.809936],
				[33.273588, -96.809657],
				[33.273319, -96.80985],
			],
			{ color: "#caffbf" }
		).addTo(map);
		bluestem.bindTooltip("bluestem");

		var maydelle = L.polygon(
			[
				[33.271973, -96.802619],
				[33.27348, -96.801331],
				[33.27339, -96.800773],
				[33.272888, -96.800151],
				[33.272314, -96.799722],
				[33.271812, -96.798306],
				[33.271507, -96.798027],
				[33.270771, -96.798241],
				[33.270179, -96.798499],
				[33.270179, -96.799979],
				[33.270197, -96.80073],
				[33.270215, -96.801288],
				[33.270305, -96.801803],
				[33.270556, -96.801996],
				[33.270932, -96.802318],
				[33.271273, -96.802747],
				[33.271722, -96.802919],
				[33.271901, -96.803026],
			],
			{ color: "#9bf6ff" }
		).addTo(map);
		maydelle.bindTooltip("maydelle");

		map.on("click", onMapClick);

		return map;
	}

	function onMapClick(event) {
		console.log(event.latlng.toString());
	}

	function mapAction(container) {
		map = createMap(container);
		return {
			destroy: () => {
				map.remove();
			},
		};
	}
</script>

<svelte:head>
	<!-- In the REPL you need to do this. In a normal Svelte app, use a CSS Rollup plugin and import it from the leaflet package. -->
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
		integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
		crossorigin=""
	/>
</svelte:head>

<div style="height:100%;width:100%" use:mapAction />
