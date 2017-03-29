const base = {
  dateFormat: 'YYYY-MM-DD',
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
  lang: 'en'
};

const env = {
  development: {

  },
  test: {

  },
  production: {

  }
}

module.exports = {
  ...base,
  ...env[process.env.NODE_ENV]
};
