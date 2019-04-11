var container = document.getElementsByClassName('tabbbs-container')[0];
var tabb1 = container.querySelector('.header-tabbb1');
var tabb2 = container.querySelector('.header-tabbb2');
var tabb3 = container.querySelector('.header-tabbb3');
var inside1 = container.querySelector('.inside-tabbb-container1');
var inside2 = container.querySelector('.inside-tabbb-container2');
var inside3 = container.querySelector('.inside-tabbb-container3');


tabb1.onclick = function() {
	this.classList.add('tabbb-selected');
	tabb2.classList.remove('tabbb-selected');
	tabb3.classList.remove('tabbb-selected');
	inside1.classList.add('inside-selected');
	inside2.classList.remove('inside-selected');
	inside3.classList.remove('inside-selected');

} 
tabb2.onclick = function() {
	this.classList.add('tabbb-selected');
	tabb1.classList.remove('tabbb-selected');
	tabb3.classList.remove('tabbb-selected');
	inside2.classList.add('inside-selected');
	inside1.classList.remove('inside-selected');
	inside3.classList.remove('inside-selected');

} 
tabb3.onclick = function() {
	this.classList.add('tabbb-selected');
	tabb1.classList.remove('tabbb-selected');
	tabb2.classList.remove('tabbb-selected');
	inside3.classList.add('inside-selected');
	inside1.classList.remove('inside-selected');
	inside2.classList.remove('inside-selected');

} 

