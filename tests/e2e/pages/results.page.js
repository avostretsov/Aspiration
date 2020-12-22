const NativePage = require('./native.page')

class ResultsPage extends NativePage {

  get results() {
    return $$('.LC20lb')
  }
}

module.exports = ResultsPage
