Ex1.
var a = 10;
var b = 4;
var sum = a + b;
var dif = a - b;
var prod = a * b;
var quo = a \ b;
var rem = a % b;




Ex2.
var a = -5;
var abs = -1 * a;
console.log(abs);




Ex3.
var a = 12345;
var b = a % 10;
console.log(b);




Ex4.
var C = 22;
var F = C * 1.8 + 32;




Ex5.
var a = 5;
var b = 7;
var c = 14;
var d = 20;
var max = null;
if(a > b && a > c && a > d) {
max = a;
}
if(b > a && b > c && b > d) {
max = b;
}
if(c > b && c > a && a > d) {
max = c;
}
if(d > b && d > c && d > a) {
max = d;
}
var min = null;
if(a < b && a < c && a < d) {
min = a;
}
if(b < a && b < c && b < d) {
min = b;
}
if(c < a && c < b && c < d) {
min = c;
}
if(d < a && d < b && d < c) {
min = d;
}



Ex6.
var a = 284;
if(a%2 == 0) {
console.log("even")
} else {
console.log("odd")
}




Ex7.
var a = 7;
var b = 9;
var c = 4;
if(a + b > c && a + c > b && b + c > a) {
console.log("yes") 
} else {
console.log("no")
}



Ex8.
var n = 15;
var frst = 1;
var d = 1;
var sum = (frst + n)/2*n;
