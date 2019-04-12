
function GenerateChests(){
    var fieldNames = ["Surface","Gate of Guidance"];
    var lootChestCounts = [7,9];
    var coinChestCounts =[3,2];
    for(var i=0; i<fieldNames.length; i++){
        document.getElementById("main").innerHTML += "<div id=\""+fieldNames[i]+"\">";
        document.getElementById("main").innerHTML += "<h2 class=\"fieldname\" id=\""+fieldNames[i]+"\">"+fieldNames[i]+"</h2>";
        for(var j=0; j<lootChestCounts[i]; j++){
            console.debug("looping");
            document.getElementById("main").innerHTML += "<img src=\"chest.png\" id=\""+fieldNames[i]+j+"\" class=\"unlit-chest\" />";
        }
        for(var j=0; j<coinChestCounts[i]; j++){
            console.debug("looping");
            document.getElementById("main").innerHTML += "<img src=\"coinchest.png\" id=\""+fieldNames[i]+j+"\" class=\"unlit-chest\" />";
        }
        document.getElementById("main").innerHTML += "</div>";
    }

}

function WhichChest(event){
    if(event.button == 0 && !event.shiftKey){
        event.target.className = "lit-chest";
    } else if(event.button == 0 && event.shiftKey){
        event.target.className = "unlit-chest";
    }
}