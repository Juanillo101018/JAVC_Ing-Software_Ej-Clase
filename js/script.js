var a = 1;
var a = 2;

let b = 10;
// let  = 1000; no es posible redefinir con let se hace de la sig manera
b = 1000;

const c = 30;
// const c = 40; no es posible redefinir con const
//c = 40
console.log(a);
console.log(b);


// Sentencias iterativas

const cielo = document.getElementById("cielo");

for(let i = 0; i<5; i++){
    cielo.innerHTML += "⭐";
}


// arreglos

const planetas = ["🌍", "🪐", "🌕"]

for (const planeta of planetas){
    cielo.innerHTML += planeta;
}


let n = 0;
while(n<5){
    cielo.innerHTML += "☁️";
    n++;
}


let m = 0;
do {
    cielo.innerHTML += "🚀";
    m++;
} while (m<4);

// forma de definir una funcion
const btnEstrella = document.getElementById("btnEstrella")
btnEstrella.addEventListener("click", ()=>{
    cielo.innerHTML += "⭐"; //cada que doy click se agrega una estrella
})