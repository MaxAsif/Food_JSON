var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        browse(myObj);
    }
};
xmlhttp.open("GET", "foodyo_output.json", true);
xmlhttp.send();
function browse(myObj)
{
	console.log(myObj.body.Recommendations[2].RestaurantName);
	for(x in myObj.body.Recommendations)
	{
		
		document.getElementById("demo").innerHTML += myObj.body.Recommendations[x].RestaurantName+"<br><br>";
		menu(myObj.body.Recommendations[x].menu);
	}
	
}
function menu(menu)
{
	//console.log("menu type",menu[0].type);
	for(x in menu)
	{
		if(menu[x].type == "sectionheader")
		{
			child(menu[x].children);
			//document.getElementById("demo").innerHTML += "-->"+menu[x].type+"<br><br>";
		}
	}
}
function child(children)
{
	for(x in children)
	{
		if(children[x].type == "item" && children[x].selected == 1)
		{
			//console.log("itemname,selected,type",children[x].name,children[x].selected,children[x].type);
			document.getElementById("demo").innerHTML+= "-->"+children[x].name+"<br><br>";
			child(children[x].children);	 
		}
		else if( children[x].type!="option" )
		{
			//console.log("chlidname01,selected,type",children[x].name,children[x].selected,children[x].type);
			document.getElementById("demo").innerHTML+= "------>"+children[x].name+"<br><br>"; 
			child(children[x].children);
		}
		else if( children[x].type=="option")
		{
			//console.log("chlidname02,selected,type",children[x].name,children[x].selected,children[x].type);
			document.getElementById("demo").innerHTML+= "--------------->"+children[x].name+"<br><br>";
		}
	}
	
}














