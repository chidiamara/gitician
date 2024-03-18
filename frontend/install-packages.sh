#!/bin/bash

# Install dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
npm install react-router-dom react-hot-toast react-icons