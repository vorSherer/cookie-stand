'use strict';

// console.log('Proof of Life');

// Global variables
var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

// //store the html point of contact
// var seattleElement = document.getElementById('seattle');
// var tokyoElement = document.getElementById('tokyo');

//Space on DOM to store data
var storeSales = document.getElementById('stores');

//----------------------------------------------------------------------------------
var storeLoc = [];

//Store Constructor
function CookieShop (location, minCust, maxCust, cookieAvg) {
  this.location = location;
  this.minCustEachHour = minCustEachHour;
  this.maxCustEachHour = maxCustEachHour;
  this.cookieAvg = cookieAvg;
  this.custPerHourArray = custPerHourArray[];
  this.cookiesSoldPerHourArray = cookiesSoldPerHourArray[];
  this.totalDailyCookiesTotalizer = totalDailyCookiesTotalizer;

  storeLoc.push(this);
}


var seattle = new CookieShop ('Seattle', 23, 65, 6.3);
//----------------------------------------------------------------------------------
// var storeSeattle = {
  // storeName: 'Seattle',
  // minCustomersEachHour: 23,
  // maxCustomersEachHour: 65,
  // averageCookiesPerCustomer: 6.3,
  // customersEachHourArray: [],
  // cookiesSoldEachHourArray: [],
  // totalCookiesForTheDayTotalizer: 0,

  //Customers per hour generator method:
  generateCustPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer);
    } //Closes cust/hr method
  },

  //Cookies per hour generator method:
  calculateCookieCount: function() {
    var cookieHolder = 0;
    for(var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookieCount = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesSoldEachHourArray.push(cookieCount);
      cookieHolder = cookieHolder+cookieCount;
      // 
    }
    this.totalCookiesForTheDayTotalizer = cookieHolder;
  }, //Closes cookies/hr method

  // Render function to pass values to Sales page
  render:  function() {
    this.generateCustPerHour();
    this.calculateCookieCount();
    var ulElement = document.createElement('ul');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.storeName;
    storeSales.appendChild(h2Element);
    for( var i = 0; i < hours.length; i++ ) {
      var listElement = document.createElement('li');                         //give element content
      listElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`; //append to DOM
      ulElement.appendChild(listElement);
      // } //Closes For Loop
      storeSales.appendChild(ulElement);
    }//Closes function
    var totalListElement = document.createElement('li');
    totalListElement.textContent = `Total: ${this.totalCookiesForTheDayTotalizer}`;
    ulElement.appendChild(totalListElement);
  } //Closes object
};

// //Store object 2
var storeTokyo = {
  storeName: 'Tokyo',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHourArray: [],
  cookiesSoldEachHourArray: [],
  totalCookiesForTheDayTotalizer: 0,

  //Customers per hour generator method:
  generateCustPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer);
    } //Closes cust/hr method
  },

  //Cookies per hour generator method:
  calculateCookieCount: function() {
    var cookieHolder = 0;
    for(var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookieCount = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesSoldEachHourArray.push(cookieCount);
      cookieHolder = cookieHolder+cookieCount;
      // 
    }
    this.totalCookiesForTheDayTotalizer = cookieHolder;
  }, //Closes cookies/hr method

  // Render function to pass values to Sales page
  render:  function() {
    this.generateCustPerHour();
    this.calculateCookieCount();
    var ulElement = document.createElement('ul');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.storeName;
    storeSales.appendChild(h2Element);
    for( var i = 0; i < hours.length; i++ ) {
      var listElement = document.createElement('li');                         //give element content
      listElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`; //append to DOM
      ulElement.appendChild(listElement);
      // } //Closes For Loop
      storeSales.appendChild(ulElement);
    }//Closes function
    var totalListElement = document.createElement('li');
    totalListElement.textContent = `Total: ${this.totalCookiesForTheDayTotalizer}`;
    ulElement.appendChild(totalListElement);
  } //Closes object
};


