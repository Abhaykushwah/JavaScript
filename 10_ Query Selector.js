// Selecting using Query


/*
<HTML>
   <dev class="container" id="id" >This is a container</dev>
   <p>This is para</p>
</HTML>
*/


sel = document.querySelector('.container')
console.log(sel)
sel_all = document.querySelectorAll('.container')
console.log(sel_all)

function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The document was loaded')
}
