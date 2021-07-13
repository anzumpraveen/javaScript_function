const readlineSync = require('readline-sync');
var user= readlineSync.questionInt('enter the number=');
function prime(user){
    var i = 2;
    let count = 0;
    while(i<user) {
        if(user%i===0){
            count=count+1
        }
        i++
    }
    if(count===0) {
        return user
    }else{
        return false
    }
}
function rever(){
    x = prime(user)
    if(x ==false){
        console.log("not");
    }else{
        var i=0
        while(user>0){
            var digit=user%10
            user=parseInt(user/10)
            i=i*10
            i=i+digit
        }
        s = i
        value=prime(s)
        if(i==value){
            console.log("twested")
        }
        else{
            console.log("not twested")
        }
        
    }
}

rever()






















































