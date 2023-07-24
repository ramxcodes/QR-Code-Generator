# QR-Code-Generator
Generate Any QR code on this website for free......
Link- https://ramxcodes.github.io/QR-Code-Generator/


## QR Code Generator Documentation

The QR Code Generator is a simple web application that allows users to generate QR codes for any given text or URL. This document provides an overview of the HTML, CSS, and JavaScript code used to create the QR Code Generator.

### HTML

The HTML structure of the QR Code Generator consists of the following elements:

1. `<head>`: Contains the meta tags and link to the CSS file.
2. `<body>`: Contains the main content of the web page.
   - `<div class="grid">`: A container div that wraps all the content in a grid layout.
   - `<h2>`: The heading for the web application, displayed as "Qr Code Generator" with center alignment.
   - `<img>`: An empty image element with the `id="img"`, which will be used to display the generated QR code.
   - `<select>`: A dropdown menu with various size options for the generated QR code. The default selected value is "250x250".
   - `<textarea>`: A textarea element where users can input the text or URL for which they want to generate the QR code.
   - `<input type="submit">`: A submit button with the value "Generate". When clicked, it triggers the `genQR()` function to generate the QR code.
   - `<p>`: A paragraph displaying the creator's name and a link to their portfolio. It includes a heart emoji for visual appeal.

### CSS

The CSS styling for the QR Code Generator is located in the `style.css` file (assumed to be in the "assests" folder). Unfortunately, the specific CSS rules are not provided in the HTML snippet. The CSS file will likely include styling for the layout, alignment, font properties, and other visual elements of the web application.

### JavaScript

The JavaScript logic for generating the QR code is included in the `script.js` file (also assumed to be in the "assests" folder). Unfortunately, the specific JavaScript code is not provided in the HTML snippet. The JavaScript file will contain the `genQR()` function, which is triggered when the "Generate" button is clicked. This function will take the user-inputted text or URL, retrieve the QR code from the Google QR Code API, and display it in the `<img>` element.

Note: For the QR code generation functionality to work, the JavaScript code will likely include a call to the Google QR Code API or use a JavaScript library specifically designed for QR code generation.

## Usage

To use the QR Code Generator:

1. Open the HTML file (`index.html`) in a web browser.
2. Enter the text or URL for which you want to generate the QR code in the textarea.
3. Optionally, select a desired size for the QR code from the dropdown menu.
4. Click the "Generate" button to generate the QR code.
5. The generated QR code will be displayed in the `<img>` element on the page.
6. To save the QR code as an image, right-click on the QR code image and select "Save Image As."

Please note that for the QR Code Generator to work, you must have an active internet connection to access the Google QR Code API or any external libraries used for QR code generation.

## Credits

The QR Code Generator was created by [Ram](https://ramxcodes.github.io/portfolio/). The application was designed with love and made freely available for public use.

---

This documentation provides an overview of the QR Code Generator web application. To access the actual implementation and functionality of the QR Code Generator, please refer to the respective HTML, CSS, and JavaScript files mentioned in the HTML snippet provided. If you have any questions or need further assistance, feel free to contact the creator, [Ram](https://ramxcodes.github.io/portfolio/).
