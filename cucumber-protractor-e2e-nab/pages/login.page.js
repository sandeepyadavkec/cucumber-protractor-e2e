
'use strict';

module.exports = {
    visit: (url) => {
        browser.get(url);
		
    },

    clickSignIn: () => {
			var signInButton = element(by.xpath('//a[text()="Sign in"]'));
			waitForElementToBeClickable(signInButton);
			signInButton.click();
    },

    getURL: () => {
            return browser.getCurrentUrl();
        },

    enterLogin: (text) => {
            var loginTextBox = element(by.id('userid'));
			waitForElementToBeClickable(loginTextBox);
			loginTextBox.sendKeys(text);
    },

    clickContinue: () => {
            var continueButton = element(by.id('continue'));
			waitForElementToBeClickable(continueButton);
			continueButton.click();
    },

    enterPassword: (text) => {
            var passwordTextBox = element(by.id('ap_password'));
			waitForElementToBeClickable(passwordTextBox);
			passwordTextBox.sendKeys(text);
    },

    submitSignin: () => {
            var signInSubmitButton = element(by.id('signInSubmit'));
			waitForElementToBeClickable(signInSubmitButton);
			signInSubmitButton.click();
    },

};

function waitForElementToBeClickable(elem) {
			var EC = protractor.ExpectedConditions;
			var isClickable = EC.elementToBeClickable(elem);
			browser.wait(isClickable, 50000);
}