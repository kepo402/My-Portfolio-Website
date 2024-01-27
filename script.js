document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById('animated-text');
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let colorIndex = 0;

    setInterval(() => {
        animatedText.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000); // Change color every 1 second
});