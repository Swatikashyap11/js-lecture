// let getdata= new Promise((resolve,reject)=> {
//     let me=true;
// if(me){
//     resolve('succes');
// }else{
//     reject('failure');
// }
// })
// console.log(getdata);

// let getdata= new Promise((resolve,reject)=> {
//     let marks=90 ;
//     if(marks>=95){
//         resolve('true');
//     }else{
//         reject('false');
//     }
// })
// console.log(getdata)
 
// function bankDetails(amount){
//     return new Promise((resolve,reject)=>{
//         let balance=5000;
//         if(amount<balance){
//             resolve ('success')
//         }else{
//             reject('failure')
//         }
//     });
// }
// bankDetails(200)
// .then((res)=> console.log(res))
// .catch((err)=> {
//     console.log(err);
// })

let getage= new Promise((resolve,reject)=>{
    let age=18
    if(age<19){
        resolve(true)
    }else {
        reject(false)
    }
})
console.log(getage)

// function delivery(){
//     return new Promise((resolve,reject)=>{
//         let 
//     })
// }

