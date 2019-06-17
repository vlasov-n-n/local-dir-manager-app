This project was test work

## Available Scripts
in the project directory, you can run:

Development:
```sh
$ npm install
$ npm run dev
```
Runs the app in the development mode.<br>

- Front-end [http://localhost:3000](http://localhost:3000)
- Back-end [http://localhost:5000/api](http://localhost:5000/api)

Run tests:
```sh
$ npm run tests:client
```
Runs client tests.<br>

## Project structure:
```sh
├─ api
│ ├─ controllers
│ │ └─ ...
│ ├─ helpers
│ │ └─ ...
│ ├─ routes
│ │ └─ ...
│ └─ index.js
├─ client
│ ├─ public
│ │ └─ ...
│ ├─ src
│ │ │ ├─ api
│ │ │ │ └─ ...
│ │ │ ├─ components
│ │ │ │ └─ ...
│ │ │ ├─ constants
│ │ │ │ └─ ...
│ │ │ ├─ containers
│ │ │ │ └─ ...
│ │ │ ├─ ducks
│ │ │ │ └─ ...
│ │ │ ├─ helpers
│ │ │ │ └─ ...
│ │ │ ├─ redux
│ │ │ │ └─ ...
│ │ │ └─ index.js
│ └─ package.json
├─ config
│ ├─ entities.js
│ ├─ env.js
│ ├─ colors.json
├─ opt
└─ └─ ...
```

## TODO
- [ ] Refactoring function _getAllDirectoryItems_
- [ ] Logger for API
