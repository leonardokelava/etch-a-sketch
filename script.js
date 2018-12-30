size=document.querySelector(".fields");
container=document.querySelector(".container");

fieldSize=document.querySelector(".fields");
fieldSize.addEventListener("change", chooseSize);




function chooseSize() {

while(container.firstChild) {container.removeChild(container.firstChild)} ; 
let fieldNumber = fieldSize.value;  
console.log(); 
container.setAttribute('style' , `grid-template-columns: repeat( ${fieldNumber}, 50px)`);    
 

for(j=0 ; j<fieldNumber;j++ ) {
  for(i=0 ; i<fieldNumber;i++ ) {

const field = document.createElement("div") ; 
field.style.border='1px solid black';
field.style.width="50px";
field.style.height="50px";
container.appendChild(field);
  

   }

 }
 
}


clean=document.querySelector(".clear"); 
clean.addEventListener("click", clear);

function clear()  {

   console.log("hi"); 
    }

    














