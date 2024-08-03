const returnMainMenu = document.getElementById("main-menu");
returnMainMenu.addEventListener("click", ()=>{
	window.location.href = window.location.origin + "/index.html";
})

const generate = ()=> {
	console.log('generate');
	const text = document.getElementById("text").value;
	document.getElementById("qrcode").innerHTML = "";
	new QRCode(document.getElementById('qrcode'), text);
}
