//document.designMode = "on";
let taskinput = document.querySelector(".taskinput");
let taskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");
let result = document.querySelector(".result");

let taskarr = [];

taskbutton.addEventListener("click", () => {
  let x = taskinput.value;

  if (x.length != "") {
    taskarr.push(taskinput.value);
    console.log(taskarr);
    taskinput.value = "";

    result.style.display = "none";

    remove();
  } else {
    result.innerHTML = "Enter Value";
  }
});

function remove() {
  mylist.innerHTML = "";

  taskarr.map((item) => {
    mylist.innerHTML += `<li>${item} <button class="delete"
    >Delete</button></li>`;
  });
  let delbut = document.querySelectorAll(".delete");
  let butArr = Array.from(delbut);
  butArr.map((itm, index) => {
    itm.addEventListener("click", () => {
      taskarr.splice(index, 1);
      console.log(taskarr);
      remove();
    });
  });
}
