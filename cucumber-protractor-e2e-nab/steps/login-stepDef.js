"use strict";

const config = require('../test-config.json')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
let LoginPage = require('../pages/login.page');


    Given(/^I log in as customer$/, function () {
        LoginPage.visit(config.baseurl);
		
        expect(LoginPage.getURL()).to.eventually.have.string(config.baseurl);
    });

    Given('I click on SignIn button', function () {
               LoginPage.clickSignIn();
			  
			   expect(LoginPage.getURL()).to.eventually.have.string(config.signinurl);
             });

    Given('I enter valid credentials', function () {
                LoginPage.enterLogin(config.login);
                LoginPage.clickContinue();
                LoginPage.enterPassword(config.password);
                LoginPage.submitSignin();
              });

