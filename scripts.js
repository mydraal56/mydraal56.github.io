//alert('this is a test');

function testClick()
{
	alert('you have clicked the clicker!');
	
	
}

function openAboutModal()
{
	var popUp = document.getElementById("contactModal");
	debugger;
	if(popUp.style.display == 'block')
	{
		popUp.style.display = 'none';
	}
	else
	{
		popUp = document.getElementById("helpModal");
		if(popUp.style.display == "block")
			popUp.style.display = "none";
	}
	
	
	var modal = document.getElementById("aboutModal");
	debugger; 
	modal.style.display = 'block';
}

function openContactModal()
{
	
var popUp = document.getElementById("aboutModal");
	
	if(popUp.style.display == "block")
	{
		popUp.style.display = "none";
	}
	else
	{
		popUp = document.getElementById("helpModal");
		if(popUp.style.display == "block")
			popUp.style.display = "none";
	}
	var modal = document.getElementById("contactModal");
	debugger; 
	modal.style.display = 'block';
}

function openHelpModal()
{
	
var popUp = document.getElementById("aboutModal");
	
	if(popUp.style.display == "block")
	{
		popUp.style.display = "none";
	}
	else
	{
		popUp = document.getElementById("contactModal");
		if(popUp.style.display == "block")
			popUp.style.display = "none";
	}
	var modal = document.getElementById("helpModal");
	debugger; 
	modal.style.display = 'block';
}

function closeModal() {
	var popUp = document.getElementById('aboutModal');
	
	if(popUp.style.display == "block")
		popUp.style.display = "none";
	else
	{
		var popUp = document.getElementById('contactModal');
		if(popUp.style.display == "block")
			popUp.style.display = "none";
		else
		{
			var popUp = document.getElementById('helpModal');
			if(popUp.style.display == "block")
				popUp.style.display = "none";
			
		}
		
	}
}

function loadDoc() {
	
		console.log("in the loadDoc");
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     document.getElementById("demo").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "http://www.jonathandunn.org/ajax_info.txt", true);
	  //test
	  xhttp.send();
	}

function jsTest(){
	alert('this is a test');
}
