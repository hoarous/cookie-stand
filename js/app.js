"use strict";

var cookieShop = function(storeName, minCustomers, maxCustomers, cookiesPerSale) {
    this.name = storeName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.perSale = cookiesPerSale;
    this.cookieLedger = [];
}

//calculates a random number of customers for a store during an hour of business
cookieShop.prototype.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
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
    console.log(thEl);

    for(var i in this.cookieLedger){
        var tableDataEl = document.createElement('td');
        tableDataEl.textContent = this.cookieLedger[i];
        trEl.appendChild(tableDataEl);
        total += this.cookieLedger[i];
    }

    var tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);

}


//declare stores
var storeLocations = [];
storeLocations.push(new cookieShop('First and Pike', 23, 65, 6.3));
storeLocations.push(new cookieShop('SeaTac Airport', 3, 24, 1.2));
storeLocations.push(new cookieShop('Seattle Center', 11, 38, 3.7,));
storeLocations.push(new cookieShop('Capitol Hill', 20, 38, 2.3,));
storeLocations.push(new cookieShop('Alki', 2, 16, 4.6));


//renders the table header
var renderHeader = function(){
    var storesContainer = document.getElementById('stores');
    var trEl = document.createElement('tr');
    storesContainer.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);

    for(var i = 6; i < 21; i++){
        var tableHeaderEl = document.createElement('th');
        if(i>12){
            tableHeaderEl.textContent = i%12 + ':00PM';
        }
        else{
            tableHeaderEl.textContent = i + ':00AM'
        }
        trEl.appendChild(tableHeaderEl);
    }

    var thEl2 = document.createElement('th');
    thEl2.textContent = 'Daily Location Total:';
    trEl.appendChild(thEl2);
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


renderStores();