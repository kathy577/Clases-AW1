//metodos de arreglos foreach y mauth


const numeros = [2,8,4,6,12]
//const numerosConIncremento = []


//numeros.forEach((numero, i , arreglocompleto)=> {
        //const incremento = numero + 1
        //numerosConIncremento.push(incremento)

//})
//console.log(numerosConIncremento)

const numerosConIncremento = numeros.map((numero) =>{
    return numero + 1
})

console.log(numerosConIncremento)

//buscar find