"use strict";

//Me defino unas plantillas div.

import * as funcionesHtml from "./funciones_Html.js";
let usuario = "";
const plantillaHeaderInicio = `<header class="page-header">
                            <ul class="nav nav-pills pull-right">
                            <li class="active"><a href="#" id="inicioSesion">Iniciar sesión</a></li>
                            <li><a href="#" id="productos">Productos</a></li>
                            <li><a href="#" id="listas">Listas de la compra</a></li>
                            <li><a href="#" id="registro">Registrarse</a></li>
                            </ul>
                            <h3>Carrefour</h3>
                        </header>`;

const plantillaHeaderInicioSesion = `<header class="page-header">
                        <ul class="nav nav-pills pull-right">
                        <li><a href="#" id="productos">Productos</a></li>
                        <li><a href="#" id="listas">Listas de la compra</a></li>
                        <li class="active"><a  href="#">Cerrar sesión</a></li>
                        </ul>
                        <h3>Carrefour</h3>
                    </header>`;

const plantillaHeaderProducto = `<header class="page-header">
                                    <ul class="nav nav-pills pull-right">
                                    <li class="active"><a href="#" id="inicio">Inicio</a></li>
                                    <li><a href="#" id="mostrarProductos">Mostrar</a></li>
                                    <li><a href="#" id="ordenarProductos" class="ascendente">Ordenar de manera ascendente</a></li>
                                    <li><a href="#" id="filtrarProductos">Filtrar</a></li>
                                    </ul>
                                    <h3>Productos</h3>
                                </header>`;

const plantillaHeaderLista = `<header class="page-header">
                                    <ul class="nav nav-pills pull-right">
                                    <li class="active"><a href="#" id="inicio">Inicio</a></li>
                                    <li><a href="#" id="crearLista">Crear una lista</a></li>
                                    </ul>
                                    <h3>Listas de la compra</h3>
                                </header>`;

const plantillaPresentacion = `<div class="jumbotron">
                                <h1 class="centrarTexto">Carrefour</h1>
                                <p>
                                Carrefour es la tienda online de Centros Comerciales Carrefour. Somos
                                especialistas en electrónica de consumo, informática, moda, deportes,
                                electrodomésticos, juguetes etc. Contamos con más de 400.000 productos
                                a tu servicio y cada día ampliamos un poco más el surtido de productos
                                que ofrecemos para darte un mejor servicio.
                                </p>
                                <p>
                                Desde el Supermercado online de Carrefour te ofrecemos un surtido de
                                más de 20.000 artículos de productos frescos, alimentación, bebidas,
                                congelados, droguería, perfumería, parafarmacia, etc. con la garantía
                                y frescura de Carrefour.
                                </p>
                            </div>`;

const plantillaDivProductos = `<div id="divProductos" class="centrarProductos"></div>`;

const plantillaProducto = `<div></div>`;

const plantillaFormularioFiltrarProductos = `<div id="formilariosFiltrarProductos">
                                              <form id="formNombreProducto">
                                              <label>Nombre: </label>
                                                <input type="text" value="" />
                                                <input
                                                  id="filtrarProductoNombre"
                                                  type="button"
                                                  value="Filtrar"
                                                />
                                              </form><br/><br/> 

                                              <form id="formPrecioProducto">
                                              <label>Precio: </label>
                                                <input type="number" value="" />
                                                <input
                                                  id="filtrarProductoPrecio"
                                                  type="button"
                                                  value="Filtrar"
                                                />
                                              </form> <br/><br/>

                                              <form id="formPesoProducto">
                                              <label>Peso: </label>
                                                <input type="number" value="" />
                                                <input
                                                  id="filtrarProductoPeso"
                                                  type="button"
                                                  value="Filtrar"
                                                />
                                              </form> <br/><br/>
                                            </div>`;

const plantillaDivListas = `<div id="divListas" class="centrarProductos">
                              <table class="table" id="tablaListas">
                                <thead class="thead-dark">
                                  <tr>
                                    <th scope="col">Nombre del propietario</th>
                                    <th scope="col">Nombre de la lista</th>
                                    <th scope="col">Fecha de creación</th>
                                    <th scope="col">Editar datos</th>
                                    <th scope="col">Añadir productos</th>
                                    <th scope="col">Mostrar productos</th>
                                    <th scope="col">Eliminar lista</th>
                                  </tr>
                                </thead>
                              </table>
                            </div>`;

