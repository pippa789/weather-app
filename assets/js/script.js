var APIKey = 'd8e2a6ae07f5f62478cb2f71b9b2d15e'
var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + APIKey;

fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + APIKey)
.then(response => response.json())
.then(function(response){
    console.log(response)
})
