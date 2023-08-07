div id="colorBox"{

}

let btns = 
      document.getElementsByClassName("b") 
for(let i = 0; i<btns.length;i++) {
btns[i].addEventListener("click"function() { 
let buttonstyle = getComputedStyle(this);
let butttonBgcolor =
           buttonstyle["backgroundColor"]
Document.body.style.backgroundColor
                      = butttonBgcolor;
});}                        
