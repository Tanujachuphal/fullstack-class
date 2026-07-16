//var let const
// var name = "Tanuja";
//let name = "Rajat";
//const name = "Aayushi";

//if(true){
    //var x = "Full Stack class";
//
//console.log(x);
//if(true){
    //let y;
    //y="Full stack class";
//console.log(y);
//y = "React";



//const name = "tanuja";
//const age = 23;
//const isEnrolled = true;
//let score;
//const nothing = null;

//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof isEnrolled);
//console.log(typeof score);
//console.log(typeof nothing);


//console.log(5 =="5");//true;
//console.log(5 ==="5");//false;
//console.log(5 != "5");

//console.log(true && false);
//console.log(true || false);
//console.log(attendance < 80% || projectSubmitted === true)

//FOR ,WHILE
//for(let i = 0 ; i <= 5 ; i++){
  //  console.log('Session ${i} of the week');
//}

//let count = 0;
//while(count < 3){
  //  console.log("Print...",count);
    //count++;
//}

//Function Dexlaration
//function great(){
//    return 'Hello, ${name}}'
//}

//console.log(great("Tanuja"));

//Function Expression
//const greatExpression = function (name){
  //  return ` Hello, ${name}`;
//};

//console.log(greatExpression("Tanuja"));

//const greetExpression = (name) => {
  //return `Hello, ${name}`;
//};

//const greetExpression = (name) => `Hello, ${name}`;

// function printProgram() {
//     console.log(programName);
// }

// printProgram();


//                    Block scope 
//let
//if (true) {
  //  let blockScoped = "block";
    //console.log(blockScoped);
//}

//console.log(blockScoped);


//var
//if (true) {
//  var notBlockScoped = "Not Blocked";
//}
//console.log(notBlockScoped);

//function printProgram(){
//    console.log("HI!");
//}
//const printProgram: () => void = (): void => {
//    console.log("Hi!");
//};

//printProgram();

// let x = "hello";
// console.log(x);

// var y = "hello";
// console.log(y);


//                Calculate . Add , Sub , Mul , Div

// function add(a,b){
//     return a+b;
// }
//  function sub(a,b){
//      return a-b;
//  }
//  function mul(a,b){
//     return a*b;
//  }
//  function div(a,b){
//     return a/b;
//  }

// function calculate(operator, a, b){
//     if(operator ==="+") return add(a,b);
//     if(operator ==="-") return sub(a,b);
//     if(operator ==="*") return mul(a,b);
//     if(operator ==="/") return div(a,b);
//     return "Unknown operator";
// }
// console.log(calculate("+" , 3,4));
// console.log(calculate("-" , 13,4));
// console.log(calculate("*" , 10,4));
// console.log(calculate("/" , 12,4));


//                            15-07
// const fruits =["apple","banana"];


//                          foreach , map , filter, find , reduce

//                foreach
// fruits.forEach((fruits) => {
//     console.log("print:",fruits);
// });

// const scores = [72,34,56,78,90];

//                  map
// const data = scores.map((score) => (score > 72 ? "PASS" : "FAIL"));
// console.log(data);

//                filter
// const passingScores = scores.filter((score) => score > 72);
// console.log(passingScores);

//          find
// const findMethod = scores.find((score) => score > 72);
// console.log(findMethod);

//                     reduce
// const total = scores.reduce((sum , score) => sum + score,0);
// console.log(total);

// const students = [
//   {
//     name: "Tanuja",
//     attendance: 20,
//     deliverable: 10,
//     isEligible: true,
//   },
//   {
//     name: "Ankit",
//     attendance: 18,
//     deliverable: 8,
//     isEligible: false,
//   },
// ];

// students[0].grade = "Merit";

// console.log(students[0].isEligible);
// console.log(students);
// console.log(students[0].name);


// console.log(JSON.stringify(students));
// const studentsJSON = JSON.stringify(students);
// console.log(JSON.parse(studentsJSON));


//                    DOM 
// localStorage.setItem("userName", "Tanuja");
// console.log(localStorage.getItem(userName));


//                 16-05
//             ESG features
// const scores = [88,89,56];

// const [first,second,third] = scores;
// console.log (first,second,third);

// const student = 
//   {
//     name: "Tanuja",
//     attendance: 20,
//     deliverable: 10,
//     isEligible: true,
//   };

//   const { name: studentName,attendance , deliverable,isEligible , phone = "Not provided"} = student;
//   console.log(studentName);


//   //          Spread / Rest

//   const skillsA = ["HTML" , " CSS"];
//   const skillsB= ["JavaScript", "Git"];

//   const allskills = [...skillsA, ...skillsB];
//   console.log(allskills);
  
//   const updateStudent = {...student , attendance : 95};
//   console.log(updateStudent);

//   function sum(...numbers){
//     return numbers.reduce((total,n) => total +n,0);
//   }

//   console.log(sum(10,20,30,40));

// //Template literals
// const name = "tanuja";
// const score = 99;

// const oldMessage = "Hello, " + name + "! Your Score is " + score + ".";
// console.log(oldMessage);

// // const newMessage = `Hello, ${name}! Your score is ${score}.`;
// // console.log(newMessage);

// console.log(`Total: ${10 + 5}`);

// console.log(`Line one 
//   Line two 
//   Lone three`);
//   console.log(student.address ?.city);
//   console.log("Hello");

  const attendance1 = "";

// const displayValue = attendance1 || "No Data";
// console.log(displayValue);

const displayValue1 = attendance1 ?? "No Data";
console.log(displayValue1);

// import/export

export function add(a, b) {
  return a + b;
}

 
  

