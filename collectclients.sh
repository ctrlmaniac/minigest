#!/bin/sh

for d in clients/*;
do
  client="${d##*/}"

  rm -rfv server/src/main/resources/static/$client
  mkdir server/src/main/resources/static/$client

  cp -a $d/dist/$client/. server/src/main/resources/static/$client/
  cp -a $d/dist/index.html server/src/main/resources/templates/$client/index.html
done