node-request-url-tester
=======================

Node + Request = Local URL testing

#DESCRIPTION
A little thing I hacked together to quickly test response codes of pages in a site. It's not brilliant but may be useful for others

#PREREQUISITES
requires node.js and request node package (https://github.com/mikeal/request)

#USAGE
Ensure var connection is changed to your web server address to test (i.e. http://localhost/mysite, http://myexample.com)

Build list of URLs to check (I haven't got this to be done automagically; been scraping sitemaps)

Add list of URLS to var URLStoTest as string (i.e. "/about-us/", "/contacts/", "/products/"

Open a terminal and type `node urltester.js`

It'll run snd return response code for each requested URL....
