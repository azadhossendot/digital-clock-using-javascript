/*
* Its not a global clock.
* It will grab the time from the device where its running.
* 'new Date()' is an object from where the time will be grabbed.
* You can use this code everywhere.
* Do not hesitate to use it.
* Code by Md. Azad Hossen
* Facebook: www.facebook.com/azad.contact
* E-mail: azadhossendot@gmail.com
*/

//Onload event to run the function when document will be loaded.
onload = function clock(){
	
	//Variable to use 'time' id here.
	var time = document.getElementById('time');
	
	// Grabbing time from device.
	var date = new Date();
	//Grabbing hours.
	//24 hour format for hours.
	var hour24 = date.getHours();
	//12 hour format for hours.
	var hours = hour24 % 12;
	//Grabbing minutes.
	var mins = date.getMinutes();
	//Grabbing seconds.
	var secs = date.getSeconds();
	
	//if statements, 
	//to make sure that time is always showing with two digits.
	if(hours < 10){
		hours = '0'+hours;
	}
	
	if(mins < 10){
		mins = '0'+mins;
	}
	
	if(secs < 10){
		secs = '0'+secs;
	}
	
	//Functionality for AM/PM.
	var APM = "AM";
	
	if(hour24 > 12){
		APM = "PM";
	}
	
	//Display time on 'time' id.
	time.innerHTML = hours + ':' + mins + ':' + secs + " " + APM;
	
	//setTimeout() function for refreshing every 1 second.
	setTimeout(clock, 1000);
}
