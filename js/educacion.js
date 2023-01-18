const educ = [{
        nombre: 'Licenciada en Cs Biológicas',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2004)'
    },
    {
        nombre: 'Profesora Nivel Secundario de Biología',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2020)'
    },
    {
        nombre: 'Master en Cs Biológicas mención Ecología',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2008)'
    }
];

let tableBody = document.getElementById('tbodyA');

for (let i = 0; i < educ.length; i++) {
    let name = `<td>${educ[i].nombre}</td>`;
    let description = `<td>${educ[i].descripcion}</td>`;
    let year = `<td>${educ[i].año}</td>`;

    tableBody.innerHTML += `<tr>${name + description + year}</tr>`;
}

const curso = [{
        nombre: 'Licenciada en Cs Biológicas',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2004)'
    },
    {
        nombre: 'Profesora Nivel Secundario de Biología',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2020)'
    },
    {
        nombre: 'Master en Cs Biológicas mención Ecología',
        descripcion: '(Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem voluptatem placeat veritatis, saepe laudantium ipsum accusantium beatae nesciunt vel cum quas, doloribus dolores illo facilis ipsa nulla? Fugiat, dolorem?)',
        año: '(2008)'
    }
];

let tableBodyB = document.getElementById('tbodyB');

for (let i = 0; i < curso.length; i++) {
    let name = `<td>${curso[i].nombre}</td>`;
    let description = `<td>${curso[i].descripcion}</td>`;
    let year = `<td>${curso[i].año}</td>`;

    tableBodyB.innerHTML += `<tr>${name + description + year}</tr>`;
}

/**
document.getElementById('edu').innerHTML = "<table><tr><td><h5> Profesora Nivel Secundario de Biología</h5></td><td><p>Otorgado por el ISEP, Córdoba -Argentina</p></td><td><h6>(2020)</h6></td></tr>\
<tr><td><h5> Master en Cs Biológicas mención Ecología</h5></td><td><p>Otorgado por la Universidad Católica de Chile, Santiago de Chile -Chile</p></td><td><h6>(2008)</h6></td></tr>\
<tr><td><h5> Licenciada en Cs Biológicas</h5></td><td><p>Obtenido en la Universidad Nacional de la Patagonia San Juan Bosco, sede Puerto Madryn, Chubut -Argentina</p></td><td><h6>(2004)</h6></td></tr>\
</table>";

document.getElementById('cursos').innerHTML = "<table><tr><td><h5> Profesora Nivel Secundario de Biología</h5></td><td><p>Otorgado por el ISEP, Córdoba -Argentina</p></td><td><h6>(2020)</h6></td></tr>\
<tr><td><h5> Master en Cs Biológicas mención Ecología</h5></td><td><p>Otorgado por la Universidad Católica de Chile, Santiago de Chile -Chile</p></td><td><h6>(2008)</h6></td></tr>\
<tr><td><h5> Licenciada en Cs Biológicas</h5></td><td><p>Obtenido en la Universidad Nacional de la Patagonia San Juan Bosco, sede Puerto Madryn, Chubut -Argentina</p></td><td><h6>(2004)</h6></td></tr>\
</table>";
*/
console.log(educ);
console.log(curso);