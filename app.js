"use strict"

let destinations = ["Los Angeles", "Chicago", "New York City", "Denver", "Minneapolis"];
let restaurants = ["Mexican", "Italian", "Chinese", "Vegetarian", "Japanese"];
let transportation = ["car", "train", "plane", "bus", "hitchhike"];
let entertainment = ["go to a concert", "go hiking", "go shopping", "go to a museum"];

let destination = destinations [Math.floor(Math.random() * destinations.length)];
console.log(destination);

let restaurant = restaurants [Math.floor(Math.random() * restaurants.length)];
console.log(restaurant);

let transport = transportation [Math.floor(Math.random() * transportation.length)];
console.log(transport);

let entertainMe = entertainment [Math.floor(Math.random() * entertainment.length)];
console.log(entertainMe);