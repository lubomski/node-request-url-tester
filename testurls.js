// URL TESTING TOOL - Written by Richard Lubomski
// version: 0.1; updated: 20140626
// Utilises node.js (http://nodejs.org/) and request node package (https://github.com/mikeal/request)

var request = require('request');

console.log('\n','------------------------------','\n','REQUEST URL TESTER', '\n', '------------------------------', '\n');

// modify connection var to your local testing path / live path
var connection = "http://localhost:8888";

var URLStoTest = [
"/about-us/",
"/contacts/",
"/products/"
]


for (var i = 0; i < URLStoTest.length; i++) {

    var time = i * 100;


    var callback = function (url) {
    
        var requestSettings = {
        	// https://github.com/mikeal/request#requestoptions-callback
            method: 'GET',
            url: url,
            // rejectUnauthorized: set to false to ignore SSL errors
            rejectUnauthorized: true,
            // followRedirect: set to true to test redirects
            followRedirect: false
        };

        var url = requestSettings.url;

        request(requestSettings, function (error, response, body) {
			
            if (!response) {
                console.log('ERROR! --', url, error);
            } 
            
            else {
            
            var statusMessage; 
            
            switch (response.statusCode) {
			
			case 200: 
				statusMessage = 'SUCCESS! --';
				break;		
			case 301: 
				statusMessage = 'PERMANENT REDIRECT! --';	
				break;
			case 302: 
				statusMessage = 'TEMPORARY REDIRECT! --';	
				break;	
			case 403: 
				statusMessage = 'FORBIDDEN! --';	
				break;	
			case 404: 
				statusMessage = 'NOT FOUND! --';	
				break;	
			case 408: 
				statusMessage = 'REQUEST TIMEOUT! --';	
				break;
			case 410: 
				statusMessage = 'GONE! --';	
				break;		
			case 500: 
				statusMessage = 'INTERNAL SERVER ERROR! --';		
				break;
			case 501: 
				statusMessage = 'NOT IMPLEMENTED! --';		
				break;
			case 502: 
				statusMessage = 'BAD GATEWAY! --';		
				break;
			case 503: 
				statusMessage = 'SERVICE UNAVAILABLE! --';		
				break;
			case 504: 
				statusMessage = 'GATEWAY TIMEOUT! --';		
				break;
			default: 
				statusMessage = "WTF! --"; 
				break;		
			}
			
			
			console.log(statusMessage, response.statusCode,' -- ', url);
            
            }
          
            
        });
      
    };

    
    (function (url) {
        setTimeout(function () {
            callback(url);
        }, time);
    })
    


    (connection + URLStoTest[i]);

}
 
 console.log('TOTAL URLS: ', i,'\n');    
