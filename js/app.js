'use strict'

// //store the html point of contact
// var firstAndPikeElement = document.getElementById('firstAndPike');

// //create the element
// var liEl = document.createElement('li');
// //give the element content
// liEl.textContent = 'proof of life';
// //append to the DOM
// firstAndPikeElement.appendChild(liEl);

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var firstAndPikeShop = {
//   minCustomersEachHour: 23,
//   maxCustomersEachHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,

//   render:  function() {
//     for( var i = 0; i < hours.length; i++ ) {
//       //create element
//       var liEl = document.createElement('li');
//       //give element content
//       liEl.textContent = `${hours[i]} Cookies: 34`;
//       //append to DOM
//       firstAndPikeElement.appendChild(liEl);
//     }
//   },

//   randomNumber: function(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
// };

// firstAndPikeShop.render();

console.log('Proof of Life');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// //store the html point of contact
var seattleElement = document.getElementById('seattle');
var tokyoElement = document.getElementById('tokyo');

var storeSeattle = {
  name: 'Seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      //create element
      var listElement = document.createElement('li');
      //give element content
      listElement.textContent = `${hours[i]} ${cookiesEachHour[i]}`; //Replace Cookies: 34; with cookiesEachHour[i];
      //append to DO
      seattleElement.appendChild(listElement);
    } //Closes For Loop
  }  //Closes function
}  //Closes object

function generateCustPerHour() {
  for(var i = 0; i < hours.length; i++) {
    var customerCount = randomNumber( this.min, this.max );
    customersEachHour.push(customerCount);  //Names look wrong; should be generateCustPerHour.push...?
  } //Closes FOR loop
  customersEachHour[] = customerCount[];  //Does this correct the above?
  return customersEachHour[];  //Does this pass the array out of the function and into the corresponding object property?
}  //Closes function


function generateCookiesPerHour() {
  for(var i = 0; i < hours.length; i++) {
    var cookieCount = randomNumber( this.min, this.max );
    cookiesEachHour.push(cookieCount);  //Names look wrong; should be generateCustPerHour.push...?
  } //Closes FOR loop
  cookiessEachHour[] = cookieCount[];  //Does this correct the above?
  return cookiesEachHour[];  //Does this pass the array out of the function and into the corresponding object property?
}  //Closes function

var randomNumber: function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //Random number generator, inclusive of min. value
}


seattle.render(23, 65);
}

var storeTokyo = {

}
