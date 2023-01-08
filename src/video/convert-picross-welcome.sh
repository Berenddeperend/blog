#!/bin/bash

ffmpeg -y -i picross-welcome.mov -filter:v "crop=940:940:950:250" picross-welcome-minified.mp4