var PiwikAPI = require("../lib/piwik-api.js");

PiwikAPI.configure({
    host: "demo.piwik.org",
    path: "/",
    defaultToken: "anonymous",
});

var vars = {
	idSite:  "7",
	description: "Test",
	period: "today",
	hour: "0",
	reportType: "email",
	reportFormat: "pdf",
	reports: ["VisitsSummary_get", "VisitTime_getVisitInformationPerLocalTime"],
	parameters: {
		displayFormat: "1",
		emailMe: false,
		evolutionGraph: false
	}
};

PiwikAPI.get({method: "PDFReports.addReport"}, vars, function(message) {
	console.log(message);
});
