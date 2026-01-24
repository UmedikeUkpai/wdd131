document.addEventListener("DOMContentLoaded", () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
   
    // Update footer year
    const footerFirstParagraph = document.getElementById("currentyear");
    footerFirstParagraph.innerHTML = `&copy;${currentYear} ❣️Ukpai Godwin Umedike❣️ Nigeria`;

    // Update last modified date
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8)
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C"
            : "N/A";
    }

    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("wind").textContent);
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});