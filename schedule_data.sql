-- MySQL dump 10.13  Distrib 5.6.20, for osx10.7 (x86_64)
--
-- Host: localhost    Database: football
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,1,'Nebraska','Lincoln, NE','Memorial Stadium',0,15,10,'2015-09-05 13:30:00','2015-09-04 12:00:00','2015-09-07 12:00:00'),(14,2,'Boise State','Provo, UT','LaVell Edwards Stadium',1,NULL,NULL,'2015-09-12 20:15:00','2015-09-13 06:00:00','2015-09-13 06:00:00'),(15,3,'UCLA','Pasadena, CA','Rose Bowl',0,NULL,NULL,'2015-09-19 19:30:00','2015-09-20 06:00:00','2015-09-20 06:00:00'),(16,4,'Michigan','Ann Arbor, MI','Michigan Stadium',0,NULL,NULL,'2015-09-26 18:00:00','2015-09-27 06:00:00','2015-09-27 06:00:00'),(17,5,'Connecticut','Provo, UT','LaVell Edwards Stadium',1,NULL,NULL,'2015-10-02 20:15:00','2015-10-04 06:00:00','2015-10-04 06:00:00'),(18,6,'East Carolina','Provo, UT','LaVell Edwards Stadium',1,NULL,NULL,'2015-10-10 18:00:00','2015-10-11 06:00:00','2015-10-11 06:00:00'),(19,7,'Cincinnati','Provo, UT','LaVell Edwards Stadium',1,NULL,NULL,'2015-10-16 18:00:00','2015-10-17 06:00:00','2015-10-17 06:00:00'),(20,8,'Wagner','Provo, UT','LaVell Edwards Stadium',1,NULL,NULL,'2015-10-24 13:00:00','2015-10-25 06:00:00','2015-10-25 06:00:00'),(21,10,'San Jose State','San Jose, CA','Spartan Stadium',0,NULL,NULL,'2015-11-06 21:30:00','2015-10-25 06:00:00','2015-10-25 06:00:00'),(22,11,'Missouri','Kansas City, MO','Arrowhead Stadium/Kansas City Cheifs',0,NULL,NULL,'2015-11-14 18:00:00','2015-11-15 05:00:00','2015-11-15 05:00:00'),(23,12,'Fresno State','Provo, UT','LaVell Edwards Stadium',1,NULL,NULL,'2015-11-21 18:00:00','2015-11-22 06:00:00','2015-11-22 06:00:00'),(24,13,'Utah State','Logan, UT','Maverik Stadium',0,NULL,NULL,'2015-11-28 13:30:00','2015-11-29 06:00:00','2015-11-29 06:00:00');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-01 22:18:42
