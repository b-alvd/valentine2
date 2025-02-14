function sharePopup (event, config) {
	"use strict";
	var href = config.href;
	var params = {
		menubar:   "no",
		location:  "no",
		toolbar:   "no",
		status:    "no",
		resizable: "yes",
		width:     "640",
		height:    "480"
	};
	for (var name in params) {
		var value = config.name;
		if (value) {
			params[name] = value;
		}
	}
	var width  = parseInt(params.width,10);
	var height = parseInt(params.height,10);
	params.top  = Math.max(0, Math.round((screen.height - height) * 0.5));
	params.left = Math.max(0, Math.round((screen.width  - width) * 0.5));
	var spec = [];
	for (var name in params) {
		spec.push(name+"="+params[name]);
	}
	window.open(href,'_blank',spec.join(","));
	if ('preventDefault' in event) {
		event.preventDefault();
	}
	else {
		event.returnValue = false;
	}
	
	return false;
}