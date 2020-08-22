# Description

A compilation of small node + express + react projects.  
Includes:   
- Wolt App - A restaurant lister and list sorter done as a part of the application process for Wolt's summer internship.  Available on [heroku](https://roninreactprojs.herokuapp.com/wolt).  
- Eficode App -  A public transport route finding app that shows you between one and three ways of getting to the Eficode offices in Helsinki. Done as a part of the application process for Eficode's summer internship.  Available on [heroku](https://roninreactprojs.herokuapp.com/eficode).  
- Fitness App - A compilation of helpful tools to help you in physical training. Currently includes a timer and a weight calculator. Done as a part of the university course 'Fullstack web sovellus harjoitustyö'. **WIP**    
- Dyslexia App - An app that is basically a reader, where you can alter the text's font, spacing, colors etc. Also uses the Web Speech API and the Speech Synthesis API to enable speech-to-text and text-to-speech to make text-handling easier.

# How to use

## Cloud  

This app is available on [heroku](https://roninreactprojs.herokuapp.com/)

## Locally
 
1. Clone this github repo onto a directory on your computer  
  
git clone https://github.com/RoniNiklas/randomreactprojs.git  
  
2. Install dependencies in the directory with  
  
yarn install 
  
3. Start the backend with  
  
yarn start  
  
4. The app is now available in your browser under localhost:5000  
5. When developing, start the React development server instead of the regular backend by going to the frontend folder with  
  
cd client  
  
6. and then installing the dependencies with  
  
yarn install  
  
7. and then starting the development server with  
   
yarn start  
  
8. The app is then available in your browser under localhost:3000  

## Docker
  
1. Pull the image from [Docker Hub](https://hub.docker.com/r/roniniklas/reactprojs) with  
  
docker pull roniniklas/reactprojs  
  
2. Start the container  
  
docker run -p 5000:5000 -d roniniklas/reactprojs   
  
3. The application is now available in in port 5000 under the IP that your docker uses  

## Attributions  
  
Uses the following items from external sources:   
*Whistle* by 16GStepankovaS   
Available: https://freesound.org/people/16GStepankovaS/sounds/499386/   
Licensed with: CC0 https://creativecommons.org/publicdomain/zero/1.0/  
