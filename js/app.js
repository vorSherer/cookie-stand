'use strict';

// console.log('Proof of Life');

// Global variables
var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];
var siteTotals = 0;

// //store the html point of contact
// var seattleElement = document.getElementById('seattle');
// var tokyoElement = document.getElementById('tokyo');

//Space on DOM to store data
var storeSales = document.getElementById('stores');

//----------------------------------------------------------------------------------
var storeLoc = [];

//Store Constructor
function CookieShop (location, minCustEachHour, maxCustEachHour, cookieAvg) {
  this.location = location;
  this.minCustEachHour = minCustEachHour;
  this.maxCustEachHour = maxCustEachHour;
  this.cookieAvg = cookieAvg;
  this.custPerHourArray = [];
  this.cookiesSoldPerHourArray = [];
  this.totalDailyCookiesTotalizer = 0;

  storeLoc.push(this);
  this.generateCustPerHour();
  this.calculateCookieCount();
  // console.log('cookie array: ', this.location, this.cookiesSoldPerHourArray);
}

//----------------------------------------------------------------------------------

//Customers per hour generator method:
CookieShop.prototype.generateCustPerHour = function() {
  for(var i = 0; i < hours.length; i++) {
    var randomCustomer = getRandom(this.minCustEachHour, this.maxCustEachHour);
    this.custPerHourArray.push(randomCustomer);
  } //Closes cust/hr method
},

//Cookies per hour generator method:
CookieShop.prototype.calculateCookieCount = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookieCount = Math.round(this.custPerHourArray[i] * this.cookieAvg);
    this.cookiesSoldPerHourArray.push(cookieCount);
    this.totalDailyCookiesTotalizer += this.cookiesSoldPerHourArray[i];
    console.log('cookie count: ', this.location, this.totalDailyCookiesTotalizer);
    siteTotals += cookieCount;
    console.log('site totals: ', this.location, siteTotals);
  } //Closes FOR loop
}; //Closes cookies/hr method

new CookieShop ('Seattle', 23, 65, 6.3);
new CookieShop ('Tokyo', 3, 24, 1.2);
new CookieShop ('Dubai', 11, 38, 3.7);
new CookieShop ('Paris', 20, 38, 2.3);
new CookieShop ('Lima', 2, 16, 4.6);

//Random number generator - generates a value between min and max, inclusive of min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// storeSeattle.render();
// storeTokyo.render();
// storeDubai.render();
// storeParis.render();
// storeLima.render();

