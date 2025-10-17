let myCommutes = ["metro bus", "UCSC taps bus",
     "personal bike", "rental bike", 
     "some random car", "friends"];

let myFavouriteCommute = {
        type: "Bus",
        route: 1,
        print: "Mountain Lion",
        hasMiddleDoor: true,
        drivers: ["Elena", "Alex", "the guy with a red beard"],
    };
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum", "DarkBlue", "Green"]; // new line tp add

$("#needy-button").click(function () {

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] ); 

    count = count + 1;
    $("#needy-button").css("background-color", colors[count]); // changed line to add

});