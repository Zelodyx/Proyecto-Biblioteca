-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: Library
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `Books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Books` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Author` varchar(255) NOT NULL,
  `Editorial` varchar(255) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Pages` int NOT NULL,
  `Stock` char(1) NOT NULL,
  `Joined` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
INSERT INTO `Books` VALUES (1,'La conjura de los necios','TOOLE, John Kennedy','Anagrama','Humor',360,'N','2022-12-09 06:00:58','2022-12-11 21:36:01'),(2,'La casa de los espíritus','ALLENDE, Isabel','Plaza & Janés','Novela',528,'N','2022-12-09 06:33:48','2022-12-11 21:36:11'),(3,'Teoría y métodos de investigación social, 2da edición, traducción de Edmundo Fuenzalida Faivovich','GALTUNG, Johan','Editorial Universitaria','Investigaciones Sociologicas',603,'S','2022-12-09 06:37:43','2022-12-09 00:37:43'),(4,'Eat What You Want and Die Like a Man','GRAHAM, Steve','Citadel Press Books','Humor',290,'S','2022-12-09 06:39:27','2022-12-09 00:39:27'),(5,'El tío Petros y la conjetura de Goldbach, traducción de María Eugenia Ciocchini','DOXIADIS, Apóstolos','Zeta Bolsillo','Matemáticas',172,'S','2022-12-09 06:41:47','2022-12-09 00:41:47'),(6,'Los objetos fractales. Forma, azar y dimensión, 4ta edición','MANDELBROT, Benoît','Tusquets','Matemáticas',213,'S','2022-12-09 06:43:26','2022-12-09 00:43:26'),(7,'Una didáctica fundada en la psicología de Jean Piaget, 2da edición','AEBLI, Hans','Kapelusz','Psicología',220,'S','2022-12-09 06:45:38','2022-12-09 00:45:38'),(8,'La psicología del adolescente y la educación','DE BARTOLOMEIS, Francesco','Ediciones Roca','Psicología',155,'S','2022-12-09 06:46:29','2022-12-09 00:46:29'),(9,'Acerca de la globalización de la agricultura. Territorios, empresas y desarrollo local en América Latina','CAVALCANTI, José; NEIMAN, Guillermo','Ciccus','Agricultura',233,'S','2022-12-09 06:48:10','2022-12-09 00:48:10'),(10,'Globalización, narcotráfico y violencia. Siete ensayos sobre Colombia','TOKATLIAN, Jorge','Norma','Ensayos',120,'S','2022-12-09 06:51:12','2022-12-09 00:51:12'),(11,'Desarrollo social y de la personalidad. En: Palacios, J., Marchesi, A. y Coll, C. (comps.), Desarrollo psicológico y educación','LÓPEZ, Felicitas','Alianza','Psicología',673,'S','2022-12-09 06:53:40','2022-12-09 01:00:42'),(12,'El niño preescolar de 2 a 5 años, 2da edición','STONE, Jane; CHURCH, Joyce','Hormé','Psicología',145,'S','2022-12-09 06:55:38','2022-12-09 00:55:38'),(13,'La evaluación de la normalidad en la niñez. En: Normalidad y patología en la niñez','FREUD, Anna','Paidós','Psicología',52,'S','2022-12-09 06:56:47','2022-12-09 00:59:59'),(14,'Psicoanálisis del Jardín de Infantes y la educación del niño','FREUD, Anna','Paidós','Psicología',390,'S','2022-12-09 06:57:20','2022-12-09 00:57:20'),(15,'La sociedad como realidad objetiva. En: La construcción social de la realidad','BERGER, Peter; LUCKMANN, Timothy','Amorrortu','Psicología',36,'S','2022-12-09 07:02:03','2022-12-09 01:02:03');
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customers`
--

DROP TABLE IF EXISTS `Customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customers` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Last_name` varchar(255) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Age` int NOT NULL,
  `Mail` varchar(255) NOT NULL,
  `Telephone` char(10) DEFAULT NULL,
  `Address` varchar(255) NOT NULL,
  `Active` char(1) NOT NULL,
  `Joined` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customers`
--

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;
INSERT INTO `Customers` VALUES (1,'Kley','Alfonso','-',22,'kletla@outlook.es','2884759865','Galeana#550','S','2022-12-09 17:56:46','2022-12-09 12:06:20'),(2,'Manuel','Fernández','M',21,'raymundold@outlook.es','2871384665','Solidaridad#13','S','2022-12-09 17:57:07','2022-12-11 21:34:59'),(3,'Daniel','Vega','M',24,'dani@outlook.es','2877832035','Libertad#13','S','2022-12-12 03:34:04','2022-12-11 21:34:04');
/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Loans`
--

DROP TABLE IF EXISTS `Loans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Loans` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Book_Title` varchar(255) NOT NULL,
  `Customer_Name` varchar(255) NOT NULL,
  `Customer_Last_name` varchar(255) NOT NULL,
  `Customer_Mail` varchar(255) NOT NULL,
  `Active` char(1) NOT NULL,
  `Start` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Returned` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Loans`
--

LOCK TABLES `Loans` WRITE;
/*!40000 ALTER TABLE `Loans` DISABLE KEYS */;
INSERT INTO `Loans` VALUES (1,'La conjura de los necios','Kley','Alfonso','kletla@outlook.es','N','2022-12-11 23:17:12','2022-12-11'),(2,'Teoría y métodos de investigación social, 2da edición, traducción de Edmundo Fuenzalida Faivovich','Kley','Alfonso','kletla@outlook.es','N','2022-12-11 23:17:41','2022-12-13'),(3,'La conjura de los necios','Manuel','Fernández','raymundold@outlook.es','N','2022-12-12 03:20:59','2022-12-11'),(4,'Eat What You Want and Die Like a Man','Manuel','Fernández','raymundold@outlook.es','N','2022-12-12 03:32:29','2022-12-13'),(5,'Eat What You Want and Die Like a Man','Manuel','Fernández','raymundold@outlook.es','N','2022-12-12 03:32:30','2022-12-11'),(6,'Eat What You Want and Die Like a Man','Manuel','Fernández','raymundold@outlook.es','S','2022-12-12 03:38:47',NULL);
/*!40000 ALTER TABLE `Loans` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-11 21:43:52
