// para el ejemplo de producto
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoLista = document.getElementById("carritoLista");

if(carrito.length>0){
    renderCarrito();
}

function renderCarrito(){
    carritoLista.innerHTML = "";
    carrito.forEach(nombre=>{
        const li = document.createElement("li");
        li.textContent = nombre;
        carritoLista.appendChild(li);
    })
}

contenedor.addEventListener("click", e =>{
    if(e.target.tagName === "BUTTON"){
        const nombre = e.target.parentElement.querySelector("h3").textContent
        carrito.push(nombre);

        // despues de que se agrega el elemento a lista llamada carrito lo agregamos al local storage
        localStorage.setItem("carrito", JSON.stringify(carrito))
        renderCarrito();
    }
});