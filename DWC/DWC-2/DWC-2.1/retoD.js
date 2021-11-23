"use strict";

//Reto D - Facturas

//Declaro todas la variables que voy a utilizar
var productoUsuario,
  precioUsuario,
  impuestoUsuario,
  nombreProducto,
  precioProducto,
  impuestoProducto,
  precioFinal,
  datoErroneo;

//Inicializo las variables del producto con datos genéricas
nombreProducto = "Producto genérico";
precioProducto = 100;
impuestoProducto = 21;

/**
 * Creo un do-while, porque los breakes necesitan
 * estar dentro de un bucle
 */

do {
  //Pido al usuario que introduzca los datos del producto
  productoUsuario = prompt("Introduce el nombre del producto");
  precioUsuario = prompt("Introduce el precio del producto");
  impuestoUsuario = prompt("Introduce el impuesto del producto");

  /**
   * Valido si el usuario ha introducido un nombre
   * incorrecto, acabando el programa al momento
   * si el nombre no es válido
   */
  if (productoUsuario === "" || comprobarSiDatoEsNumerico(productoUsuario)) {
    alert("No se ha introducido el nombre del producto");
    break;
  } else {
    /**
     * En caso contrario, guardo en  la variable
     * inicializada anteriormente el nombre puesto
     * por el usuario
     */
    nombreProducto = productoUsuario;
  }

  /**
   * Valido si el usuario ha introducido un precio
   * incorrecto, acabando el programa al momento
   * si el precio no es válido
   */
  if (comprobarSiDatoEsNumerico(precioUsuario)) {
    /**
     * En caso contrario, guardo en  la variable
     * inicializada anteriormente el precio puesto
     * por el usuario
     */
    precioProducto = parseInt(precioUsuario);
  } else {
    alert("No se ha introducido el precio del producto");
    break;
  }

  /**
   * Valido si el usuario ha introducido un impuesto
   * incorrecto, acabando el programa al momento
   * si el impuesto no es válido
   */
  if (comprobarSiDatoEsNumerico(impuestoUsuario)) {
    /**
     * En caso contrario, guardo en  la variable
     * inicializada anteriormente el impuesto introducido
     * por el usuario
     */
    impuestoProducto = parseInt(impuestoUsuario);
  } else {
    alert("No se ha introducido el impuesto3 del producto");
    break;
  }

  //Calculo el precio final, teniendo en cuenta el impuesto
  precioFinal = calcularPrecioFinal(precioProducto, impuestoProducto);

  //Muestro por pantalla
  mostrarProducto(nombreProducto, precioFinal);

  /**
   *
   * @param {*} dato
   * @returns
   */
  function comprobarSiDatoEsNumerico(dato) {
    let comprobacion = parseInt(dato);
    if (isNaN(comprobacion)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   *
   * @param {double} precio
   * @param {int} impuesto
   * @returns
   */
  function calcularPrecioFinal(precio, impuesto) {
    let impuestoSobrePrecio = (precio * impuesto) / 100;
    return (precio - impuestoSobrePrecio).toFixed(2);
  }

  /**
   *
   * @param {string} nombre
   * @param {double} precio
   */
  function mostrarProducto(nombre, precio) {
    console.log(
      "El producto con nombre '" +
        nombre +
        "' tiene un precio final de " +
        precio +
        " euros."
    );
  }
} while (datoErroneo == true);
