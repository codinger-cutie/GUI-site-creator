// code from MDN Web Docs below
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
// code from MDN Web Docs above

const testBtn = document.getElementById("bgcolor-box");
let box = document.querySelector(".page-content");

let p1 = document.createElement("p");
p1.innerHTML = '<p>Hello!</p>';

box.appendChild(p1);




const selectElement = document.getElementById("add-element-select");

var x = selectElement.value;
console.log(x);

const test = document.getElementById("test");
const testAdd = document.querySelector("#test-add");
const textBox = document.getElementById("ele-text")
const eleAddBtn = document.getElementById("ele-add-btn");
let val = 0;
testAdd.addEventListener("click", displayValue);
eleAddBtn.addEventListener("click", setHTML);

function displayValue() {
   val = document.getElementById("add-element-select").value;
   test.innerHTML = val;
  val2 = val;
  textBox.style.display = "block";
  eleAddBtn.style.display = "block";
}



const testh1 = document.createElement("h1");
const testh2 = document.createElement("h2");
const testh3 = document.createElement("h3");
const testh4 = document.createElement("h4");
const testh5 = document.createElement("h5");
const testh6 = document.createElement("h6");
const testp = document.createElement("p");
const testi = document.createElement("i");
const teststrong = document.createElement("strong");
const testb = document.createElement("b");
const testbr = document.createElement("br");
const testa = document.createElement("a");
const testbtn = document.createElement("button");

let text = 0;

function setHTML() {
  text = textBox.value;
  console.log(text);
h1test();
}

function h1test() {
  if (val=="add-h1") {
    if (!text=="") { testh1.innerHTML = text;} else {testh1.innerHTML = 'Test h1';}

    box.appendChild(testh1);
  } else if (val=="add-h2") {
    
    if (!text=="") { testh2.innerHTML = text;} else {testh2.innerHTML = 'Test h2';}
    
    box.appendChild(testh2);
  } else if (val=="add-h3") {
    
     
     if (!text=="") { testh3.innerHTML = text;} else {testh3.innerHTML = 'Test h3';}
     
    box.appendChild(testh3);
  } else if (val=="add-h4") {
    
    if (!text=="") { testh4.innerHTML = text;} else {testh4.innerHTML = 'Test h4';}
    
    box.appendChild(testh4);
  } else if (val=="add-h5") {
    
    if (!text=="") { testh5.innerHTML = text;} else {testh5.innerHTML = 'Test h5';}
    
    box.appendChild(testh5);
  } else if (val=="add-h6") {
    
    if (!text=="") { testh6.innerHTML = text;} else {testh6.innerHTML = 'Test h6';}
    
    box.appendChild(testh6);
  } else if (val=="add-p") {
    
    if (!text=="") { testp.innerHTML = text;} else {testp.innerHTML = 'Test p';}
    
    box.appendChild(testp);
  } else if (val=="add-i") {
    
    if (!text=="") { testi.innerHTML = text;} else {testi.innerHTML = 'Test i';}
    
    box.appendChild(testi);
  } else if (val=="add-strong") {
    
    if (!text=="") { teststrong.innerHTML = text;} else {teststrong.innerHTML = 'Test strong';}
    
    box.appendChild(teststrong);
  } else if (val=="add-b") {
    
    if (!text=="") { testb.innerHTML = text;} else {testhb.innerHTML = 'Test b';}
    
    box.appendChild(testb);
  } else if (val=="add-br") {
    
    if (!text=="") { testbr.innerHTML = text;} else {testbr.innerHTML = 'Test br';}
    
    box.appendChild(testbr);
  } else if (val=="add-a") {
    
    if (!text=="") { testa.innerHTML = '<a href="replit.com">${text}</a>';} else {testa.innerHTML = '<a href="replit.com">Test a</a>';}
    
    box.appendChild(testa);
  } else if (val=="add-btn") {
    
    if (!text=="") { testbtn.innerHTML = text;} else {testbtn.innerHTML = 'Test button';}
    
    box.appendChild(testbtn);
  }
  box.appendChild(testh1);
}
