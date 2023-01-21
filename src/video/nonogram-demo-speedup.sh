#!/bin/bash

ffmpeg -y -i nonogram-demo.mov -filter:v "setpts=0.10*PTS" -crf 30 nonogram-demo-speedup.mp4
