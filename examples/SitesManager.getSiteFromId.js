var PiwikAPI = require("../lib/piwik-api.js");

PiwikAPI.configure({url: "demo.piwik.org", defaultToken: "anonymous"});

PiwikAPI.get({method: "SitesManager.getSiteFromId"}, {idSite: "7"}, function(message) {
	console.log(message);
});
