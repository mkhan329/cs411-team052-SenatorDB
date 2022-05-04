# Project Report

## 1. Please list out changes in directions of your project if the final project is different from your original proposal (based on your stage 1 proposal submission).
 
First, we discarded the idea of letting the users customize queries with a user interface. The feature would be quite complex to implement, both on the frontend and backend. Second, though the search feature can find senators by name, it did not display the votes of that senator. Since the votes are not displayed, they are also not visualized like the senators themselves were. Third, in the UI mockup, we showed the feature to select data based on party, but we also discarded that feature.
 
## 2. Discuss what you think your application achieved or failed to achieve regarding its usefulness.
 
Not many people are interested in Congress and all the voted bills, so we believe that our project does a great job of showcasing a user-friendly application with interactive features such as data querying and updating the data set, which makes politics more interesting. Furthermore, the donut-shape graphs, our creative component, effectively visualize data so the users would understand the data better. 
 
In the proposal, we planned to create a feature that visualizes the trends in the way Senators vote based on State and Party, for seeing the political parties that dominate certain States. However, due to time constraints, we were not able to make this feature.
 
 
## 3. Discuss if you changed the schema or source of the data for your application
 
The database schema was not changed. An additional source of data, randomly generated senators, were used in the database, due to insufficient amount of senators in the original dataset, as we had a hard requirement of at least 1000 entries in several tables.
 
## 4. Discuss what you change to your ER diagram and/or your table implementations. What are some differences between the original design and the final design? Why? What do you think is a more suitable design?
 
The only change to our ER Diagram was that we changed the LooksLike relation from having a Photo of the Senators to having a Wikipedia page. This change made more sense to us, in order to have a better description of the Senators. The rest of our ER Diagram remained the same; this is because our design accurately represented all the data tables regarding Senators, Bills, Parties, etc, as well as the relationships between these tables.
 
## 5. Discuss what functionalities you added or removed. Why?
 
We removed the interactive UI of mapping senators and US states for visualization because the 3rd party plugin was not acting as expected, and the provided documentation was not helpful enough to debug. 
 
We added the ability to visualize the “yea” vote fractions of each bill in the database. Because we already imported the donut chart component into our application, we think we should use it at all places where it makes sense, to visualize as much data as possible for the user to better understand the data.
 
	
 
## 6. Explain how you think your advanced database programs complement your application.
 
We want to show the proportion of each party voting “yea” for a bill to see what bills are supported by all parties or by just one party, so the users can determine which parties affect the bill to become law . This feature plays a key role in our application because it helps the user to learn more about politics and explain why one party supports a bill but another does not. The procedure project does a great job to make this feature come to live.
 
Since in real life, there are laws requiring senators to be at least 30 years old, we created the trigger to reflect this. If a newly inserted senator is younger than 30 years old, he/she will not be assigned a party, since that senator is prohibited from actually participating in the senate due to his/her age.The trigger helps ensure the realness of our data, and could prevent malicious users trying to insert nonsensical data into the database.
 
## 7. Each team member should describe one technical challenge that the team encountered.  This should be sufficiently detailed such that another future team could use this as helpful advice if they were to start a similar project or where to maintain your project. 
 
Michael : I don’t have experience with Node JS and JavaScript so understanding how you can connect the backend code with the frontend is challenging for me. However, with the help of instruction video, I could understand how it works and I was able to create a simple user interface that performs CRUD.
 
Boyang: Trying to host the frontend application on GCP was a huge challenge for us. We are not familiar with deploying web applications onto cloud platforms, and it took us a while to figure out how to deploy the react application onto GCP, only to realize that due to different internet protocols (HTTP VS HTTPS) between the frontend and backend, our frontend could not retrieve data from the backend, therefore we had to give up hosting on GCP.
 
Moiz- Getting the stored procedure to work was challenging, as it had several complicated SQL Queries and cursors; we would face issues of returning empty tables or null results, when our Stored Procedure was meant to calculate what percentage of a political party supported a given bill. Eventually, we were able to fix the issues within the queries and cursors to get our stored procedure to accurately calculate these percentages, and return them in a table of bills and political parties.
 
Tuan: Setting up the back end on the GCP’s virtual machine was challenging for me. During the workshop, I sometimes could not follow what the instructor was doing because my laptop is slow and the GCP sometimes has different views compared to what the instructor’s screen shows, resulting that I accidently created javascript file in the wrong folder and installed unnecessary packages. Furthermore, with no experience in JavaScript and HTML, it was hard to make the node.js file interact with the ejs/html file. After watching the recorded video three times, I was able to make the folder structure organized and the node.js file ready to implement the CRUD process. 
 
## 8. Are there other things that changed comparing the final application with the original proposal?
 
We were able to achieve mostly everything we set out to do in our proposal. This includes having a dataset of Senators, Bills, Political Parties, and States. The functionality of our app that we proposed was also implemented. This includes querying vote data about specific senators, rolls, or parties; changing the database by creating, deleting, updating data; and analyzing the data requested by the user in the form of charts to visualize political parties supporting certain bills.
 
 
## 9. Describe future work that you think, other than the interface, that the application can improve on
 
We can work on implementing indexing for the stored procedure because it took quite a while for the stored procedure to run, so indexing would help improve the overall performance of our application.
 
## 10. Describe the final division of labor and how well you managed teamwork.
 
We split up responsibilities based on the variety of different tasks to be accomplished, and teamwork was based on communicating and linking all of our work together to make the final product. The tasks to be split up and worked on were the database design, frontend/backend code, queries, trigger/stored procedure, and acquisition of data for our data tables.
 
Moiz Khan- Worked on Trigger, Stored Procedure, Setting up data tables of senators and bills.
 
Michael Cao - Worked on Advance Query, Setting up data tables of parties, votes, states. Create a simple user interface that performs CRUD.

Boyang Yu - Worked on creating and designing the frontend application, as well as the creative component of interactive charts. Also participated in designing database schema.

Tuan Tran - I set up the node.js and all html files for the back-end server as well as the CRUD processes. I also participated in designing the database schema. 
