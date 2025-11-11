// componentes mejorados

const productos = [{nombre: "EscudoFIUNAM", precio:1000, img:"https://www.ingenieria.unam.mx/nuestra_facultad/images/institucionales/escudos/escudofi_color.jpg"},
    {nombre:"HotWeel", precio:40, img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvw62ZKw4B1YCvB7Fx4K1HvGFg9RktHwSBA6WcmyLnB1n4V9GP25moLO3nHp8vDdv8bq5NQEVIeq3isqNhWN3a82Tb2ai72wB-wlRIQ94ZmuFsffjWVnRUPWzKrVSt&usqp=CAc"}
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className = "card"

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});
