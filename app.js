// callback function and closure

function attachEvent() {
  let count = 0;
  document
    .getElementById("click-me")
    .addEventListener("click", function handleClick() {
      console.log("button clicked", ++count);
    });
}
attachEvent();

// event loop
// console.log("start");
// setTimeout(() => {
//   console.log("callback");
// }, 4000);
// fetch("https://netflix.com").then(
//   () => {
//     console.log("CB netflix");
//   },
//   () => {
//     console.log("Cb failed");
//   }
// );
// console.log("end");

// //HIGHER ORDER FUNCTION - take a function as an argument
// const radius = [2, 4, 5, 6, 9];
// const area = (radius) => {
//   return Math.PI * radius * radius;
// };
// const circumference = (radius) => {
//   return 2 * Math.PI * radius;
// };

// const calculate = (radius, logic) => {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output
// };

// console.log(radius.map(area));
// console.log(calculate(radius, area));

// HIGHER ORDER FUNCTION - Map, Filter, reduce

// let arr = [4,5,6,9,10,1,20]

// // map
// let output = arr.map((x) => {
//     return x.toString(2)
// })
// console.log(output);

// // filter
// let oddNums = arr.filter((x) => {
//     return x%2!=0
// })
// console.log(oddNums);

// reduce
// const findSum = (x) => {
//     let sum = 0;
//     for(let i=0; i<x.length;i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr));

// let output2 = arr.reduce((acc,curr) => {
//     acc += curr;
//     return acc
// }, 0)
// console.log(output2);

// const findMax = (x) => {
//     let max = 0;
//     for(let i=0; i<x.length;i++){
//         if(x[i]>max) {
//             max = x[i]
//         }
//     }
//     return max
// }
// console.log(findMax(arr));

// const maxValue = arr.reduce((max, curr)=> {
//     if(curr>max) {
//         max = curr
//     }
//     return max
// }, 0)
// console.log(maxValue);

// const users = [
//   {
//     fname: "md",
//     lname: "fazil",
//     age: 23,
//   },
//   {
//     fname: "josh",
//     lname: "hazlewood",
//     age: 28,
//   },
//   {
//     fname: "trent",
//     lname: "boult",
//     age: 23,
//   },
//   {
//     fname: "mitch",
//     lname: "starc",
//     age: 29,
//   },
// ];

// const usersFullName = users.map((name)=>  name.fname + ' ' + name.lname)
// console.log(usersFullName);

// const ageFilter = users.filter((user)=> user.age>25).map((name) => name.lname)
// console.log(ageFilter);

// const agefilter = users.reduce((acc,curr) => {
//     if(curr.age>25) {
//         acc.push(curr.lname);
//     }
//     return acc
// }, [])
// console.log(agefilter);

// const userAndAge = users.reduce((acc, curr)=> {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// }, {})
// console.log(userAndAge);

const GITHUB_API = "https://api.github.com/users/fazil490";

// const fetchData = async() => {
//     const data = await fetch(GITHUB_API)
//     const json = await data.json()
//     console.log(json);
// }

// fetchData()

// const user = fetch(GITHUB_API)
// user.then((data) => {
//     console.log(data);
// })

// const cart = ["shoes", "pants", "shirts"]

// createOrder(cart)
// .then(() => {
//     proceedToPayment()
// })
// .then(() => {
//     proceedToPayment()
// })
// .then(() => {
//     proceedToPayment()
// })

const url = "https://restcountries.com/v2/all";
// fetch(url)
// .then((response) => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log( 
            
        );
    } catch (err) {
        console.error(err);
    }
}
fetchData()