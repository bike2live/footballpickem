CREATE TABLE `schedule` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `week` int(11) NOT NULL,
  `opponent` varchar(64) NOT NULL,
  `location` varchar(64) NOT NULL DEFAULT '',
  `stadiumName` varchar(64) NOT NULL DEFAULT '',
  `homeoraway` tinyint(1) NOT NULL DEFAULT '1',
  `byuScore` int(10) unsigned DEFAULT NULL,
  `oppScore` int(10) unsigned DEFAULT NULL,
  `gameDate` datetime NOT NULL,
  `closeDate` datetime NOT NULL,
  `showUntilDate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1
