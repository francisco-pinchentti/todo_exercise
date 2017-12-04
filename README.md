README.md
=========

The project has been divided in two subdirectories, one for the api and another for the ui.

## External dependecies

### API external dependencies

* an sql server (like mysql or mariadb)
* nodejs v8.9.1

### UI external dependencies

* angular-cli globally installed (added to ui packaje.json)
* nodejs v8.9.1

## Installation

Both ui and api can be installed by entering *npm install* on their respectives folders.
The simplest way to install is by running the install script.

### Install Script

An install script called *install.sh* is provided to run the 3 steps noted below.

### Manually

#### API

```bash
cd api
npm install
```

#### Create a user and a db for the api:

```sql
CREATE USER 'mdev'@'localhost' IDENTIFIED BY 'mdev';
CREATE DATABASE 'mdev_api';
GRANT ALL ON mdev_api.* TO 'mdev'@'localhost';
```

##### custom database setup

By default, the api uses a database called mdev_api along with a user mdev with a password.
If you want to change either database, username or password this can be done by editing *api/config.json*, sequelize key.

#### UI

```bash
cd ui
npm install
```

## Running

```bash
cd api
npm start
```
This runs the api.

```bash
cd ui
npm start
```
This starts up the ui dev server listening on port 4200.

### Users and logging in

A couple of users have been created: john@doe.com with password 12345 and jane@doe with password 54321.
New ones can be created on the users table in the database.
