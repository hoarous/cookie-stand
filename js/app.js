"use strict";

var cookieShop = function(storeName, minCustomers, maxCustomers, cookiesPerSale) {
    this.name = storeName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.perSale = cookiesPerSale;
    this.cookieLedger = [];
}

cookieShop.prototype.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

cookieShop.prototype.hourlyCookies = function(){
    for(var i = 0; i< 14; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

cookieShop.prototype.renderHours = function(){
    this.hourlyCookies();
    var storesContainer = document.getElementById('stores');
    var trEl = document.createElement('tr');
    storesContainer.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    trEl.appendChild(thEl);
    console.log(thEl);

    for(var i in this.cookieLedger){
        var tableDataEl = document.createElement('td');
        tableDataEl.textContent = this.cookieLedger[i];
        trEl.appendChild(tableDataEl);
    }

}

var pikePlace = new cookieShop('First and Pike', 23, 65, 6.3);
var seaTac = new cookieShop('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new cookieShop('Seattle Center', 11, 38, 3.7,);
var capHill = new cookieShop('Capitol Hill', 20, 38, 2.3,);
var alki = new cookieShop('Alki', 2, 16, 4.6);

var renderStores = function(){
    var storesContainer = document.getElementById('stores');
    var trEl = document.createElement('tr');
    storesContainer.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);

    for(var i = 6; i < 20; i++){
        var tableHeaderEl = document.createElement('th');
        if(i>12){
            tableHeaderEl.textContent = i%12 + ':00PM';
        }
        else{
            tableHeaderEl.textContent = i + ':00AM'
        }
        trEl.appendChild(tableHeaderEl);
    }

    pikePlace.renderHours();
    seaTac.renderHours();
    seattleCenter.renderHours();
    capHill.renderHours();
    alki.renderHours();
}

renderStores();