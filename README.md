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
    
3. Link with parse:
    
    1. Install parse 

    ```
    sh <(curl -fsSL https://raw.githubusercontent.com/parse-community/parse-server/master/bootstrap.sh)
    sudo npm install -g mongodb-runner
    cd <parse_server_dir>
    mongodb-runner start
    npm start
    ```
    
    2. Install parse dashboard 
    
    ```
    npm install -g parse-dashboard
    ```
    You can launch the dashboard for an app with a single command by supplying an app ID, master key, URL, and name like this (http://localhost:4040) :
    
    ```
    parse-dashboard --appId yourAppId --masterKey yourMasterKey --serverURL "https://example.com/parse" --appName optionalName
    ```
    Original TUT: https://github.com/parse-community/parse-dashboard
    
    3. Use Parse SDK for your project. 
