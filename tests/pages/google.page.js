const NativePage = require('./native.page')
const googlePageData = require('../files/testData/google.data')

class googlePage extends NativePage {

  get googlePageElement() {
    return this.getPage('google.locators')
  }

  openGoogle() {
    browser.url(googlePageData['url'])
  }

  searchDucks() {

    const searchField = $(this.googlePageElement.searchField)
    searchField.click()
    searchField.setValue(googlePageData['searchQuery'])
    $(this.googlePageElement.googleSearchBtn).click()

    const searchGoogle = $(this.googlePageElement.googleSearchBtn)
    searchGoogle.click()

  }

}

module.exports = googlePage
