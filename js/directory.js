fetch('../json/directory.json')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    let x = 0
    let comp_name = document.querySelectorAll('.dir_name');
    let phone = document.querySelectorAll('.dir_phone');
    let address = document.querySelectorAll('.dir_address');
    let img = document.querySelectorAll('.dir_logo');
    let website = document.querySelectorAll('.dir_website')
    
    let list = data.directory;

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