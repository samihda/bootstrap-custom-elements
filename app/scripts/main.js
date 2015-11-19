var custom = {};

custom.JumbotronProto = Object.create(HTMLElement.prototype);
custom.Jumbotron = document.registerElement('bootstrap-jumbotron', {
	prototype: custom.JumbotronProto
});

// create a new element
custom.jumbotron = new custom.Jumbotron;
custom.jumbotron.innerHTML = '<h1>I\'m custom too!</h1>';
document.getElementsByClassName('container')[0].appendChild(custom.jumbotron);
