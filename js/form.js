function download(content, fileName, contentType) {
 const a = document.createElement("a");
 const file = new Blob([content], { type: contentType });
 a.href = URL.createObjectURL(file);
 a.download = fileName;
 a.click();
}

function zapisz()
{
	var item={};
	item.imie=document.getElementsByName("imie")[0].value;
	item.nazwisko=document.getElementsByName("nazwisko")[0].value;
	item.email=document.getElementsByName("email")[0].value;
	item.tel=document.getElementsByName("tel")[0].value;
	item.kto=document.getElementsByName("kto")[0].value;
	item.temat=document.getElementsByName("temat")[0].value;
	item.wiadomosc=document.getElementsByName("textarea")[0].value;
	item.regulamin=document.getElementsByName("akceptacja")[0].checked;
	item.oferty=document.getElementsByName("oferty")[0].checked;
	
	localStorage.setItem(item.nazwisko, JSON.stringify(item));
	var retrieveItem = JSON.parse(localStorage.getItem('item'));
	console.log(item);
	
	fetch('https://jsonplaceholder.typicode.com/posts',{
		method: 'POST',
		body: JSON.stringify(item),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	.then((response) => response.json())
	.then((json) => console.log(json));

	download(JSON.stringify(item), "json-file-name.json", "text/plain");
}

