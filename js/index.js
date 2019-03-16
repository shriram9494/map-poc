// a list of available cities
var cities = [ 
{
	"title": "Washington",
	"latitude": 38.8921,
	"longitude": -77.0241
}, 
{
	"title": "Singapore",
	"latitude": 1.2894,
	"longitude": 103.8500
}, 
{
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262
},{
  "title": "Tokyo",
  "latitude": 35.6785,
  "longitude": 139.6823
}
];

// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  addClassNames: true,
  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#3c0666"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [],
    "lines": []
  }
} );

// populate the city dropdown when the page loads
AmCharts.ready( function() {
  //var select = document.getElementById( 'cities' );
  for ( var x in cities ) {
    // var option = document.createElement( 'option' );
    // option.value = x;
    // option.text = cities[ x ].title;
    // select.appendChild( option );
    console.log(cities[x].title);
    addCity(x);
  }
  setTimeout(function() {
    drawLines();
    drawLines1();
    drawLines2();
  }, 3000);
} );

// a function that actual adds the city to map
function addCity(x) {

  // get the city object and add additional attributes
  var city = new AmCharts.MapImage();
  city.title = cities[x].title;
  city.latitude = cities[x].latitude;
  city.longitude = cities[x].longitude;
  city.svgPath = targetSVG;
  city.zoomLevel = 5;
  city.scale = 0.5;
  city.chart = map;

  // add city object to map
  map.dataProvider.images.push( city );
  city.validate();
}

var id =0;
function drawLines() {
  var line = new AmCharts.MapLine();
  line.latitudes = [cities[0].latitude, cities[2].latitude];
  line.longitudes = [cities[0].longitude, cities[2].longitude];
  line.id = id++;
  line.arc = -0.85;
  line.alpha = 1;
  line.chart = map;
  map.dataProvider.lines.push(line);
  line.validate();
}
function drawLines1() {
  var line = new AmCharts.MapLine();
  line.latitudes = [cities[1].latitude, cities[2].latitude];
  line.longitudes = [cities[1].longitude, cities[2].longitude];
  line.id = id++;
  line.arc = -0.85;
  line.alpha = 1;
  line.chart = map;
  map.dataProvider.lines.push(line);
  line.validate();
}
function drawLines2() {
  var line = new AmCharts.MapLine();
  line.latitudes = [cities[3].latitude, cities[2].latitude];
  line.longitudes = [cities[3].longitude, cities[2].longitude];
  line.id = id++;
  line.arc = -0.85;
  line.alpha = 1;
  line.chart = map;
  map.dataProvider.lines.push(line);
  line.validate();
}