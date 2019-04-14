console.log('Sis puslapis yra negeras');

/*
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://trueweb.desevix.lt/public/extension/warning-style.css';
document.head.appendChild(link);
*/

var div = document.createElement('div');
div.className = "trueweb_warning_div";
div.innerHTML += '<center><h1 class="trueweb_warning_heading">Dezinformacijos Pavojus</h1>';
div.innerHTML += '<div class="trueweb_warning_paragraph">Puslapis, kurį bandote pasiekti, buvo praneštas kaip galimas melagingos informacijos šaltinis</div></center>';
div.innerHTML += '<a id="trueweb_warning_button" href="https://www.google.com/" onclick="goBack()">Grįžti</a>';
div.innerHTML += '<a id="trueweb_warning_button_secondary" href="#">Tęsti</a></center>';
document.body.innerHTML='';
document.body.appendChild(div);


