let imagenes = document.querySelectorAll("img");
let lugares = document.querySelectorAll(".rompecoco");
let boton = document.querySelector("button");
// let ocupado = {
//     lugar1: 0,   
//     lugar2: 0,   
//     lugar3: 0,   
// };

const inicioTraslado = (evento) =>{
// evento.dataTransfer.setData("Text","./imagenes/rompe1.png")
// console.dir(event.srcElement);
// console.dir(event.srcElement.attributes[0].nodeValue)
    let ruta = event.srcElement.attributes[0].nodeValue
    evento.dataTransfer.setData("Text", ruta)

};

const finalTraslado = (evento) => {
    let imagen=evento.target;
    // imagen.style.visibility="hidden";
    // imagen.style.display="none";
    imagen.classList.add("ocultar");

}


const soltarImagen = (evento) => {
    
    // console.log(evento.target.id);
    // let i = evento.target.id;
    // i = ocupado.i
    // console.log(i);

    let dataImagen = evento.dataTransfer.getData("Text");
        event.srcElement.innerHTML=`<img id="${this}" src="${dataImagen}"/>`;        


};

const prevenirDefault = (evento) =>{
    evento.preventDefault();
}

let reiniciar = () =>{
    lugares.forEach(element => {
        element.removeChild(element.childNodes[0]);
        let parrafo = document.createElement("p");
        parrafo.innerText="Arrastre y suelte la imágen aquí"
        element.appendChild(parrafo);    
    });

    imagenes.forEach(element => {
        // element.style.visibility="visible"
        // element.style.display="";
        element.classList.remove("ocultar");

    });
}

for (i of imagenes) {
i.addEventListener("dragstart", inicioTraslado);
i.addEventListener("dragend", finalTraslado);
};

for (i of lugares) {
i.addEventListener("dragover", prevenirDefault);
i.addEventListener("drop", soltarImagen);
}

boton.addEventListener("click", reiniciar);