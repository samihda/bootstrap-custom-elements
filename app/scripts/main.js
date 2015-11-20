var bootstrap = (function() {
	var Jumbotron = document.registerElement('bootstrap-jumbotron', {
		prototype: Object.create(HTMLElement.prototype)
	});
	
	return {
		Jumbotron: Jumbotron
	};
})();

// create a new element
// var custom = new bootstrap.Jumbotron();
// custom.innerHTML = '<h1>I\'m custom too!</h1>';
// document.getElementsByClassName('container')[0].appendChild(custom);
