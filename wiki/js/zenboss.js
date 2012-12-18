window.onload = function(){

	var baseUrl = 'http://zenboss.com/wiki/';
	var html = document.body.innerHTML;
	document.body.innerHTML = "";

	var page = document.createElement('div');//构造PAGE
	page.id = 'page';
	
	


	var header = document.createElement('header');
	header.innerHTML = '<logo><a href="'+baseUrl+'"><img src="'+baseUrl+'img/Logo.png"/></a></logo>';

	var main = document.createElement('div');
	main.id='main';
	main.innerHTML = html;

	var footer = document.createElement('footer');
	footer.innerHTML = '<img src="'+baseUrl+'img/shadow_down.png" style="width:100%"><div id="copy"><a id="copy_link" href="http://www.zenboss.com">©&nbsp;2009&nbsp;-&nbsp;2012&nbsp;zenboss</a></div>';
		
	page.appendChild(header)
	page.appendChild(main);
	page.appendChild(footer);

	document.body.appendChild(page);

	// var vh1 = document.getElementsByTagName('h1');
	// var vh2 = document.getElementsByTagName('h2');
	// var vh3 = document.getElementsByTagName('h3');
	// console.log(vh1,vh2,vh3);
	// var titleObj = document.getElementById('entry_title');
	

	var zenbossCode = document.getElementsByTagName('zenbossCode');

	for(var i=0;i<zenbossCode.length;i++){

		
		zenbossCode[i].innerHTML = zenbossCodeParse(zenbossCode[i].innerHTML);
		var urls = zenbossCode[i].getElementsByTagName('url');
		for(var urlsI=0;urlsI<urls.length;urlsI++){

			urls[urlsI].innerHTML = '<a href="'+urls[urlsI].innerHTML+'">'+urls[urlsI].innerHTML+"</a>";

		}

	}

};
var zenbossCodeParse = function(text){
	
	text = text.replace(/\n/g,'<br/>');
	text = text.replace(/\s\s/g,'&nbsp;&nbsp;');

	return text;
};