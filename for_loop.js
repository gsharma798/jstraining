// for(let index = 0; index<5; index++)
// {
//     console.log("Index is -->", index);
// }

// 1. Print the numbers 0 - 20, one number per line.

// for (let num = 1; num <= 20; num++)
// {
//     console.log(num);
// }

// 2. Print only the ODD values from 3 - 29, one number per line.

// for(let num = 3; num <= 29; num++)
// {
//     if(num % 2 == 1)
//     {
//         console.log(num);
//     }
// }

// 3. Print the EVEN numbers 12 down to -14 in descending order, one number per line.

// for(let num = 12; num >= -14; num--)
// {
//     if(num % 2 == 0)
//     {
//         console.log(num);
//     }
// }

// 4. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3

// for(let num = 50; num >= 20; num--)
// {
//     if(num % 3 == 0)
//     {
//         console.log(num);
//     }
// }

// 5. Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
// 5.1 Print each element of the array to a new line.

// let str1 = "LaunchCode";
// let str2 = [1, 5, 'LC101', 'blue', 42];

// for(let res = 0; res < str2.length; res++)
// {
//     console.log(str2[res]);
// }

// 5.2 Print each character of the string---in reverse order---to a new line.

// let str1 = "LaunchCode";
// let str2 = [1, 5, 'LC101', 'blue', 42];
// let str3 = str1.split("").reverse();

// for(let res2 = 0; res2 <= str3.length; res2++)
// {    
//     console.log(str3[res2])
// }

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// var result = reverseString("hello");
// console.log(result)


// 6. Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
// 6.1 Define an empty evens array to hold the even numbers and an odds array for the odd numbers.

const arrayVal = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

for(let res = 0; res <= arrayVal.length; res++)
{
    if(arrayVal[res] % 2 == 0)
    {
        let evendata = arrayVal[res];
        let newarray = [];
        newarray[evendata];
        console.log(evendata);
    }
    // if(arrayVal[res] % 2 != 0)
    // {
    //     let oddData = arrayVal[res];
    //     console.log(oddData);
    // }
}