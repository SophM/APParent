USE apparentDB;

INSERT INTO comments (description, createdAt, updatedAt, postId, parentId)

VALUES
("Je suis tout à fait d'accord avec toi!", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 1, 1),
("Oui moi aussi !", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 1, 3),
("Great! I would need someone to watch my kid from 4 to 6pm today. Would that work for you?", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 2, 1),
("Sounds good!", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 2, 2),
("Thanks!", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 3, 3);