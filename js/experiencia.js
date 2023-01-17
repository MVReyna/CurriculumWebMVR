let expLab = [{
        nombre: 'Profesora de nivel Secundario de  Ciencias Naturales y afines',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2012 al presente)',
        masInfo: '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open modal</button>'
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

//Arreglo para la Info extra // 

const myModal = [{
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