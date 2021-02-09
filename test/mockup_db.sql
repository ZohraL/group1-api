
DROP TABLE IF EXISTS `movies_test`;

CREATE TABLE `movies_test` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `realisateur` varchar(255) DEFAULT NULL,
  `annee` int DEFAULT NULL
  PRIMARY KEY (`id`)
)

LOCK TABLES `movies_test` WRITE;

INSERT INTO `users` (`id`, `nom`, `type`, `realisateur`, `annee`)
VALUES
	(1,"souvient toi de l'été dernier", 'horreur', 'labobo', 1995),
	(2,"retour vers le futur", 'fantaisie', 'labobo', 1995),
    (3,"titanic", 'drame', 'zozette la chouette', 1991),
    (4,"zozette et bobi au ski", 'comedie', 'maxichoupi', 1867),

UNLOCK TABLES;