const plantillaFilaLista = `<tr></tr>`;

const plantillaFormularioCrearLista = `<form id="formularioCrearLista">
                                        <label>Nombre del propietario</label>
                                        <input type="text" value="" /><br><br>

                                        <label>Nombre de la lista</label>
                                        <input type="text" value="" /><br><br>
                                        
                                        <label>Fecha</label>
                                        <input type="date" value="" /><br><br>
                                        
                                        <input type="button" value="Crear" id="botonCrearLista" /><br><br>
                                        </form>`;

const plantillaFormularioActualizarLista = `<form id="formularioActualizarLista">
                                        <label>Nombre del propietario</label>
                                        <input type="text" value="" /><br><br>

                                        <label>Nombre de la lista</label>
                                        <input type="text" value="" /><br><br>
                                        
                                        <label>Fecha</label>
                                        <input type="date" value="" /><br><br>
                                        
                                        <input type="button" value="Actualizar" id="botonActualizarLista" /><br><br>
                                        </form>`;

const plantillaFormRegistro = `<form id="formularioRegistrarse">
                                  <label>Correo</label>
                                    <input class="datosRegistrarse" type="text" value="" /><br /><br />
                                  <label>Contraseña</label>
                                    <input class="datosRegistrarse" type="password" value="" /><br /><br />
                                  <label for="admin" >Editor</label>
                                    <input class="datosRegistrarse" name="admin" type="checkbox" /><br /><br />
                                  <input id="botonRegistro" type="button" value="Registrarse" />
                                </form>`;

const plantillaFormSesion = `<form id="formularioInicioSesion">
                                <label>Correo</label>
                                  <input class="datosRegistrarse" type="text" value="" /><br /><br />
                                <label>Contraseña</label>
                                  <input class="datosRegistrarse" type="password" value="" /><br /><br />
                              <input id="botonSesion" type="button" value="Registrarse" />
                              </form>`;

const plantillaBotonAnyadirProductos = `<button id="anyadirProductosLista">Añadir todos los productos al carrito</button>`;

const plantillaFooter = `<footer id="footer">
                            <p>&copy; Página diseñada por Andrés Mancheño Alcaraz</p>
                        </footer>`;

const elementoPadre = document.getElementById("padre");

//Inserto las plantillas

function insertarPlantillaHeaderInicio() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaHeaderInicio);
}
function insertarPlantillaHeaderInicioUsuario(usuario) {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaHeaderInicioSesion);
}
function insertarPlantillaHeaderProducto() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaHeaderProducto);
}

function insertarPlantillaHeaderLista() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaHeaderLista);
}

function insertarPlantillaPresentacion() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaPresentacion);
}

function insertarPlantillaProductos() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaDivProductos);
}

function insertarPlantillaFormularioFiltrarProductos() {
  elementoPadre.insertAdjacentHTML(
    "beforeend",
    plantillaFormularioFiltrarProductos
  );
}

function insertarPlantillaDivListas() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaDivListas);
}

function insertarPlantillaFormularioCrearLista() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaFormularioCrearLista);
}

function insertarPlantillaFormularioActualizarLista() {
  elementoPadre.insertAdjacentHTML(
    "beforeend",
    plantillaFormularioActualizarLista
  );
}

function insertarPlantillaFormularioRegistro() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaFormRegistro);
}

function insertarPlantillaFormularioInicioSesion() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaFormSesion);
}

function insertarBotonAnyadirProductosLista() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaBotonAnyadirProductos);
}

function insertarPlantillaFooter() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaFooter);
}

/**
 * Eliminos las plantillas insertadas.
 */
function eliminarPlantillasInsertadas() {
  let hijos = elementoPadre.childNodes;
  for (let i = 0; i < elementoPadre.childNodes.length + 3; i++) {
    elementoPadre.removeChild(hijos[0]);
  }
}

function eliminarProductosInsertados() {
  let divProductos = document.getElementById("divProductos");
  let productos = document.getElementsByClassName("producto");
  for (let i = productos.length; i > 0; i--) {
    divProductos.removeChild(productos[0]);
  }
}

