import "./index.css";

import image from '../images/note.jpg';

let img = document.createElement("img");
img.style.width="220px"
img.src=image;
document.getElementById("img_container").appendChild(img);

let count = 0;

document.getElementById("add").addEventListener("click",()=> {
    let note = document.getElementById("note").value;
    let h2 = document.createElement("h2");
   
    h2.innerText = `${count = count + 1})  ${note}`;
 
    document.getElementById("notes").appendChild(h2);
});

