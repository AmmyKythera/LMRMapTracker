// Actually create the Images/Interface after body load
function generateChests(){
    
    for(var field in chestData.fields){
        var html = "";
        html += "<div id=\""+field+"\">";
        html += "<h2 class=\"fieldname\" id=\""+field+"\">"+field+"</h2>";
        
        html += "<img src=\"chest.png\" id=\""+field.replace(/ /g,"")+"\" class=\"lit-chest\" />";
        html += "<div class=\"num-box\">"+chestData.fields[field].currChests+"</div>";
        /*for(var j=0; j<chestData.fields[field].lootChests; j++){
            //Have to use a regex for replace because reasons
            html += "<img src=\"chest.png\" id=\""+field.replace(/ /g,"")+j+"\" class=\"unlit-chest\" />";
            if(j%3 == 2){
                html += "<br />"; // temp hack for not looking bad
            }
        }*/

        html += "</div>";
        document.getElementById("main").innerHTML += html;
    }

}

//Just updates chest graphic to colored/uncolored
function whichChest(event){
    if (event.target.tagName == "IMG") {
        var changedField = event.target.parentNode; //Get the parentID, which should be field name
        var chestCount = 0;
        if (event.button == 0 && event.shiftKey) { //leftclick
            //event.target.className = "unlit-chest";
            for (var field in chestData.fields) {
                if (field == changedField.id) {
                    chestData.fields[field].currChests = chestData.fields[field].lootChests;
                    chestCount = chestData.fields[field].currChests;
                }
            }
        } else if (event.button == 0 && !event.shiftKey) {
            for (var field in chestData.fields) {
                if (field == changedField.id && chestData.fields[field].currChests != 0) {
                    chestData.fields[field].currChests -= 1;
                    chestCount = chestData.fields[field].currChests;
                }
            }
        }
        
        if(chestCount == 0){
            event.target.className = "unlit-chest";
        }else{
            event.target.className = "lit-chest";
        }
        changedField.lastChild.innerHTML = chestCount;
    }
      
}