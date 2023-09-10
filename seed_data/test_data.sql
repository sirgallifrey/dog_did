-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: dogdid
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('alwnowzsu8i8h5iupfvf9wkf4h','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-02-15 10:13:21','poop',NULL,NULL,'soft','Probably because of the bone they were eating'),('bidpacelh4lh4vl0r94kq550ww','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-01-10 10:13:21','food',NULL,32,'canned chicken',NULL),('djpa2y2n6d5n9uyx5kxfrb012r','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-02-10 10:13:21','medicine',NULL,1,'condotril','Had to mix with sausage so they would eat'),('eemudmvtyy2bqdum143v4mcqco','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-01-10 10:13:21','exercise',30,NULL,'catching ball',NULL),('geguuppg37kh7qvn8rx2uvh0j4','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-02-25 10:13:21','other',NULL,NULL,NULL,'They are feeling a bit down'),('he0s7kdwg1qzwg85fzkxc0awnx','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-04-01 10:13:21','weight',NULL,6,NULL,'New diet is slowly giving results'),('rr3vxrxe9kcqtg6q6ueivh001l','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-03-15 10:13:21','walk',120,5,NULL,'The park as sunny'),('te0psf7sl9my3oapskyc0m3h9y','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-02-25 22:13:21','pee',NULL,NULL,NULL,'On the couch...'),('xrljc9y0bmili6dideb17e1euw','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-02-25 10:13:21','water',NULL,NULL,NULL,'Finally!!'),('yge5r5xv7nvx8j8o4ef73sv9v4','ufizmqnkczhovljb0lhcpg952n','jq6m0tg9s0vv9gdp6rz1vnm1l3','2023-02-25 13:13:21','play',NULL,NULL,NULL,'They were running around the house');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pack_member`
--

LOCK TABLES `pack_member` WRITE;
/*!40000 ALTER TABLE `pack_member` DISABLE KEYS */;
INSERT INTO `pack_member` VALUES ('li69rdol9xth2yp5momaa67l9b','uh0v951kiytfzpmpbnziizwe6i','jq6m0tg9s0vv9gdp6rz1vnm1l3','owner');
/*!40000 ALTER TABLE `pack_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `packs`
--

LOCK TABLES `packs` WRITE;
/*!40000 ALTER TABLE `packs` DISABLE KEYS */;
INSERT INTO `packs` VALUES ('uh0v951kiytfzpmpbnziizwe6i','My Awesome Pack',NULL);
/*!40000 ALTER TABLE `packs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES ('ufizmqnkczhovljb0lhcpg952n','uh0v951kiytfzpmpbnziizwe6i','Chomsky','amarela e branco','xiuaua','2023-09-02 21:43:44','2023-09-10 10:59:38',NULL),('zruuh8pahz7aeqintexfd7x6bv','uh0v951kiytfzpmpbnziizwe6i','Amarelinha','amarela','mongrel','2023-09-02 21:43:44','2023-09-10 10:59:38',NULL);
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('jq6m0tg9s0vv9gdp6rz1vnm1l3','John Smith','test@example.com','$2b$12$.7Jyut7NtrULUhto0nltdeqx7qN54XxJBI/rwyuWyWxssiJmlNBw.','2023-09-10 10:59:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-10 13:03:12
