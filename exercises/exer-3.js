/*
INSTRUCCIONES:

Cree una función que reciba la variable "companies" como parámetro; esta función debe devolver
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

function getValidadorNombres(companies) {
   
    let _companies =   companies.forEach(company => {
        company.users.forEach(element => {
            let firstNameComparations   = element.firstName.charAt(0).toUpperCase() + element.firstName.slice(1);
            let lastNameComparations    = element.lastName.charAt(0).toUpperCase() + element.lastName.slice(1);
            if(firstNameComparations !== element.firstName || lastNameComparations !== element.lastName){
                return false;
            }
            return company;
        });
    })
    return _companies
}

console.log('3-ejericio', getValidadorNombres(companies));

cleanConsole(3, companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
