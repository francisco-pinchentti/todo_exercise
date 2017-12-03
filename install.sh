#!/bin/bash

API_PATH='./api'
UI_PATH='./ui'

(echo 'installing api'; npm --prefix $API_PATH install $API_PATH) &&
(echo 'installing ui'; npm --prefix $UI_PATH install $UI_PATH) &&
echo 'Ingrese un user valido de sql (solo se usara en la instalacion)'
read DB_USERNAME
mysql -u $DB_USERNAME -p < ./scripts/setup_db.sql
