// eventos
// forma de definir una funcion
const btnEstrella = document.getElementById("btnEstrella2")
btnEstrella2.addEventListener("click", ()=>{
    cielo2.innerHTML += "⭐"; //cada que doy click se agrega una estrella
})

const btnPlaneta =document.getElementById("btnPlaneta");

btnPlaneta.addEventListener("dblclick", ()=>{
    cielo2.innerHTML += "🪐"; //cada que se hace doble click se agrega un planeta
})

const inputEmoji = document.getElementById("inputEmoji");

const btnAgregarEmoji = document.getElementById("btnAgregarEmoji");

btnAgregarEmoji.addEventListener("click", ()=>{
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo2.innerHTML += emoji;
    inputEmoji.value = "";
})

inputEmoji.addEventListener("keydown", e =>{
    if(e.key ==="Escape") cielo2.innerHTML="";
})
