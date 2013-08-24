nodejs-piwik-api
================

Ce module permet de se connecter facilement à une API Piwik. Il est conçu pour fonctionner avec Express.js, mais vous pouvez aussi l'utiliser autrement.

## Install

    npm install piwik-api

## Setup

    var PiwikAPI = require("piwik-api");

    PiwikAPI.configure({
	    host: "demo.piwik.org",
      path: "/",
	    defaultToken: "anonymous",
    });
    
## Usage

    PiwikAPI.get({method: "SitesManager.getSiteFromId", format: "json"}, {idSite: "7"},function(message) {
	    console.log(message);
    });
