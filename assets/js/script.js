
/// put this whole fetch squence in an event listenter on the search btn.
let searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', search )
function search(){

fetch('http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=d8e2a6ae07f5f62478cb2f71b9b2d15e')
.then(response => response.json())
.then(function(citiesResult){
    let firstCity = citiesResult[0]
    console.log(firstCity.lat)
    console.log(firstCity.lon)
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=d8e2a6ae07f5f62478cb2f71b9b2d15e`)
})

    .then(response=>response.json())
    .then(citiesReturned => {
        console.log(citiesReturned)
        // for (let i = 0; i < citiesReturned.length; i++) {
            
        //     console.log(citiesReturned[i].city.list[0].weather)
           let citiesArray = document.getElementById('search-form');
            citiesArray.innerHTML = `<h1>${citiesReturned.city.list.weather}</h1>`
            })
//     })
}
    