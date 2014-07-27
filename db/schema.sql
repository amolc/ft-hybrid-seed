-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2014 at 04:50 PM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `icefire`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_user`
--

CREATE TABLE IF NOT EXISTS `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin_user`
--

INSERT INTO `admin_user` (`id`, `name`, `password`, `email`) VALUES
(1, 'admin', '12345', 'shahzad@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category_description`
--

CREATE TABLE IF NOT EXISTS `tbl_category_description` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_category_description`
--

INSERT INTO `tbl_category_description` (`id`, `type_id`, `title`, `description`) VALUES
(1, 1, 'light alert', 'no light from 5 to 9 am'),
(2, 1, 'internet', 'no internet today night');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact_detail`
--

CREATE TABLE IF NOT EXISTS `tbl_contact_detail` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(20) NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `web_link` varchar(20) NOT NULL,
  `other_info` varchar(20) NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tbl_contact_detail`
--

INSERT INTO `tbl_contact_detail` (`contact_id`, `contact_name`, `phone_no`, `email`, `web_link`, `other_info`) VALUES
(1, 'association board', '03347268737', 'shahzad@gmail.com', 'shahzad@gmail.com', 'shahzad.fortsolution'),
(6, 'boss', '03347268737', 'shahzad@gmail', 'shahzad@fortsolution', 'all about other');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_housing_association`
--

CREATE TABLE IF NOT EXISTS `tbl_housing_association` (
  `housing_ass_id` int(11) NOT NULL AUTO_INCREMENT,
  `housing_ass_name` varchar(20) NOT NULL,
  `country_id` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `address` varchar(20) NOT NULL,
  `building_password` varchar(20) NOT NULL,
  `telephone_no` varchar(20) NOT NULL,
  PRIMARY KEY (`housing_ass_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `tbl_housing_association`
--

INSERT INTO `tbl_housing_association` (`housing_ass_id`, `housing_ass_name`, `country_id`, `m_id`, `address`, `building_password`, `telephone_no`) VALUES
(1, 'shahzad housing asso', 1, 1, 'kalm chook', 'shahzad1234', '03336320987'),
(7, 'Rissing satr', 3, 3, 'gulberg lahore', 'shahzad1234', '03347268737'),
(8, 'akmal housion associ', 1, 1, 'gulberg 3', '12345', '03456+'),
(9, 'garden housing ass', 0, 29, 'ss', 'admin', '03224454556'),
(10, 'shahzad housing asso', 0, 29, 'aaa', '123', '63224455');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_municipality`
--

CREATE TABLE IF NOT EXISTS `tbl_municipality` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `m_name` varchar(20) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `tbl_municipality`
--

INSERT INTO `tbl_municipality` (`m_id`, `m_name`, `state_id`) VALUES
(29, 'standard unip0n', 1),
(30, 'bahwalnager', 22),
(31, 'dddd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_newscat`
--

CREATE TABLE IF NOT EXISTS `tbl_newscat` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(20) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_newscat`
--

INSERT INTO `tbl_newscat` (`type_id`, `cat_name`) VALUES
(1, 'alert'),
(2, 'general info'),
(3, 'annual meeting'),
(4, 'celebrations'),
(5, 'other');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_state`
--

CREATE TABLE IF NOT EXISTS `tbl_state` (
  `state_id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(20) NOT NULL,
  `state_location` varchar(250) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `tbl_state`
--

INSERT INTO `tbl_state` (`state_id`, `state_name`, `state_location`) VALUES
(1, 'united state', 'abc   ..'),
(16, 'Juneau	', 'located in uk north'),
(18, 'kingdom king', 'located in uk'),
(22, 'Bahwalpur', 'located in south of punjab');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_submited_input`
--

CREATE TABLE IF NOT EXISTS `tbl_submited_input` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(20) NOT NULL,
  `type_of_input` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_submited_input`
--

INSERT INTO `tbl_submited_input` (`id`, `name`, `email`, `phone`, `description`, `image`, `type_of_input`) VALUES
(1, 'shahzad', 'shahzad@fortsolution', '03347268737', 'it is a description', 'image path', 'gerenal');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
