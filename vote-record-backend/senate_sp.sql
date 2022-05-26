DELIMITER //
CREATE PROCEDURE BillPartisanship()
BEGIN
    DECLARE loop_exit BOOLEAN DEFAULT FALSE;
    DECLARE varVotePercentage DOUBLE;
    DECLARE currentVotePercentage DOUBLE;
    DECLARE varCurrentBill INT;
    DECLARE varParty VARCHAR(255);
    DECLARE varSenatorCount DOUBLE;
    DECLARE cur CURSOR FOR (SELECT DISTINCT BillID, PartyName, senCount
                            FROM (SELECT PartyName, COUNT(Senators.SenatorID) as senCount
                            FROM Senators, AffiliatedTo
                            WHERE Senators.SenatorID = AffiliatedTo.SenatorID
                            GROUP BY PartyName
                            HAVING senCount > 0) as e, Vote);
                            
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET loop_exit = TRUE;
    
    DROP TABLE IF EXISTS BillMajorityParty;
    CREATE TABLE BillMajorityParty(
        BillId INTEGER NOT NULL,
        PartyName VARCHAR(255) NOT NULL,
        VotePercentage DOUBLE,
        PRIMARY KEY(BillId, PartyName)
    );
    
    OPEN cur;
    loop1 : LOOP
        FETCH cur INTO varCurrentBill, varParty, varSenatorCount;
        IF loop_exit THEN
            LEAVE loop1;
        END IF;
        
            SET varVotePercentage = (SELECT count(Senators.SenatorID) as votes 
            FROM Vote, Senators, AffiliatedTo
            WHERE (VoteType BETWEEN 4 AND 6) AND PartyName = varParty AND BillID = varCurrentBill 
            AND Vote.SenatorID = Senators.SenatorID AND Vote.SenatorID = AffiliatedTo.SenatorID 
            GROUP BY BillID)/varSenatorCount;
            
            SET currentVotePercentage = (SELECT VotePercentage FROM BillMajorityParty WHERE BillID = varCurrentBill AND PartyName = varParty);
            
            INSERT INTO BillMajorityParty VALUES (varCurrentBill, varParty, ROUND(varVotePercentage, 3));
        
    END LOOP loop1;
    CLOSE cur;
    
    SELECT * FROM BillMajorityParty LIMIT 300;
    
END//
DELIMITER ;