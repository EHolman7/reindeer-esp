var colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Amber", "Azure", "Aquamarine", "Chocolate", "Hazel"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var element = document.getElementById("reindeer");

for(var i =0; i< reindeer.length; i += 1){
    var colorRun = colors[i];
    var deerRun = reindeer[i];
    var deerString = "";
        deerString += '<p>' + colorRun + " " + deerRun + '</p>';
    element.innerHTML += deerString
}