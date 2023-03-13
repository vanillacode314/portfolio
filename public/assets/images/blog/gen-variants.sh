#!/bin/sh

FILE="$1"
convert -resize 1024x $FILE ${FILE%%.*}.jpg
convert -resize 1024x $FILE ${FILE%%.*}.png
