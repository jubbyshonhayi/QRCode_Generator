# QR Code Generator

https://qrkodhi.netlify.app/

A simple and lightweight QR Code Generator built with HTML, CSS, and JavaScript. Users can enter any text or URL, generate a QR code instantly, and download the generated QR code directly to their device.

## Features

- Generate QR codes instantly
- Supports text, URLs, and links
- Download generated QR codes
- Simple and responsive UI
- Uses the QRCode.js library
- No backend required

## Technologies Used

- HTML5
- CSS3
- JavaScript
- QRCode.js CDN Library

## Project Structure

```bash
QRCode_Generator/
│
├── index.html
├── index.css
├── index.js
└── README.md
```

## How It Works

The project uses the QRCode.js library from Cloudflare CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

JavaScript captures the user input, generates the QR code dynamically, and allows users to download it.

```javascript
function generateQRCode() {
    const textt = document.getElementById("text").value;
    const qrCodeContainer = document.getElementById("qrcode");

    qrCodeContainer.innerHTML = "";

    if (textt.trim() !== "") {
        new QRCode(qrCodeContainer, {
            text: textt,
            width: 150,
            height: 150
        });
    }
}
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/QRCode_Generator.git
```

### 2. Open the Project

Open the `index.html` file in your browser.

## Future Improvements

- Custom QR code colors
- Adjustable QR code sizes
- Dark mode
- Better mobile responsiveness
- Add logo inside QR code

## Author

Built by Jubilant Shonhayi

## License

This project is open-source and free to use.
