This project is try to make ExpressJS work with TypeScript follow MVC.

# How To Use? 

## Install dependencies:

1.Install TypeScript:
    
    
      npm install --save typescript
    
2. Install Express:
    
    ```
    npm install --save express
    ```
    
3. Install `es6-shim`
    
    ```
    npm install --save @types/express @types/es6-shim
    ```
    
4. Install `nodemon` 
    
    ```
    npm install -g nodemon
    npm install --save-dev nodemon
    ```
    
5. Install Pug 
    
    ```
    npm install pug --save
    ```
    
## How to run?

1. Run build TypeScript:
    At project folder:
    
    ```
    npm run tsc // build 1 time
    npm run tsc -- --watch // watch change to build 
    ```
    
  If success, your application will show `build` folder.
  
2. Run Express server:
  
    ```
    node build/server.js -> Run server 1 time, need to restart to apply change 
    nodemon build/server.js -> Watch change to restart server.
    ```
    
