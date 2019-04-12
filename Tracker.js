function generateChests(){

    for(var field in chestData.fields){
        document.getElementById("main").innerHTML += "<div id=\""+chestData.fields[field].name+"\">";
        document.getElementById("main").innerHTML += "<h2 class=\"fieldname\" id=\""+chestData.fields[field].name+"\">"+chestData.fields[field].name+"</h2>";
        for(var j=0; j<chestData.fields[field].lootChests; j++){
            document.getElementById("main").innerHTML += "<img src=\"chest.png\" id=\""+chestData.fields[field].name+j+"\" class=\"unlit-chest\" />";
        }
        for(var j=0; j<chestData.fields[field].coinChests; j++){
            console.debug("looping");
            document.getElementById("main").innerHTML += "<img src=\"coinchest.png\" id=\""+chestData.fields[field].name+j+"\" class=\"unlit-chest\" />";
        }
        document.getElementById("main").innerHTML += "</div>";
    }

}

function whichChest(event){
    if(event.button == 0 && !event.shiftKey){
        event.target.className = "lit-chest";
    } else if(event.button == 0 && event.shiftKey){
        event.target.className = "unlit-chest";
    }
}