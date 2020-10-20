window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});

const translate = document.querySelectorAll(".translate");
const title = document.querySelector(".title");
const header = document.querySelector("header"); 
const sombra = document.querySelector(".sombra"); 
const content = document.querySelector(".content"); 
const section = document.querySelector("section"); 
const imgconta = document.querySelector(".img-container");
const opacity = document.querySelectorAll(".opacity");
const borde = document.querySelector(".borde");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
	let scroll = window.pageYOffset;
	let sectionY = section.getBoundingClientRect();

	//if (sectionY.top < 0) { sectionY = 0} 

	translate.forEach(element =>{
		let speed = element.dataset.speed;
			element.style.transform = `translateY(${scroll * speed}px)`;
	})

	opacity.forEach(element => {
		element.style.opacity = scroll / (sectionY.top  + section_height);
	})

	title.style.opacity = - scroll / (header_height / 2) + 1;
	sombra.style.height = `${scroll * 0.5 + 300 }px`;


	if (sectionY.top > 0) {
	content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
	imgconta.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
	borde.style.width = `${scroll / (sectionY.top + section_height) * 40 }%`

	}
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ddd; margin-left: 1rem }";
  document.body.appendChild(css);
};
