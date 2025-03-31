document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded");
    
    // Example of dynamic content updating (e.g., changing temperature)
    const temperatureElement = document.querySelector(".weather p");
    let temp = 19;
    setInterval(() => {
        temp += Math.random() > 0.5 ? 1 : -1;
        temperatureElement.innerHTML = `<strong>Temperature:</strong> ${temp}°C`;
    }, 5000);
});
