let taskinput = document.querySelector(".taskinput");
let taskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");
taskbutton.addEventListener("click", () => {
  let taskValue = taskinput.value;
  if (taskValue.length != 0) {
    let creatList = `<div><li>${taskValue} <button
         onclick="delListElement(this)">Delete</button></li></div>`;
    mylist.innerHTML += creatList;
    taskinput.value = "";

    taskinput.classList.remove();
  } else {
    taskinput.classList.add();
  }
});
function delListElement(a) {
  a.parentElement.remove();
}
