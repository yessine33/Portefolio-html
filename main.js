console.log('hello there');
console.log('go to learn');
var x = 5
var y = 6
console.log(x * y)
/*let name = prompt('enter name');
console.log(name)
name = "hello";
console.log(name);
const tel = prompt("tel n° :")
console.log(tel)*/
//tel =3473744
//promitive data :
//string
const str = "hello !"
//number
const number = 1234567855
//boolean
const present = true;
//non primitive data:
const students = ["amal", "ahmed", "raslen", "yassine", "omar", "hayfa"];
const studentsnum = [122, 999, 99559, 7979, 97898];
console.log(students[2],studentsnum[0],students[6]);
//objects:
const student1 = {
    firstName: "ahmed",
    number: 56647577457,
};
console.log(student1.firstName);
//object array
const rep = [
    {
        firstName: "joe",
        num: 445834754,
        address: "23 lalaland",
    },
    {
        firstName: "jane",
        num: 5536264636,
        address: "25 IOCEOIFIID",
    },
];
console.log(rep[1].firstName);
console.log(students.length);
for(let i= 0; i<9; i++){
    console.log("hello" + students[i]);
    console.log(i * (i + i));
}
function findMinors(variable) {
    if(variable > 18){
        console.log("adult")
 } else if (variable == 18) {
    console.log("barely an adult!");
 } else {
    console.log(variable + "minor");
 }
}

const age = prompt("enter age");
if(age > 18) {
    console.log("adult");
}else if(age == 18) {
    console.log("barely an adult");
} else {
    console.log("minor");
}
const ages=[5, 18, 20, 90, 0, 98];
for(let i=0; i <ages.length; i++){
    if(ages[i]>18){
        console.log("adult")
 } else if (ages[i] == 18) {
    console.log("barely an adult!");
 }else {
    console.log(ages[i] + "minor");
 }
}
