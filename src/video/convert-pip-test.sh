#!/bin/bash

ffmpeg -y -i pip-test.mov -filter:v "setpts=0.05*PTS" pip-test-minified.mp4
