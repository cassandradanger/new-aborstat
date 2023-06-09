# new-aborstat
## About

abortion laws and policies can change quickly. i created this app to help people find reliable and up-to-date information by state. 

this projects utilizes an API provided by [Abortion Policy API](https://www.abortionpolicyapi.com/), [Vue.js](https://vuejs.org/) on the front end and [Node.js](https://nodejs.org/en) and [Express](https://expressjs.com/) on the back end.

future optimizations could include:
- testing
- move config info to a db
- ui component library/standard styling variables file
- additional info/map on how or where to get help/services
- updated styling

<img width="1073" alt="Screen Shot 2023-04-23 at 11 30 38 AM" src="https://user-images.githubusercontent.com/10237149/233852252-7421cd72-513a-4487-b943-d857a3745192.png">


## Project setup
you'll need to get an API key from [Abortion Policy API](https://www.abortionpolicyapi.com/), and save it to a `.env` file under the name `POLICY_API_KEY`

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Spin up the server
```
yarn run server
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
