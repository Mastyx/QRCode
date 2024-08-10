const btnScan = document.querySelector(".div-scann");
const btnGenerate = document.querySelector(".div-generate");
const info = document.getElementById("info");
const divInfo = document.getElementById("div-info");


document.addEventListener("DOMContentLoaded", ()=>{
	const language = navigator.language || navigator.userLanguage;
	console.log(language);
	caricaInfoTesto(language);

	btnScan.addEventListener("click", ()=>{
		window.location.href = './scancode/scan.html';
	});

	btnGenerate.addEventListener("click", ()=>{
		window.location.href = './createcode/generate.html';
	});

	info.addEventListener("click",()=>{
		if (divInfo.style.display === 'none') {
			divInfo.style.display = 'block';
			info.style.background = "#FF0033";
		} else {
			divInfo.style.display = 'none';
			info.style.background = '#333'
		}
	});

});


// carica  il file di testo all'interno 
// della div info

const caricaInfoTesto = (lang)=>{
	let fileLanguage = '';
	fileLanguage = 'info.txt';

	let textInfo = '';

	fetch(fileLanguage)
		.then(response => response.text())
		.then(data => {
			textInfo = data;
			const areatesto = document.createElement("textarea");
			areatesto.id = "area-testo-info";
			areatesto.value = textInfo;
			areatesto.setAttribute("readonly", true)
			divInfo.appendChild(areatesto);

		})
		.catch(error => console.log("Errore caricamento info"));
}


