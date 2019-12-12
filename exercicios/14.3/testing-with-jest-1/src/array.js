function retornePares(array){
    return array.filter(x => x%2 === 0)
 }

 function addItem(array) {
    array.push('item4');
    return array
 }
 
 module.exports = {
    retornePares,
    addItem,
 }
