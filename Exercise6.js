//Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor


function getFibonacci(a, b, n)
{
    if(n===0)
    {
        return [a];
    }
    else
    {
        var list = getFibonacci(b,a+b,n-1);
        list.push(a);
        return list;
    }
}

console.log(getFibonacci(0,1,13));