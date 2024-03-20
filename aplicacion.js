// Aquí se encuentra la lógica del uso del API (en actual desarrollo)
// Para uso fuera de este archivo se debe interactuar con la variable
// (estructura) global "logicaAplicacion"

/*
class Valoracion {
  constructor (id, idProducto, nota) {
    this.id = id
    this.idProducto = idProducto
    this.nota = nota
  }
}
*/

class Producto {
  constructor(id, precio, nombre, descripcion) {
    this.id = id
    this.precio = precio
    this.nombre = nombre
    this.descripcion = descripcion

    // Aquí se debe llamar a la API para obtener las valoraciones del producto
    // Por defecto, solo se cargarán los primeros 50 productos y a medida que el
    // usuario cargue más la página deberían salir más productos

    this.valoraciones = []
  }
}

class Catalogo {
  constructor(nombre, id) {
    this.id = id
    this.nombre = nombre
    this.paginaActual = 1

    this.productos = []
  }
}

class Sucursal {
  constructor(nombre, id) {
    this.id = id;
    this.nombre = nombre;
    this.paginaActual = 1

    this.locales = []
  }
}

class Locales {
  constructor(id, nombre, direccion, telefono) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
}

class Ofertas {
  constructor(id, nombre) {
    this.id = id
    this.nombre = nombre
    this.paginaActual = 1

    this.descuentos = []
  }
}

class Descuentos {
  constructor(id, nombre, precioAnt, precioAct) {
    this.id = id
    this.nombre = nombre
    this.precioAnt = precioAnt
    this.precioAct = precioAct
  }
}

class Noticias {
  constructor(id, nombre) {
    this.id = id
    this.nombre = nombre

    this.articulos = []
  }
}

class Articulo {
  constructor(id, titulo, descripcion) {
    this.id = id
    this.titulo = titulo
    this.descripcion = descripcion
  }
}

class Usuario {
  constructor(id, nombre, primerapellido, segundoapellido, correo, contrasena) {
    this.id = id
    this.nombre = nombre
    this.primerapellido = primerapellido
    this.segundoapellido = segundoapellido
    this.correo = correo
    this.contrasena = contrasena
  }

  login() {
    // TODO

    return true
  }
}

class Administrador extends Usuario {
  constructor(correo, contrasena) {
    // Aqui deberia ir la llamada a la API, pero aún no está implementada,
    // por lo que se usarán datos de prueba.
    const id = 0
    const nombre = 'Juanito'
    const primerapellido = 'Pérez'
    const segundoapellido = 'Gonzáles'
    // En código que sigue en adelante en esta función se conserva.

    super(id, nombre, primerapellido, segundoapellido, correo, contrasena)
  }

  agregarProducto() {
    // TODO: API bajo desarrollo

    return true
  }

  eliminarProducto() {
    // TODO: API bajo desarrollo

    return true
  }

  modificarProducto() {
    // TODO: API bajo desarrollo

    return true
  }

  enviarNotificacion() {
    // TODO: API bajo desarrollo

    return true
  }

  crearCatalogo() {
    // TODO: API bajo desarrollo

    return true
  }

  modificarCatalogo() {
    // TODO: API bajo desarrollo

    return true
  }

  eliminarCatalogo() {
    // TODO: API bajo desarrollo

    return true
  }
}

class Comprador extends Usuario {
  constructor(correo, contrasena) {
    // Igual que en la clase anterior, se usarán datos de prueba hasta que la
    // API esté lista
    const id = 1
    const nombre = 'Pablito'
    const primerapellido = 'Tapia'
    const segundoapellido = 'Morález'
    // En código que sigue en adelante en esta función se conserva.

    super(id, nombre, primerapellido, segundoapellido, correo, contrasena)
  }

  comprarProducto(idProducto) {
    // TODO: Falta la API, aunque creo que puedo usar el mismo Whatsapp
    // para implementar esto
  }

  valorarProducto(idProducto, nota) {
    // TODO: API bajo desarrollo
  }
}

