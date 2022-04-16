// DOM mauipulation
document

/*
<HTML>
   <dev class="container" id="">This is a container</dev>
   <p>This is para</p>
</HTML>
*/

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
console.log(elem.innerHTML);
console.log(elem.innerText); 

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element