# An issue tracking application developed for web and mobile devices.

## Steps for local setup:
Please ensure that you have some verion of node installed on your machine. This project is using v18.17.0 but any recent version should be fine.
Once that has been verified you can run:
```
npm install
```
to install all required project dependencies.

Once that has been created, you will have to create a .env file in the root of the project folder. This will be where we store the credentials to the supabase server that is powering the backend of this application. 

Once those two steps are completed you can run:

```
npm run serve
```
To run the application on your localhost. If page is blank you can view the `main.js` file in the root to test out different routes

***

#
#
#
#

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
