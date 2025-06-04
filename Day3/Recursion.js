// const fun = ()=>{
//     console.log("Devesh");
//     fun();
// }

// fun();

function reversePrint(num){
    if(num==0)return ;
    reversePrint(num-1);
    console.log(num);
}

reversePrint(5);


