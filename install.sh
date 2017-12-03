#!/bin/bash

API_PATH='./api'
UI_PATH='./ui'

(echo 'installing api'; npm --prefix $API_PATH install $API_PATH) &&
(echo 'installing ui'; npm --prefix $UI_PATH install $UI_PATH) &&
echo 'Enter a valid sql username -it will be used only during this installation-'
read DB_USERNAME
mysql -u $DB_USERNAME -p < ./scripts/setup_db.sql
