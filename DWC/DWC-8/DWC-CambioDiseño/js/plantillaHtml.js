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
                                    <li><a href="#">Mostrar</a></li>
                                    <li><a href="#">Ordenar de manera ascendente</a></li>
                                    <li><a href="#">Filtrar</a></li>
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

function insertarPlantillaFooter() {
  elementoPadre.insertAdjacentHTML("beforeend", plantillaFooter);
}

//Elimino las plantillas

function eliminarPlantillasInsertadas() {
  let hijos = elementoPadre.childNodes;
  for (let i = 0; i < elementoPadre.childNodes.length + 2; i++) {
    elementoPadre.removeChild(hijos[0]);
  }
}

export {
  insertarPlantillaHeaderInicio,
  insertarPlantillaHeaderProducto,
  insertarPlantillaHeaderLista,
  insertarPlantillaPresentacion,
  insertarPlantillaFooter,
  eliminarPlantillasInsertadas,
};
