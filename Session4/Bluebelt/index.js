let array = [2,3,3,4,4,4,2,2,3,23,4,5,3,42,3,23,3,4,56,6,7,7]

array.map(x => x * 2)


//given an array of numbers, return only the even ones
array.filter(x => x % 2 == 0)

//given an array of numbers, return its sum
array.reduce((accumulator, currentValue) => accumulator + currentValue);

//given an array of numbers, return a new array with all elements squared
array.forEach(function(item, index, array){
    console.log(item**2)
});

//given an array of numbers, log all in the console
console.log(array);



    