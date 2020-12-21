module.exports = {
  waitForUrlToContain(url) {
    browser.waitUntil(
      () => {
        return browser.getUrl().includes(url)
      },
      9000,
      "url didn't update with " + url + ' after timeout'
    )
  }
}