class Aplicacion {
  constructor() {
    // Para evitar que la aplicación "explote" (suponiendo un servidor con
    // mil productos, la app solo cargará al principio, desde la API, el
    // catálogo de productos. Una vez que el usuario abra un catálogo
    // la carga de la lista de productos será gradual (50 productos máximo).

    // Catálogo de prueba
    const catalogo1 = new Catalogo('Frutas', 0)

    // Productos de prueba
    catalogo1.productos.push(new Producto(3, 'Precio del producto 3', 'Producto 3', 'Descripción del producto 3'))
    catalogo1.productos.push(new Producto(4, 'Precio del producto 4', 'Producto 4', 'Descripción del producto 4'))
    catalogo1.productos.push(new Producto(5, 'Precio del producto 5', 'Producto 5', 'Descripción del producto 5'))

    this.catalogoActual = null

    this.usuario = null // Antes del inicio de sesión el usuario será null
    this.catalogos = new Array(catalogo1)

    //Sucursales de Prueba
    const sucursal1 = new Sucursal('Tienda', 0)

    //Locales de prueba
    sucursal1.locales.push(new Locales(3, 'Sucursal 3', 'Direccion de la sucursal 3', 'Telefono de la sucursal 3'))
    sucursal1.locales.push(new Locales(4, 'Sucursal 4', 'Direccion de la sucursal 4', 'Telefono de la sucursal 4'))
    sucursal1.locales.push(new Locales(5, 'Sucursal 5', 'Direccion de la sucursal 5', 'Telefono de la sucursal 5'))

    this.sucursalActual = null
    this.sucursales = new Array(sucursal1)

    //Ofertas de prueba
    const ofertas1 = new Ofertas('Rebaja', 0)

    //Descuentos de prueba
    ofertas1.descuentos.push(new Descuentos(3, 'Oferta 3', 'Precio antiguo 3', 'Precio actual 3'))
    ofertas1.descuentos.push(new Descuentos(4, 'Oferta 4', 'Precio antiguo 4', 'Precio actual 4'))
    ofertas1.descuentos.push(new Descuentos(5, 'Oferta 5', 'Precio antiguo 5', 'Precio actual 5'))

    this.ofertaActual = null
    this.ofertas = new Array(ofertas1)

    //Noticias de prueba
    const noticias1 = new Noticias('Titular', 0)

    //Articulos de prueba
    noticias1.articulos.push(new Articulo(3, 'Noticia 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sodales elit. Suspendisse ullamcorper odio a dolor ullamcorper, ac convallis purus vehicula.'))
    noticias1.articulos.push(new Articulo(4, 'Noticia 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sodales elit. Suspendisse ullamcorper odio a dolor ullamcorper, ac convallis purus vehicula.'))
    noticias1.articulos.push(new Articulo(5, 'Noticia 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sodales elit. Suspendisse ullamcorper odio a dolor ullamcorper, ac convallis purus vehicula.'))

    this.noticiaActual = null
    this.noticias = new Array(noticias1)
  }

  iniciarSesionComoComprador(correo, contrasena) {
    if (this.usuario != null) {
      console.log('La sesión ya está iniciada')
    } else {
      // Llamar a la API (si tan solo tuviera una xD)
      this.usuario = new Comprador(correo, contrasena)
    }
  }

  iniciarSesionComoAdmin(correo, contrasena) {
    if (this.usuario != null) {
      console.log('La sesión ya está iniciada')
    } else {
      // Llamar a la API (si tan solo tuviera una xD)
      this.usuario = new Administrador(correo, contrasena)
    }
  }

  obtenerListaCatalogos() {
    return this.catalogos
  }
  obtenerListaSucursales() {
    return this.sucursales
  }

  obtenerListaOfertas() {
    return this.ofertas
  }

  obtenerListaNoticias() {
    return this.noticias
  }

  seleccionarCatalogo(nombreCatalogo) {
    // Búsqueda lineal en la lista de catálogos
    for (let i = 0; i < this.catalogos.length; i++) {
      if (this.catalogos[i].nombre === nombreCatalogo) {
        this.catalogoActual = i
        return
      }
    }

    console.log('Catálogo no existe')
  }

  obtenerListaProductos() {
    return this.catalogos[this.catalogoActual]
  }

  obtenerListaLocales() {
    return this.sucursales[this.sucursalActual]
  }

  obtenerListaDescuentos() {
    return this.ofertas[this.ofertaActual]
  }

  obtenerListaArticulos() {
    return this.noticias[this.noticiaActual]
  }

  obtenerValoracionesProducto(nombreProducto) {
    let index = -1
    for (let i = 0; i < this.catalogos[this.catalogoActual].productos.length; i++) {
      if (this.catalogos[this.catalogoActual].productos[i] === nombreProducto) {
        index = i
        break
      }
    }

    if (index < 0) {
      console.log('El producto no existe')
      return null
    }

    return this.catalogos[this.catalogoActual].productos[index].valoraciones
  }
}

let logicaAplicacion = new Aplicacion() // Llamar a esta variable para hacer uso de la lógica de la API