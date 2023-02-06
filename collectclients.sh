#!/bin/sh

for d in clients/*;
do
  client="${d##*/}"

  mkdir server/src/main/resources/static/$client
  cp -a $d/dist/$client/assets/. server/src/main/resources/static/$client/assets/
  cp -a $d/dist/index.html server/src/main/resources/static/$client
done