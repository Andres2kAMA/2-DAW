"use strict";

//Ejercicio 7 - Cadenas

/**
 *
 * @param {String} nombre
 * @param {String} apellidos
 * @param {String} telefono
 * @param {String} email
 * @param {String} codigoPostal
 * @returns Devuelvo un objeto cliente con los datos introducidos por parámetro
 *          y dos funciones.
 */
function crearCliente(nombre, apellidos, telefono, email, codigoPostal) {
  return {
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    email: email,
    codigoPostal: codigoPostal,

    imprimirCliente: function () {
      console.log("Datos del cliente: ");
      console.log(` Nombre: ${this.nombre}`);
      console.log(` Apellidos: ${this.apellidos}`);
      console.log(` Teléfono: ${this.telefono}`);
      console.log(` Email: ${this.email}`);
      console.log(` Servidor asociado al email: ${this.devolverServidor()}`);
      console.log(` Código postal: ${this.codigoPostal}`);
    },

    devolverServidor() {
      let emailDividido = email.split("@");
      return emailDividido[1];
    },
  };
}

/**
 *
 * @param {String} cadena
 */
function tratarDatos(cadena) {
  let cadenaSeparada = cadena.split(":");
  let clienteUno = crearCliente(
    cadenaSeparada[0],
    cadenaSeparada[1],
    cadenaSeparada[2],
    cadenaSeparada[3],
    cadenaSeparada[4]
  );
  clienteUno.imprimirCliente();
}

//Llamo a la función
tratarDatos(
  "Andrés:Mancheño Alcaraz:633900694:andresmancheno.alu@iespacomolla.es:03600"
);
