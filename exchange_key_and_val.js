var obj={firstName:"zoya",lastName:"faruqui",work:"acting",age:25}
var key_1=[]
var value_1=[]
for(key in obj){
    key_1.push(key)
    value_1.push(obj[key])
    var dict={}
    var i=0
    while (i<value_1.length){
        dict[value_1[i]]=key_1[i]
        i++
    }
}
console.log(dict)

// { zoya: 'firstName', faruqui: 'lastName', acting: 'work' }



