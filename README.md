## Browser

This app is available on [heroku](https://roninreactprojs.herokuapp.com/)

## Locally
1. Clone this github repo onto a directory on your computer  
git clone https://github.com/RoniNiklas/randomreactprojs.git  
2. Install dependencies  
yarn install 
3. Start backend  
yarn start  
4. The app is now available in your browser under localhost:5000  
5. When developing, start the development server instead of the regular backend by going to client folder with  
cd client  
and then starting te development server with  
yarn start  

## Docker
1. Pull the image from Docker Hub  
docker pull roniniklas/reactprojs  
2. Start the container  
docker run -p 5000:5000 roniniklas/reactprojs   
3. The application is now available in port 5000 using your docker IP  
