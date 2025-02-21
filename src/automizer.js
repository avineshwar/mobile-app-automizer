const version = require('./version');
const ios = require('./ios');
const android = require('./android');
const config = require(`${process.cwd()}/.ma-automizer`);

const automizer = async () => {
  await version.update(config);

  config.ios.build.enabled && await ios.build(config);
  config.android.build.enabled && await android.build(config);

  config.ios.upload.enabled && await ios.upload(config);
  config.android.upload.enabled && await android.upload(config);
};

module.exports = automizer;
