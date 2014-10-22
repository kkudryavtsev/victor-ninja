module.exports = {
  user: {
    "phone":"1234567890",
    "password":"password",
    "firstName":"",
    "country":"UK",
    "title":"Mr",
    "languageCode":"en-GB",
    "email":"hoanglonguk+1231@gmail.com",
    "charterFrequency":{"min":1,"max":10},
    verifiedAt: new Date(),//TODO: make dynamic
    "lastName":"Asddas",
    additionalDetails: {
      legacyID: 1
    }
  },
  "apns-token":{
    "token": "abc-123",
    sandbox: false
  },
  quote: {
    quoteType: "Charter",
    isBooked: false,
    price: {
      amount: 1296,
      currency: "GBP"
    },
    netPrice: {
      amount: 1234,
      currency: "GBP"
    },
    isVisibleToUser: true,
    seatsOnJet: 4,
    seatsToConfirm: 0, //??
    additionalDetails: {
      legacyID: 1
    }
  },
  "quote-leg": {
  },
  flight: {
  },
  "payment-provider":{
    name: "stripe"
  },
  "payment-type":{
    name: "visa",
    feePercent: 10
  }
};
