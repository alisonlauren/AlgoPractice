// 1. Write a query to fetch the EmpFname from the EmployeeInfo table 
//in upper case and use the ALIAS name as EmpName.

// A: 

// 2. Write a query to fetch the number of employees working 
//in the department ‘HR’.

//A: 
//   

//3. Write a query to get the current date.

//A: (in sql) 
//   
//(in mysql) 
//    

// 4. Write a query to retrieve the first four characters of  
//EmpLname from the EmployeeInfo table.

//A: 

//5. Write a query to fetch only the place name(string before brackets) 
// from the Address column of EmployeeInfo table.

//A: (in mysql)
// 

//A: (in sql)
//  

//6. Write a query to create a new table which consists of data and 
// structure copied from the other table.

//A: (in Sql)
//   

//A: (in mysql)
//   

//7. Write a query to find all the employees whose salary is between
//    50000 to 100000.

//A: 

//8. Write a query to find the names of employees that begin with ‘S’

//A. 

//9. Write a query to fetch top N records.

//A. (in Sql)
//   

//A. (in Mysql)
//   

//10. Write a query to retrieve the EmpFname and EmpLname in a single column 
//as “FullName”. The first name and the last name must be separated with 
//space.

//A: SELECT CONCAT(EmpFname, ' ', EmpLname) AS 'FullName' FROM EmployeeInfo;

//11. Write a query find number of employees whose DOB is between 02/05/1970 
//to 31/12/1975 and are grouped according to gender.

//A: SELECT COUNT(*), Gender FROM EmployeeInfo
//   WHERE DOB BETWEEN '02-05-1970' and '12-31-1975'
//   GROUP BY Gender;

//12. Write a query to fetch all the records from the EmployeeInfo table 
//   ordered by EmpLname in descending order and Department in the ascending
// order.

//A: SELECT * FROM EmployeeInfo
//   ORDER BY EmpLname DESC, Department ASC;
//   

//13.  Write a query to fetch details of employees whose EmpLname ends with 
// an alphabet ‘A’ and contains five alphabets.

//A: SELECT * FROM EmployeeInfo
//   WHERE EmpLanme LIKE '_____a';

//14. Write a query to fetch details of all employees excluding 
//the employees with first names, “Sanjay” and “Sonia” from the
// EmployeeInfo table.

//A: SELECT * FROM EmployeeInfo
//   WHERE EmpFname NOT IN ('Sanjay' and 'Sonia');

//15. Write a query to fetch details of employees with the address 
// as “DELHI(DEL)”.

//A: SELECT * FROM EmployeeInfo
//   WHERE Address LIKE 'DEHLI(DEL)%'

//16. Write a query to fetch all employees who also hold the 
//managerial position.

//A: 

// 17. Write a query to fetch department-wise count of employees 
// sorted by department’s count in ascending order.

//A: 

// 18. Write a query to calculate the even and odd records from a table.

//A: SELECT EmpId FROM (SELECT rowno, EmpId FROM EmployeeInfo) WHERE MOD(rownno,2) = 0;

//19. Write a SQL query to retrieve employee details from EmployeeInfo table 
// who have a date of joining in the EmployeePosition table.

//A: 

//20. Write a query to retrieve two minimum and maximum salaries from the 
//EmployeePosition table.
//max
//A: SELECT DISTINCT Salary FROM EmployeePosition E1
//   WHERE 2 >= (SELECTCOUNT(DISTINCT SALARY) FROM EmployeePosition E2
//   WHERE E1.Salary <= E2.Salary) ORDER BY E1.Salary DESC;
//min
// A: SELECT DISTINCT Salary FROM EmployeePosition E1
//    WHERE 2 >= (SELECTCOUNT(DISTINCT Salary) FROM EmployeePosition E2
//    WHERE E1.Salary >= E2.Salary) ORDER BY E1.SalaryDESC;

//21. Write a query to find the Nth highest salary from the 
//table without using TOP/limit keyword.

//A: SELECT Salary
//   FROM EmployeePosition E1
//   WHERE N-1 = (
            //SELECT COUNT(DISTINCT (E2.Salary ) )
            //FROM EmployeePosition E2
            // WHERE E2.Salary > E1.Salary );

//22. Write a query to retrieve duplicate records from a table.

//A: SELECT EmpId, EmpFname, Department COUNT(*)
//   FROM EmployeeInfo 
//   GROUP BY EmpId, EmpFname, Department
//   HAVING COUNT(*) > 1;

//23. Write a query to retrieve the list of employees working in 
//the same department.

//A: SELECT DISTINCT E.EmpID, E.EmpFname, E.Department
//   FROM EmployeeInfo E, Employee E1
//   WHERE E.Department = E1.Department
//   AND E.EmpId != E1.EmpID;

//24. Write a query to retrieve the last 3 records from the 
//EmployeeInfo table.

//A: SELECT * FROM EmployeeInfo WHERE
//   EmpId <=3 
//UNION 
//     SELECT * FROM
//   (SELECT * FROM EmployeeInfo E 
//    ORDER BY E.EmpID DESC)
//    AS E1 WHERE E1.EmpID <=3

//25. Write a query to find the third-highest salary 
//from the EmpPosition table.

//A: SELECT TOP 1 Salary
//   FROM( SELECT TOP 3 salary
//   FROM employee_table
//   ORDER BY Salary DESC)
//   AS emp
//   ORDER BY salary ASC;

//26. Write a query to display the first and the last record 
//from the EmployeeInfo table.

//min
//A: SELECT * FROM EmployeeInfo 
//   WHERE EmpID = (SELECT MIN(EmpId)
//   FROM EmployeeInfo);
//max
//A: SELECT * FROM EmployeeInfo 
//   WHERE EmpID = (SELECT MAX(EmpID)
//   FROM EmployeeInfo);

//27. Write a query to add email validation to your database

//A: SELECT Email FROM EmployeeInfo 
//   WHERE NOT REGEXP_LIKE(Email, ‘[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}’, ‘i’);

//28. Write a query to retrieve Departments who have less 
//than 2 employees working in it.

//A: SELECT Department, COUNT(EmpId) as "EmpNo" 
//   FROM EmployeeInfo
//   GROUP BY Department 
//   HAVING COUNT(EmpId) < 2;

//29. Write a query to retrieve EmpPostion along with 
// total salaries paid for each of them.

// SELECT EmpPosition, SUM(Salary) 
// FROM EmployeePosition GROUP BY EmpPosition;

//30. Write a query to fetch 50% records from the EmployeeInfo table.

//A: SELECT * 
//   FROM EmployeeInfo WHERE
//   EmpID <= (SELECT COUNT(EmpID)/2 from EmployeeInfo);






