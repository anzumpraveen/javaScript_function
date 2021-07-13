function* sum(){
    yield "1"
    yield "2"
}
var g=sum()
console.log(g.next().value)
console.log(g.next())
console.log(g.next())
console.log(g.next())


// second
var myObj = {
    top: "hat",
    bottom: "pants"
  };
console.log(myObj.hasOwnProperty("top"))
console.log(myObj.hasOwnProperty("middle"))