'use strict';

// console.log('Proof of Life');

// Global variables
var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];
// Create & initialize Site Totalizer
var siteTotals = 0;

//Variables for Table and Form
var storeSalesTable = document.getElementById('storesTable');
var form = document.getElementById('addLocation');
// Site location array
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
    // console.log('cookie count: ', this.location, this.totalDailyCookiesTotalizer);
    siteTotals += cookieCount;
    // console.log('site totals: ', this.location, siteTotals);
  } //Closes FOR loop
}; //Closes cookies/hr method

//Random number generator - generates a value between min and max, inclusive of min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// Table Header rendering code
var renderTableHeaderRow = function() {
  // Create elements
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  // Give the elements content
  thEl.textContent = 'Location';
  // Append the elements to the DOM
  trEl.appendChild(thEl);
  
  for( var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // Add TOTAL column header
  var thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trEl.appendChild(thElem);
  storeSalesTable.appendChild(trEl);
};

// Validate work so far
// renderTableHeaderRow();

//Function to render site data rows
//First column - Site names in bold
CookieShop.prototype.renderShopRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);
  
  //Populating the table with simulated site data
  for( var i = 0; i < hours.length; i++ ) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHourArray[i];
    trEl.appendChild(tdEl);
  }
  
  // Add site Totals column
  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalDailyCookiesTotalizer;
  trEl.appendChild(tdElem);
  storeSalesTable.appendChild(trEl);
};

//Add footer row with hourly totals (in bold)
var renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);
  
  for( var i = 0; i < hours.length; i++ ) {
    var hourlyTotalsByStore = 0;
    tdEl = document.createElement('td');
    
    for( var j = 0; j < storeLoc.length; j++ ) {
      hourlyTotalsByStore += storeLoc[j].cookiesSoldPerHourArray[i];
    }
    tdEl.textContent = hourlyTotalsByStore;
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = siteTotals;
  trEl.appendChild(tdElem);
  storeSalesTable.appendChild(trEl);
};

//Kill Footer Row Helper Function
function killFooter() {
  var footer = storeSalesTable.lastChild;
  footer.remove();
}

//Form controls section
function handleForm(event) {
  event.preventDefault();    //Always use this first when staying on the same page
  console.log('event: ', event);
  var newLocation = event.target.location.value;
  var newMin = parseInt(event.target.minCustPerHour.value);
  var newMax = parseInt(event.target.maxCustPerHour.value);
  var newAvg = parseFloat(event.target.cookieAvg.value);

  var newStore = new CookieShop (newLocation, newMin, newMax, newAvg);
  console.log('new site added: ', newStore);
  killFooter();
  storeLoc[storeLoc.length -1].renderShopRow();
  renderFooterRow();
  form.reset();
} 

//Populating the initial sites
function initPage() {
  new CookieShop ('Seattle', 23, 65, 6.3);
  new CookieShop ('Tokyo', 3, 24, 1.2);
  new CookieShop ('Dubai', 11, 38, 3.7);
  new CookieShop ('Paris', 20, 38, 2.3);
  new CookieShop ('Lima', 2, 16, 4.6);
  // new CookieShop ('San Francisco', 27, 60, 4.2);

  //Calling the functions to render Final table for all sites
  renderTableHeaderRow();
  for( var i = 0; i < storeLoc.length; i++) {
    storeLoc[i].renderShopRow();
  }
  renderFooterRow();
  form.addEventListener('submit', handleForm);
}

initPage();
