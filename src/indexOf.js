export default (array,number,target,order) => {
    if (number>array.length) {throw Error("Numero deve estar dentro da lista")}
    if (number === 0) {return(array.pop())}
    for (let x=number;x>0;x--) {
        if (array[x] === target) {return(x)}
    }
    for(let x=number;x<array.length;x++) {
        if (array[x] === target) {return(x)}
    }
    //Caso objeto não encontrado == false | Fim da array == undefined
}