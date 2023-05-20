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



let testh1 = document.createElement("h1");
let testh2 = document.createElement("h2");
let testh3 = document.createElement("h3");
let testh4 = document.createElement("h4");
let testh5 = document.createElement("h5");
let testh6 = document.createElement("h6");
let testp = document.createElement("p");
let testi = document.createElement("i");
let teststrong = document.createElement("strong");
let testb = document.createElement("b");
let testbr = document.createElement("br");
let testa = document.createElement("a");
let testbtn = document.createElement("button");

let text = 0;

function setHTML() {
  text = textBox.value;
  console.log(text);
h1test();
}



function startClassMenu() {

const classPopup = document.getElementById("class-popup");
const classWrap = document.getElementById("c-wrapper");
const className = document.querySelector('.c-name');
const addClass = document.getElementById("add-c");
const classDone = document.getElementById("done");
const classPopupClose = document.querySelector('#c-close');

  const classBox = document.querySelector('#class-box');

  classPopup.addEventListener("click", e => {
    classPopup.style.display = 'none';
  });
  
  classBox.addEventListener("click", e => {
    e.stopPropagation();
  });

  classPopup.style.display = 'block';

classWrap.innerHTML = 
    '<input type="text" placeholder="Enter class name (class name cannot have spaces)" class="c-name" style="padding: 6px 12px;">';


classDone.addEventListener("click", () => {
  let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    box.classList.add(inputs.value);
  });
  //classWrap.innerHTML = 
    //'<input type="text" placeholder="Enter class name (class name cannot have spaces)" class="c-name" style="padding: 6px 12px;">';
  classPopup.style.display = 'none';
  exit;
});

classPopupClose.addEventListener("click", () => {
  classPopup.style.display = 'none';
});

  
}

function h1test() {
  if (val=="add-h1") {
    let testh1 = document.createElement("h1");

  startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testh1.classList.add(inputs.value);
  });
      
}, {once:true} );
    
    if (!text=="") { testh1.innerHTML = text;} else {testh1.innerHTML = 'Test h1';}

    box.appendChild(testh1);
  } else if (val=="add-h2") {
    let testh2 = document.createElement("h2");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testh2.classList.add(inputs.value);
  });

}, {once:true} );
    
    if (!text=="") { testh2.innerHTML = text;} else {testh2.innerHTML = 'Test h2';}
    
    box.appendChild(testh2);
  } else if (val=="add-h3") {
    let testh3 = document.createElement("h3");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testh3.classList.add(inputs.value);
  });
    
}, {once:true} );
     
     if (!text=="") { testh3.innerHTML = text;} else {testh3.innerHTML = 'Test h3';}
     
    box.appendChild(testh3);
  } else if (val=="add-h4") {
    let testh4 = document.createElement("h4");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testh4.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    if (!text=="") { testh4.innerHTML = text;} else {testh4.innerHTML = 'Test h4';}
    
    box.appendChild(testh4);
  } else if (val=="add-h5") {
    let testh5 = document.createElement("h5");
    
  startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testh5.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    
    if (!text=="") { testh5.innerHTML = text;} else {testh5.innerHTML = 'Test h5';}
    
    box.appendChild(testh5);
  } else if (val=="add-h6") {
    let testh6 = document.createElement("h6");

    startClassMenu();
    
classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testh6.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    if (!text=="") { testh6.innerHTML = text;} else {testh6.innerHTML = 'Test h6';}
    
    box.appendChild(testh6);
  } else if (val=="add-p") {
    let testp = document.createElement("p");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testp.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    if (!text=="") { testp.innerHTML = text;} else {testp.innerHTML = 'Test p';}
    
    box.appendChild(testp);
  } else if (val=="add-i") {
    let testi = document.createElement("i");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testi.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    
    if (!text=="") { testi.innerHTML = text;} else {testi.innerHTML = 'Test i';}
    
    box.appendChild(testi);
  } else if (val=="add-strong") {
    let teststrong = document.createElement("strong");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testi.classList.add(inputs.value);
  });
    
}, {once:true} );
                                               
    if (!text=="") { teststrong.innerHTML = text;} else {teststrong.innerHTML = 'Test strong';}
    
    box.appendChild(teststrong);
  } else if (val=="add-b") {
    let testb = document.createElement("b");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testb.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    if (!text=="") { testb.innerHTML = text;} else {testb.innerHTML = 'Test b';}
    
    box.appendChild(testb);
  } else if (val=="add-br") {
    let testbr = document.createElement("br");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testbr.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    if (!text=="") { testbr.innerHTML = text;} else {testbr.innerHTML = 'Test br';}
    
    box.appendChild(testbr);
  } else if (val=="add-a") {
    let testa = document.createElement("a");

    for (i=0; i<3; i++)
      {
        switch (i) {
          case 0:
            let txt = prompt("Enter site address: ");
            console.log(txt);
            if (txt == null) {i=3;}
            testa.setAttribute("href", txt);
            break;
          case 1:
            const linkAlert = document.getElementById("link-alert");
            linkAlert.style.display = 'block';
            const newTab = document.getElementById("new-tab");
            const sameTab = document.getElementById("same-tab");
            newTab.addEventListener("click", () => {
         testa.setAttribute("target", "_blank");
          linkAlert.style.display = 'none';
            });
            
            sameTab.addEventListener("click", () => {
          linkAlert.style.display = 'none';
            });
            
            break;
          case 2:

startClassMenu();

classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testa.classList.add(inputs.value);
  });
    
}, {once:true} );
            
            break;
         }

      }
    
    if (!text=="") { testa.innerHTML = text;} else {testa.innerHTML = '<a href="replit.com">Test a</a>';}
    
    box.appendChild(testa);
  } else if (val=="add-btn") {
    let testbtn = document.createElement("button");

    startClassMenu();
    classDone.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    testbtn.classList.add(inputs.value);
  });
    
}, {once:true} );
    
    if (!text=="") { testbtn.innerHTML = text;} else {testbtn.innerHTML = 'Test button';}
    
    box.appendChild(testbtn);
  }
  box.appendChild(testh1);
}

