//Write a JavaScript program to compute the sum of an array of integers.
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21 


function findSum(arr)
{
    if(arr.length === 1)
        return arr.pop();
    return arr.pop() + findSum(arr) ;
}


console.log(findSum([1,2,3,4]));