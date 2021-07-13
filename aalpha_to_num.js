// numaric to alphabet

let findNum = 0;
let num = String.fromCharCode(97 + findNum)
console.log(num)

// alpha_tonumaric

var myVar='A';
var myVarAscii = myVar.charCodeAt(); 
console.log(myVarAscii)

//  A to z number to letter
var b=""
var c=""
for(var i=1;i<27;i++){
    let num1=String.fromCharCode(64+i)
    c+=num1
    let num=String.fromCharCode(96+i)
    b=b+num   
}
console.log(c)
console.log(b)
