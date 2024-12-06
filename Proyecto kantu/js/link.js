// const links = [
//     {href: '#', text: 'Menu', isActive: true},
//     {href: '#', text: 'Promoción', isActive: false},
//     {href: '#', text: 'Agenda', isActive: false},
//     {href: '#', text: 'Portafolio', isActive: false},
//     {href: '#', text: 'Nosotros', isActive: false},
//     {href: '#', text: 'Contacto', isActive: false},
// ];


// crearMenuLinks(links);

// function crearMenuLinks(links) {
//     const menu = document.getElementById('menuItem'); 
//     links.forEach(function (link) {
//         const listItem = document.createElement('li'); // Crea un elemento <li>
//         const anchor = document.createElement('a'); // Crea un elemento <a>
//         anchor.href = link.href;
//         anchor.textContent = link.text;

//         if (link.isActive) {
//             anchor.classList.add('active'); // Agrega la clase 'active' si el enlace está activo
//         }

//         listItem.appendChild(anchor); // Agrega el enlace al elemento <li>
//         menu.appendChild(listItem); // Agrega el elemento <li> al menú
//     });
//     console.log(links);
// }

const procutost = [
    {"id": 1,"nombre": "Pisco Sour","precio": 18.0,"detalles": "Cóctel clásico peruano preparado con pisco, jugo de limón, jarabe de goma, clara de huevo y amargo de angostura.", "imagen": ""},
    {"id": 2,"nombre": "Pisco Sour","precio": 18.0,"detalles": "Cóctel clásico peruano preparado con pisco, jugo de limón, jarabe de goma, clara de huevo y amargo de angostura.", "imagen": ""},
    {"id": 3,"nombre": "Pisco Sour","precio": 18.0,"detalles": "Cóctel clásico peruano preparado con pisco, jugo de limón, jarabe de goma, clara de huevo y amargo de angostura.", "imagen": ""},

]

function creargrillaProduct(){
    const grid = document.getElementById('tipo');

    productos.forEach(function (producto){
        
        const div = document.createElement('div');
        div.classList.add('card');
        console.log(producto)
    })

}


