DROP SCHEMA IF EXISTS `tomorrow`;

CREATE SCHEMA `tomorrow`;

USE `tomorrow` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tomorrow`.`user` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `surname` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `username` VARCHAR(255) DEFAULT NULL,
  `password` VARCHAR(255) DEFAULT NULL,
  `role` VARCHAR(255) DEFAULT NULL,
  `password` VARCHAR(255) DEFAULT NULL,
  `enabled` BOOL DEFAULT 0,
  `locked` BOOL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tomorrow`.`task` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `priority` TINYINT(1) DEFAULT 1 CHECK (`priority` > 0 AND `priority` < 4),
  `title` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `done` BOOL DEFAULT 0,
  `active` BOOL DEFAULT 0,
  `persistent` BOOL DEFAULT 0,
  `date_created` DATETIME(6) DEFAULT NULL,
  `date_expire` DATETIME(6) DEFAULT NULL,
  `user_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

-- INSERT INTO user (name, surname, email, password)
-- VALUES ('BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript',
-- 'assets/images/products/placeholder.png'
-- ,1,100,19.99,1, NOW());

-- INSERT INTO user (name, surname, email, password)
-- VALUES ('Maxime', 'Dillion', 'maximedill@hotmail.com', 'pwd');

