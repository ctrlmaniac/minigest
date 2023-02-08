#!/bin/sh

for d in clients/*;
do
  client="${d##*/}"

  rm -rfv minigest/src/main/resources/static/$client
  mkdir minigest/src/main/resources/static/$client
  mkdir minigest/src/main/resources/templates/$client

  cp -a $d/dist/$client/. minigest/src/main/resources/static/$client/
  cp -a $d/dist/index.html minigest/src/main/resources/templates/$client/index.html
done