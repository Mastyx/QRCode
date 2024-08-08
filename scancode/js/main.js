document.addEventListener("DOMContentLoaded", () => {
	
	const btnMainMenu = document.getElementById("btnReturn");
	btnMainMenu.addEventListener("click", ()=>{
		// costruiamo un percorso dinamico
		let baseUrl = window.location.origin;
		// controlla se siamo su github
		if (baseUrl.includes("github.io")) {
			baseUrl += '/QRCode';
		}

		window.location.href = baseUrl + "/index.html";
	});

	const html5QrCode = new Html5Qrcode("reader");

	const qrCodeSuccessCallback = (decodedText, decodedResult) => {
		document.getElementById("reader").style.display = 'none';
		
		document.getElementById('result').innerHTML = 
			`<div id="div-risultato">
				<a href="${decodedText}">${decodedText}</a>
			</div>
		`;
			html5QrCode.stop().then((ignore) => {
					console.log("QR Code scanning stopped.");
			}).catch((err) => {
					console.error("Failed to stop scanning", err);
			});
	};
	const config = { fps: 10, qrbox: 250 };

	Html5Qrcode.getCameras().then(cameras => {
			if (cameras && cameras.length) {
					html5QrCode.start(
							{ facingMode: "environment" }, // Prefer the back camera
							config,
							qrCodeSuccessCallback
					).catch(err => {
							console.error("Unable to start scanning", err);
					});
			} else {
					console.error("No cameras found.");
			}
	}).catch(err => {
			console.error("Error in getting cameras", err);
	});
});
