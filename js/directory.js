fetch('../json/directory.json')
  .then((response) => {
    return response.json();
  })
  .then(data => {
  

    let x = 0;
    let comp_name = document.querySelectorAll('.dir_name');
    let phone = document.querySelectorAll('.dir_phone');
    let address = document.querySelectorAll('.dir_address');
    let img = document.querySelectorAll('.dir_logo');
    let website = document.querySelectorAll('.dir_website');
    
    var list = data.directory;
    let item;

    for (item of list) {
  
          comp_name[x].innerHTML = item.comp_name;
          phone[x].innerHTML = item.phone;
          address[x].innerHTML = item.address;
          img[x].setAttribute('src','images/' + item.logo);
          img[x].setAttribute('alt','images/' + item.comp_name);
          website[x].setAttribute('href', item.website);
          website[x].innerHTML = item.website;

          x++;
        
      }

    });

// list toggle

const toggle = document.querySelector(".dir_button");

const grid = document.querySelector(".dir_grid");

toggle.addEventListener("click",()=>{
    grid.classList.toggle("toggle");
},
false);