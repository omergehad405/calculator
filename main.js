let screen = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
btn.addEventListener("click", (e) => {
    switch(e.target.innerText){
        case 'C' :
            screen.innerText = '';
            break;
        
        case '←' :
            screen.innerText = screen.innerText.slice(e, -1);
            break;

        case '=' :
            screen.innerText = eval(screen.innerText);
            break;
            
        default:
            screen.innerText += e.target.innerText;
    }
});
});
