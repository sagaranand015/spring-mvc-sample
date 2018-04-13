#! /bin/bash

#echo $1

mvn clean install
rm -rf $2/webapps/$1
cp target/$1 $2/webapps
tail -f $2/logs/catalina.out