// Store object 3
var storeDubai = {
  storeName: 'Dubai',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHourArray: [],
  cookiesSoldEachHourArray: [],
  totalCookiesForTheDayTotalizer: 0,

  //Customers per hour generator method:
  generateCustPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer);
    } //Closes cust/hr method
  },

  //Cookies per hour generator method:
  calculateCookieCount: function() {
    var cookieHolder = 0;
    for(var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookieCount = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesSoldEachHourArray.push(cookieCount);
      cookieHolder = cookieHolder+cookieCount;
      // 
    }
    this.totalCookiesForTheDayTotalizer = cookieHolder;
  }, //Closes cookies/hr method

  // Render function to pass values to Sales page
  render:  function() {
    this.generateCustPerHour();
    this.calculateCookieCount();
    var ulElement = document.createElement('ul');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.storeName;
    storeSales.appendChild(h2Element);
    for( var i = 0; i < hours.length; i++ ) {
      var listElement = document.createElement('li');                         //give element content
      listElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`; //append to DOM
      ulElement.appendChild(listElement);
      // } //Closes For Loop
      storeSales.appendChild(ulElement);
    }//Closes function
    var totalListElement = document.createElement('li');
    totalListElement.textContent = `Total: ${this.totalCookiesForTheDayTotalizer}`;
    ulElement.appendChild(totalListElement);
  } //Closes object
};

// Store object 4
var storeParis = {
  storeName: 'Paris',
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHourArray: [],
  cookiesSoldEachHourArray: [],
  totalCookiesForTheDayTotalizer: 0,

  //Customers per hour generator method:
  generateCustPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer);
    } //Closes cust/hr method
  },

  //Cookies per hour generator method:
  calculateCookieCount: function() {
    var cookieHolder = 0;
    for(var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookieCount = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesSoldEachHourArray.push(cookieCount);
      cookieHolder = cookieHolder+cookieCount;
      // 
    }
    this.totalCookiesForTheDayTotalizer = cookieHolder;
  }, //Closes cookies/hr method

  // Render function to pass values to Sales page
  render:  function() {
    this.generateCustPerHour();
    this.calculateCookieCount();
    var ulElement = document.createElement('ul');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.storeName;
    storeSales.appendChild(h2Element);
    for( var i = 0; i < hours.length; i++ ) {
      var listElement = document.createElement('li');                         //give element content
      listElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`; //append to DOM
      ulElement.appendChild(listElement);
      // } //Closes For Loop
      storeSales.appendChild(ulElement);
    }//Closes function
    var totalListElement = document.createElement('li');
    totalListElement.textContent = `Total: ${this.totalCookiesForTheDayTotalizer}`;
    ulElement.appendChild(totalListElement);
  } //Closes object
};

// Store object 5
var storeLima = {
  storeName: 'Lima',
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.6,
  customersEachHourArray: [],
  cookiesSoldEachHourArray: [],
  totalCookiesForTheDayTotalizer: 0,

  //Customers per hour generator method:
  generateCustPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer);
    } //Closes cust/hr method
  },

  //Cookies per hour generator method:
  calculateCookieCount: function() {
    var cookieHolder = 0;
    for(var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookieCount = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesSoldEachHourArray.push(cookieCount);
      cookieHolder = cookieHolder+cookieCount;
      // 
    }
    this.totalCookiesForTheDayTotalizer = cookieHolder;
  }, //Closes cookies/hr method

  // Render function to pass values to Sales page
  render:  function() {
    this.generateCustPerHour();
    this.calculateCookieCount();
    var ulElement = document.createElement('ul');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.storeName;
    storeSales.appendChild(h2Element);
    for( var i = 0; i < hours.length; i++ ) {
      var listElement = document.createElement('li');                         //give element content
      listElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`; //append to DOM
      ulElement.appendChild(listElement);
      // } //Closes For Loop
      storeSales.appendChild(ulElement);
    }//Closes function
    var totalListElement = document.createElement('li');
    totalListElement.textContent = `Total: ${this.totalCookiesForTheDayTotalizer}`;
    ulElement.appendChild(totalListElement);
  } //Closes object
};

//Random number generator - generates a value between min and max, inclusive of min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

storeSeattle.render();
storeTokyo.render();
storeDubai.render();
storeParis.render();
storeLima.render();

