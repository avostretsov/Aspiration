const NativePage = require('./native.page')

class ResultsPage extends NativePage {

  get results() {
    return $$('.LC20lb')
  }

  getResults() {
    return this.results.getText()
  }
}

module.exports = ResultsPage
