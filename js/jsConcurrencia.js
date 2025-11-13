const out = document.getElementById("output");
const sec = document.getElementById("sec");
const conc = document.getElementById("conc");

function log(msg){
    out.textContent += msg + "\n";
}

function tarea(nombre, tiempo){
    return new Promise(res=>{
        log(`El alumno ${nombre} inicia su tarea`);
        setTimeout(()=>{
            log(`El alumno ${nombre} termino su tarea en ${tiempo/1000}s`)
            res();
        }, tiempo
        )
    })
}

// secuencial
sec.onclick = async () =>{
    out.textContent="";
    log("Ejemplo secuencial");
    const incio = performance.now();
    await tarea("Juan", 3000);
    await tarea("Ivana", 2000);
    log(`Tiempo total de ejecucion: ${((performance.now()-inicio) /1000).toFixed(2)}s`)
}

//concurrente
conc.onclick = async () =>{
    out.textContent="";
    log("Ejemplo concurrente")
    const incio = performance.now();
    await Promise.all(
        [
            tarea("Antonio", 3000),
            tarea("Montserrat", 1000)
        ]
    );
    log(`Tiempo total de ejecucion: ${((performance.now()-inicio) /1000).toFixed(2)}s`)
}