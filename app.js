"use strict"

let destinations = ["Los Angeles", "Chicago", "New York City", "Denver", "Minneapolis"];
let restaurants = ["Mexican", "fast food", "Chinese", "vegetarian", "Japanese"];
let transportation = ["car", "train", "plane", "bus", "hitchhiking"];
let entertainment = ["to a concert", "hiking", "shopping", "to a museum"];

let destination = destinations [Math.floor(Math.random() * destinations.length)];

let restaurant = restaurants [Math.floor(Math.random() * restaurants.length)];

let transport = transportation [Math.floor(Math.random() * transportation.length)];

let entertainMe = entertainment [Math.floor(Math.random() * entertainment.length)];

console.log("You will travel by " + transport + " to " + destination + ", where you will go " + entertainMe + " and eat at a " + restaurant + " restaurant." )