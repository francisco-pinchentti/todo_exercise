#!/bin/bash

API_PATH = './api'
UI_PATH = './ui'

(npm --prefix  $API_PATH install $API_PATH) &
(npm --prefix  $UI_PATH install $UI_PATH)
wait
