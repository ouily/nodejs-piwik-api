var http = require("http");

var PiwikAPI = function() {
	this.configure = this.configure.bind(this);
	this.get = this.get.bind(this);
};

PiwikAPI.prototype.configure = function(options) {
	if(!options) {
		console.log("Merci de spécifier des options");
		options = {};
	}
	this.host = options.host || "";
	this.path = options.path || "";
	//this.format = options.defaultFormat || "json";
}


PiwikAPI.prototype.get = function(method, vars, cb) {

	var path =  "/?module=API&method=" + method + "&" + vars;
	http.get({host: this.host, path: path}, function(response) {
		var str = "";
		response.on("data", function(chunk) {
			str += chunk;
		});
		response.on("end", function() {
			str = JSON.parse(str);
			cb(str);
		});
	});
};

module.exports = new PiwikAPI;