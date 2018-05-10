# Lightweight NODE.JS MVC with MySQL

This is just a sample. No relations have with my current work or private project.



### Just light weight and mvc with mysql.

* I couldn't find so I made it.

## how to run

* set your dev db environment

* create db table (i will add this codes into setting file)

#

    Create table board (
    `idx` int not null auto_increment,
    `name` varchar(255),
    `pw` varchar(255),
    `subject` varchar(255),
    `content` text,
    `date` datetime,
    primary key (`idx`)
    )

* run script

#

    $ npm install

    $ npm start
