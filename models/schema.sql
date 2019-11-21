DROP DATABASE IF EXISTS userdb;
CREATE DATABASE userdb;
DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS taskr_db;
CREATE DATABASE taskr_db;

USE taskr_db;

CREATE TABLE tasks(
    id int NOT NULL AUTO_INCREMENT,
    task_description VARCHAR(255) NOT NULL, 
    task_priority VARCHAR(50) NOT NULL,
    target_date DATE NOT NULL,
    developer_name VARCHAR(200),
    developer_notes VARCHAR(500),
    developer_duedate DATE,
    completion_date DATE,
    PRIMARY KEY(id)
)