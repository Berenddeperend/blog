#!/bin/bash

ffmpeg -y -i picross-agression.MOV -filter:v scale=-1:723 -crf 25 picross-agression-minified.mp4 