Pre-requisites: 

Node v12.14.1, Chrome browser v79 must be installed
Proxy configuration to enable npm to connect to internet should be completed


Configuration:

Edit protractor.conf.js for changing webdriver hub url, browser, wait time and cucumber options.
Edit test-config.json for changing test data like user, password, base url etc

Usage steps:

1. Clone or download the cucumber-protractor-e2e-nab framework.

2. Download dependency using:

	npm install

3. Install protractor globally using

	npm install -g protractor

4. Test the installation using

	protractor --version
	
5. From root directory of the framework, start the webdriver using:

	npm run webdriver
	
6. From root directory of the framework, start the tests using command:

	protractor
