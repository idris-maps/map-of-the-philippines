var d3 = require('d3');
var polygon = require('./polygon')
var line = require('./line')
var point = require('./point')
var symbols = require('./symbols')
var labels = require('./labels')
var adjust = require('./adjust')
var style = require('./style')
var img = require('./img')

//polygons
var landBuffer = require('../data/landBuffer.json')
var land = require('../data/land.json')
var otherCountries = require('../data/otherCountries.json')
var minorIslands = require('../data/minorIslands.json')
var lakes = require('../data/lakes.json')
var bufferedLake = require('../data/bufferedLake.json')
var relief = require('../data/relief.json')
var landBufferInside = require('../data/landBufferInside.json')

//lines
var rivers = require('../data/rivers.json')


//points
var islandLabels = require('../data/islandLabels.json')
var bigCities = require('../data/bigCities.json')
var cities = require('../data/cities.json')
var peaks = require('../data/peaks.json')



module.exports = function(svg, canvas) {
	var projection = d3.geo.mercator()
		  .scale(1)
		  .translate([0, 0]);
	var path = d3.geo.path()
		  .projection(projection);
	var b = path.bounds(land);
	var s = .95 / Math.max((b[1][0] - b[0][0]) / canvas.width, (b[1][1] - b[0][1]) / canvas.height);
	var t = [(canvas.width - s * (b[1][0] + b[0][0])) / 2, (canvas.height - s * (b[1][1] + b[0][1])) / 2];
	projection
		  .scale(s)
		  .translate(t);

	addDefs(svg)

	polygon(svg, path,  landBuffer, 'landBuffer', style.landBuffer)
	polygon(svg, path, otherCountries, 'countries', style.otherCountries)
	polygon(svg, path, land, 'land', style.land)
	polygon(svg, path, minorIslands, 'islands', style.minorIslands)
	polygon(svg, path, landBufferInside, 'landBufferInside', style.landBufferInside)
	polygon(svg, path, lakes, 'lakes', style.lakes)
	polygon(svg, path, bufferedLake, 'bufferedLake', style.bufferedLake)
	polygon(svg, path, relief, 'relief', style.relief)

	line(svg, path, rivers, 'rivers', style.rivers)

	point(svg,projection, bigCities, 'bigCitiesPts', style.bigCitiesPts, 10)
	point(svg,projection, cities, 'citiesPts', style.citiesPts, 5)
	
	symbols(svg, projection, peaks, 'peaksSym', style.peakSym, {xMinus: 16, yMinus: 10, s: 0.1}, img.peak)

	labels(svg, projection, islandLabels, 'islandLabels', style.islandLabels)
	labels(svg, projection, bigCities, 'bigCities', style.bigCities)
	labels(svg, projection, cities, 'cities', style.cities)
	labels(svg, projection, peaks, 'peaks', style.peaks)

	fixLabels(svg)
	fixMinorIslandsNotPh(svg)
	svg.select('#islandLabels0').remove()
}

function fixLabels(svg) {
	svg.select('#cities5').attr('transform', 'translate(-50,-30)')
	svg.select('#cities11').attr('transform', 'translate(0,20)')
	svg.select('#cities10').attr('transform', 'translate(50,-40)')
	svg.select('#bigCities7').attr('transform', 'translate(-80,-10)')
	svg.select('#bigCities2').attr('transform', 'translate(130,-10)')
	svg.select('#islandLabels12').attr('transform', 'translate(-250,-70)')
	svg.select('#islandLabels9').attr('transform', 'translate(20,-20)')
	svg.select('#peaks4').attr('transform', 'translate(90, -5)')
	svg.select('#peaks3').attr('transform', 'translate(100, -5)')
	svg.select('#peaks2').attr('transform', 'translate(120, -5)')
}

function addDefs(svg) {
	var defs = svg.append('defs');
	var diagonal = defs.append('pattern')
		.attr({
			id: 'diagonal',
			width: 3,
			height: 3,
			patternTransform: 'rotate(45 0 0)',
			patternUnits: 'userSpaceOnUse'
		})
	diagonal.append('line')
		.attr({
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 3,
			style: 'stroke:' + style.col.light + '; stroke-width:1'
		})
	var square = defs.append('pattern')
		.attr({
			id: 'square',
			width: 3,
			height: 3,
			patternUnits: 'userSpaceOnUse',
			patternTransform: 'rotate(225 0 0)',
		})
/*
	square.append('line')
		.attr({
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 3,
			style: 'stroke:' + style.col.light + '; stroke-width:1'
		})
*/
	square.append('line')
		.attr({
			x1: 0,
			y1: 0,
			x2: 3,
			y2: 0,
			style: 'stroke:' + style.col.light + '; stroke-width:1'
		})
	var dots = defs.append('pattern')
		.attr({
			id: 'dots',
			width: 6,
			height: 6,
			patternUnits: 'userSpaceOnUse'
		})
	dots.append('circle')
		.attr({
			cx: 3,
			cy: 3,
			r: 2,
			style: 'fill:' + style.col.light + ';'
		})
}

function fixMinorIslandsNotPh(svg) {
	var s = style.otherCountries;
	svg.select('#islands5').attr('fill', s.fill)
	svg.select('#islands0').attr('fill', s.fill)
	svg.select('#islands22').attr('fill', s.fill)
	svg.select('#islands30').attr('fill', s.fill)
	svg.select('#islands38').attr('fill', s.fill)
	svg.select('#islands42').attr('fill', s.fill)
}



