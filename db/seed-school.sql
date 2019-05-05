USE apparentDB;


INSERT INTO schools (name,streetAddress, city, state, zipcode, createdAt, updatedAt)
VALUES
( "Holy Name School ", "1560 40th Ave", "San Francisco", "CA", 94122, "2019-04-12 03:31:57", "2019-04-12 03:31:57") , 
( "Presidio Knolls School ", "250 10th St", "San Francisco", "CA", 94103, "2019-04-12 03:31:57", "2019-04-12 03:31:57"), 
( "Stratford School - San Francisco ", "301 De Montfort Ave", "San Francisco", "CA", 94112, "2019-04-12 03:31:57", "2019-04-12 03:31:57"); 

INSERT INTO parentSchools (createdAt, updatedAt, parentId, schoolId)
VALUES 
("2019-04-12 03:31:57", "2019-04-12 03:31:57", 1 ,1 ), 
("2019-04-12 03:31:57", "2019-04-12 03:31:57", 1 ,3 ), 
("2019-04-12 03:31:57", "2019-04-12 03:31:57", 2 ,2 ), 
("2019-04-12 03:31:57", "2019-04-12 03:31:57", 3 ,3 ), 
("2019-04-12 03:31:57", "2019-04-12 03:31:57", 2 ,3 ) ;