function eliminarFormularioFiltrarProductos() {
  let form = document.getElementById("formilariosFiltrarProductos");
  elementoPadre.removeChild(form);
}

function eliminarListasInsertadas() {
  elementoPadre.removeChild(document.getElementById("divListas"));
}

function eliminarFormularioCrearLista() {
  elementoPadre.removeChild(document.getElementById("formularioCrearLista"));
}

function eliminarFormularioActualizarLista() {
  elementoPadre.removeChild(
    document.getElementById("formularioActualizarLista")
  );
}

function eliminarBotonAnyadirProductos() {
  elementoPadre.removeChild(document.getElementById("anyadirProductosLista"));
}

function eliminarFooter() {
  let footer = document.getElementById("footer");
  elementoPadre.removeChild(footer);
}

/**
 *
 * @param {Object} producto
 * @param {String} id
 */
function imprimirProducto(producto, id) {
  let div = document.getElementById("divProductos");
  let productoModificado = modificarProducto(producto, id);
  div.insertAdjacentHTML("afterbegin", productoModificado);
}

function imprimirProductoAnyadir(producto, id) {
  let div = document.getElementById("divProductos");
  let productoModificado = modificarProductoAnyadir(producto, id);
  div.insertAdjacentHTML("afterbegin", productoModificado);
  funcionesHtml.declararEventoAnyadirProducto(`anyadirProducto${id}`, id);
}

/**
 *
 * @param {Object} producto
 * @param {String} id
 * @returns Devuelvo la plantilla modificada.
 */
function modificarProducto(producto, id) {
  let plantillaDevolver = plantillaProducto.replace(
    `<div></div>`,
    `<div class="col-md-6 centrarTexto producto">
        <div class="card" >
          <img src="${producto.imagen}" style="width: 15vw; min-width: 75px;" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.precio} €</li>
          </ul>
        </div>
      </div>`
  );
  return plantillaDevolver;
}

function modificarProductoAnyadir(producto, id) {
  let plantillaDevolver = plantillaProducto.replace(
    `<div></div>`,
    `<div class="col-md-6 centrarTexto producto">
        <div class="card" >
          <img src="${producto.imagen}" style="width: 15vw; min-width: 75px;" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.precio} €</li>
          </ul>
          <div class="card-body">
          <input type="button" id="anyadirProducto${id}"   value="Añadir producto a la lista" />
          </div>
        </div>
      </div>`
  );
  return plantillaDevolver;
}

function imprimirLista(lista, id) {
  let tablaLista = document.getElementById("tablaListas");
  let plantillaListaModificada = modificarLista(lista, id);
  tablaLista.insertAdjacentHTML("beforeend", plantillaListaModificada);
}

function modificarLista(lista, id) {
  let plantillaDevolver = plantillaFilaLista.replace(
    `<tr></tr>`,
    `<tr >
      <td>${lista.nombrePropietario}</td>
      <td>${lista.nombreLista}</td>
      <td>${lista.fechaCreacion}</td>
      <td><button id="editar${id}">Editar</button></td>
      <td><button id="anyadir${id}">Añadir</button></td>
      <td><button id="mostrar${id}">Mostrar</button></td>
      <td><button id="eliminar${id}">Eliminar</button></td>
    </tr>`
  );
  return plantillaDevolver;
}

export {
  insertarPlantillaHeaderInicio,
  insertarPlantillaHeaderInicioUsuario,
  insertarPlantillaHeaderProducto,
  insertarPlantillaHeaderLista,
  insertarPlantillaPresentacion,
  insertarPlantillaProductos,
  insertarPlantillaFormularioFiltrarProductos,
  insertarPlantillaDivListas,
  insertarPlantillaFormularioCrearLista,
  insertarPlantillaFormularioActualizarLista,
  insertarPlantillaFormularioRegistro,
  insertarPlantillaFormularioInicioSesion,
  insertarBotonAnyadirProductosLista,
  insertarPlantillaFooter,
  eliminarPlantillasInsertadas,
  eliminarProductosInsertados,
  eliminarFormularioFiltrarProductos,
  eliminarListasInsertadas,
  eliminarFormularioCrearLista,
  eliminarFormularioActualizarLista,
  eliminarBotonAnyadirProductos,
  eliminarFooter,
  imprimirProducto,
  imprimirProductoAnyadir,
  imprimirLista,
};
