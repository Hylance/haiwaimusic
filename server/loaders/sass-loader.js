const sass = require('node-sass');

module.exports = (data, file) => {
  try {
    console.log('sass-loader!!!!');
    return sass.renderSync({ data, file }).css.toString('utf8');
  } catch (e) {
    console.error(e);
    return null;
  }
};
