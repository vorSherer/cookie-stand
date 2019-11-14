'use strict';

// console.log('Proof of Life');

// Global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// //store the html point of contact
// var seattleElement = document.getElementById('seattle');
// var tokyoElement = document.getElementById('tokyo');

//Space on DOM to store data
var storeSales = document.getElementById('stores');

//Store object 1
var storeSeattle = {
  storeName: 'Seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
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
    for(var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookieCount = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesSoldEachHourArray.push(cookieCount);
    }
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
  } //Closes object
};
//Random number generator - generates a value between min and max, inclusive of min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

storeSeattle.render();


// var storeTokyo = {

// }
