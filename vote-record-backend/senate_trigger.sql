DELIMITER //
CREATE TRIGGER SenatorAgeTrig AFTER INSERT ON Senators FOR EACH ROW
BEGIN
    SET @birthYear = (SELECT BirthYear FROM Senators WHERE SenatorID = new.SenatorID); 
    IF (@birthYear) < 1992 THEN
        INSERT INTO AffiliatedTo VALUES (new.SenatorID, "Independent");
    END IF;
END//
DELIMITER ;