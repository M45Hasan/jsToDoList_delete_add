let taskinput = document.querySelector(".taskinput");
let taskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");
let result = document.querySelector(".result");

let taskarr = [];

taskbutton.addEventListener("click", () => {
  let taskValue = taskinput.value;
  taskarr.push(taskValue);
  if (taskValue.length != 0) {
    let creatList = `<div><li>${taskValue} <button class="delete"
  onclick="delListElement(this)">Delete</button></li></div>`;
     let x= taskarr
      x.map((item) => {
        if(item==taskValue){
          
        }
        console.log(x);

      });
    
    mylist.innerHTML += creatList;
    taskinput.value = "";
    console.log(taskarr);
    taskinput.classList.remove();
  } else {
    taskinput.classList.remove();
  }
});
function delListElement(a) {
  a.parentElement.remove();
}
console.log(taskarr);
