//console.log("Hello world")
var a;
var time;
var date;


a = new Date();
//date = a.toLocaleDateString();
time = a.getHours() + ':' + a.getMinutes() + ':' a.getSeconds();
document.getElementById('time').innerHTML = time + 'on' + a;
