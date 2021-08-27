title = document.querySelector("#title");

function handleTitleClick(){
    console.log("title clicked!");
    if( title.style.color === "red"){
        title.style.color = "black";
    } else {
        title.style.color = "red";
    }
}
title.addEventListener("click", handleTitleClick)

function handleMouseEnter(){
    title.textContent = "Mouse Enter";
}

title.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave(){
    title.textContent = "Mouse Leave";
}
title.addEventListener("mouseleave", handleMouseLeave);

console.dir(title);

function handleWindowResize(){
    title.textContent = "Window Resize";
}
window.addEventListener("resize", handleWindowResize);