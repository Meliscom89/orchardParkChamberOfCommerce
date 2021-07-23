// daily forecast 

let apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.76&lon=-78.75&units=imperial&appid=1bc218cd2519778a9f56ca037b5e02ed'

fetch(apiURL)
  .then((response) => response.json())
  .then((response) => {
    
  document.querySelector(".cur_desc").textContent = response.current.weather[0].main;
  document.querySelector(".cur_temp").textContent = (Math.round(response.current.temp)) + '°F';
  document.querySelector(".cur_humidity").textContent = response.current.humidity + '%';;   
    });


// 3day forecast 

fetch(apiURL)
  .then((respond) => respond.json())
  .then((respond) => {
      
      let daysofweek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
//day1
      let date = new Date(respond.daily[1].dt * 1000);

       document.querySelector(".day1").textContent = daysofweek[date.getDay()];

       document.querySelector(".temp1").textContent = respond.daily[1].temp.day;
    
       let img = "https://openweathermap.org/img/w/" + respond.daily[1].weather[0].icon + ".png"
       document.querySelector(".threeD_pic1").setAttribute("src", img);
       document.querySelector(".threeD_pic1").setAttribute("alt", respond.daily[1].weather[0].description);

//day2
        date = new Date(respond.daily[2].dt * 1000);

       document.querySelector(".day2").textContent = daysofweek[date.getDay()];

       document.querySelector(".temp2").textContent = respond.daily[2].temp.day;
    
       img = "https://openweathermap.org/img/w/" + respond.daily[2].weather[0].icon + ".png"
       document.querySelector(".threeD_pic2").setAttribute("src", img);
       document.querySelector(".threeD_pic2").setAttribute("alt", respond.daily[2].weather[0].description);


//day3
       date = new Date(respond.daily[3].dt * 1000);

       document.querySelector(".day3").textContent = daysofweek[date.getDay()];

       document.querySelector(".temp3").textContent = respond.daily[3].temp.day;
    
       img = "https://openweathermap.org/img/w/" + respond.daily[3].weather[0].icon + ".png"
       document.querySelector(".threeD_pic3").setAttribute("src", img);
       document.querySelector(".threeD_pic3").setAttribute("alt", respond.daily[3].weather[0].description);
    });
    
    
    
  