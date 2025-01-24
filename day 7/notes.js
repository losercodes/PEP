//  restapi----
//  fetch___through_network-Request

//  waiting in response by using api and their "promises"


 // in this folder we are going to expreince a new topic like promises use in js (restapi)
 

//  fetch using 
let cityContainer = document.querySelector("city-container")
const API_BASE_URL = 'https://makemytrip-backend-w2d2.onrender.com/cities'

//  post call we have to pass second argument
//  promise having three state
// 1. pending
// 2. fullfill ---> data
// 3. rejected ---> error
//  fetch return promises


// for making promises the class
 

fetch('${API_BASE_URL}/cities').then((response)=>{
    return response.json()

}).then((data)=>{
    for(const city of data){
        const {city: cityName,description,image} = city
            const card = createCityCard(image, cityName, description)
            cityContainer.appendChild(card)
        }
    }).catch((err)=>{
        console.log(err)
})
