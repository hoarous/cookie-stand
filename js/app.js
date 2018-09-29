"use strict";

var pikePlace = {
    name: 'First and Pike',
    min: 23,
    max: 65,
    perSale: 6.3,
    cookieLedger: []
}

pikePlace.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

pikePlace.hourlyCookies = function(){
    for(var i = 0; i< 15; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

pikePlace.renderHours = function(){
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


var seaTac = {
    name: 'SeaTac Airport',
    min: 3,
    max: 24,
    perSale: 1.2,
    cookieLedger: []
}

seaTac.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

seaTac.hourlyCookies = function(){
    for(var i = 0; i< 15; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

seaTac.renderHours = function(){
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


var seattleCenter = {
    name: 'Seattle Center',
    min: 11,
    max: 38,
    perSale: 3.7,
    cookieLedger: []
}

seattleCenter.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

seattleCenter.hourlyCookies = function(){
    for(var i = 0; i< 15; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

seattleCenter.renderHours = function(){
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


var capHill = {
    name: 'Capitol Hill',
    min: 20,
    max: 38,
    perSale: 2.3,
    cookieLedger: []
}

capHill.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

capHill.hourlyCookies = function(){
    for(var i = 0; i< 15; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

capHill.renderHours = function(){
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


var alki = {
    name: 'Alki',
    min: 2,
    max: 16,
    perSale: 4.6,
    cookieLedger: []
}

alki.hourlyCustomers = function(){
    return Math.round(Math.random() * this.max) + this.min;
}

alki.hourlyCookies = function(){
    for(var i = 0; i< 15; i++){
        this.cookieLedger.push(Math.round(this.hourlyCustomers() * this.perSale));
    }
}

alki.renderHours = function(){
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



var renderStores = function(){
    pikePlace.renderHours();
    seaTac.renderHours();
    seattleCenter.renderHours();
    capHill.renderHours();
    alki.renderHours();
}

renderStores();