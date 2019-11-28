DROP DATABASE IF EXISTS userdb;
CREATE DATABASE userdb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE SCHEMA project2;

CREATE TABLE project2.`user` ( 
	user_id              int  NOT NULL  AUTO_INCREMENT,
	first_name           varchar(100)  NOT NULL  ,
	last_name            varchar(100)  NOT NULL  ,
	email                varchar(100)  NOT NULL  ,
	position             varchar(100)  NOT NULL  ,
	CONSTRAINT pk_user_user_id PRIMARY KEY ( user_id )
 ) engine=InnoDB;

CREATE TABLE project2.task ( 
	task_id              int  NOT NULL  AUTO_INCREMENT,
	user_id              int    ,
	task                 longtext  NOT NULL  ,
	priority             int  NOT NULL DEFAULT 1 ,
	due_date             date  NOT NULL  ,
	status               varchar(20)    ,
	CONSTRAINT pk_task_task_id PRIMARY KEY ( task_id )
 ) engine=InnoDB;

CREATE INDEX idx_task_user_id ON project2.task ( user_id );

ALTER TABLE project2.task ADD CONSTRAINT fk_task_user FOREIGN KEY ( user_id ) REFERENCES project2.`user`( user_id ) ON DELETE CASCADE ON UPDATE CASCADE;