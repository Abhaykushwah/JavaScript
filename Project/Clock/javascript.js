//console.log("Hello world");
let a;
let time;
let date;
const options = {
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric'
};
setInterval(() => {
   a = new Date();
   date = a.toLocaleDateString(undefined, options);
   time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('time').innerHTML = time + '<br>on' + date;
   //console.log(time + " on " + date);
}, 1000);

/*
setInterval(() => {
   console.log("hello")
},1000);
*/
