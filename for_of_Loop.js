const iterable ={name:"anzum",hobbi:"ludo",class:"12"};
for(let key in iterable){
    console.log(key);
}

// for of
const items = {
    'first': new Date(),
    'second': 2,
    'third': 'test'
}
for (key of items){
    console.log(key)
}