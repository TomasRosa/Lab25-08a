const PI =  3.14159;

function imprimirNombre()
{
    let nombre = "Tomas";
    console.log(nombre);
}
function sumaDosVariables ()
{
    var num1 = 5;
    var num2 = 6;
    console.log(num1+num2);
}
function imprimirPI ()
{
    console.log(PI);
}
function saludar (nombre)
{
    console.log("Buen dia " + nombre);
}
function esPar(numero)
{
    if(numero % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function sumarArray(arrayNumeros)
{
    let suma = 0;
    for(let i = 0; i < arrayNumeros.length; i++)
    {
        suma = suma + arrayNumeros[i];
    }
    return suma;
}
function crearPersona ()
{
    let p1 = new Persona("Tomas" ,19, "Programador");
    let p2 = new Persona ("Franquito" ,19, "Ludopata");

    console.log("Nombre: " + p2.nombre + " " + " Edad:" + p2.edad + " " + "Trabajo: " + " " + p2.profesion);
    console.log("Nombre: " + p1.nombre + " " + " Edad:" + p1.edad + " " + "Trabajo: " + " " + p1.profesion);
    console.log("Denrtro de crear persona");
}
function Persona (nombre,edad,profesion)
{
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}
function Producto (nombre,precio,stock)
{
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
function Pelicula (titulo,director,anio)
{
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}
function filtrarPares (arrayNumeros)
{
    for(let i = 0; i < arrayNumeros.length; i++)
    {
        if(arrayNumeros[i] % 2 != 0)
        {
            arrayNumeros.splice(i,1);
        }
    }
    return arrayNumeros;
}
function crearPersona (nombre,edad) //Preguntar si esta bien.
{
    let persona = new PersonaII(nombre,edad);
    return persona;
}
function obtenerInfo (personita)
{
    return console.log("Info de la persona: ") + console.log("Nombre: " + personita.nombre) + console.log("Edad: " + personita.edad);
}
function PersonaII (nombre,edad)
{
    this.nombre = nombre;
    this.edad = edad;
}
function Estudiante (nombre,edad,promedio)
{
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;

}
function duplicarArray (arrayOriginal)
{
    let arrayDuplicado = [];
    for(let i = 0; i < arrayOriginal.length; i++)
    {
        arrayDuplicado[i] = arrayOriginal[i];
    }
    return arrayDuplicado;
}
function invertirCadena (cadena)
{
    let cadenaInvertida = cadena.split('').reverse().join('');
    return cadenaInvertida;
}
function filtrarPorLongitud(arrayPalabras, longitud)
{
    let arrayNuevo = [];
    let j = 0;
    for(let i = 0; i < arrayPalabras.length; i++)
    {
        if(arrayPalabras[i].length > longitud)
        {
            arrayNuevo[j] = arrayPalabras[i];
            j++;
        }
    }
    return arrayNuevo;
}
function buscarEstudiante (arrayEstudiantes, nombre)
{
    let estudianteARetornar = null;
    let flag = 0;

    for(let i = 0; i < arrayEstudiantes.length && flag === 0; i++)
    {
        if(arrayEstudiantes[i].nombre === nombre)
        {
            estudianteARetornar = arrayEstudiantes[i];
            flag = 1;
        }
    }
    return estudianteARetornar;
}
function promedioClase (arrayEstudiantes)
{
    let promedio = 0;
    let suma = 0;
    for(let i = 0; i < arrayEstudiantes.length; i++)
    {
        suma = suma + arrayEstudiantes[i].promedio
    }
    promedio = suma / arrayEstudiantes.length;
    return promedio;
}
function Coche (marca,modelo,anio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;

    this.arrancar = function()
    {
        console.log("El coche " + this.marca + " ha arrancado.");
    }
    this.detener = function()
    {
        console.log("El coche " + this.marca + " se ha detenido.");
    }
}
function PersonaIII (nombre,edad)
{
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function()
    {
        console.log("Como estas? " + this.nombre);
    }
}
function Producto (nombre,precio)
{
    this.nombre = nombre;
    this.precio = precio;
}
function Carrito () ///Preguntar...........
{
    this.productos = [];
    this.agregarProductoCarrito = function(producto)
    {
        this.productos.push(producto);
    }
}
function crearCalculadora()
{
    return{
        sumar: function(n1,n2)
        {
            return n1 + n2;
        },
        restar: function(n1,n2)
        {
            return n1 - n2;
        },
        multiplicar: function(n1,n2)
        {
            return n1 * n2;
        },
        dividir: function(n1,n2)
        {
            if(n2 != 0)
            {
                return n1 / n2;
            }
            else
            {
                throw new Error ("No se puede dividir por cero. ");
            }
        }
    }
}
function crearCuentaBancaria ()
{
    let saldo = 0;
    return{
        depositar: function(dineroADepositar)
        {
            saldo = saldo + dineroADepositar;
            console.log("El saldo disponible luego de depositar es de: " + saldo);

        },
        retirar: function(dineroARetirar)
        {
            if(saldo === 0)
            {
                throw new Error("No tienes saldo como para poder retirar dinero. ");
            }
            else
            {
                saldo = saldo - dineroARetirar;
                console.log("El saldo disponible luego de retirar es de: " + saldo);
            }
        },
        saldo: function()
        {
            console.log("El saldo disponible es de: " + saldo);
        }
    }
}
function buscarTareaEliminarPendiente (arrayDeTareasPendientes,tareaAbuscar)
{
    let flag = 0;
    let tareaARetornar = null;

    for(let i = 0; i < arrayDeTareasPendientes.length && flag === 0; i++)
    {
        if(arrayDeTareasPendientes[i] === tareaAbuscar)
        {
            tareaARetornar = arrayDeTareasPendientes[i];
            arrayDeTareasPendientes.splice(i,1);
            flag = 1;
        }        
    }
    return tareaARetornar;
}
function crearListaDeTareas ()
{
    let arrayDeTareasPendientes = [];
    let arrayDeTareasCompletadas = [];
    return{
        agregarTareas: function (tareaAAgregar)
        {
            arrayDeTareasPendientes.push(tareaAAgregar);
        },
        marcarTareasComoCompletadas: function (tareaCompletada)
        {
            let tareaCompletada2 = buscarTareaEliminarPendiente(arrayDeTareasPendientes,tareaCompletada);
            if(tareaCompletada2 === null)
            {
                throw new Error ("No se puede agregar la tarea como completada debido a que nunca estuvo como pendiente.");
            }
            arrayDeTareasCompletadas.push(tareaCompletada2);
        },
        verTareasPendientes: function()
        {
            for(let i = 0; i < arrayDeTareasPendientes.length; i++)
            {
                console.log("Tarea pendiente: " + arrayDeTareasPendientes[i]);
            }
        },
        verTareasCompletadas: function()
        {
           for(let i = 0; i < arrayDeTareasCompletadas.length; i++)
           {
            console.log("Tarea completada: " + arrayDeTareasCompletadas[i]);

           }
        }
    }
}
function ordenarNumeros (arrayNumeros)
{
   arrayARetornar = [];
   arrayARetornar = arrayNumeros.sort(function(a, b)
   {
    return a-b;
   });

   return arrayARetornar;
}
function eliminarEstudiante (arrayEstudiantes, nombreEstudiante)
{
    arrayARetornar = null;
    estudianteAEliminar = buscarEstudiante(arrayEstudiantes,nombreEstudiante);
    if(estudianteAEliminar == null) /// Si no encuentra el estudiante, rompe el programa.
    {
        throw new Error("No se puede eliminar el estudiante debido a que no existe")
    }
    let flag = 0;
    for(let i = 0; i < arrayEstudiantes.length && flag == 0; i++)
    {
        if(arrayEstudiantes[i] === estudianteAEliminar)
        {
            arrayEstudiantes.splice(i,1);
            arrayARetornar = arrayEstudiantes;
            flag = 1;
        }
    }
    return arrayARetornar;
}
function totalCarrito (arrayProductos)
{
    let suma = 0;
    for(let i = 0; i < arrayProductos.length; i++)
    {
        suma = suma + arrayProductos[i].precio;
    }
    return suma;
}
function Libro (titulo,autor,paginas)
{
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;

    this.detalles = function()
    {
        console.log("Informacion del libro: ");
        console.log("Titulo: " + this.titulo + " " + "Autor: " + this.autor + " " + "Paginas: " + this.paginas);
    }
}
