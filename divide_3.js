function num(a,b){
    i=1
    while(i<=a){
        if (i%3==0){
            console.log("div3")
        }
        else{
            console.log(i)
        }
        i++
    }
}
var readlineSync = require('readline-sync') 
var user= readlineSync.questionInt('enter the number=');
num(user)