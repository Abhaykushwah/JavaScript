// JSON 
obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)