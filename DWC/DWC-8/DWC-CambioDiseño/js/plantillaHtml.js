"use strict";

//Me defino unas plantillas div.

const plantillaHeaderInicio = `<header class="page-header">
                            <ul class="nav nav-pills pull-right">
                            <li class="active"><a>Iniciar sesión</a></li>
                            <li><a href="#" id="productos">Productos</a></li>
                            <li><a href="#">Listas de la compra</a></li>
                            <li><a href="#">Registrarse</a></li>
                            <li><a href="#">Cerrar sesión</a></li>
                            </ul>
                            <h3>Carrefour</h3>
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

const elementoPadre = document.getElementById("padre");
const footer = document.getElementById("footer");

//Inserto las plantillas

function insertarPlantillaHeaderInicio() {
  elementoPadre.insertAdjacentHTML("afterbegin", plantillaHeaderInicio);
}

function insertarPlantillaPresentacion() {
  footer.insertAdjacentHTML("beforebegin", plantillaPresentacion);
}

//Elimino las plantillas

function eliminarPlantillasInsertadas() {
  let hijos = elementoPadre.childNodes;
  for (let i = 0; i < body.childNodes.length; i++) {
    body.removeChild(hijos[0]);
  }
}

export {
  insertarPlantillaHeaderInicio,
  insertarPlantillaPresentacion,
  eliminarPlantillasInsertadas,
};
