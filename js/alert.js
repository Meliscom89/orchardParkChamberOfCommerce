//Government alert banner
let apialert = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.76&lon=-78.75&units=imperial&appid=1bc218cd2519778a9f56ca037b5e02ed'

fetch(apialert)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
   
let card = document.querySelector(".alert")

if (response.alerts === undefined){
card.style.display = "none";}
    else{
        card.style.display = "block";
        let alert = document.createElement('span');
        alert.textContent = response.alerts[0].event;
        card.appendChild(alert);

        function close(){
            card.style.display = "none";
        };

        const button = document.querySelector(".alert_button")

        button.addEventListener("click",(close));
    }

 });
