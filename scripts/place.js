document.addEventListener("DOMContentLoaded", () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
   
    // Update footer year
    const footerFirstParagraph = document.getElementById("currentyear");
    footerFirstParagraph.innerHTML = `&copy;${currentYear} ❣️Ukpai Godwin Umedike❣️ Nigeria`;

    // Update last modified date
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Wind Chill Calculation
    function calculateWindChill(tempF, windSpeedMph) {
    // Wind chill only applies if temp <= 50°F and wind speed > 3 mph
    if (tempF > 50 || windSpeedMph <= 3) {
      return tempF; // No wind chill effect
    }

    const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));
    return Math.round(windChill * 10) / 10; // Rounded to 1 decimal place
  }

  function updateWindChill() {
    // Get temperature and wind speed from HTML
    const tempText = document.getElementById("temperature").textContent;
    const windText = document.getElementById("windSpeed").textContent;

    // Extract numeric values from strings like "32°F" and "10 mph"
    const tempF = parseFloat(tempText);
    const windSpeed = parseFloat(windText);

    // Calculate wind chill
    const windChill = calculateWindChill(tempF, windSpeed);

    // Update the wind chill in the HTML
    document.getElementById("windChill").textContent = `${windChill}°F`;
  }

  // Run the function after the page loads
  window.onload = updateWindChill;


});