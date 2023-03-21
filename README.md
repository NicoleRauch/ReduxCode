# ReduxCode
Code for a Redux workshop in TypeScript.

## Prerequisites

The installation is easiest on Linux and Mac (because C++ and Python are already installed).
But it is of course feasible on Windows, too.

* [Node.js version 14.x](https://nodejs.org/en/download/) or greater
* A suitable editor or IDE, e.g.
   * Webstorm -- [there is a 30-day test version](https://www.jetbrains.com/webstorm/download/)
   * Visual Studio Code -- [it is free](https://code.visualstudio.com/download)
* Chrome or Firefox
* C++ and Python -- detailed installation instructions can be found in the node-gyp module README, section ["You will also need to install"](https://github.com/nodejs/node-gyp#installation)

## First Steps
* Check out this repository from GitHub
* cd into that directory
* Install required modules: `npm install` (in case of errors please use `npm install --legacy-peer-deps`)
* Launch the development server:
   * `npm start`

After that:

* open [http://localhost:3000](http://localhost:3000) in the browser. If you see a list of names and some other stuff, all is well.


## Trying out the solutions
Webpack accesses the files in the folder `src` by default. This way, you can implement and experiment with your own solutions step by step during the training.

To use the included examples, open the file `webpack.config.js` and change the path in the block `entry` such that it points to one of the other `index.tsx` files. Example:

```
    entry: [
        "./src-solution-redux/index.tsx"
    ],
```

The examples are fully functional and build on each other (in the order given in webpack.config). Please be aware that the final example requires a server to handle the emitted AJAX requests. A basic server is provided in the directory `backend`.
