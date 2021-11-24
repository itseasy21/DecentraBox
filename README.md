# Getting Started with DecentraBox

With DecentraBox files aren’t stored in centralized data centers— instead, they're encrypted, split into pieces, and distributed on a filecoin+ipfs network.

## Demo Link

Demo: https://main.d1duwthxt3y612.amplifyapp.com/

## Tech Stack

The following technologies were used to make this awesome product.

### EStuary (https://estuary.tech/)
Provides with direct access to deals on filecoin and storage of files on IPFS Network

### OrbitDB (https://github.com/orbitdb/orbit-db)
Provides Decentralised Database over IPFS.

### ReactJS
Provides the base framework to build client side operations.

### NodeJS + Sam CLI
Provides the cli operation to deploy the API Endpoints created in NodeJS to AWS Lambda + AWS API Gateway

## Infrastructure

### AWS Amplify
Used with CI/CD Setup in order to host application.

### Heroku
Used to deploy IPFS webrtc-star discovery server for DecentraBox.
Follow this guide for the steps: [https://suda.pl/free-webrtc-star-heroku/](https://suda.pl/free-webrtc-star-heroku/)

## Getting Started

1. To get started first clone the git repo
```git clone https://github.com/itseasy21/DecentraBox```

2. On one terminal we will deploy the backend APIs
* Install Sam Cli (https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) and configure it
* Now navigate to backeend-api directory and run `sam deploy --guided` and note the api endpoints

3. On another terminal we will run the application
* Update the API Endpoints in the following: `src/pages/ProcessLogin.tsx` & `src/pages/Dashboard.tsx`
* In the terminal run the following to install and start the application
```
yarn install
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
