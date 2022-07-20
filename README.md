# create-nodets-app
My ([@mnrendra](https://github.com/mnrendra)) initial `NodeJs` project template using `TypeScript`.

### 1. Clone
```
git clone git@github.com:mnrendra/create-nodets-app.git
```

### 2. Install
We need `yarn` to run it. So if you don't have it, please install it first by running `npm i -g yarn`.
```
yarn install
```

### 3. Set Environment
Add `.env` file on this root directory by running `nano ./.env` and add the variables, at least:
```
GRPC_PORT=50051
PORT=8080
DB_URL=mongodb://127.0.0.1/example
```

### 4. Hack
Let's start coding from `./src/index.ts`  
If you are using VisualStudio Code, run it:
```
code .
```

### 5. Run MongoDB server
Make sure you have MongoDB server (`mongod`) run on your local machine.
```
mongod
```

### 6. Run
```
yarn start
```

#### Happy Coding !
