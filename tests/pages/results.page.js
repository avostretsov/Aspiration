const NativePage = require('./native.page')
class ResultsPage extends NativePage {

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
    this.searchField.setValue('ducks')
    this.googleSearchBtn.click()
  }
}

module.exports = ResultsPage
