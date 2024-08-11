const URL = "https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
//fetch api provides an interface for fetching(sending/receiving) resources.
//It uses request ans resources object internally.
// let promise = fetch(URL);
// console.log(promise);
// const getFacts = async () => {
//     console.log("getting Data....");
//     let response=await fetch(URL);//may be api might be busy so await and give promise (response)
//     console.log(response);//JSON format
//     console.log(response.status);//response is an object
//     let data=await response.json();
//     console.log(data);//useable data,js object
//     factPara.innerHTML=data[1].text;
// };
//getFacts();

//promises chaining
// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerHTML=data[1].text;
//     });
// }
btn.addEventListener("click",getFacts);
