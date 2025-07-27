let input = document.getElementById("InputBox");
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) => {
     if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
     }

     else if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
     }
     else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0,string.length-1);
        input.value = string;
     }
else{
     string += e.target.innerHTML;
     input.value = string;
}
    })
})

// This code is some same code using the few changes impliment the logic and edit code add applay ok




// let input = document.getElementById("InputBox");
// let buttons = document.querySelectorAll("button");
//  let myvalue = "";
//  let arr = Array.from(buttons);
//  arr.forEach(button =>{
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "="){
//             myvalue = "";
//             input.value = myvalue;
//         } else if(e.target.innerHTML == "AC"){
//             myvalue = myvalue.substring(0,myvalue.length-1);
//             input.value = myvalue;
//         } else {
//             myvalue += e.target.innerHTML;
//             input.value = myvalue;
//         }
//     })
//  })
