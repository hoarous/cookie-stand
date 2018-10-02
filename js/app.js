"use strict";

//declare stores
var storeLocations = [];

var cookieShop = function(storeName, minCustomers, maxCustomers, cookiesPerSale) {
    this.name = storeName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.perSale = cookiesPerSale;
    this.cookieLedger = [];
    storeLocations.push(this);
}

//calculates a random number of customers for a store during an hour of business
cookieShop.prototype.hourlyCustomers = function(){
    var customers =  Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    console.log('-----------', customers);
    return customers;
}

//calculates the number of cookies sold in a store for an hour of business
cookieShop.prototype.hourlyCookies = function(){
    if(!this.cookieLedger.length){
        for(var i = 0; i < 15; i++){
            this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
        }
    }
}


//render single table row of cookies sold per hour for a single store
cookieShop.prototype.renderHours = function(){
    this.hourlyCookies();
    var storesContainer = document.getElementById('stores');
    var trEl = document.createElement('tr');
    storesContainer.appendChild(trEl);

    var thEl = document.createElement('th');
    var total = 0;
    thEl.textContent = this.name;
    trEl.appendChild(thEl);

    for(var i in this.cookieLedger){
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cookieLedger[i];
        trEl.appendChild(tdEl);
        total += this.cookieLedger[i];
    }

    tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);

}


new cookieShop('First and Pike', 23, 65, 6.3);
new cookieShop('SeaTac Airport', 3, 24, 1.2);
new cookieShop('Seattle Center', 11, 38, 3.7,);
new cookieShop('Capitol Hill', 20, 38, 2.3,);
new cookieShop('Alki', 2, 16, 4.6);


//renders the table header
var renderHeader = function(){
    var storesContainer = document.getElementById('stores');
    var trEl = document.createElement('tr');
    storesContainer.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.id = 'headerRow'
    trEl.appendChild(thEl);

    for(var i = 6; i < 21; i++){
        thEl = document.createElement('th');
        if(i>12){
            thEl.textContent = i%12 + ':00 PM';
        }
        else{
            thEl.textContent = i + ':00 AM'
        }
        trEl.appendChild(thEl);
    }

    thEl = document.createElement('th');
    thEl.textContent = 'Daily Total:';
    trEl.appendChild(thEl);
}


//renders the footer
var renderFooter = function(){
    var storesContainer = document.getElementById('stores');
    var trEl = document.createElement('tr');
    storesContainer.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = 'Totals';
    trEl.appendChild(thEl);

    var allStoresTotals = [];
    var dailyTotal = 0;
    for(var i = 0; i < 15; i++){
        allStoresTotals.push(0);
        var tdEl = document.createElement('td');
        for(var j = 0; j < storeLocations.length; j++){
            allStoresTotals[i] += storeLocations[j].cookieLedger[i];
        }
        tdEl.textContent = allStoresTotals[i];
        dailyTotal += allStoresTotals[i];
        trEl.appendChild(tdEl);
    }

    var tdEl2 = document.createElement('td');
    tdEl2.textContent = dailyTotal;
    trEl.appendChild(tdEl2);
}

//renders the table
var renderStores = function(){
    renderHeader();
    for (var i = 0; i < storeLocations.length; i++){
        storeLocations[i].renderHours();
    }
    renderFooter();
}

//clears the table
var clearStores = function(){
    var storesContainer = document.getElementById('stores');
    while(storesContainer.firstChild){
        storesContainer.removeChild(storesContainer.firstChild);
    }
}


renderStores();

var newStoreForm = document.getElementById('new-store-generator');

var handleMakeStore = function (exampleEvent){
    exampleEvent.preventDefault();
    exampleEvent.stopPropagation();

    var storeName = exampleEvent.target['store-name'].value;
    var maxCustomers = parseInt(exampleEvent.target['max-customers'].value);
    var minCustomers = parseInt(exampleEvent.target['min-customers'].value);
    var cookieAvg = parseFloat(exampleEvent.target['avg-cookies'].value);

    new cookieShop(storeName, minCustomers, maxCustomers, cookieAvg); 

    clearStores();
    console.log('=========================');
    renderStores();
}

newStoreForm.addEventListener('submit', handleMakeStore);