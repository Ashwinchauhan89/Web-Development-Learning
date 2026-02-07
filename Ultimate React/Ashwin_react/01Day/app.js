//React is the Javacript Library


///why React?


//Element 1
const element1 = document.createElement("h1");
element1.textContent="Hello Ashwin";
element1.className="element";
element1.id="first";
//properties
element1.style.fontSize="50px";
element1.style.backgroundColor="red";
element1.style.color="black";



//Elemrnt 2
const element2 = document.createElement("h2");
element2.textContent="Ashwin is Coming";
element2.id="second";
//properties
element2.style.fontSize="30px";
element2.style.backgroundColor="yellow";
element2.style.color="blue";

// attach in DOM

document.getElementById("root");
root.appendChild(element1);
root.appendChild(element2);
// React create element Children Bana Hai Root ka 