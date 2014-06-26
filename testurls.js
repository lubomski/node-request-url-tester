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
			
			case (response.statusCode = 200): 
				statusMessage = 'SUCCESS! --';
				break;		
			case (response.statusCode = 301): 
				statusMessage = 'PERMANENT REDIRECT! --';	
				break;
			case (response.statusCode = 302): 
				statusMessage = 'TEMPORARY REDIRECT! --';	
				break;	
			case (response.statusCode = 403): 
				statusMessage = 'FORBIDDEN! --';	
				break;	
			case (response.statusCode = 404): 
				statusMessage = 'NOT FOUND! --';	
				break;	
			case (response.statusCode = 408): 
				statusMessage = 'REQUEST TIMEOUT! --';	
				break;
			case (response.statusCode = 410): 
				statusMessage = 'GONE! --';	
				break;		
			case (response.statusCode = 500): 
				statusMessage = 'INTERNAL SERVER ERROR! --';		
				break;
			case (response.statusCode = 501): 
				statusMessage = 'NOT IMPLEMENTED! --';		
				break;
			case (response.statusCode = 502): 
				statusMessage = 'BAD GATEWAY! --';		
				break;
			case (response.statusCode = 503): 
				statusMessage = 'SERVICE UNAVAILABLE! --';		
				break;
			case (response.statusCode = 504): 
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
