"use strict";

var cookieShop = function(storeName, minCustomers, maxCustomers, cookiesPerSale) {
    this.name = storeName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.perSale = cookiesPerSale;
}

cookieShop.prototype.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

cookieShop.prototype.hourlyCookies = function(){
    for(var i = 0; i< 15; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

cookieShop.prototype.renderHours = function(){
    this.hourlyCookies();
    var storesContainer = document.getElementById('stores');
    var headerEl = document.createElement('h2');
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);

    console.log(headerEl);

    var ulEl = document.createElement('ul');

    for(var i in this.cookieLedger){
        var listItemEl = document.createElement('li');
        listItemEl.textContent = this.cookieLedger[i];
        ulEl.appendChild(listItemEl);
    }

    storesContainer.appendChild(ulEl);
}

var pikePlace = new cookieShop('First and Pike', 23, 65, 6.3);
var seaTac = new cookieShop('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new cookieShop('Seattle Center', 11, 38, 3.7,);
var capHill = new cookieShop('Capitol Hill', 20, 38, 2.3,);
var alki = new cookieShop('Alki', 2, 16, 4.6);

var renderStores = function(){
    pikePlace.renderHours();
    seaTac.renderHours();
    seattleCenter.renderHours();
    capHill.renderHours();
    alki.renderHours();
}

renderStores();