// Actually create the Images/Interface after body load
function generateChests(){
    
    for(var field in chestData.fields){
        var html = "";
        html += "<div id=\""+chestData.fields[field].name+"\">";
        html += "<h2 class=\"fieldname\" id=\""+chestData.fields[field].name+"\">"+chestData.fields[field].name+"</h2>";

        for(var j=0; j<chestData.fields[field].lootChests; j++){
            //Have to use a regex for replace because reasons
            html += "<img src=\"chest.png\" id=\""+chestData.fields[field].name.replace(/ /g,"")+j+"\" class=\"unlit-chest\" />";
            if(j%3 == 2){
                html += "<br />"; // temp hack for not looking bad
            }
        }

        html += "<br />"; // temp hack for not looking bad
        
        for(var j=0; j<chestData.fields[field].coinChests; j++){            
            html += "<img src=\"coinchest.png\" id=\""+chestData.fields[field].name.replace(/ /g,"")+"C"+j+"\" class=\"unlit-chest\" />";
            if(j%3 == 2){
                html += "<br />"; // temp hack for not looking bad
            }
        }

        html += "</div>";
        document.getElementById("main").innerHTML += html;
    }

}

//Just updates chest graphic to colored/uncolored
function whichChest(event){
    if(event.button == 0 && !event.shiftKey){
        event.target.className = "lit-chest";
    } else if(event.button == 0 && event.shiftKey){
        event.target.className = "unlit-chest";
    }
}