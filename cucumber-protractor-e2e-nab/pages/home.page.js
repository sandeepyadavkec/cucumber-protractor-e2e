'use strict';

module.exports = {
        getURL: () => {
            return browser.getCurrentUrl();
        },
        searchItem: (text) => {
            var searchTextbox = element(by.id('twotabsearchtextbox'));
			
			waitForElementToBeClickable(searchTextbox);
			searchTextbox.sendKeys(text);
        },
		
		addItemToCart: () => {
			var searchResultItem = element(by.id('srp-river-results-listing1'));
			waitForElementToBeClickable(searchResultItem);
			searchResultItem.click();

			var addItemButton = element(by.id('isCartBtn_btn'));
			waitForElementToBeClickable(addItemButton);
			addItemButton.click();
			
		},
		
		clickNoThanks: () => {
			var noThanksButton = element(by.id('//button[text()="No thanks"]'));
			waitForElementToBeClickable(noThanksButton);
			noThanksButton.click();
		},
		
		verifyItemInShoppingCart: () => {
			var itemListSummaryElem = element(by.xpath('//div[@data-test-id="list-summary"]'));
			
			waitForElementToBeClickable(itemListSummaryElem);
			return itemListSummaryElem.isPresent();
		},
		
		clickButtonWithText: (text) => {
			var buttonWithText = element(by.xpath('//button[text()="${text}"]'));
			waitForElementToBeClickable(buttonWithText);
			buttonWithText.click();
		},
		
		enterAddressLine1: (addressLine1) => {
			var addressTextbox = element(by.id('addressSugg'));
			waitForElementToBeClickable(addressTextbox);
			addressTextbox.sendKeys(addressLine1);

			var manuallyEnterAddElem = element(by.id('addressSugg_manualEntryLink'));
			waitForElementToBeClickable(manuallyEnterAddElem);
			manuallyEnterAddElem.click();
			
			var addressLine1TextBox = element(by.id('address1'));
			waitForElementToBeClickable(addressLine1TextBox);
			addressLine1TextBox.sendKeys(addressLine1);
			
		},
		
		enterCity: (city) => {
			var cityElem = element(by.id('city'));
			waitForElementToBeClickable(cityElem);
			cityElem.sendKeys(city);
		},
		
		selectState: (state) => {
			var stateDropDownOption = element(by.cssContainingText('option', '${state}'));
			waitForElementToBeClickable(stateDropDownOption);
			stateDropDownOption.click();
			
		},
		
		enterPostCode: (postcode) => {
			var postcodeElem = element(by.id('zip'));
			waitForElementToBeClickable(postcodeElem);
			postcodeElem.sendKeys(postcode);
		},
		
		enterMobileNumber: (mobile) => {
			var mobileElem = element(by.id('phoneFlagComp1'));
			waitForElementToBeClickable(mobileElem);
			mobileElem.sendKeys(mobile);
		},
		
		continueContactDetails: () => {
			var continueButton = element(by.id('sbtBtn'));
			waitForElementToBeClickable(continueButton);
			continueButton.click();
		},
		
		selectPaymentOption: (paymentOption) => {
			var paymentOptionElem = element(by.xpath('//span[text()="${paymentOption}"]'));
			waitForElementToBeClickable(paymentOptionElem);
			paymentOptionElem.click();
		},
		
		enterCardNumber: (cardNumber) => {
			var cardNumberElem = element(by.id('cardNumber'));
			waitForElementToBeClickable(cardNumberElem);
			cardNumberElem.sendKeys(cardNumber);
		},
		
		enterExpiryDate: (expiryDate) => {
			var expiryDateElem = element(by.id('cardExpiryDate'));
			waitForElementToBeClickable(expiryDateElem);
			expiryDateElem.sendKeys(expiryDate);
		},
		
		enterSecurityCode: (securityCode) => {
			var securityCodeElem = element(by.id('securityCode'));
			waitForElementToBeClickable(securityCodeElem);
			securityCodeElem.sendKeys(securityCode);
		}

};

function waitForElementToBeClickable(elem) {
			var EC = protractor.ExpectedConditions;
			var isClickable = EC.elementToBeClickable(elem);
			browser.wait(isClickable, 50000);
}