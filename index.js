import './mm.css';
import { version, name } from './package.json';

document.getElementById('app_author').innerHTML = `<p>Author: Duomilia</p>`;
document.getElementById('app_author').innerHTML = '<p>Name: ' + name + '</p>';
document.getElementById('app_version').innerHTML =
  '<p>Version: ' + version + '</p>';
