nodejs-piwik-api
================

Ce module permet de se connecter facilement à une API Piwik. Il est conçu pour fonctionner avec Express.js, mais vous pouvez aussi l'utiliser autrement.

## Install

    npm install piwik-api

## Setup

    var PiwikAPI = require("piwik-api");

    PiwikAPI.configure({url: "demo.piwik.org", defaultToken: "anonymous"});
    
## Usage

### Example 1 - Get site from ID

    PiwikAPI.get({method: "SitesManager.getSiteFromId"}, {idSite: "7}, function(message) {
	    console.log(message);
    });
    
Corresponding URL: http://demo.piwik.org/?module=API&method=SitesManager.getSiteFromId&idSite=7&format=json&token_auth=anonymous

### Example 2 - Create a report

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
    
Corresponding URL: http://demo.piwik.org/?module=API&method=PDFReports.addReport&idSite=7&description=Test&period=today&hour=0&reportType=email&reportFormat=pdf&reports[]=VisitsSummary_get&reports[]=VisitTime_getVisitInformationPerLocalTime&parameters[displayFormat]=1&parameters[emailMe]=false&parameters[evolutionGraph]=false&format=json&token_auth=anonymous
