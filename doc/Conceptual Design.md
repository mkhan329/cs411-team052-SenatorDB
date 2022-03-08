# Conceptual Design (Stage 2)
## ER Diagram
![ER Diagram](https://media.github-dev.cs.illinois.edu/user/12602/files/dee0ef37-21a2-4eae-bd83-6705624476e6)
## Assumptions Made
1. Each Senator has only one affilated party, and each party can have multiple senators.
2. Each Senator can vote on multiple bills, and each bill can be voted on by multiple senators.
3. Each Senator has a home state, and each state can be home to multiple senators.
4. Each Senator has one photo available, and each photo has depicts the face of one senator.
5. There are no different parties with the same name.
## Logical Design (Relational Schema)
- Senators(SenatorID:INTEGER [PK], Name:VARCHAR(255), BirthYear:INTEGER)
- Photos(ImageName:VARCHAR(255) [PK], ImageURL:VARCHAR(1024))
- Bills(BillID:INTEGER [PK], Date:DATE, Results:VARCHAR(255), Description:VARCHAR(1024))
- Parties(PartyName:VARCHAR(255) [PK], YearFounded:INTEGER)
- States(StateID:CHAR(2) [PK], StateName:VARCHAR(32), DominantParty:VARCHAR(255))

- Vote(SenatorID:INTEGER [FK to Senators:SenatorID], BillID:INTEGER [FK to Bills:BillID], VoteType:VARCHAR(32))
- AffiliatedTo(SenatorID:INTEGER [FK to Senators:SenatorID], PartyName:VARCHAR(255) [FK to Parties:PartyName])
- FromState(SenatorID:INTEGER [FK to Senators:SenatorID], StateID:CHAR(2) [FK to States:StateID])
- LooksLike(SenatorID:INTEGER [FK to Senators:SenatorID], ImageName:VARCHAR(255) [FK to Photos:ImageName])

## Entity Descriptions
1. Senators: A table that stores all senators' IDs, their names, and their birth years of the 117th congress of the US.
2. Photos: A table that stores one image for each senator in the 117th congress of the US.
3. Bills: A table that stores the Bill IDs, Dates, Results, and Descriptions of all bills that were voted during the 117th congress of the US.
4. Parties: A table that stores the party names, and years founded of the top ten biggest political parties in the US.
5. States: A table that stores all state IDs, state names, and dominant parties in all 50 states of the US.

## Relationship Descriptions (And their Cardinalities)
There are four relationships within this design.
1. Senators -- **Vote** -- Bills, a senator can vote on many bills, and a bill can be voted on by multiple senators. This is a many-many relationship.
2. Senators -- **Affliated To** -> Parties, senator can be affliated to a single party, and a party can have multiple senators. This is a many-one relationship.
3. Senators <- **Looks Like** -> Photos, a senator can look like a single photo, and a photo can only depict a single senator. This is a one-one relationship.
4. Senators -- **From (State)** -> States, a seantor can come from a single state, and a state can have multiple senators. This is a many-one relationship.
