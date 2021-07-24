// events = 'json/opcc.json';

fetch('../json/opcc.json')
  .then((response) => {
    return response.json();
  })
  .then(json => {
    

    let x = 0;
    let name = document.querySelectorAll('.card .event_name');
    let date = document.querySelectorAll('.card .event_date');
    let time = document.querySelectorAll('.card .event_time');
    let location = document.querySelectorAll('.card .event_location');
    var list = json.opcc[0].events;
    let item;

    for (item of list) {
  
          name[x].innerHTML = item.eventName;
          date[x].innerHTML = item.date;
          time[x].innerHTML = item.time;
          location[x].innerHTML = item.location;
          x++;
        
      }

    });
   