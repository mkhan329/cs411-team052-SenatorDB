# Database Design
## DDL Commands Used
    CREATE TABLE Senators(
      SenatorID INTEGER NOT NULL,
      Name VARCHAR(255) NOT NULL,
      BirthYear INTEGER,
      PRIMARY KEY (SenatorID)
     );
     CREATE TABLE Photos(
       ImageName VARCHAR(255) NOT NULL,
       ImageURL VARCHAR(1024),
       PRIMARY KEY (ImageName)
     );
     CREATE TABLE Bills(
       BillID INTEGER NOT NULL,
       Date DATE,
       Results VARCHAR(255),
       Description VARCHAR(1024),
       PRIMARY KEY (BillID)
     );
     CREATE TABLE Parties(
       PartyName VARCHAR(255) NOT NULL,
       YearFounded INTEGER,
       PRIMARY KEY (PartyName)
     );
     CREATE TABLE States(
       StateID CHAR(2) NOT NULL, 
       StateName VARCHAR(32),
       DominantParty VARCHAR(255),
       PRIMARY KEY (StateID)
     );

     CREATE TABLE Vote(
       SenatorID INTEGER NOT NULL, 
       BillID INTEGER NOT NULL, 
       VoteType VARCHAR(32),
       PRIMARY KEY (SenatorID, BillID),
       FOREIGN KEY (SenatorID) REFERENCES Senators(SenatorID),
       FOREIGN KEY (BillID) REFERENCES Bills(BillID)
     );
     CREATE TABLE AffiliatedTo(
       SenatorID INTEGER NOT NULL,
       PartyName VARCHAR(255) NOT NULL,
       PRIMARY KEY (SenatorID, PartyName),
       FOREIGN KEY (SenatorID) REFERENCES Senators(SenatorID),
       FOREIGN KEY (PartyName) REFERENCES Parties(PartyName)
     );
     CREATE TABLE FromState(
       SenatorID INTEGER NOT NULL,
       StateID CHAR(2) NOT NULL,
       PRIMARY KEY (SenatorID, StateID),
       FOREIGN KEY (SenatorID) REFERENCES Senators(SenatorID),
       FOREIGN KEY (StateID) REFERENCES States(StateID)
     );
     CREATE TABLE LooksLike(
       SenatorID INTEGER,
       ImageName VARCHAR(255),
       PRIMARY KEY (SenatorID, ImageName),
       FOREIGN KEY (SenatorID) REFERENCES Senators(SenatorID),
       FOREIGN KEY (ImageName) REFERENCES Photos(ImageName)
     );
