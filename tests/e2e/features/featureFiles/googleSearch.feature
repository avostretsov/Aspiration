Feature: Validate the Search functionality of Google site

  @googleScenario1
  Scenario: As a user, I should get relevant Search Results when searching ducks from the Google's Search Bar

    Given I am on the Google site
    When I search for the ducks keyword
    Then I should get redirected to the ducks results page
    Then I should see at least 5 results displayed
    Then I should see first result containing duck word