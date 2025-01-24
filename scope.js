if(true){
    const age = 20
    if(true){
        console.log(age)
    }
    console.log(age)
}


if(true){
    var age = 20
   var age = 23
    console.log(age)
}




if(true){
    var name = "ANkit"
}
console.log(name)
name = " Hero"
console.log(name)




const student = ["Aman", "Delhi", "2244",["HTML","CSS","Oythi"]]
console.log(student)


 student2[0]  = "Raji"
 student2[1] = "Punjabj"
 student2[3].push("React")
 console.log(student2)
 console.log(student)


let name1 = "Arpan"
console.log("name1",name1)
let name2 = name1
name2 = "Ankti"
console.log("name2",name2)
console.log("name1",name1)


const skill = JSON.stringify(student)
console.log(skill)
const skill2  = JSON.parse(skill)
console.log(skill2)

const student2 = JSON.parse(JSON.stringify(student))


const stude = {
    name : "ANkrir",
    city : "Delji"
}

console.log(stude)
const studen2 = stude
studen2.name = "raju"
studen2.city = "hero"
console.log(stude)
console.log("studen2",studen2)

 argument and parameter in function part

const greet=  (fname, lname)=>{
    console.log('Hello ${fname} ${lname}')

}
greet("ANkit","Sgj")





function a(){
    console.log("I am n ")
    return 10
}

high order funtion that accepted the another funtion as parameter
 can return anothe funtion from its body
 both of the can be happen
call fucntion which is passed as argument to anothe funtion

function b(x){
const resutl = x()
console.log(resutl)
}
b(a)


function x(){
    return function b(){
        console.log("Hello")
    }
}

const xresukt = x()
xresukt();
x()()  chain sawman


const skill  = ["hrml","react","jas"]
 the arrow function is ued
const result = skill.map(x)
function x(element, index){
console.log("element  is value", element)
console.log("index is", index)
return "react"
return '<p>${element}</p>'
}
const result = skill.map((element)=>{return '<p>${element}</p>'}) 
above arrow function used for efficient and for performance and less memo used
 this is call function as well as arrow function :- ((element)=>{return '<p>${element}</p>'}) 
well the map ur seeing is the high order function
(e=>'<p>${e}</p>')  simple as fuck baby arrow my boy
console.log(result)



nex part is about filter 

