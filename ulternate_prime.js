function prime(num) {
    var i, a = 0;
    for (i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            a = 1;
            break;
        }
    }
    if (a == 0)
        return 1;
    else
        return 0;
}
function print_alternate_prime(n)
{ 
    var counter = 0;
    for (num = 2; num < n; num++)
    {
        if (prime(num) == 1)
        {
        
            if (counter % 2 == 0)
            console.log(num + " ");

            counter++;
        }
    }
}

// Driver code
var n=15
console.log("Following are the alternate " + "prime number smaller than " + "or equal to " + n+"<br/>");

print_alternate_prime(n);