function foo()
{
var v=12;
console.log("inside function ",v);
for(var a=0;a<12;a++)
{
    console.log(a);
    a++;
}
console.log(a," outside loop")
}
foo();
console.log(a," outside function")