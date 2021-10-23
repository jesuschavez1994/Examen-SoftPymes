/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro:

1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

export function AgruparTodosLosUsriosDeLAcompaniesEnUnaSolaTabla(companies) {
    let users=[];
    let ordenarUsers = [];
    //todas las "companies" en una sola tabla.
    companies.forEach(element => {
        element.users.map(user => {
            user.company = element.name;
        })
        users = [...users, ...element.users];
        ordenarUsers = getOrdenarUsuariosPorSuEdad(users);
    });
    return ordenarUsers;
}


function getOrdenarUsuariosPorSuEdad(users) {
    const usersOrdenado =  users.sort((a, b) => {
        return  a.age - b.age 
    })
    return usersOrdenado;
}

console.log('ejercicio-4', AgruparTodosLosUsriosDeLAcompaniesEnUnaSolaTabla(companies));

cleanConsole(4, companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
