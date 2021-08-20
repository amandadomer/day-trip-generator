"use strict"

let destinations = ["Los Angeles", "Chicago", "New York City", "Denver", "Minneapolis"];
let restaurants = ["Mexican", "fast food", "Chinese", "vegetarian", "Japanese"];
let transportation = ["car", "train", "plane", "bus", "hitchhiking"];
let entertainment = ["to a concert", "hiking", "shopping", "to a museum"];

function selection (array){
    let rand = Math.floor(Math.random() * array.length);
    return array[rand]
}
let destination = selection (destinations);
let restaurant = selection (restaurants);
let transport = selection (transportation);
let entertain = selection (entertainment);

function userSays (){
    let userHappy = false;
    while (userHappy === false){
        let userInput = prompt("You will travel by " + transport + " to " + destination + ", where you will go " + entertain + " and eat at a " + restaurant + " restaurant. \r\nAre you happy with your trip?");
        if (userInput === "yes"){
            userHappy = true;
            console.log("You will travel by " + transport + " to " + destination + ", where you will go " + entertain + " and eat at a " + restaurant + " restaurant." )
        }
        else{
        destination = selection (destinations);
        restaurant = selection (restaurants);
        transport = selection (transportation);
        entertain = selection (entertainment);
        }
    }  
}
userSays();