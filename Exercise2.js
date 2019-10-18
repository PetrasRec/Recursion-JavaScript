//Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.


function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

console.log(gcd(36,60));