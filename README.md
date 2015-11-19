# Bootstrap custom elements

Experiment on using Bootstrap components as custom HTML elements utilizing native Web Components API and [polyfills](https://github.com/WebComponents/webcomponentsjs)

## Usage

Use Bootstrap components as custom elements (defined in main.js) in your markup like so:

````html
<bootstrap-jumbotron>
	<h1>Hello world!</h1>
</bootstrap-jumbotron>
````

## Set up

Install [npm](https://nodejs.org/en/download/) and run `$ npm install -g gulp` on your terminal to install gulp globally (you probably need to be root). Then just clone this repository and run `$ npm install` from its root directory.

## Develop and build

Modify the files in the `app/` directory if desired, then run `$ gulp` to build the files and serve them from the `dist/` directory.
