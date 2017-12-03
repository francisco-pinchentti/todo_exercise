CREATE USER 'mdev'@'localhost' IDENTIFIED BY 'mdev';
CREATE DATABASE 'mdev_api';
GRANT ALL ON mdev_api.* TO 'mdev'@'localhost';
