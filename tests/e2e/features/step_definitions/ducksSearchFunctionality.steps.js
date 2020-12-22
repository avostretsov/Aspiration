const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

const googlePageData = require('../../files/testData/google.data')
const googlePage = require('../../pages/google.page')
const page = new googlePage()
const resultsPage = require('../../pages/results.page')
const resPage = new resultsPage()
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

Then(/^I should see at least 5 results displayed$/, () => {
  expect(resPage.results).to.have.lengthOf.above(5)
})

Then(/^I should see first result containing duck word$/, () => {
  expect(resPage.results[0].getText().toLowerCase()).to.include('duck')
})