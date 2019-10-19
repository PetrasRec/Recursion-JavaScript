//Write a JavaScript program for binary search. 

function bSearch(arr, num)
{
    var middle_index = Math.floor(arr.length/2);
    var middle = arr[middle_index];
    if(middle === num)
    {
        return true;
    }
    if(arr.length === 1)
    {
        return false;
    }
    if(middle > num)
    {
        return bSearch(arr.slice(0, middle_index), num);
    }
    else
    {
        return bSearch(arr.slice(middle_index), num);
    }
}


var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(bSearch(arr, 7));