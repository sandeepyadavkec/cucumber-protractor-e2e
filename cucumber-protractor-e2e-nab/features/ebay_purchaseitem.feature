Feature: Purchase item from ebay
  As a customer
  I should be able to search, add to cart and check-out an item
  In order to make a purchase

  Scenario: Purchase an item from ebay
    Given I log in as customer
    And I click on SignIn button
    And I enter valid credentials
    And I search for item "Lenovo Chromebook"
    When I add item to cart
	And I click No Thanks for protection plan
	Then Item "Lenovo Chromebook" should be added to the shopping cart
	When I click "Go to checkout" button
	And I enter address line1 as "L 1, 500 Bourke St"
	And I enter city as "Melbourne"
	And I select state as "Victoria"
	And I enter postcode as 3000
	And I enter mobile number as 0359246890
	And I select "Credit or debit card" as my payment option
	And I enter card number as "1111 1111 1111 1111"
	And I enter expiry date as "11/22"
	And I enter security code as "123"
	And I click "Done" button
#	Then The order should be placed successfully
	