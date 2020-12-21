const NativePage = require('./native.page')
const googlePageData = require('../files/testData/google.data')

class GooglePage extends NativePage {

  get searchField() {
    return $('.gLFyf.gsfi')
  }
  get googleSearchBtn() {
    return $('.gNO89b')
  }

  openGoogle() {
    browser.url('/')
  }
  searchDucks() {
    this.searchField.click()
    this.searchField.setValue(googlePageData['searchQuery'])
    this.googleSearchBtn.click()
  }
}

module.exports = GooglePage
