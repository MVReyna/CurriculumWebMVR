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
    descripcion: 'Dicto clases de Ciencias Naturales y afines en diversas escuelas secundarias de la Provincia de Córdoba, Argentina',
    año: '(2012 al presente)'
}];
const expLab2 = [{
    nombre: 'Ayudante de cátedra/ Profesor Invitado Nivel Universitario',
    descripcion: 'Durante mi formación académica de grado y post-grado dicté diversas clases referentes a mi especialidad.',
    año: '(2002 - 2010)',
}];

const expLab3 = [{
    nombre: 'Ayudante de Investigación / Co-Investigador',
    descripcion: 'Durante mi formación académica participé de diversas investigaciones como asistente técnico y formé parte de equipo de investigación de proyectos',
    año: '(2004 -2012)'
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
        nombre: 'Biotecnología (4° Año)',
        descripcion: 'Escuela Experimental ProA Colonia Caroya. Colonia Caroya- Córdoba, Argentina',
        año: '(2022 al presente)'
    },
    {
        nombre: 'Club Escolar de Ciencias y Tecnologías (4° Año)',
        descripcion: 'Escuela Experimental ProA Colonia Caroya. Colonia Caroya- Córdoba, Argentina',
        año: '(2022 al presente)'
    },
    {
        nombre: 'Química (1°,2°y 3° Año)',
        descripcion: 'Escuela Experimental ProA Colonia Caroya. Colonia Caroya- Córdoba, Argentina',
        año: '(2019 al presente)'
    },
    {
        nombre: 'Ciencias Naturales-Química (2° Año)',
        descripcion: 'IPEM N° 349 “Giovanni Bosco”. Colonia Caroya- Córdoba, Argentina',
        año: '(2019 al presente)'
    },
    {
        nombre: 'Ciencias Naturales (1° a 6° Año)',
        descripcion: 'IPEM N° 294 “Jesús María”- Anexo Santa Catalina. Santa Catalina- Córdoba, Argentina',
        año: '(2017 al presente)'
    },
    {
        nombre: 'Biotecnología (6° Año)',
        descripcion: 'IPEM N° 349 “Giovanni Bosco”. Colonia Caroya- Córdoba, Argentina',
        año: '(2014 -2022)'
    },
    {
        nombre: 'Física (5° Año)',
        descripcion: 'IPEM N° 367“Ascochinga” Anexo Canteras “El Sauce”. El Sauce- Córdoba, Argentina',
        año: '(2018 -2019)'
    },
    {
        nombre: 'Química (2° y 6° Año) y Física (3°, 4° y 5° Año)',
        descripcion: 'Asociación Educativa “Pio León”. Colonia Caroya- Córdoba, Argentina',
        año: '(2014 -2017)'
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
        nombre: 'Profesor invitado',
        descripcion: 'Clase sobre Intermareales Rocosos. Curso de Mapeo Expeditivo. Universidad Nacional de la Patagonia “San Juan Bosco”.  Puerto Madryn- Chubut, Argentina',
        año: '(2010)'
    },
    {
        nombre: 'Ayudante docente',
        descripcion: 'Curso -	Principios de Ecología y medio Ambiente (BIO143M).  Pontificia Universidad Católica de Chile. Santiago de Chile, Chile',
        año: '(2004 - 2005)'
    },
    {
        nombre: 'Auxiliar de Segunda Ad Honorem',
        descripcion: '-	Cátedra de Zoología general. UNP San Juan Bosco, sede Puerto Madryn, Chubut, Argentina',
        año: '(2002 - 2003)'
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
        nombre: 'Co-Investigador',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2012 al presente)'
    },
    {
        nombre: 'Asistente de Investigación 1',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2004 - 2010)'
    },
    {
        nombre: 'Asistente de Investigación 2',
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
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};