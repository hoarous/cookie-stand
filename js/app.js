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

pikePlace.renderHours();