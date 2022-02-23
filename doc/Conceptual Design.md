# Conceptual Design (Stage 2)
## ER Diagram
![411 Project Stage 2 ER Diagram](https://media.github-dev.cs.illinois.edu/user/12602/files/9fdeebab-5457-4a1e-8655-47d4c4de7761)
## Assumptions Made
1. Each Senator has only one affilated party.
2. Each Senator has a home state.
3. Each Senator has at least one photo available.
4. There are no different parties with the same name.
## Logical Design (Relational Schema)
- Senators(SenatorID:INTEGER [PK], Name:VARCHAR(255), BirthYear:INTEGER)
- Photos(SenatorID:INTEGER [FK to Senators:SenatorID], ImageURL:VARCHAR(1024))
- Bills(BillID:INTEGER [PK], Date:DATE, Results:VARCHAR(255), Description:VARCHAR(1024))
- Parties(PartyName:VARCHAR(255) [PK], YearFounded:INTEGER)
- States(StateID:CHAR(2) [PK], StateName:VARCHAR(32), DominantParty:VARCHAR(255))

- Vote(SenatorID:INTEGER [FK to Senators:SenatorID], BillID:INTEGER [FK to Bills:BillID], VoteType:VARCHAR(32))
- AffiliatedTo(SenatorID:INTEGER [FK to Senators:SenatorID], PartyName:VARCHAR(255) [FK to Parties:PartyName])
- FromState(SenatorID:INTEGER [FK to Senators:SenatorID], StateID:CHAR(2) [FK to States:StateID])

## Relationship Descriptions (And their Cardinalities)
There are four relationships within this design.
1. Senators -- **Vote** -- Bills, a senator can vote on many bills, and a bill can be voted on by multiple senators. This is a many-many relationship.
2. Senators -- **Affliated To** -> Parties, senator can be affliated to a single party, and a party can have multiple senators. This is a many-one relationship.
3. Senators <- **Looks Like** -> Photos, a senator can look like a single photo, and a photo can only depict a single senator. This is a one-one relationship.
4. Senators -- **From (State)** -> States, a seantor can come from a single state, and a state can have multiple senators. This is a many-one relationship.
