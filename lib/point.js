module.exports = function(svg, projection, data, cl, style, r) {
	var g = svg.append('g')
		.attr('class', cl + 'group')
	for(i=0;i<data.features.length;i++) {
		g.append('circle')
			.attr({
				id: cl + i,
				cx: projection(data.features[i].geometry.coordinates)[0],
				cy: projection(data.features[i].geometry.coordinates)[1],
				r: r
			})
			.attr(style)
	}
}
