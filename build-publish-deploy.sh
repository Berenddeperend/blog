#!/bin/bash

npm run build
npm run publish

ssh pi@192.168.2.1 << EOF
  cd berendswennenhuis.nl; 
  ./update-static-websites.sh
  pwd
EOF