# Project Proposal

## 1. Project Title
US Congressional Voting Record Analysis
## 2. Project Summary
In this project, the voting records of Senators from the 117th Congress (2021-2023) will be analyzed. This analysis will display the results of roll call votes over the duration of the 117th Congress. Users will be able to query this data in different ways, such as making categories based on Senator political parties and State origin, or looking at which roll call votes were favoured by certain parties. Users can also perform Create, Read, Update, Delete, and Search operations on the data, so that the the database can be constantly updated or corrected when inaccuracies are noticed. The user can also change the data to other datasets like the 116th congress.

The data set for this project consists of tables showing all Senators in the 117th Congress, roll call votes that have been voted on, the results of such votes, and the individual votes of Senators for each bill. Senators in the dataset can be identified by their distinct ICSPSR numbers, and roll call votes can be identified by their distinct roll call number. The votes of senators can be shown for each bill, with the following table explaining votes:

| Cast Codes |       Description    |
| -----------|----------------------|
| 0  |       Not a member of the chamber when this vote was taken     |
| 1  |      Yea    |
| 2  |      Paired Yea     |
| 3  |      Announced Yea     |
| 4  |      Announced Nay     |
| 5  |      Paired Nay     |
| 6  |      Nay     |
| 7  |      Present (some Congresses)     |
| 8  |      Present (some Congresses)     |
| 9  |      Not Voting (Abstention)     |


## 3. Project Description
The problem we want to solve is that people may not be aware of how their senators vote, or what bills their party voted for or voted against. We will solve it by showing people the data corresponding to the votes, and analyze the data to show the users what their senators/party voted for.
## 4. Usefulness
Create chances for people to learn about congressional vote by observing user friendly data with interactive option like data querying, updating, etc.
## 5. Realness
The data is obtained from [voteview.com](https://voteview.com/data), and it is real vote data collected from the congress, about how each senator of the 117th congress voted on each roll vote.
## 6. Functionality
We will be make a searching tool to display the votes of each senator. It can pull data of votes from a database, then visualize and analyze it.
The users can create, delete, update data in the database to make sure the data we have is accurate and up-to-date. They can also search for specific entries of data.
Data that will be stored for this project include:
1. every vote that occured in the Senate of the 117th congress
2. Senators' IDs, names, states, Photos(Maybe)
3. Information about the bills, what they are about, their results, their dates etc.
4. Parties and their members
Basic functions of our web app include:
1. Search for vote data about specific senators, rolls, or parties etc.
2. Change/maintain the database by creating, deleting, updating data. For example, if the user notices any inaccuracy with the data, it can be corrected by deleting or updating the entry.
3. Summarize/Analyze the data requested by the user.

The creative component is to visualize the data, such as creating a pie chart, bar chart etc. to show the user the result. We plan to achieve this by using javascript/react, or other open-source libraries
## 7. UI Mockup
The project and data will be displayed using a website.
![image](https://media.github-dev.cs.illinois.edu/user/12602/files/019b4588-6ef6-4c57-ae0a-775666475fa2)
![image](https://media.github-dev.cs.illinois.edu/user/12602/files/193836dc-f164-4492-a7b3-c16c1526e68e)
## 8. Project Work Distribution
Moiz - Settting up the database, Handling changes to the database, design the database model.
Boyang - Create main framework of the front-end, try visualization (generating graphs), design the database model.
Tuan - Senate Roll Call Data Acquistion, design the database model.
Minh - Handle queries and Database, design the database model.
