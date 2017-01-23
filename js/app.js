var outer = function(inner) {
	inner();
}

var inner = function() {
	console.log("Hello World From Inner Function");
}

outer(inner);

