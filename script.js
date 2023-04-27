const apiKey="229aa15c8a0bd94ab34a553b08aca7ba "
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q="

//STEP 4
//  ******city name will come from input field ,so we need to write the code for the input field
// access the search or input box and also button of HTML through JS.
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")


// When the people will click on the search button ,it should information to checkWeather function




// display the newly updapted city name through checkweather function

//async function nameofunction
async function checkWeather(city){

    const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
    // apply the wetick(``)


    // STEP 7*****if we want to display the erroe only when the weather condition is wrong and in other case it should dispaly the the weather information of the city
    // if(response.status==404){
    //     document.querySelector(".error").getElementsByClassName.display="block";

    // }



// in JSON format
    var data= await response.json();
// 1 step 
    console.log(data);
    // 2 step

    // update the city name ,wind ,humidity,temp

    // we have to access the HTML by javascript
    document.querySelector(".city").innerHTML=data.name;
// data.name=city name update

// *****if the temp was in decimal form to round off that we use math.round and put data.main.temp in it
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";

document.querySelector(".humidity").innerHTML=data.main.humidity +"%";

document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";



// STEP 6-----**NOW LETS CHANGE THE WEATHER ICON ACORDING TO THE WEATHER CONDITION AND TEMPERATURE FOR THAT WE NEED TO WRITE IN THE JAVASCRIPT

// this "main " will give the weather condition
if(data.weather[0].main=="Clouds"){
    weatherIcon.src=" https://cdn-icons-png.flaticon.com/512/1850/1850730.png"
}
 else if(data.weather[0].main=="Clear"){
    weatherIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVqntw21AMIo7erWQHWOxNDkJ0BbPD_ZVjA&usqp=CAU"
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0x_uhWdNkFuEEgCD1rjdOjQnsQ5MTxsknA&usqp=CAU  "
}
// else if(data.weather[0].main=="Drizzle"){
//     weatherIcon.src="  "
// }
// else if(data.weather[0].main=="Mist"){
//     weatherIcon.src="  "
// }
  

}
//**** */ STEP 5 listen the click event to listen the click of button then send it to the input field we will the the checkWeather function


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
 
// this checkWeather have the city information written in the input field
// to get the data written in the input field , we will add checkWeather function