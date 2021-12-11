const Mocha = require('mocha');
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './docs/mochawesome-report',
    quiet: true,
  },
});

mocha.addFile('./tests/services/router.spec.js');

mocha.run(function (err) {
  console.log('🍺接口测试完毕');
  if (err) {
    //出错的退出 CI CD
    process.exit(-1);
  } else {
    process.exit();
  }
});