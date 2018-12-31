size=document.querySelector(".fields");
container=document.querySelector(".container");

newgrid=document.querySelector(".newGrid");
newgrid.addEventListener('click', chooseSize);  



function chooseSize() {

let fieldSize=prompt('What grid size do you want?', '');
console.log(fieldSize);   
while(container.firstChild) {container.removeChild(container.firstChild)} ; 
  

container.setAttribute('style' , `grid-template-columns: repeat( ${fieldSize}, 40px)`);    
 

for(j=0 ; j<fieldSize;j++ ) {
  for(i=0 ; i<fieldSize;i++ ) {

const field = document.createElement("div") ; 
field.style.border='1px solid black';
field.style.width="40px";
field.style.height="30px";
container.appendChild(field);
      }
   } 
}

chooseSize();



clean=document.querySelector(".clear"); 
clean.addEventListener("click", clear);

function clear() {
  pixels =document.querySelectorAll(".container > div"); 
  pixels.forEach((div) => {div.style.backgroundColor="lightBlue"}); 

}


document.querySelector(".black").addEventListener ( "click", coloringBlack); 

function coloringBlack() {

fields=document.querySelectorAll(".container > div");

for(i=0; i<fields.length; i++ ){

fields[i].addEventListener("mouseenter" , color );
}
console.log(fields[0]);

function color() {
this.style.backgroundColor="black";
  }
}





document.querySelector(".RandomColor").addEventListener ( "click", coloringRandom); 

function coloringRandom() {

fields=document.querySelectorAll(".container > div");

for(i=0; i<fields.length; i++ ){

fields[i].addEventListener("mouseenter" , color );
}
console.log(fields[0]);

function randomizer() {return Math.floor(Math.random() * 255); }
console.log(randomizer());
function color() {
this.style.backgroundColor='rgb(' + `${randomizer()}` + ',' + `${randomizer()}` + ',' +  `${randomizer()}` + ')';
  }
}




document.querySelector(".White").addEventListener ( "click", start); 

function start() {

fields=document.querySelectorAll(".container > div");

for(i=0; i<fields.length; i++ ){

fields[i].addEventListener("mouseenter" , erase );
}
console.log(fields[0]);

function erase() {
this.style.backgroundColor="white";
  }
}






