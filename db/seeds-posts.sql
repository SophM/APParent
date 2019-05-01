USE apparentDB;

INSERT INTO posts (title, description, category, createdAt, updatedAt, parentId)

VALUES
("Votre avis!", "Eh je pense que les enfants doivent aller au lit vers 20h! Q'en pensez-vous ?", "Question", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 3),
("Available", "I am free tomorrow around 3pm if someone needs help!", "Offer", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 2),
("Things to do this weekend", "Check this link out if you want to have fun this weekend with your kids: https://zenhabits.net/100-ways-to-have-fun-with-your-kids-for/", "Event", "2019-04-12 03:31:57", "2019-04-12 03:31:57", 1);