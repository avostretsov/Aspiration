const { Given, When, Then } = require('cucumber')

const googlePage = require('../../pages/google.page')
const page = new googlePage()


Given(/^I am on the Google site$/, () => {
    page.openGoogle()
})

When(/^I search for the ducks keyword$/, () => {
    page.searchDucks()
})

Then(/^I should get redirected to the ducks Page$/, () => {
    // TBD
})