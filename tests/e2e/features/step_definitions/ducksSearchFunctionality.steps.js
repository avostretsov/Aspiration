const { Given, When, Then } = require('cucumber')

const googlePageData = require('../../files/testData/google.data')
const googlePage = require('../../pages/google.page')
const page = new googlePage()
const helper = require('../../helpers/helper')


Given(/^I am on the Google site$/, () => {
  page.openGoogle()
})

When(/^I search for the ducks keyword$/, () => {
  page.searchDucks()
})

Then(/^I should get redirected to the ducks results page$/, () => {
  helper.waitForUrlToContain(googlePageData['searchQuery'])
})