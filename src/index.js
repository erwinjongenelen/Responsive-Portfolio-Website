// Imports
import { months } from './test.js';

// Excecute
const btn = document.getElementById('secret-btn');
btn.addEventListener('click', displayAlert);

function displayAlert() {
	alert('SECRET!!!!');
	console.log(months);
}