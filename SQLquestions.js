//TOP SQL interview questions


//0. case manipulation: upper, lower, initcap


//1. Tell me about yourself and why you want this position
// I am a reliable team player who you can rely on to always bring
//professionalism and passion into my career. I am goal oriented and will ensure
// company goals are met. My level of technicality are a strong match for the role
//based on my certification in both front end and back end dev. I have experience working
//with other developers and I believe that I can contribute to the team positively. 

//2. What is SQL?
// Structured Query Language, more commonly known as SQL, is seen as the standard for 
// managing data kept in relational database management systems. update data and retrieve
//specific data

//3. Why our company in this position?
//Based on the reviews, based on my passion for development and my eagerness to learn
//Also, after reviewing the company portfolio, I was impressed with the designs and (BOKA health)
// would be honored to say I contributed to a project in the future. 

//4. What is MySQL?
// MySQL is an open-source relational database management system that is based on SQL, 
//most commonly used for web databases. It was co-founded by Michael Widenius.
// Used in WordPress, YouTube, facebook and twitter. written in C and C++ languages

//5. What's the main difference between SQL and MySQL?
// SQL is often used to access, manipulate and update the data within a database, whereas MySQL
// is a relational database management system that keeps the data within db organized.
// SQL is a language created to manage realtion databses, and MySql is an open source
//relational database management system based on SQL.

//6. In SQL, what are "JOINS"?
// There are four main types. FULL, RIGHT, LEFT and INNER. combine the rows from two or more tables

//7. What is an INDEX, and why is it useful to have?
// An index is useful because it allows for faster retrieval of records from a table.
//The index creates an entry for each value, which in turn makes it much faster. An 
//inded is a pointer to data contained within a table.

//8. What is a 'constraint' in SQL?
// There are many differnt types of SQL constraints. Their purpose is to specify
// a rule for the data within a table, limiting the type of data that can go within the table.

//9. Name some constraints and what they do?
//Primary Key: which identifies each record in a table
//NOT NULL: is used o prevent a NULL value being inserted
//FOREIGN KEY: which provides a unique identification of a row or record within another table
//DEFAULT:  which will assign a deafault value if not already specified.
//CHECK: verify that all values meet criteria
//UNIQUE: verify that all values are unique

//10. what are tables and fields?
//table is a collection of data that is organized into rows and columns
// columns are called "fields"

//11. Biggest Weakness?
// Healthy Work/Life balance

//12. Different subsets of SQL?
// Data Control Language: permits you to control access to db
// Data Definition Language: allow you to specify data structures in db, delete and altering
// Data Manipulation Language: allows you to maninpute data like update, delete, insert

//13. How would you format SQL server dates?
//Format function, allows the formatting of the date and time
// select format (getdate(), 'dd/mm/yyyy')

//14. What is primary and foreign key?
// For a db table to qualify as 'relational', it needs to have a primary key. A PK has one
//or more columns. used to identify each row in a table. cannot have null values
//a FK is a column in one table. fk can accept null values.

//15. What is database denormalization?
// Denormalization is a method used to improve the performance of a db,
// allowing the retrieval of data in the quickest time possible.

//16. What is database normalization?
//  normalization reduces redundancy of data within a database. Normalization is a design
// technique that ;laces larger db tables into smaller tables and then uses specific relationships
// to link them. downside, could be slower.

//17. In SQL, what is a subquery?
// inner query or inner select. its an sql query thats nested inside a larger query,
// such as SELECT, update, insert
// like when you are selecting tow different column names from seperate tables 

//18. What happens to data rows in a table when the table contains a clustered index?
// will be stored in order. Cluster indexes sort data rows based on their key values.
//if not used, it would be a heap. 

//19. Aggrogate Functions:
// SELECT AVG(release_year) FROM albums;
//all the data returned from the select and then returns a function on it.
// avg, sum, count, 
// count is useful when 

//given alias name to new column names and selected columns
// SELECT b.name AS band_name, COUNT(a.id) AS num_albums 
//FROM bands AS b
//left join, getting bands with no albums records as well
//LEFT JOIN albums AS a ON b.id = a.band_id
// grouping them by band.id
//GROUP BY b.id;

// 20. How to query on aggrogated data?
// "HAVING" underneath the group by;


//21. Data Integrity, Accuracy, Consistency, Integrety con, 

//22. Clustered Index:
// easy retreival faster DB
// alters the way records are stored sorts out rows by column

// NonClustered Index: 
//retrieval from database is slower
// does not alter the way data is stored

//23. Denormalization:
// Increase performance of entire DB, introduces redundancy 
// data from various tables into a single table

//24. Normalization: organize data to avoid duplication
// better DB organization
// more tables smaller rows
//types: inf, 2nf, 3nf, bcnf
//1nf, make sure tables have only a single value
//2nf, single column primary keys
//3nf, no transitive functional dependencies
//


//25. Index: 
//Performance tuning method
//faster retrieval of records
//creates entry for each value
//types: unique, Clustered, nonclustered

//26. ACID: ATOMICITY, CONSISTENCY, ISOLATION, DURABILITY

//27. WHAT IS THE NEED FOR GROUP FUNCTIONS? RETURNS ONE RESULT
// AVG, COUNT, MAX, MIN, SUM

//28. CLAUSE: ways to filter, WHERE/HAVING

//29. Dynamic SQL executd, using exec, query with param, useing sp_executresql

//30. levels of constraint: column and table.

//31. FETCH COMMON RECORDS FOR TWO TABLES: INTERSECT

//32. SET OPERATORS: UNION, INTERSECT

//33. DIFF FROM AGG TO SCALAR FUNC: SCALAR RETURN SINGLE VALUE BASED ON
// INPUT VALUE, SUCH AS UCASE, NOW

//34. 


