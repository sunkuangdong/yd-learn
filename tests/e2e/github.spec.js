const Rize = require('rize')

const rize = new Rize()
rize
  .goto('http://example.com')
  .saveScreenshot('example.png')
  .end()