function Detail(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.getdetail=function(){
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    }
}
var info=new Detail("zoya","faruqui",20)
console.log(info);
var info_2=new Detail("anzum","praveen")
console.log(info_2)
  
// second

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function(){
     return `Hi ${this.name}`;
    }
  }

let person = new Person('Joe', 10);
console.log(person.greet());

let jane = new Person('Jane', 11);

console.log(jane.greet());


// third

var user=function(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
    this.getlastName=function(){
        return (`lastName ${this.lastName}`)
    }
    
};

var hitesh=new user("hitesh","kumar"    )
console.log(hitesh)

var zoya=new user("zoya","faruki")
console.log(zoya)

var durga=new user ("durga","dharwey")
console.log(durga)

// four
function Detail(name,lastName,age) {
    this.name=name
    this.lastName=lastName
    this.age=age
    this.geteet=function() {
        console.log(`${name} ${lastName} ${age}`)
        
    }
    
}
var x=new Detail("rinki","kumari",20)
console.log(x)
var y=new Detail("durga","dharvey",29)
console.log(y)









