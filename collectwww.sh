#!/bin/sh

rm server/src/main/resources/static/index.html
rm -rf server/src/main/resources/static/assets

cp -a www/dist/. server/src/main/resources/static/