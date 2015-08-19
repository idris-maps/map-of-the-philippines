module.exports = function(svg, path, data, cl, style) {
	var g = svg.append('g').attr('id', cl + 'Group')
	g.selectAll('path.' + cl)
		.data(data.features)
		.enter()
		.append('path')
		.attr('id', function(d) { return cl + d.properties.id })
		.attr('d', path)
		.attr(style)
}

