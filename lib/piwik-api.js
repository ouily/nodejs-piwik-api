/**
* nodejs-piwik-api
**/

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
	this.host = this.host.replace("http://", "").replace("https://", "");
	this.path = options.path || "";
	this.port = options.port || "";
	this.token = options.defaultToken || "anonymous"; 
}


PiwikAPI.prototype.get = function(options, vars, cb) {
	// options
	if(!options) {
		options = {};
	}
	var method = options.method;
	var token = options.token || this.token;

	// variables
	if(!vars) {
		vars = {};
	}
	var ch = "";
	for(key in vars) {
		var value = vars[key];
		if(Object.prototype.toString.call(value) === '[object Array]') {
			// array
			var tab = value;
			for(k in tab) {
				ch += "&" + key + "[]=" + tab[k];
			}
		} else if(Object.prototype.toString.call(value) === '[object Object]') {
			// object
			var tab = value;
			for(k in tab) {
				ch += "&" + key + "[" + k + "]=" + tab[k]; 
			}
		} else {
			// string
			ch += "&" + key + "=" + value;
		}
	}
	// get
	var path =  "/?module=API&method=" + method + "&format=json&token_auth=" + token + ch;
	http.get({host: this.host, port: this.port, path: path}, function(response) {
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