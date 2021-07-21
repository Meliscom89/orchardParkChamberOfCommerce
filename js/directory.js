let directory = "../json/directory.json";

fetch(directory)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);   
    });