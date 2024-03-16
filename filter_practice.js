var employees_data = [
    {
      "name": "sooraj",
      "age": 68,
      "designation": "Engineer",
      "technology": true,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj@example.com",
      "department": "Software Development",
      "joining_date": "2022-05-15"
    },
    {
      "name": "Kamal",
      "age": 18,
      "designation": "Manager",
      "technology": false,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.m@example.com",
      "department": "Human Resources",
      "joining_date": "2021-10-20"
    },
    {
      "name": "Kaalu",
      "age": 78,
      "designation": "Marketing Executive",
      "technology": true,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.marketing@example.com",
      "department": "Marketing",
      "joining_date": "2023-02-08"
    },
    {
      "name": "Rohit",
      "age": 38,
      "designation": "Accountant",
      "technology": true,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.acc@example.com",
      "department": "Finance",
      "joining_date": "2020-07-10"
    },
    {
      "name": "pankaj",
      "age": 8,
      "designation": "Graphic Designer",
      "technology": false,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.design@example.com",
      "department": "Creative",
      "joining_date": "2024-01-30"
    },
    {
      "name": "tushar",
      "age": 48,
      "designation": "Customer Service Representative",
      "technology": false,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.customer@example.com",
      "department": "Customer Support",
      "joining_date": "2022-08-14"
    },
    {
      "name": "salmaan",
      "age": 8,
      "designation": "Data Analyst",
      "technology": true,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.data@example.com",
      "department": "Analytics",
      "joining_date": "2023-11-05"
    },
    {
      "name": "praveen",
      "age": 38,
      "designation": "Project Manager",
      "technology": false,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.pm@example.com",
      "department": "Project Management",
      "joining_date": "2021-03-22"
    },
    {
      "name": "kaalu",
      "age": 18,
      "designation": "Quality Assurance Analyst",
      "technology": false,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1200,
      "email": "sooraj.sales@example.com",
      "department": "Sales",
      "joining_date": "2020-12-18"
    },
    {
      "name": "manoj",
      "age": 28,
      "designation": "Quality Assurance Analyst",
      "technology": true,
      "address": {
        "hNO": 1444,
        "gNO": 12,
        "pincode": 110060
      },
      "salary": 1400,
      "email": "sooraj.qa@example.com",
      "department": "",
      "joining_date": "2022-02-28"
    }
  ]

var data = [2, 5, 6, 23, 34, 54]

//   1. **Find the employee(s) who joined after January 1, 2023.
//  console.log("1. **Find the employee(s) who joined after January 1, 2023. --> ", employees_data.filter(name, "suraj"));


// for(let index = 0; index<employees_data.length; index++)
// {  
//   if(employees_data[index].joining_date > joindate)
//   {
//     console.log(employees_data[index]);
//   }  
// }

//2. **Find all employees who work in departments related to technology (e.g., Software Development, Data Analyst, etc.).

// for(let index = 0; index < employees_data.length; index++)
// {
//   if(employees_data[index].technology == false)
//   {
//     console.table(employees_data[index])
//   }
// }

// 3. **Find the employee(s) who have been working for the company for more than 2 years.

var currentDdate = new Date();
  
var currentDay = currentDdate.getDate();
//console.log(currentDay);
var currentMonth = currentDdate.getMonth() + 1;
//console.log(currentMonth);
var currentYear = currentDdate.getFullYear();
//console.log(currentYear);

for(let index = 0; index < employees_data.length; index++)
{
  let actualDate = employees_data[index].joining_date.split('-');

  let empJoiningDay = parseInt(actualDate[2]);
  //console.log(empJoiningDay);
  let empJoiningMonth = parseInt(actualDate[1]);
  //console.log(empJoiningMonth);
  let empJoiningYear = parseInt(actualDate[0]);
  //console.log(empJoiningYear);
  if(empJoiningDay > 730)
  {
    console.log(actualDate);
  }
}

// 10. **Find the employee(s) who have not been assigned to any department yet.

// for(let index = 0; index < employees_data.length; index++)
// {
//   if(employees_data[index].department == "")
//   {
//     console.log(employees_data[index]);
//   }  
// }


// 9. **Find the employee(s) who work as Quality Assurance Analysts and have a salary greater than 1300.

// for(let index = 0; index < employees_data.length; index++)
// {
//   if(employees_data[index].designation == "Quality Assurance Analyst" && employees_data[index].salary > 1300)
//   {
//     console.table(employees_data[index]);
//   }  
// }