const students = [
    { name: "Alice Johnson", age: 22, city: "New York", skills: ["JavaScript", "React"] },
    { name: "Bob Smith", age: 24, city: "San Francisco", skills: ["Python", "Data Analysis"] },
    { name: "Charlie Brown", age: 21, city: "Chicago", skills: ["Java", "Spring Boot"] },
    { name: "Daisy Williams", age: 23, city: "Seattle", skills: ["HTML", "CSS"] },
    { name: "Ethan Taylor", age: 25, city: "Austin", skills: ["Ruby", "Rails"] },
    { name: "Fiona Davis", age: 22, city: "Boston", skills: ["C++", "Algorithms"] },
    { name: "George Harris", age: 24, city: "Denver", skills: ["SQL", "Database Design"] },
    { name: "Hannah Martinez", age: 20, city: "Miami", skills: ["PHP", "Laravel"] },
    { name: "Ian Moore", age: 23, city: "Los Angeles", skills: ["JavaScript", "Vue.js"] },
    { name: "Jenna Clark", age: 22, city: "Dallas", skills: ["Python", "Machine Learning"] },
    { name: "Kevin Lewis", age: 21, city: "Houston", skills: ["Go", "Cloud Computing"] },
    { name: "Laura Lee", age: 24, city: "Phoenix", skills: ["Swift", "iOS Development"] },
    { name: "Mason Hall", age: 22, city: "Portland", skills: ["Kotlin", "Android Development"] },
    { name: "Nina Allen", age: 23, city: "Atlanta", skills: ["C#", ".NET"] },
    { name: "Oscar Wright", age: 21, city: "San Diego", skills: ["Python", "Flask"] },
    { name: "Paula King", age: 25, city: "San Jose", skills: ["Java", "Hibernate"] },
    { name: "Quinn Baker", age: 20, city: "Las Vegas", skills: ["HTML", "WordPress"] },
    { name: "Ryan Scott", age: 23, city: "Orlando", skills: ["JavaScript", "Node.js"] },
    { name: "Sophia Adams", age: 22, city: "Charlotte", skills: ["Python", "Data Science"] },
    { name: "Thomas Reed", age: 24, city: "Philadelphia", skills: ["Rust", "System Programming"] },
    { name: "Uma Green", age: 21, city: "Indianapolis", skills: ["JavaScript", "Angular"] },
    { name: "Victor Young", age: 22, city: "San Antonio", skills: ["Python", "API Development"] },
    { name: "Wendy Carter", age: 23, city: "Columbus", skills: ["Java", "Microservices"] },
    { name: "Xander Morris", age: 21, city: "Louisville", skills: ["C", "Embedded Systems"] },
    { name: "Yara Nelson", age: 25, city: "Milwaukee", skills: ["Scala", "Big Data"] },
    { name: "Zane Perez", age: 22, city: "Nashville", skills: ["Python", "Django"] },
    { name: "Abby Ross", age: 23, city: "Oklahoma City", skills: ["JavaScript", "React Native"] },
    { name: "Brian Rivera", age: 24, city: "Kansas City", skills: ["Java", "Kubernetes"] },
    { name: "Clara Brooks", age: 21, city: "Memphis", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Derek Foster", age: 22, city: "New Orleans", skills: ["Ruby", "Sinatra"] },
    { name: "Ella Howard", age: 23, city: "Salt Lake City", skills: ["Python", "TensorFlow"] },
    { name: "Frank Russell", age: 21, city: "Raleigh", skills: ["C++", "Game Development"] },
    { name: "Grace Griffin", age: 24, city: "Richmond", skills: ["JavaScript", "TypeScript"] },
    { name: "Henry Cox", age: 22, city: "Tucson", skills: ["Java", "Maven"] },
    { name: "Isla James", age: 25, city: "El Paso", skills: ["PHP", "Symfony"] },
    { name: "Jack White", age: 23, city: "Birmingham", skills: ["C#", "WPF"] },
    { name: "Kara Walker", age: 21, city: "Baltimore", skills: ["Swift", "UI/UX Design"] },
    { name: "Liam Hughes", age: 22, city: "Albuquerque", skills: ["JavaScript", "Express"] },
    { name: "Mia Evans", age: 24, city: "Fresno", skills: ["Python", "NLP"] }
  ];
  
const pystudent= students.filter(student => student.skills.includes("Python"));

console.log(pystudent);

return skills.map(e=>e.toLowerCase()).includes("Python")    on lowercase filteration
const result = students.filter((element, index, array)=>{
    const {name, age, city, skills} = element
    return skills.includes("Python")
})


const sortedByLocation = students.sort((a, b) => a.city.localeCompare(b.city));

console.log(sortedByLocation);


const result = students.sort((a,b) => a.city.localeCompare(b.city))
console.log(result)  for location sorting h

const result = students.sort((currentelement, nextelement)){
    return currentelement.age - nextelement.age
}   this sortig the age from a to b


using high order function by using reduce


const result  = students.reduce((total, element)=>{
    return total + element.age
},0)/students.length
console.log(result)














// const token = [

//     "Mahatma", "Gandhi", "was", "a", "leader", "of", "India's", "independence", "movement",

//     "against", "British", "rule.", "He", "is", "known", "for", "his", "principles", "of", 

//     "nonviolence", "and", "truth,", "which", "he", "called", "Satyagraha.", "Born", "on", 

//     "October", "2,", "1869,", "in", "Porbandar,", "Gujarat,", "he", "studied", "law", 

//     "in", "London", "and", "worked", "in", "South", "Africa,", "where", "he", "fought", 

//     "against", "discrimination.", "Returning", "to", "India,", "he", "led", "several", 

//     "nonviolent", "movements,", "including", "the", "Salt", "March", "and", "Quit", "India", 

//     "Movement,", "inspiring", "millions.", "He", "believed", "in", "simple", "living,", 

//     "self-reliance,", "and", "harmony", "among", "all", "communities.", "His", "legacy", 

//     "as", "a", "symbol", "of", "peace", "and", "justice", "continues", "to", "influence", 

//     "the", "world."

// ];



// const result = token.reduce((preValue, element)=>{
//     return preValue + " " + element 

// },"")
// console.log(result)