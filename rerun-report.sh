#!/bin/bash

currentDay=$(date +%Y-%m-%d)

echo "format(yyyy-mm-dd)" 
read -p "Enter your fromDate: " fromDate

dayParam=${fromDate:-$currentDay}

echo $dayParam

Pathcsv=$1

exec < "$Pathcsv"

read header

while IFS="," read -r rec_column1 rec_column2 rec_column3 
do 
  node "./main.js" "${rec_column1}" $fromDate $fromDate
done

