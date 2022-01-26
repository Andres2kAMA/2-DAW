function cargarCategorias() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var cats = JSON.parse(xhttp.responseText);
      var lista = document.createElement("ul");
      for (var i = 0; i < cats.length; i++) {
        var elem = document.createElement("li");
        //creamos los vínculos de cada categoría
        var vinculo = document.createElement("a");
        var ruta = "productos_json.php?categoria=" + cats[i].CodCat;
        vinculo.href = ruta;
        vinculo.innerHTML = cats[i].Nombre;
        vinculo.onclick = function () {
          return cargarProductos(this);
        };
        elem.appendChild(vinculo);
        lista.appendChild(elem);
      }
      var contenido = document.getElementById("contenido");
      contenido.innerHTML = "";
      var titulo = document.getElementById("titulo");
      titulo.innerHTML = "Categorías";
      contenido.appendChild(lista);
    }
  };
  xhttp.open("GET", "categorias_json.php", true);
  xhttp.send();
  return false;
}

function cargarProductos(destino) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var prod = document.getElementById("contenido");
      var titulo = document.getElementById("titulo");
      titulo.innerHTML = "Productos";
      try {
        var filas = JSON.parse(this.responseText);
        // creamos una tabla con los productos de la categoría seleccionada
        var tabla = crearTablaProductos(filas, destino);
        prod.innerHTML = "";
        prod.appendChild(tabla);
      } catch (e) {
        var mensaje = document.createElement("p");
        mensaje.innerHTML = "Categoría sin productos";
        prod.innerHTML = "";
        prod.appendChild(mensaje);
      }
    }
  };
  xhttp.open("GET", destino, true);
  xhttp.send();
  return false;
}

function crearTablaProductos(productos, destino) {
  var tabla = document.createElement("table");
  var cabecera = crear_fila(
    ["Código", "Nombre", "Descripción", "Stock", "Comprar"],
    "th"
  );
  tabla.appendChild(cabecera);
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].Stock <= 0) {
    } else {
      // creamos el formulario para añadir unidades del producto al carrito (mediante la función anadirProductos())
      formu = crearFormulario(
        "Añadir",
        productos[i].CodProd,
        anadirProductos,
        destino
      );

      //creamos la fila en la tabla a mostrar con los productos
      fila = crear_fila(
        [
          productos[i].CodProd,
          productos[i].Nombre,
          productos[i].Descripcion,
          productos[i].Stock,
        ],
        "td"
      );
      celda_form = document.createElement("td");
      celda_form.appendChild(formu);
      fila.appendChild(celda_form);
      tabla.appendChild(fila);
    }
  }
  return tabla;
}

function crearFormulario(texto, cod, funcion, destino) {
  var formu = document.createElement("form");
  var unidades = document.createElement("input");
  unidades.value = 1;
  unidades.name = "unidades";
  var codigo = document.createElement("input");

  codigo.value = cod;
  codigo.type = "hidden";
  codigo.name = "cod";

  var bsubmit = document.createElement("input");
  bsubmit.type = "submit";
  bsubmit.value = texto;
  formu.onsubmit = function () {
    return funcion(this, destino);
  };
  formu.appendChild(unidades);
  formu.appendChild(codigo);
  formu.appendChild(bsubmit);
  return formu;
}

function crear_fila(campos, tipo) {
  var fila = document.createElement("tr");
  for (var i = 0; i < campos.length; i++) {
    var celda = document.createElement(tipo);
    celda.innerHTML = campos[i];
    celda.style = "border:1px solid";
    fila.appendChild(celda);
  }
  return fila;
}

function anadirProductos(formulario, destino) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert("Producto añadido con éxito");
      cargarProductos(destino);
      anadirProductoHTML(
        formulario.elements["cod"].value,
        formulario.elements["unidades"].value
      );
    }
  };
  var params =
    "cod=" +
    formulario.elements["cod"].value +
    "&unidades=" +
    formulario.elements["unidades"].value;
  xhttp.open("POST", "anadir_json.php", true);
  // el envío por POST requiere cabecera y cadena de parámetros
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
  return false;
}

function anadirProductoHTML(cod, unidades) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let prodMod = false;
        var prod = JSON.parse(this.responseText);
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `${prod[0].Nombre} => ${unidades} unidades.`;
        parrafo.className = "productosHtml";

        if (document.getElementById("vacio") != null) {
          document
            .getElementById("infoPedidos")
            .removeChild(document.getElementById("vacio"));
          document.getElementById("infoPedidos").appendChild(parrafo);
        } else {
          let productosAñadidos =
            document.getElementsByClassName("productosHtml");

          for (let i = 0; i < productosAñadidos.length; i++) {
            if (prodMod == false) {
              let texto = productosAñadidos[i].innerHTML;
              if (texto.includes(prod[0].Nombre)) {
                let unidadesTexto = parseFloat(getNumerosString(texto));
                let nuevasUnidades = unidadesTexto + parseFloat(unidades);
                let nuevoTexto = texto.replace(
                  unidadesTexto.toString(),
                  nuevasUnidades.toString()
                );
                productosAñadidos[i].innerHTML = nuevoTexto;
                prodMod = true;
              }
            }
          }
          if (prodMod == false) {
            document.getElementById("infoPedidos").appendChild(parrafo);
          }
          prodMod == false;
        }
      } catch (e) {
        var mensaje = document.createElement("p");
        mensaje.innerHTML = "Todavía no tiene productos";
        contenido.appendChild(mensaje);
      }
    }
  };

  xhttp.open("GET", `obtenerUnProducto.php?codUnProd=${cod}`, true);
  xhttp.send();
  return false;
}

