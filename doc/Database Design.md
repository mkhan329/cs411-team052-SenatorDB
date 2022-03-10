# Database Design
## DDL Commands Used
    CREATE TABLE Senators(
      SenatorID INTEGER NOT NULL,
      Name VARCHAR(255) NOT NULL,
      BirthYear INTEGER,
      PRIMARY KEY (SenatorID)
    );
    CREATE TABLE Wikipedia(
      PageTitle VARCHAR(255) NOT NULL,
      PageURL VARCHAR(1024),
      PRIMARY KEY (PageTitle)
    );
    CREATE TABLE Bills(
      BillID INTEGER NOT NULL,
      Date VARCHAR(16),
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
      PageTitle VARCHAR(255),
      PRIMARY KEY (SenatorID, PageTitle),
      FOREIGN KEY (SenatorID) REFERENCES Senators(SenatorID),
      FOREIGN KEY (PageTitle) REFERENCES Wikipedia(PageTitle)
    );
## Advanced SQL Queries
