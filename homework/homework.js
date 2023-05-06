const divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = "box " + (i + 1);

    if(i === 0){
        divs[i].style.backgroundColor = "red";
    } else if(i === 1){
        divs[i].style.backgroundColor = "green";
    }else if(i === 2) {
        divs[i].style.backgroundColor = "blue";
    }
}