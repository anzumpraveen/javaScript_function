function show(){
    console.log("I am show Function")
}
function geeky(call){
    call()
}
geeky(show)

// second way

function show(a){
    console.log("I am show Function")  
}
function geeky(callback){
    var x=10
    callback(x)
    console.log(x,"function")
}
geeky(show)



function geeky(callback){
    var x=10
    callback(x)
}
geeky(function show(x) {
    console.log("I am show Function"+x)
})

// third

function m(callback){
    setTimeout(function(){
      console.log("url")
      callback()
    },3000)
    
  }
  
  function s(){
    console.log("hi")
  }
  
  m(s)