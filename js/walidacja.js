function sprawdzPole(pole_id,obiektRegex) {
	var obiektPole = document.getElementById(pole_id);
	if(!obiektRegex.test(obiektPole.value)) return (false);
	else return (true);
}
function sprawdz_radio(nazwa_radio){
	var obiekt=document.getElementsByName(nazwa_radio);
	for (i=0;i<obiekt.length;i++)
	{ wybrany=obiekt[i].checked;
	if (wybrany) return true; }
	return false;
}
function sprawdz_box(box_id) {
	var obiekt=document.getElementById(box_id);
	if (obiekt.checked) return true;
	else return false;
}
function sprawdz() {
	var ok=true;
	obiektImie = /^[a-zA-Z]{2,20}$/;
	obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
	obiektWiek=/^[1-9][0-9]{1,2}$/;
	if (!sprawdzPole("imie",obiektImie))
	{ ok=false;
	document.getElementById("imie_error").innerHTML= "Wpisz poprawnie nazwisko!";
	}
	else document.getElementById("imie_error").innerHTML="";
	
	if (!sprawdzPole("email",obiektemail))
	{ ok=false;
	document.getElementById("email_error").innerHTML= "Wpisz poprawnie email!";
	}
	else document.getElementById("email_error").innerHTML="";
	
	if (!sprawdzPole("wiek",obiektWiek))
	{ ok=false;
	document.getElementById("wiek_error").innerHTML= "Wpisz poprawnie wiek!";
	}
	else document.getElementById("wiek_error").innerHTML="";

	if (!sprawdz_radio("zaplata"))
	{ ok=false;
	document.getElementById("zaplata_error").innerHTML= "Musisz wybrac sposob platnosci!";
	}
	else document.getElementById("zaplata_error").innerHTML="";
	
	if (!sprawdz_box("php") && !sprawdz_box("c") && !sprawdz_box("java"))
	{ ok=false;
	document.getElementById("produkt_error").innerHTML= "Musisz wybrac produkt!";
	}
	else document.getElementById("produkt_error").innerHTML="";	
	
	return ok;
	
}
/*function sprawdz()
{
	var dane=" ";
	if(sprawdz_box("php")
		dane+=document.getElementById("php").value;
	if(sprawdz_box("c")
		dane+=document.getElementById("c").value;
	if(sprawdz_box("java")
		dane+=document.getElementById("java").value;
	let dane;
}*/
function pokazDane()
{
	var dane= "Następujące dane zostaną wysłane:\n ";
	dane+="Email: "+document.getElementById("email").value+"\n" 
	+ "nazwisko: "+document.getElementById("nazw").value+"\n" 
	+ "wiek: "+document.getElementById("wiek").value+"\n" 
	+ "panstwo: "+document.getElementById("kraj").value+"\n"
	+ "sposob zaplaty: "+document.getElementById("zaplata").value+"\n";
	//+ "wybrane produkty "+sprawdz()+"\n";
	
	if (window.confirm(dane)) return true;
	else return false;
}