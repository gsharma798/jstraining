// function foo(x)
// {
//     if(x >= 18 )
//     {
//         console.log("Person is Adult i.e " + x);
//     }

//     else
//     {
//         console.log("Person is not Adult  i.e " + x);
//     }
// }

// var p = foo(17);
// console.log(p);


// ###### Q1. Write a JavaScript function that reverses a number. ######

// function reverse_number(num)
// {
//     //num = num + ""; //Convert Number into a string
//     let res1 =  num.split(""); //Spliting the input into an array[]
//     let res2 = res1.reverse(); //Reversing the arrary
//     let res3 = res1.join();//Joining the array
//     console.log(res3);

//     // OR

//     // let res4 =  num.split("").reverse().join();
//     // console.log(res4);

//     //The split() method splits a string into an array of substrings.
//     //The split() method returns the new array.
//     //The split() method does not change the original string.
//     //If (" ") is used as separator, the string is split between words.
// }

// var result = reverse_number("9876");
// console.log(result);


// ###### Q2. Write a JavaScript function that checks whether a passed string is a palindrome or not? ######

// function palindrome(input_value)
// {
//     let pali = input_value.split("").reverse().join();
//     pali = pali.split();
//     console.log(pali);
//     console.log(typeof pali);
//     input_value = input_value.split("");
//     console.log(input_value);
//     console.log(typeof input_value);
//     if(pali == input_value)
//     {
//         console.log("Input recieved is palindrome ", input_value);
//     }
//     else
//     {
//         console.log("Input recieved is not palindrome ", input_value);
//     }
    
// }
// let result = palindrome("madam");
// console.log(result);


// ###### Q3. Write a function that returns the square of a number ######


// function findSquare(num)
// {
//     return num ** 2;
// }

// var result = findSquare(12);
// console.log(result)



// ###### Q4. Write a function to find the area of a given Rectangle ######

// function fin_rect_area(length, width)
// {
//     return length * width;
// }

// var result = fin_rect_area(98,98,);
// console.log(result);


// ###### Q5. Write a function to find the area and perimeter of a Circle ######

// function circle_area(radius)
// {
//     const pie = 3.14;
//     return pie * (radius ** 2);
// }

// var result = circle_area(20);
// console.log(result);


// ###### Q6. Write a function to reverse a number ######

// function reverseNum(num)
// {
//     return num.split("").reverse().join();
// }

// var result = reverseNum("12345.sff");
// console.log(result);


// ###### Q6. Write a function to to use rest operator ###### 

// function Rest_opt(...rest)
// {
//     return rest * rest;
// }

// var res = Rest_opt(23, 23, 32, 89, 89, 89);
// console.log(res);

// ### Doubt the above question ###
{
x = 23;
console.log(x);
var x;
}


