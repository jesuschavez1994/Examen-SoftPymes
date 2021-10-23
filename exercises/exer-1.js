/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();
console.log('COMPANIES', companies)

//Funcion para cambiar los nombres undefined a strings vacios
function getCambiarNombreUndefined(companies) {
    const _companies =   companies.map(company => {
        company.users.forEach(element => {
            if(element.firstName === undefined) {
                element.firstName = '';
            }
            if(element.lastName === undefined) {
                element.lastName = '';
            }
            if(element.age === undefined) {
                element.age = '';
            }
            if(element.car === undefined) {
                element.car = '';
            }
            if(element.id === undefined) {
                element.id = '';
            }
        });

        return company
    })

    return _companies
}

//Ordenamos Por cantidad de usuarios
function getOrdenarPorCantidadUsuarios(companies) {
    const _companies =  companies.sort((a, b) => {
        return  a.usersLength - b.usersLength 
    })
    return _companies
}

//El nombre de cada "company" debe tener la primer letra en mayúscula.
function getCambiarPrimeraLetraMayuscula(companies) {
    const _companies =   companies.map(company => {
        company.name = company.name.charAt(0).toUpperCase() + company.name.slice(1);
        return company
    })
    return _companies
}
//3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.
function getCambiarPrimeraLetraDelNombreYApellidoMayuscula(companies) {
    const _companies =   companies.map(company => {
        company.users.forEach(element => {
            element.firstName = element.firstName.charAt(0).toUpperCase() + element.firstName.slice(1);
            element.lastName = element.lastName.charAt(0).toUpperCase() + element.lastName.slice(1);
        });
        return company
    })
    return _companies
}

// Ordenar por orden alfabetico
function getOrdenarPorOrdenAlfabetivo(companies) {
    const _companies =   companies.map(company => {
        company.users = company.users.sort((a, b) => {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        });
        return company
    })
    return _companies

}

//Mostramos los resultados en consola
console.log(getCambiarNombreUndefined(companies));
console.log(getCambiarPrimeraLetraMayuscula(companies));
console.log(getCambiarPrimeraLetraDelNombreYApellidoMayuscula(companies));
console.log(getOrdenarPorCantidadUsuarios(companies));
console.log(getOrdenarPorOrdenAlfabetivo(companies));


cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');


// let getCompanies = ( companies ) => ({
    
// });

// const getCompaniesAll = getCompanies( companies );

// console.log('COMPANIES', getCompaniesAll);
