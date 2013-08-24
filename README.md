nodejs-piwik-api
================

Ce module permet de se connecter facilement à une API Piwik. Il est conçu pour fonctionner avec Express.js, mais vous pouvez aussi l'utiliser autrement.

## Install

    npm install piwik-api

## Setup

    var PiwikAPI = require("piwik-api");

    PiwikAPI.configure({
<<<<<<< HEAD
		host: "demo.piwik.org",
        path: "/",
	    defaultToken: "anonymous",
=======
        host: "demo.piwik.org",
        path: "/",
	defaultToken: "anonymous",
>>>>>>> fc690e37d085f2abe3ddee44c8fd3f874beccf83
    });
    
## Usage

    PiwikAPI.get({method: "SitesManager.getSiteFromId", format: "json"}, {idSite: "7"},function(message) {
<<<<<<< HEAD
	    console.log(message);
=======
	console.log(message);
>>>>>>> fc690e37d085f2abe3ddee44c8fd3f874beccf83
    });
