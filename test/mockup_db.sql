
DROP TABLE IF EXISTS `movies_test`;

CREATE TABLE `MOVIE` (
  `id` int  PRIMARY KEY  NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `realisateur` varchar(255) DEFAULT NULL,
  `annee` int DEFAULT NULL
);

LOCK TABLES `MOVIE` WRITE;

INSERT INTO `MOVIE` (`nom`, `type`, `realisateur`, `annee`)
VALUES
	("souviens toi de l'été dernier", 'horreur', 'labobo', 1995),
	("retour vers le futur", 'fantaisie', 'labobo', 1995),
    ("titanic", 'drame', 'zozette la chouette', 1991),
    ("zozette et bobi au ski", 'comedie', 'maxichoupi', 1867);

UNLOCK TABLES;