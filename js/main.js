// Math in JS

// let round = Math.round(8.4);                                // Yaxlitlash - 1
// let pow = Math.pow(5,5);              5*5*5*5*5             // Darajasini hisoblash
// let sqrt = Math.sqrt(100)                                   // Ildizni topish
// let abs = Math.abs(-52.8);                                  // absolute sonini chiqarish
// let ceil = Math.ceil(49.1);                                 // Yaxlitlash - 2
// let floor = Math.floor(49.9);                               // Yaxlitlash - 3
// let min = Math.min(34,456,87,543,465,23,76);                // Minimal sonini topish
// let max = Math.max(34,456,87,543,465,23,76);                // Maximal sonini topish
// document.write(max)

// Selectors & styles in JS

let byTag = document.getElementsByTagName("p");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi")
let bySelector = document.querySelector(".classNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.width = "350px";
byAll.style.height = "200px";
byAll.style.border = "5px solid royalblue";
byAll.style.textAlign = "center";
byAll.style.paddingTop = "70px";
byAll.style.boxSizing = "border-box";
byAll.style.textTransform = "uppercase";
byAll.style.background = "linear-gradient(45deg, blue, yellow)"
byAll.style.position = "absolute"
byAll.style.top = "300px"
byAll.style.left = "500px"
byAll.style.lineHeight = "50px"
byAll.style.borderRadius = "100px"

let matn = byAll.innerText = "Xayr Dunyo!"

console.log(matn);

