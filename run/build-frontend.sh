#!/bin/bash

if [ $1 = -webpack ]; then 
   echo "Started building WEBPACK FRONT-END"
   echo "Moving into frontend_webpack directory"
   cd ..
   cd frontend_webpack 
   ls
   echo "Check if node_modules directory exist"   
   if [ -d node_modules ]; then
      echo "node_modules directory exist (npm install)"
   else
      echo "node_modules not installed"
      echo "runing npm install command" 
      npm install
   fi
   

   if [ -d typings ]; then
      echo "typings directory exist (typings install)"
   else
      echo "typings not installed"
      echo "runing typings install command" 
      typings install
   fi
   if [ $2 = -watch ]; then
      echo "running development watch process"
      npm run start
   else
      echo "BUILDING..."
      npm run build
   fi    

   
elif [ $1 = -systemjs ]; then 
   echo "Started building SYSTEMJS FRONT-END"
    echo "Moving into frontend_systemjs directory"
   cd ..
   cd frontend_systemjs 
   ls
   echo "Check if node_modules directory exist"   
   if [ -d node_modules ]; then
      echo "node_modules directory exist (npm install)"
   else
      echo "node_modules not installed"
      echo "runing npm install command" 
      npm install
   fi
   

   if [ -d typings ]; then
      echo "typings directory exist (typings install)"
   else
      echo "typings not installed"
      echo "runing typings install command" 
      typings install
   fi
   if [ $2 = -watch ]; then
      echo "running development watch process"
      gulp watch
   else
      echo "running gulp build command"
      echo "BUILDING..."
      gulp build
   fi
fi



