// alert("helo");
var $Dojo = function(selector){
	var self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);
	self.id = document.getElementById(self.selector);

	self.html = function(){
		return self.element;
	}

	self.attr = function(name, value){
		if (!value)
			return self.element.getAttribute(name);
		else{
			self.element.setAttribute(name, value);
			return self;
		}
	}

	self.click = function(callback){
		self.element.addEventListener("click", callback);
		return self;
	}

	self.hover = function(enter, exit){
		self.element.addEventListener("mouseover", enter);
		self.element.addEventListener("mouseout", exit);
		return self;
	}
	return self;
}