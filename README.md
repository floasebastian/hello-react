
# hello-react

A project to getting started with react.

## Running the project
Before running the project, do `npm install` to fetch the dependencies that will be stored in node_modules folder.
```
npm install
```
then run the `dev` script with `npm run`,
```
npm run dev
```
> the options are `dev`, `test`, and `release` (there's no difference at the moment)
then open your browser
```
http://localhost:1234/
```


## Step-By-Step Development
> This steps are process of creating this project.
### Preparing your first project

#### Install NodeJS
- Get the installer from this [NodeJS download link](https://nodejs.org/en/download/)
- Install the NodeJS
- Test your installation by checking npm path `where npm` and/or npm version `npm --version`
    ```cmd
    where npm
    npm --version
    ```
#### Prepare Your Npm Project
1. Provide and go to your project directory
    ```cmd
    cd /d "X:\path_\to_\your_\project_\directory"
    ```
2. OR create your project directory, then go to the directory
    ```cmd
    mkdir project-name
    cd project-name
    ```
> You can customize your project directory name e.g. "my-first-npm-project"
3. Init your project by executing `npm init` on your project directory. After that npm will ask you to input some projects info.
    ```cmd
    npm init
    ```
4. Based on your input, the npm will create a `package.json` file that keeps the projects settings.
    ```json
    {
        "name": "hello-react",
        "version": "1.0.0",
        "description": "Getting started react from scratch.",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
    },
        "author": "",
        "license": "ISC"
    }
    ```
#### Adding some packages for React web app
From your project root folder, run some `npm install` below:
```cmd
npm install webpack webpack-dev-server webpack-cli
npm install style-loader css-loader
npm install babel-loader babel-polyfill
npm install @babel/core @babel/preset-env @babel/preset-react
npm install react react-dom react-router-dom react-player
```
Then, the `package.json` `"dependencies"` content will be automatically updated as below:
```json
{
  "dependencies": {
    "@babel/core": "^7.23.6",
    "@babel/preset-env": "^7.23.6",
    "@babel/preset-react": "^7.23.3",
    "babel-loader": "^9.1.3",
    "babel-polyfill": "^6.26.0",
    "css-loader": "^6.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-player": "^2.14.0",
    "react-router-dom": "^6.21.0",
    "style-loader": "^3.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}
```
Add `public` and `src` folder to the project root
```cmd
mkdir public
mkdir src
```
Create `index.html` in the root/public folder
```cmd
cd public
echo "<h1>Hello React!</h1>" > index.html
```

Create `index.js` in the root/src folder
```cmd
cd src
echo "console.log('Hello React!');" > index.js
```

Create `styles.css` in the root/src folder
```cmd
cd src
echo "body{background-color:black;}" > styles.css
```
> From this point, the usage of a text editor or IDE is encouraged for ease of use. You can use VSCode, Notepad++, Sublime, or some JetBrains editor.
On `package.json` edit the `"scripts"` as below:
```json
{
    "scripts": {
    "test": "webpack-dev-server",
    "dev": "webpack-dev-server",
    "release": "webpack-dev-server"
  }
}
```
Create the `webpack.config.js` in the root dir:
```js
const path = require('path');
const root = path.join(__dirname, '/'); 
const src = path.join(__dirname, '/src/');
const pub = path.join(__dirname, '/public/');


module.exports = {
    mode: "development",
    entry: ['babel-polyfill', src + '/index.js'],
    output:{
        path: root,
        filename: 'index.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"],
                     plugins: []
                }
            },
            {
                test: /\.(sass|less|css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    devServer:{
        liveReload: true,
        port: 1234,
        historyApiFallback: true
    }
};
```
Then run `npm run test`, or `npm run dev`, or `npm run release`
```cmd
npm run dev
```