// let arr = [1,2,3,4,5,6,7,"hello","world",'i', true]

// console.log(arr[10]);
// //Fucntion to check no is even or odd

// let checkEven = (num)=>{
//     if(num%2 == 0) return true
//     return  false;
// } 
// // var c = checkEven(5)

// console.log(checkEven(5));

// Printing arrray

// let arr = [12,123,2,43,53,4,3];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i in arr){
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element);
// });

// arr.map(e=> console.log(e));
// print all the even no in the array

// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]%2==0) console.log(arr[i]);
// }

// Q1 Write a func that search for an elemnent in an array and return the index if not present then return -1
// let arr = [12, 123, 2, 43, 53, 4, 3];
//search 53

const search = (element) => {
    //wont work as map return new array
    // arr.map((e,index) =>{
    //      if(e === element)return index;
    //      return -1;
    // })
    //   return  arr.findIndex(e => e=== element )

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return i;
    }
    return -1;
}
// console.log(search());

// Q2 Write a fxn that return the no. of -ve element in an array

// let arr2 = [2,-9,17,0,1,-10,-4,8]
const findNegativeCount = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) count++;
    }
    return count
}


// console.log(findNegativeCount(arr2));

// Q3 Find Largest elemnt in an array
const findLargest = (arr) => {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) largest = arr[i];
    }
    return largest;
}
// console.log(findLargest(arr2));
const findSmallest = (arr) => {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) smallest = arr[i];
    }
    return smallest;
}


// console.log(findSmallest(arr2));



//Q find secont largest no in an array
// let arr2 = [10,20,30,40,50,60,70]
let arr2 = [2, -9, 17, 0, 1, -10, -4, 8]
const findSecondLargest = (arr) => {
    let largest = -Infinity;
    let secoundLargest = largest;
 

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            secoundLargest = largest;
            largest = arr[i];
        } else if (secoundLargest < arr[i] && arr[i] !== largest) {
            secoundLargest = arr[i];

        }
    }
    return secoundLargest;
}
// console.log(findSecondLargest(arr2));

// find third largest no in an aarauy

let arr = [12, 123, 12, 43, 53, 4, 3];
const nThLargest = (arr,num) => {
    let thirdLargest= -Infinity;
    arr = arr.filter((e,index)=>arr.indexOf(e)===index).sort((a,b)=>(a-b));
    if(arr.length< num)return arr[arr.length-1];
    return arr[arr.length-num];
    

}
// console.log(nThLargest(arr,1));


//Double for Loop implemetnation

for(let i=0; i<3;i++){
    for(let j=i;j>=0;j--){
        console.log(i,j);
    }
}


