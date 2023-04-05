const colorPicker = document.querySelector("#color-pick");

colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function updateFirst(event) {
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    pageContent.style.backgroundColor = event.target.value;
  }
}

function watchColorPicker(event) {
  document.querySelectorAll(".pageContent").forEach((pageContent) => {
    pageContent.style.backgroundColor = event.target.value;
  });
}

const testBtn = document.getElementById("bgcolor-box");
let box = document.querySelector(".page-content");

let p1 = document.createElement("p");
p1.innerHTML = '<p>Hello!</p>';

box.appendChild(p1);


const h1AddBtn = document.querySelector("#test-add");
const testh1 = document.createElement("h1");
testh1.innerHTML = '<h1>Test h1</h1>';

function h1test() {
  box.appendChild(testh1);
}

h1AddBtn.addEventListener('click', h1test);

/* test code below */
const selectElement = document.getElementById("add-element-select");

const test = document.getElementById("test");

const testAdd = document.querySelector("#test-add");

testAdd.addEventListener("click", displayValue);

function displayValue() {
   let val = document.getElementById("add-element-select").value;
   test.innerHTML = val;
}
 /* test code above */