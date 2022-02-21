# Conceptual Design (Stage 2)
## ER Diagram
![411 Project Stage2 ER Diagram](https://media.github-dev.cs.illinois.edu/user/12602/files/48148f08-5709-403e-aea4-95e16f0e2b93)
## Assumptions Made
1. Each Senator has only one affilated party.
2. Each Senator has a home state.
3. Each Senator has atleast one photo available.
## Logical Design
Senators(SenatorID:INTEGER [PK], Name:VARCHAR(255), BirthYear:INTEGER)
Photos(SenatorID:INTEGER [FK to Senators:SenatorID], ImageURL:VARCHAR(255))
Bills(BillID:INTEGER [PK], Date:DATE, Results:VARCHAR(255), Description:VARCHAR(512))
Parties(PartyName:VARCHAR(255) [PK], YearFounded:INTEGER)
States(StateID:CHAR(2) [PK], StateName:VARCHAR(32), DominantParty:VARCHAR(255))

Vote(SenatorID:INTEGER [FK to Senators:SenatorID], BillID:INTEGER [FK to Bills:BillID], VoteType:VARCHAR(32))
AffiliatedTo(SenatorID:INTEGER [FK to Senators:SenatorID], PartyName:VARCHAR(255) [FK to Parties:PartyName])
FromState(SenatorID:INTEGER [FK to Senators:SenatorID], StateID:CHAR(2) [FK to States:StateID])
