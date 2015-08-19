var col = {
	dark: '#483e37', //'#162d50', //'#502d16',
	light: '#917c6f' //'#2c5aa0' //'#784421'
}
exports.col = col;
exports.landBuffer = {fill: 'url(#diagonal)', stroke: 'none'}
exports.bufferedLake = {fill: 'url(#diagonal)', stroke: 'none'}
exports.land = {fill: '#ebd242', stroke: col.light, 'fill-opacity': 0.1}
exports.otherCountries = {fill: 'none', stroke: col.light}
exports.minorIslands = {fill: '#ebd242', stroke: col.light, 'fill-opacity': 0.4}
exports.lakes = {fill: 'none', stroke: col.light}
exports.relief = {fill: 'url(#square)', stroke: 'none', opacity: 0.7}
exports.landBufferInside = {fill: '#ebd242', stroke: 'none', opacity: 0.4}

exports.rivers = {
	fill: 'none',
	stroke: col.light, 
	'stroke-width': 2, 
	'stroke-opacity': 0.3
}

exports.citiesPts = {fill: col.dark}
exports.bigCitiesPts = {fill: col.dark}
exports.peakSym = {fill: col.dark}

exports.peaks = {
	fill: col.dark,
	'font-family': 'IM FELL DW Pica SC',
	'font-size': 20,
	'font-weight': 'bold',
	stroke: 'none',
	transform: 'translate(0, 20)'
}

exports.cities = {
	fill: col.dark,
	'font-family': 'Pfeffer Mediæval',
	'font-size': 30,
	'font-weight': 'none',
	stroke: 'none',
	'transform': 'translate(0,-40)'
}

exports.bigCities = {
	fill: col.dark,
	'font-family': 'Pfeffer Mediæval',
	'font-size': 40,
	'font-weight': 'none',
	stroke: 'none',
	'transform': 'translate(0,-40)'
}

exports.islandLabels = {
	fill: col.dark,
	'font-family': 'IM FELL DW Pica SC',
	'font-size': 50,
	'font-weight': 'bold',
	stroke: 'none'
}