const eleRemover = document.getElementById("remove-elements");
const alert = document.querySelector("#alert");
const yesBtn = document.querySelector("#del-ele");
const noBtn = document.querySelector("#popup-no");
const popupClose = document.querySelector("#popup-close");
const btnBox = document.querySelector('#btn-box');

eleRemover.addEventListener("click", showAlert);

function showAlert() {
  alert.style.display = "block";
}

btnBox.addEventListener("click", e => {
  e.stopPropagation();
});

alert.addEventListener("click", e => {
  alert.style.display = 'none';
})

yesBtn.addEventListener("click", clearPage);

function clearPage() {
  box.innerHTML = '';
  hideAlert();
}

noBtn.addEventListener("click", hideAlert);
popupClose.addEventListener("click", hideAlert);

function hideAlert() {
  alert.style.display = "none";
}


const classPopup = document.getElementById("class-popup");
const classWrap = document.getElementById("c-wrapper");
const className = document.querySelector('c-name');
const addClass = document.getElementById("add-c");
const classDone = document.getElementById("done");
const classPopupClose = document.querySelector('#c-close');


addClass.addEventListener("click", () => {
  let textBox = document.createElement("input");
  textBox.setAttribute("type", "text");
  textBox.setAttribute("placeholder", "testing");
  textBox.style.padding = '6px 12px';
  textBox.style.lineHeight = '1.5';
  textBox.style.color = '#495057';
  textBox.style.backgroundColor = '#fff';
  textBox.style.borderRadius = '0.25rem';
  textBox.style.transition = 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out';
  textBox.classList.add('c-name');
  classWrap.appendChild(textBox);
});


classDone.addEventListener("click", () => {
  let inputs = document.querySelectorAll(".c-name");
  console.log(inputs);
  inputs.forEach(inputs => {
    console.log(inputs.value);
    box.classList.add(inputs.value);
  });
  //classWrap.innerHTML = 
    //'<input type="text" placeholder="Enter class name (class name cannot have spaces)" class="c-name" style="padding: 6px 12px;">';
  classPopup.style.display = 'none';
});

classPopupClose.addEventListener("click", () => {
  classPopup.style.display = 'none';
});


