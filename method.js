const words = ['spray', 'limit', 'eli', 'exuberant', 'de', 'present'];

const result = words.filter(word => word.length > 4);

console.log(result)

// second
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades)

  // third

  var l=[1,2,3]
let a=l.filter(function(x){
  console.log(x)
  return x%2;
  
})
console.log(a)

// map
var officers =[
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
  const officersIds = officers.map(officer => officer.name);
  console.log(officersIds)





