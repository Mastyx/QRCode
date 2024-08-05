const returnMainMenu = document.getElementById("main-menu");
returnMainMenu.addEventListener("click", ()=>{
	let baseUrl = window.location.origin;
	if (baseUrl.includes("github.io")) {
		baseUrl += "/QRCode";	
	}
	window.location.href = baseUrl + "/index.html";
})

const generate = ()=> {
	console.log('generate');
	const text = document.getElementById("text").value;
	document.getElementById("qrcode").innerHTML = "";
	new QRCode(document.getElementById('qrcode'), text);
}
