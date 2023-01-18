/**
 * const expLab = [{
        nombre: 'Profesora de nivel Secundario de  Ciencias Naturales y afines',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2012 al presente)'
    },
    {
        nombre: 'Asistente de Investigación',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2004 - 2010)',
        masInfo: '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open modal</button>'
    },
    {
        nombre: 'Experiencia 3',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2012 al presente)',
        masInfo: 'button'
    }
];

let tableBodyExp = document.getElementById('tbodyExp');

for (let i = 0; i < expLab.length; i++) {
    let name = `<td>${expLab[i].nombre}</td>`;
    let description = `<td>${expLab[i].descripcion}</td>`;
    let year = `<td>${expLab[i].año}</td>`;
    let information = `<td>${expLab[i].masInfo}</td>`;

    tableBodyExp.innerHTML += `<tr>${name + description + year + information}</tr>`;

    console.log(expLab);
}


 */


// segunda opción para agregar experiencias

const expLab1 = [{
    nombre: 'Profesora de nivel Secundario de  Ciencias Naturales y afines',
    descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
    año: '(2012 al presente)'
}];
const expLab2 = [{
    nombre: 'Asistente de Investigación',
    descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
    año: '(2004 - 2010)',
}];

const expLab3 = [{
    nombre: 'Experiencia 3',
    descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
    año: '(2012 al presente)'
}];

let tableBodyExp1 = document.getElementById('tbodyExp1');

for (let i = 0; i < expLab1.length; i++) {
    let name = `<tr><h4>${expLab1[i].nombre}</h4></tr>`;
    let description = `<tr><p> ${expLab1[i].descripcion}</p></tr>`;
    let year = `<tr><h6>${expLab1[i].año}</h6></tr>`;

    tableBodyExp1.innerHTML += `${name + description + year}`;

}

let tableBodyExp2 = document.getElementById('tbodyExp2');

for (let i = 0; i < expLab2.length; i++) {
    let name = `<tr><h4>${expLab2[i].nombre}</h4></tr>`;
    let description = `<tr><p> ${expLab2[i].descripcion}</p></tr>`;
    let year = `<tr><h6>${expLab2[i].año}</h6></tr>`;

    tableBodyExp2.innerHTML += `${name + description + year}`;

}

let tableBodyExp3 = document.getElementById('tbodyExp3');

for (let i = 0; i < expLab3.length; i++) {
    let name = `<tr><h4>${expLab3[i].nombre}</h4></tr>`;
    let description = `<tr><p> ${expLab3[i].descripcion}</p></tr>`;
    let year = `<tr><h6>${expLab3[i].año}</h6></tr>`;

    tableBodyExp3.innerHTML += `${name + description + year}`;

}


//Info extra // 

const masInfo1 = [{
        nombre: 'Profesora de nivel Secundario de  Ciencias Naturales y afines',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2012 al presente)'
    },
    {
        nombre: 'Asistente de Investigación',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2004 - 2010)'
    },
    {
        nombre: 'Experiencia 3',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2012 al presente)'
    }
]


const open = document.getElementById('open');
const modal_container1 = document.getElementById('modal_container1');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container1.classList.add('show');
    alert("abre");
});

close.addEventListener('click', () => {
    modal_container1.classList.remove('show');
    alert("cierra");
});



/**
for (let i = 0; i < masInfo1.length; i++) {
    let name = `<tr><h4>${masInfo1[i].nombre}</h4></tr>`;
    let description = `<tr><p> ${masInfo1[i].descripcion}</p></tr>`;
    let year = `<tr><h6>${masInfo1[i].año}</h6></tr>`;

};
*/



/**
let btnModal = document.getElementById('tbodyMas');

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/**
    function masInfo() {
        for (let i = 0; i < myModal.length; i++) {
            let cargo = `<td>${myModal[i].nombre}</td>`;
            let description = `<td>${myModal[i].descripcion}</td>`
            let year = `<td>${myModal[i].año}</td>`;
        }
    }



    document.getElementById('myModal').addEventListener("click", function(masInfo) {
        console.log("Hola Mundo desde EventListener");
        btnMas.innerHTML += `<tr>${cargo + description + year}</tr>`;
    });
     */