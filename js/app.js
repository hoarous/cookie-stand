"use strict";

var shopLocation = {
    min: 0,
    max: 0,
    avg: 0,
    perHour: function(){
        return Math.round(Math.random() * max) + min;
    }
}