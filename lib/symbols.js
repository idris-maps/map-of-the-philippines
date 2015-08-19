module.exports = function(svg, projection, data, cl, style, transform, img) {
	if(transform.s == null) { var s = 1 } else { var s = +transform.s }
	var g = svg.append('g')
		.attr('class', cl + 'group')
	for(i=0;i<data.features.length;i++) {
		g.append('path')
			.attr({
				id: cl + i,
				d: img,
				transform: 'translate('
				+ getX(projection(data.features[i].geometry.coordinates)[0], transform)
				+ ','
				+ getY(projection(data.features[i].geometry.coordinates)[1], transform)
				+ ') scale('
				+ s 
				+ ')'
			})
			.attr(style)
	}
}
function getX(coordX, transform) {
	if(transform.xPlus != null) { 
		var x = coordX +  transform.xPlus 
	} else if(transform.xMinus != null) {
		var x = coordX -  transform.xMinus 
	} else {
		var x = coordX
	}
	return x;
}

function getY(coordY, transform) {
	if(transform.yPlus != null) { 
		var y = coordY + transform.yPlus 
	} else if(transform.yMinus != null) {
		var y = coordY - transform.yMinus;
	} else {
		 var y = coordY
	}
	return y;
}
