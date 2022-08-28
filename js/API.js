// practice problem 1 : ------------------------------------->
// number 01:
/* const array=(num1, num2, num3)=> {
  const multipliedNumber= num1 * num2 * num3
  return multipliedNumber;
}
const numbers= array(10, 20, 30);
console.log(numbers);
 */

// number 2: 
/* const first = 'I am a web developer'
const second='I love to Code'
const third='I love to eat biriyani'

const sentences= first +'.'+ second +'.' + third
console.log(sentences) */

// othoba ////////

/* const sentences= `
I am a web developer
I love to Code
I love to eat biriyani
`
console.log(sentences); */


// number 3: 
/* const addNumbers=(number1, number2=0)=>{
  const sum= number1+ number2 ;
  return sum;

}
const number= addNumbers(10)
console.log(number); */

// practice problem 2 ---------------------------->
// number 1: 

/* 
const friendsName = (friends)=>{
    let numberOfEven=[];
    for(let i=0 ; i<=friends.length ; i++){
      if(i % 2 ===0){
        numberOfEven.push(i)
      }
    }
    return numberOfEven;

}
const  friendsArray=['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];
const friendsArraylist=friendsName(friendsArray);
console.log(friendsArraylist);
 

*/

// practice problem 3  --------------------------------->

/*

const squireFunction=numberCount=>{
  let sum=0
 
for (number of numberCount){
  const squire=Math.pow(number, 2);  
  sum= sum+ squire
}

const avarage= sum / numberCount.length
return avarage;

}

const numbers=[2, 4, 6, 8, 10]

const numberFunction=squireFunction(numbers)
console.log(numberFunction);
 
*/

// practice problem 4-------------------------->



const combineFunction=(input1 , input2)=>{
  const newArray=[]
newArray.push(...input1, ...input2)
const maxNumber=Math.max(...newArray);
return maxNumber;


}

const array1=[10, 20, 30, 40, 50]
const array2=[60, 70, 80, 90, 100]

const result=combineFunction(array1, array2);
console.log(result)


