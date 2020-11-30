// "use strict"  // can't declare variable directly.
// default mode -- sloppy

var a=10;
b=20;

console.log(c)

function fuc()
{
    d=30; // globally
    let e=40; // blockscope
    var f=50;
    // window.g=60;  //can be access in browser // make variabke global
}

console.log(a)
console.log(d)
console.log(f)

const z=50;