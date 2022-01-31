"use strict";

//Me defino unas plantillas div.

const plantillaHeaderInicio = `<header class="page-header">
                            <ul class="nav nav-pills pull-right">
                            <li class="active"><a href="#">Iniciar sesión</a></li>
                            <li><a href="#" id="productos">Productos</a></li>
                            <li><a href="#" id="listas">Listas de la compra</a></li>
                            <li><a href="#">Registrarse</a></li>
                            <li><a href="#">Cerrar sesión</a></li>
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
                                    <li><a href="#">Crear una lista</a></li>
                                    <li><a href="#">Elegir lista</a></li>
                                    <li><a href="#">Mostrar listas</a></li>
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

const plantillaDivProductos = `<div id="divProductos"></div>`;

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

const plantillaFooter = `<footer id="footer">
                            <p>&copy; Página diseñada por Andrés Mancheño Alcaraz</p>
                        </footer>`;

const elementoPadre = document.getElementById("padre");

//Inserto las plantillas

function insertarPlantillaHeaderInicio() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaHeaderInicio);
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
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>`
  );
  return plantillaDevolver;
}

export {
  insertarPlantillaHeaderInicio,
  insertarPlantillaHeaderProducto,
  insertarPlantillaHeaderLista,
  insertarPlantillaPresentacion,
  insertarPlantillaProductos,
  insertarPlantillaFormularioFiltrarProductos,
  insertarPlantillaFooter,
  eliminarPlantillasInsertadas,
  eliminarProductosInsertados,
  eliminarFormularioFiltrarProductos,
  eliminarFooter,
  imprimirProducto,
};
