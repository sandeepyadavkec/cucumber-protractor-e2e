"use strict";

const config = require('../test-config.json')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
let HomePage = require('../pages/home.page');

	Given('I search for item {string}', function (item) {
           HomePage.searchItem(item);
         });

	When('I add item to cart', function () {
           HomePage.addItemToCart();
         });
      
	When('I click No Thanks for protection plan', function () {
           HomePage.clickNoThanks();
		   
         });  
	  
	Then('Item {string} should be added to the shopping cart', function (item) {
			
            var isPresent = HomePage.verifyItemInShoppingCart(item);
			expect(isPresent).to.eventually.equal(true);
         });

 
	When('I click {string} button', function (buttonText) {
           HomePage.clickButtonWithText(buttonText);
         });
		 
	When('I enter address line1 as {string}', function (addressLine1) {
           HomePage.enterAddressLine1(addressLine1);
         });
	  
	  
	 When('I enter city as {string}', function (city) {
           HomePage.enterCity(city);
         });
		 
	 When('I select state as {string}', function (state) {
           HomePage.selectState(state);
         });
		 
	 When('I enter postcode as {int}', function (postcode) {
           HomePage.enterPostCode(postcode);
         });
		 
	 When('I enter mobile number as {int}', function (mobile) {
           HomePage.enterMobileNumber(mobile);
		   HomePage.continueContactDetails();
         });
		 
	 When('I select {string} as my payment option', function (paymentOption) {
           HomePage.selectPaymentOption(paymentOption);
         });
		 
	 When('I enter card number as {string}', function (cardNumber) {
           HomePage.enterCardNumber(cardNumber);
         });
		 
	 When('I enter expiry date as {string}', function (expiryDate) {
           HomePage.enterExpiryDate(expiryDate);
         });
		 
	 When('I enter security code as {string}', function (securityCode) {
           HomePage.enterSecurityCode(securityCode);
         });