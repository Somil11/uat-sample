const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    scriptUrls: {
      option1: '',
      option2: 'https://eucdn.whatfix.com/prod/a6b8aa9c-6196-4580-b859-cedb3075b240/initiator/initiator.nocache.js',
      option3: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
      option4: 'https://cdn.jsdelivr.net/npm/chart.js'
    }
  },
  uat: {
    apiUrl: 'https://uat-api.example.com',
    scriptUrls: {
      option1: '',
      option2: 'https://eucdn.whatfix.com/uat/a6b8aa9c-6196-4580-b859-cedb3075b240/initiator/initiator.nocache.js',
      option3: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
      option4: 'https://cdn.jsdelivr.net/npm/chart.js'
    }
  },
  production: {
    apiUrl: 'https://api.example.com',
    scriptUrls: {
      option1: '',
      option2: 'https://eucdn.whatfix.com/prod/a6b8aa9c-6196-4580-b859-cedb3075b240/initiator/initiator.nocache.js',
      option3: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
      option4: 'https://cdn.jsdelivr.net/npm/chart.js'
    }
  }
};

export default config[process.env.REACT_APP_ENV || 'development'];