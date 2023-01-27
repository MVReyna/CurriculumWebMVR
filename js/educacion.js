const educ = [{
        nombre: 'Profesorado de Educación Secundaria en Biología en concurrencia con el título de base',
        descripcion: 'Otorgado por el Instituto Superior de Estudios Pedagógicos (ISEP), Ministerio de Educación Gobierno de Córdoba, Argentina.',
        año: '(2018-2020)'
    },
    {
        nombre: 'Magister en Ciencias Biológicas mención Ecología',
        descripcion: 'Otorgado por la Pontificia Universidad Católica de Chile, Santiago de Chile, Chile.',
        año: '(2006-2008)'
    },
    {
        nombre: 'Licenciada en Ciencias Biológicas',
        descripcion: 'Otorgado por la Universidad Nacional de la  Patagonia “San Juan Bosco”, Puerto Madryn, Chubut, Argentina. Registro DGEM: R-13034, Registro Titulo DGEM: 309730',
        año: '(1997-2004)'
    }
];

let tableBody = document.getElementById('tbodyA');

for (let i = 0; i < educ.length; i++) {
    let name = `<td><h5>${educ[i].nombre}</h5></td>`;
    let description = `<td><p>${educ[i].descripcion}</p></td>`;
    let year = `<td><h6>${educ[i].año}</h6></td>`;

    tableBody.innerHTML += `<tr>${name + description + year}</tr>`;
}

const curso = [{
        nombre: 'Curso de Especialización en Criminalística y Actividades Periciales',
        descripcion: 'Dictado por la Facultad de Matemática, Astronomía y Física. Universidad Nacional de Córdoba- Córdoba, Argentina. ',
        año: '(2016-al presente)'
    },
    {
        nombre: 'Curso Argentina Programa: #SéProgramar- Primera Etapa',
        descripcion: 'Ministerio de Desarrollo Productivo, Argentina. Situación: APROBADO',
        año: '(2021)'
    },
    {
        nombre: 'Curso Argentina Programa: #YoProgramo- Segunda Edición',
        descripcion: 'Ministerio de Desarrollo Productivo, Argentina. Situación: CURSADO- Calificación 848.81',
        año: '(2022)'
    },
    {
        nombre: 'Seminario de “Robótica”',
        descripcion: 'Universidad Popular de la localidad de Colonia Caroya y por la Universidad Tecnológica Nacional- Facultad Regional Córdoba. Situación: APROBADO',
        año: '(2019)'
    },
    {
        nombre: 'Taller para Docentes de Ciencias Naturales de Nivel Medio “Utilización de aplicaciones hipermedia para el aprendizaje de la biología celular”',
        descripcion: 'Facultad de Ciencias Agropecuarias, Universidad Nacional de Córdoba, Córdoba, Argentina.',
        año: '(2014)'
    }
];

let tableBodyB = document.getElementById('tbodyB');

for (let i = 0; i < curso.length; i++) {
    let name = `<td><h6>${curso[i].nombre}</h6></td>`;
    let description = `<td><p>${curso[i].descripcion}</p></td>`;
    let year = `<td><h6>${curso[i].año}</h6></td>`;

    tableBodyB.innerHTML += `<tr>${name + description + year}</tr>`;
}