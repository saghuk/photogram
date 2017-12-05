## React Assignment

Open terminal and run.
```
npm install 
```

and then run webpack to create bundle file

```
webpack 
```


Open new terminal and run.
```
npm run api-server
```

runs the api server.<br> Open [http://localhost:8080](http://localhost:8080) to
view it in the browser.


Open new terminal and run.
```
npm ./client-server/clientApp.js
```
runs the client server.<br> Open [http://localhost:3000](http://localhost:3000) to
view it in the browser.

## endpoints

```
http://localhost:8080/api/photos         - returns list of photos
http://localhost:8080/api/comments/:code - returns comments for a photo identified by its photo code
```

## app working

1. app will have two views - Home View and Photo View
2. use `/api/photos` to populate the home page with photos
3. Photo View will show enlarged photo with comments on it

## final app

![Final App](https://i.imgur.com/KF0KExk.gif)

## requirements

1. create a components based app using React/Redux
2. app should be server-side rendered
3. Use webpack for bundling
4. Do your work in a git repository, and zip the folder to submit back.

## bonus points

1. unit tests
2. code is splitted based on routes, for example "home view" should not contain
   code belonging to "photo view"
y