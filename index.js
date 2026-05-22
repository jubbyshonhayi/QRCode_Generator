function generateQRCode(){
    const text = document.getElementById("text").value;
    const qrCodeContainer = document.getElementById("qrCode");
    qrCodeContainer.innerHTML = "";
    if(text.trim() === ""){
        alert("Please enter some text to generate QR code.");
        return;
    }
    const qrCode = new QRCode(qrCodeContainer, {
        text: text,
        width: 256,
        height: 256,
    }); 
}

function downloadQRCode(){
    const qrCodeContainer = document.getElementById("qrCode");
    const img = qrCodeContainer.querySelector("img");
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
    
}