const path = require('path');
const spawn = require('cross-spawn');

module.exports = {

  run(name, cb) {
    const opts = [path.resolve(__dirname, `${name}.js`)];
    const runner = spawn('node', opts, { stdio: 'inherit' });

    runner.on('exit', function (code) {
      if (code === 0) {
        cb();
      } else {
        cb(new Error('before script error'));
      }
    });

    runner.on('error', function (err) {
      cb(err);
    });
  }

}
