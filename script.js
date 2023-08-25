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