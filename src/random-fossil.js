import axios from "axios";

document.getElementById("get-random-fossil").addEventListener('click', async (evt) => {
    const response = await axios.get('/random-fossil.json');
    console.log(response.data);

    const fossilDiv = document.querySelector("#random-fossil-image");
    const fossilNameElement = document.querySelector("#random-fossil-name");
    let imgElement;
    if (fossilDiv.firstChild) imgElement = fossilDiv.firstChild; // check if the div has any children elements
    else { 
      imgElement = document.createElement("img");
      imgElement.setAttribute("alt", "Missing Photo");
      imgElement.setAttribute("height", "200px");
      fossilDiv.append(imgElement);
    }
    imgElement.setAttribute("src", response.data.img);
    fossilNameElement.textContent = response.data.name;
})