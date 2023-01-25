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

//Info Primer modal//

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


let modal_body1 = document.getElementById('masInfo1');

for (let i = 0; i < masInfo1.length; i++) {
    let name = `<td>${masInfo1[i].nombre}</td>`;
    let description = `<td>${masInfo1[i].descripcion}</td>`;
    let year = `<td>${masInfo1[i].año}</td>`;

    modal_body1.innerHTML += `<tr>${name + description + year}</tr>`;
};

//Info 2do Modal
const masInfo2 = [{
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

let modal_body2 = document.getElementById('masInfo2');

for (let i = 0; i < masInfo2.length; i++) {
    let name = `<td>${masInfo2[i].nombre}</td>`;
    let description = `<td>${masInfo2[i].descripcion}</td>`;
    let year = `<td>${masInfo2[i].año}</td>`;

    modal_body2.innerHTML += `<tr>${name + description + year}</tr>`;
};

//Info 3er Modal
const masInfo3 = [{
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

let modal_body3 = document.getElementById('masInfo3');

for (let i = 0; i < masInfo3.length; i++) {
    let name = `<td>${masInfo3[i].nombre}</td>`;
    let description = `<td>${masInfo3[i].descripcion}</td>`;
    let year = `<td>${masInfo3[i].año}</td>`;

    modal_body3.innerHTML += `<tr>${name + description + year}</tr>`;
};

//Funcionamiento Multiple Modal//

const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
        console.log("Abre la ventana modal");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
        console.log("Cierra la ventana modal");
    });
});

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        /* modals.forEach((modal) => modal.classList.remove("active"));
         overlay.classList.remove("active");*/
    }
};