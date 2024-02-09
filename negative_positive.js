// 4. Write a program to check whether a number is negative positive or zero. 

let x = 5;

let y = Math.sign(x);

if(x % 2 < 0)
{
    console.log("Number is negative");
}
else if(x % 2 == 0)
{
    console.log("Number is Zero");
}
else
{
    console.log("Number is positive");
}

if(y == 0)
{
    console.log(" Y Number is zero");
}
else if(y > 0)
{
    console.log(" Y Number is positive");
}
else
{
    console.log(" Y number is negative");
}