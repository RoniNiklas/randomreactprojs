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
5. When developing, start the development server instead of the regular backend by going to the frontend folder with  
  
cd client  
  
and then starting the development server with  
   
yarn start  
  
6. The app is then available in your browser under localhost:3000  

## Docker
  
1. Pull the image from [Docker Hub](https://hub.docker.com/r/roniniklas/reactprojs) with  
  
docker pull roniniklas/reactprojs  
  
2. Start the container  
  
docker run -p 5000:5000 -d roniniklas/reactprojs   
  
3. The application is now available in in port 5000 under the IP that your docker uses  
