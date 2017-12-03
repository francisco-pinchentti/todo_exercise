LEEME.md
========

El proyecto está dividido en dos directorios: uno para la api y otro para la ui.

## Instalacion

Ambos se instalan ejecutando *npm install* en sus respectivos directorios.

```bash
cd api
npm install
```

```bash
cd ui
npm install
```

```sql
CREATE USER 'mdev'@'localhost' IDENTIFIED BY 'mdev';
CREATE DATABASE 'mdev_api';
GRANT ALL ON mdev_api.* TO 'mdev'@'localhost';
```

### Ejecutando

```bash
cd api
npm start
```
Esto deja corriendo el backend.

```bash
cd ui
npm start
```
Esto levanta la web en el puerto xxxxx.

### Notas de API

Dependencias externas:

* un servidor de sql (como mariaDB)
* nodejs v8.9.1

#### base de datos

La api utiliza una bd llamada mdev_api y un user y password 'mdev'.
Para utilizar otro se puede configurar el fichero *api/config.json* el objeto sequelize.

### Notas de UI

Dependencias externas:

* angular-cli instalado globalmente
* nodejs v8.9.1
