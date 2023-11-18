// Merge sort
function mergeSort(array) {
    if (array.length <= 1) return array;

    // Divide into sublists
    let middle = Math.round(array.length / 2);
    let l = array.splice(0, middle);
    let r = [...array];

    l = mergeSort(l);
   
    r = mergeSort(r);

    return l.concat(r).sort((a, b) => a - b);

}

console.log(mergeSort([6, 5, 1, 3, 7, 8, 2, 4]))
