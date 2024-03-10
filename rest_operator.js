function sum(...rest)
{
    // let result = 1;
    // for(let i=0; i<rest.length; i++)
    // {
    //     result = result * rest[i];
        
    // }
    // let Name = sum.name;

   return rest;
}
    
let res = sum("Gaurav, 33, Delhi")
console.table(res);

// function Rest_opt(...rest) { // rest = [2, 3, 12, 5]
// 	let result = 0;

// 	for(let index=0; index<rest.length; index++) {
// 		result += rest[index];
// 	}

// 	return result
// }

// var res = Rest_opt(4,3,1,6);
// console.log("result", res)
