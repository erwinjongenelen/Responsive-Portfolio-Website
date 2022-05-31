// Imports
import './css/main.scss';
import bootstrap from 'bootstrap';
import { months } from './js/test.js';

// Excecute
const btn = document.getElementById('secret-btn');
btn.addEventListener('click', displayAlert);

function displayAlert() {
	alert('SECRET!!!!');
	console.log(months);
}