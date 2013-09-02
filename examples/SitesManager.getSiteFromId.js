var PiwikAPI = require("../lib/piwik-api.js");

PiwikAPI.configure({
    host: "demo.piwik.org",
    //port: "80",
    //path: "/",
    defaultToken: "anonymous",
});

PiwikAPI.get({method: "SitesManager.getSiteFromId"}, {idSite: "7"}, function(message) {
	console.log(message);
});
