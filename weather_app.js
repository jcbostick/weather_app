$(document).ready(function() {


    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=8dab3231c8bc7e1849d31f15520c8cfe', function(result){
        $('#weather').html(JSON.stringify(result));
    });


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$("#coords").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
		});
	}

	/*
	api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=8dab3231c8bc7e1849d31f15520c8cfe
	*/


});
