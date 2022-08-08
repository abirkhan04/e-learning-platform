-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2022 at 10:10 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `javaworm_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `uri` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `lastModifiedAt` datetime DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `uri`, `title`, `description`, `author`, `lastModifiedAt`, `published`, `createdAt`, `updatedAt`) VALUES
(1, 'spring-cloud-netflix-eureka', 'Service Discovery with Spring Cloud Netflix Eureka', 'Service Discovery with Spring Cloud Netflix Eureka', 'Md Abir Khan', '2022-03-30 09:26:29', 1, '2022-03-30 09:26:29', '2022-03-30 09:26:29'),
(2, 'spring-security-xml', 'Securing Spring MVC Application Using XML Configuration', 'Securing Spring MVC Application Using XML Configuration', 'Md Abir Khan', '2022-03-30 09:47:22', 1, '2022-03-30 09:47:22', '2022-03-30 09:47:22'),
(3, 'spring-security-remember-me', 'Remember-me Implementation in Spring Security', 'Remember-me Implementation in Spring Security', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(4, 'sso-using-github', 'Single Sign-on Using GitHub', 'Single Sign-on Using GitHub', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(5, 'spring-method-security', 'Introduction to Spring Method Security', 'Introduction to Spring Method Security', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(6, 'spring-cloud-config', 'A Short Discussion on Spring Cloud Config', 'A Short Discussion on Spring Cloud Config', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(7, 'spring-data-get-started', 'Get Started with Spring Data', 'Get Started with Spring Data', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(8, 'spring-boot-data-jpa', 'The CRUD in Spring Boot Data JPA', 'The CRUD in Spring Boot Data JPA', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(9, 'spring-webflux-intro', 'Introduction to Spring Webflux', 'Introduction to Spring Webflux', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(10, 'crud-spring-webflux', 'A REST Application Performing CRUD in Spring Webflux', 'A REST Application Performing CRUD in Spring Webflux', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(11, 'webfilter-in-webflux', 'Configuring WebFilter in WebFlux Application', 'Configuring WebFilter in WebFlux Application', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(12, 'rest-crud-in-webflux-functional', 'Implementing REST Crud in Webflux Functional Programming Model', 'Implementing REST Crud in Webflux Functional Programming Model', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(13, 'spring-boot-quickinfo-part1', 'Quick and Necessary Information on Spring Boot: Part-I', 'Quick and Necessary Information on Spring Boot: Part-I', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(14, 'spring-boot-quickinfo-part2', 'Quick and Necessary Information on Spring Boot: Part-II', 'Quick and Necessary Information on Spring Boot: Part-II', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(15, 'spring-boot-quickinfo-part3', 'Quick and Necessary Information on Spring Boot: Part-III', 'Quick and Necessary Information on Spring Boot: Part-III', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(16, 'spring-boot-quickinfo-part4', 'Quick and Necessary Information on Spring Boot: Part-IV', 'Quick and Necessary Information on Spring Boot: Part-IV', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(17, 'spring-cloud-dataflow-intro', 'An Introduction To Spring Cloud Data Flow', 'An Introduction To Spring Cloud Data Flow', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(18, 'spring-boot-security-with-mysql', 'Configuring Database Driven Spring BootSecurity', 'Configuring Database Driven Spring BootSecurity', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(19, 'spring-boot-actuator', 'Introducing Spring Boot Actuator', 'Introducing Spring Boot Actuator', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(20, 'spring-cloud-hystrix', 'A Short Discussion on Spring Cloud Hystrix', 'A Short Discussion on Spring Cloud Hystrix', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(21, 'spring-cloud-netflix-ribbon', 'Client Side Load Balancing Using Spring Cloud Netflix Ribbon', 'Client Side Load Balancing Using Spring Cloud Netflix Ribbon', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(22, 'spring-cloud-batch', 'Introduction to Spring Cloud Batch', 'Introduction to Spring Cloud Batch', 'Md Abir Khan', '2022-03-30 09:48:45', 1, '2022-03-30 09:48:45', '2022-03-30 09:48:45'),
(23, 'state-machine-intro-with-spring-boot', 'Configuring State Machine with Spring Boot', 'Configuring State Machine with Spring Boot', 'Md Abir Khan', '2022-03-30 10:10:32', 1, '2022-03-30 10:10:32', '2022-03-30 10:10:32'),
(24, 'factory-pattern-javascript', 'The Factory Pattern in Javascript', 'The Factory Pattern in Javascript', 'Md Abir Khan', '2022-04-14 10:38:04', 1, '2022-04-14 10:38:04', '2022-04-14 10:38:04'),
(25, 'async-await', 'Mastering Javascript Async-await', 'Mastering Javascript Async-await', NULL, '2022-04-14 10:40:19', 1, '2022-04-14 10:40:19', '2022-04-14 10:40:19'),
(26, 'iterable-and-generator', 'Iterable and Generator in ES6', 'Iterable and Generator in ES6', 'Md Abir Khan', '2022-04-14 10:42:20', 1, '2022-04-14 10:42:20', '2022-04-14 10:42:20'),
(27, 'angular-data-sharing', 'Data Sharing between Angular Components', 'Data Sharing between Angular Components', 'Md Abir Khan', '2022-04-14 10:43:31', 1, '2022-04-14 10:43:31', '2022-04-14 10:43:31'),
(28, 'simple-state-management', 'Simple State Management in Angular', 'Simple State Management in Angular', 'Md Abir Khan', '2022-04-14 10:45:01', 1, '2022-04-14 10:45:01', '2022-04-14 10:45:01'),
(29, 'angular-directives', 'Angular Directive Description with Examples', 'Angular Directive Description with Examples', 'Md Abir Khan', '2022-04-14 10:46:10', 1, '2022-04-14 10:46:10', '2022-04-14 10:46:10'),
(30, 'rxjs-ten-operators', 'RxJs Ten Operators with Their Use Cases', 'RxJs Ten Operators with Their Use Cases', 'Md Abir Khan', '2022-04-14 10:48:09', 1, '2022-04-14 10:48:09', '2022-04-14 10:48:09'),
(31, 'dom-manipulation-angular', 'DOM Manipulation in Angular Components', 'DOM Manipulation in Angular Components', 'Md Abir Khan', '2022-04-14 10:49:59', 1, '2022-04-14 10:49:59', '2022-04-14 10:49:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
