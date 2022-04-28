### Getting started

First things first, you'll need to fork or clone this repository, and run the install command of your choosing (preferrably Yarn):

```
yarn install

// or

npm install
```
And that's really about it (see, I said it was simple!). To fire up the server and have it do stuff, you'll need to start it with the familiar command:

```
yarn start

// or

npm start
```

### Accessing the server and returning data

The server should be running by now, and you can visit `http://localhost:3001` to see it in action. 

By default, it doesn't return a great deal, but if you visit `http://localhost:3001/wallet` -- which will automatically issue a GET request to our running API server -- you'll see a simple JSON object populated with some dummy wallet data.