function getNumerosString(string) {
  var tmp = string.split("");
  var map = tmp.map(function (current) {
    if (!isNaN(parseInt(current))) {
      return current;
    }
  });

  var numbers = map.filter(function (value) {
    if (value != undefined) {
      {
        return parseFloat(value);
      }
    }
  });

  return numbers.join("");
}

function cargarCarrito() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var contenido = document.getElementById("contenido");
      contenido.innerHTML = "";
      var titulo = document.getElementById("titulo");
      titulo.innerHTML = "Carrito de la compra";
      try {
        var filas = JSON.parse(this.responseText);
        //creamos la tabla de los productos añadidos al carrito
        tabla = crearTablaCarrito(filas);
        contenido.appendChild(tabla);
        //añadimos el vínculo de "procesar pedido"
        var procesar = document.createElement("a");
        procesar.href = "#";
        procesar.innerHTML = "Realizar pedido";
        procesar.onclick = function () {
          var confirmacion = confirm("¿Deseas confirmar el pedido?");
          if (confirmacion == true) {
            return procesarPedido();
          }
        };
        contenido.appendChild(procesar);
      } catch (e) {
        var mensaje = document.createElement("p");
        mensaje.innerHTML = "Todavía no tiene productos";
        contenido.appendChild(mensaje);
      }
    }
  };
  xhttp.open("GET", "carrito_json.php", true);
  xhttp.send();
  return false;
}

function crearTablaCarrito(productos) {
  var tabla = document.createElement("table");
  var cabecera = crear_fila(
    ["Código", "Nombre", "Descripción", "Unidades", "Eliminar"],
    "th"
  );
  tabla.appendChild(cabecera);
  for (var i = 0; i < productos.length; i++) {
    //creamos el formulario que se muestra en el carrito con la opción de eliminar prodcutos
    formu = crearFormulario(
      "Eliminar",
      productos[i].CodProd,
      eliminarProductos
    );
    //creamos la fila con los productos que contiene el carrito
    fila = crear_fila(
      [
        productos[i].CodProd,
        productos[i].Nombre,
        productos[i].Descripcion,
        productos[i].unidades,
      ],
      "td"
    );
    celda_form = document.createElement("td");
    celda_form.appendChild(formu);
    fila.appendChild(celda_form);
    tabla.appendChild(fila);
  }
  return tabla;
}

function crearTablaPedidos(pedidos) {
  var tabla = document.createElement("table");
  tabla.style = "border:1px solid";
  var cabecera = crear_fila(
    ["Código", "Nombre", "Descripción", "Unidades", "Fecha", "Enviado"],
    "th"
  );
  tabla.appendChild(cabecera);

  for (var i = pedidos.length - 5; i < pedidos.length; i++) {
    fila = crear_fila(
      [
        pedidos[i].CodPed,
        pedidos[i].Nombre,
        pedidos[i].Descripcion,
        pedidos[i].Unidades,
        pedidos[i].Fecha,
        pedidos[i].Enviado,
      ],
      "td"
    );

    tabla.appendChild(fila);
  }
  return tabla;
}

function eliminarProductos(formulario) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarCarrito(formulario);
      alert("Producto eliminado con éxito");
    }
  };
  var params =
    "cod=" +
    formulario.elements["cod"].value +
    "&unidades=" +
    formulario.elements["unidades"].value;
  xhttp.open("POST", "eliminar_json.php", true);
  // el envío por POST requiere cabecera y cadena de parámetros
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
  return false;
}

function procesarPedido() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var contenido = document.getElementById("contenido");
      contenido.innerHTML = "";
      var titulo = document.getElementById("titulo");
      titulo.innerHTML = "Estado del pedido";
      console.log(this.responseText);
      if (this.responseText == true) {
        contenido.innerHTML = "Pedido realizado";
      } else {
        contenido.innerHTML = "Error al procesar el pedido";
      }
    }
  };
  xhttp.open("GET", "procesar_pedido_json.php", true);
  xhttp.send();
  return false;
}

function cargarPedidos() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var contenido = document.getElementById("contenido");
      contenido.innerHTML = "";
      var titulo = document.getElementById("titulo");
      titulo.innerHTML = "Pedidos";

      try {
        var filas = JSON.parse(this.responseText);
        tabla = crearTablaPedidos(filas);
        contenido.appendChild(tabla);
      } catch (e) {
        var mensaje = document.createElement("p");
        mensaje.innerHTML = "Todavía no tiene productos";
        contenido.appendChild(mensaje);
      }
    }
  };

  xhttp.open("GET", "pedidos_json.php", true);
  xhttp.send();
  return false;
}
