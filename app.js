

// const baseUrl = "https://platzi-avo.vercel.app"
// const url = "https://platzi-avo.vercel.app/api/avo"

// //Web api
// //Conectamos al server
// window.fetch(`${baseUrl}/api/avo`)
// //Procesar la respuesta y convertimos a JSON
// .then((respuesta) => respuesta.json())
// //JSON -> DATA -> Renderizar info
// .then(respuestaJSON => {

//     const todoslosItems = []

//     respuestaJSON.data.forEach((item) => {

//         //Crear imagen
//         const imagen = document.createElement("img");
//         imagen.src = `${baseUrl}${item.image}`
//         imagen.style.width="180px"

//         //Crear titulo
//         const titulo = document.createElement("h2");
//         titulo.textContent = item.name

//         //Creamos precio
//         const precio = document.createElement("p")
//         precio.textContent = item.price

//         //Contenedor de todos los items...
//         const contenedor = document.createElement("div")
//         contenedor.style.border="1px solid black"
//         contenedor.style.margin="5px"
//         contenedor.style.width = "200px"

//         contenedor.append(imagen,titulo,precio)

//         todoslosItems.push(contenedor)
//     });
//     const containerItems = document.querySelector("#container")
//     containerItems.append(...todoslosItems)

// })


//Obteniendo API con Async Await
const getAguacates = async () => {
    try {
        const urlBase = 'https://platzi-avo.vercel.app'
        const respuesta = await fetch('https://platzi-avo.vercel.app/api/avo') // Obtenemos la respuesta
        const Resultados = await respuesta.json() // La pasamos a JSON
        console.log(Resultados)


        Resultados.data.forEach(element => {
            const contenedorPadre = document.querySelector(".contenedorPadre")

            contenedorPadre.innerHTML += `
            <div class="card" style="width: 14rem;">
  <img src="${urlBase}${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.price}</p>
    <a href="#" class="btn btn-primary">Añadir</a>
  </div>
</div>
            `
        });
    } catch (error) {
        console.log(error)
    }
}

getAguacates()