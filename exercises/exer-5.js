/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devolver un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { AgruparTodosLosUsriosDeLAcompaniesEnUnaSolaTabla } = require('../exercises/exer-4.js');
const companies = createAll();
const resulatado = AgruparTodosLosUsriosDeLAcompaniesEnUnaSolaTabla(companies);

function transformacionDeDatosCampanies(resultado) {

      const size = resultado.length;
      const average = resultado.reduce((acum, item) => acum + item.age, 0) / resultado.length;
      const hasCar = resultado.filter(item => item.car).length;
      const averageWithCar = resultado.filter(item => item.car).reduce((acum, item) => acum + item.age, 0) / resultado.filter(item => item.car).length;

      return {
         size,
         average,
         hasCar,
         averageWithCar
      }
}

console.log('ejecicio - 5', transformacionDeDatosCampanies(resulatado));
// transformacionDeDatosCampanies(resulatado)

cleanConsole(5, companies);
console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
