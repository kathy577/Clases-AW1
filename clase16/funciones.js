//Funciones

//Declaracion
function suma (a,b){
    return a + b

}
const resultado = suma(10,20)
console.log(resultado)

const modulo = function (a,b){
    return a % b
}

//Flecha o FatArrow

const resta = (a,b)=>{
    return a - b

}
resultado = resta(20,10)
console.log(resultado)
//anonimas

const multiplicar = (a,b) => a *b   //todo lo que va despues de la flecha es un return 

const dividirpor2 = a => a / 2 //cuando hay un solo parametro,no hace falta parentesis

const saludo = () => `Hola`


//callback

const b = (callback) => {
    callback()
}

// funcion a pasar como argumento b
const cb = () => {
    console.log(`se ejecuto el callback`)
}

b(cb())

const miForEach((numero)=>{
    console.log(numero)

})
