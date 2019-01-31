<h1 align="center">
  React/Redux, Saga
</h1>


## 🍔 Install project

1.  **Start runing project.**

    Navigate into your new site’s directory and start it up. The project will be running on port `3000`

    ```sh
    cd <React_Redux_Saga>
    npm i
    npm start
    ```
    The project will open on [http://localhost:3000/](http://localhost:3000/)
   

## 🙈 Crucial files?

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── data.csv
    │   ├── favicon.ico
    │   ├── img
    │   │   ├── avatar.png
    │   │   └── logo.svg
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── actions
        │   └── file-upload
        │       └── index.js
        ├── assets
        │   └── styles
        │       ├── _bootstrap.scss
        │       ├── _colors.scss
        │       ├── _common.scss
        │       ├── _fonts.scss
        │       └── master.scss
        ├── components
        │   ├── app
        │   │   ├── index.js
        │   │   └── styles.scss
        │   └── file-upload
        │       ├── dropzone.js
        │       ├── files-list.js
        │       ├── index.js
        │       └── styles.scss
        ├── const
        │   ├── actions.js
        │   └── api.js
        ├── containers
        │   └── file-upload
        │       ├── dropzone.js
        │       ├── files-list.js
        │       └── index.js
        ├── index.js
        ├── reducers
        │   ├── file-upload
        │   │   └── index.js
        │   └── index.js
        ├── sagas
        │   ├── file-upload
        │   │   └── index.js
        │   └── index.js
        ├── serviceWorker.js
        ├── services
        │   └── api.js
        └── store
            └── index.js
