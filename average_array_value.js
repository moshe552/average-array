function averageArrayValue(myArray) {
    let sum = 0;
    myArray.forEach(element => {
        sum += element;
    });
    return Math.round(sum / myArray.length)
}
console.log(averageArrayValue([2,6,1]))
