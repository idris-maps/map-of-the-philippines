var config = require('./config')

module.exports = function(svg, projection, data, cl, style) {
	var g = svg.append('g')
		.attr('class', cl + 'group')
		.attr('transform', 'translate(0, ' + style['font-size'] / 2 + ')')
	for(i=0;i<data.features.length;i++) {
		g.append('text')
			.attr({
				id: cl + i,
				x: projection(data.features[i].geometry.coordinates)[0],
				y: projection(data.features[i].geometry.coordinates)[1],
				'text-anchor': 'middle'
			})
			.attr(style)
			.text(data.features[i].properties.name)
	}
}
