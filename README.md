# Setup

### Install

1. Install a recent version of Node.js

    ```
    https://nodejs.org
    ```

2. Checkout this Git repository

    ```
    $ git checkout git@github.com:prospective/prospective-posting.git
    ```

3. Change directory to the cloned repository
4. Install NPM dependencies

    ```
    $ npm install
    ```
5. Open the project in your favorite IDE


### Run 

To run the app simply execute the following command from within the root directory of the cloned repository

```
$ npm start
```

When webpack finished building open your browser in [http://localhost:8080](http://localhost:8080)


Now any changes in the source code will trigger a live reload inside your browser.

# Develop

You should be familiar with a modern JavaScript project setup. Here are the most notable files and directories: 

```
.
+-- app // contains any code for the app
+-- assets // contains any images and icons
|   +-- images
|   +-- icons
+-- mocks // contains some mock data to simulate api requests
|   +-- posting.js
+-- snippets // some example HTML snippets for the posting
|   +-- ...
+-- styles // contains all stylesheets
|   +-- main.css
+-- index.html // main index.html
+-- index.ts // main index.ts if you prefer to use TypeScript
+-- index.js // main index.js if you prefer to use JavaScript
+-- package.json // NPM dependencies
+-- postcss.config.js // PostCSS configuration
+-- tsconfig.json // TypeScript configuration
+-- webpack.config.js // WebPack configuration

```

The project setup includes the following features:

1. You can use TypeScript or JavaScript/ES6. Whatever you feel more comfortable with.
2. PostCSS allows you to use all CSSNext features, with enabled autoprefixing. see also [http://cssnext.io/features](http://cssnext.io/features)
3. You can install any missing dependency or library using NPM. Whether it is a CSS dependency like bootstrap grid or JS / TS dependency like jQuery

# Goal

The goal is to work collaboratively on a simple job posting layout using most recent HTML/CSS/JS features. 
During the session we will discuss and talk about design and coding in general. To get us started with the task, we will have 
a visual design in InVision ready to be implemented. It is up to you to make the best of the posting. Depending on the 
progress we might get to some simple coding in JS or TS.    