import './mm.css';
import { version, name } from './package.json';
import { json2Table } from './js/mie/messwertetabelle.js';

document.getElementById('app').innerHTML = '<br></br>';

document.getElementById('app_author').innerHTML = `<p>Author: Duomilia</p>`;
document.getElementById('app_name').innerHTML = '<p>Name: ' + name + '</p>';
document.getElementById('app_version').innerHTML =
  '<p>Version: ' + version + '</p>';

//const asdf =beispieldaten;

document.getElementById('messwerttabellenausgabe').innerHTML = json2Table();
