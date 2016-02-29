// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {
  $('.geolocation').show(); 
} else {
  $('.geolocation').hide();
}


// On Click, Get Geolocation, Call Weather Function
$('button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
  
};


//   Type it!


$('#example5').typeIt({
     strings: ("This is a great string.", "What's the weather?"),
     speed: 50,
     breakLines: true
});

//  background gradient random

// Store Background Classes

var bgs = ['one', 'two', 'three'];
console.log(bgs);

// Random Number Generator
var max = 3;
var randNum = Math.floor( Math.random() *max );
console.log ( randNum );


// Change Background Class

 $('body').addClass( bgs[randNum] );