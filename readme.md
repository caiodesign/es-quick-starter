# ECMAScript quick starter!

A simple package that helps you to developing with ECMAScript 6+ just running a simple command line. Contains Webpack,, Webpack Server, Babel and uglify. Require Node.JS to serve and compile.

## Getting Started

These instructions will helps you to running the project on your local machine for development.

## Prerequisites

```
Node.JS 8+
```

## Installing

Clone or download de project to your system.

```
git clone https://github.com/caiodesign/es-quick-starter.git

```

Access the project folder via terminal and run:

```
npm install
```

If you have problems to install the project dependecies, try using `sudo` (MAC/LINUX):
```
sudo npm install
```


## How to use

Create your local server just running the simple command:

```
npm run server
```

The script will create a server and compile your `App.js` into a file called `bundle.js`.


## Others available scripts

Use `build` to only compile you `App.js` into a file called `bundle.js` for development environment.

```
npm run build

```
or `build-production`to compile your `App.js` into `bundle.js` for production environment.

```
npm run build-production
```

Like the `npm run build`, you can use `watch` for compile your files automatically every time you modify a source `.js` file.

```
npm run watch
```

## Built With

* [Webpack](https://webpack.js.org/) - To bundle the scripts
* [Webpack Server](https://github.com/webpack/webpack-dev-server) - For serve the files
* [Babeljs](https://babeljs.io/) - For compile EC6, EC7, EC8 into a compatible Javascript to old browser
* [Uglify](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) - To uglify our javascript

## License

This project is licensed under the MIT License.