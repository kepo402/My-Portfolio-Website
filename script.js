document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('#animated-text span');
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let colorIndex = 0;

    // Color change function
    function changeColor() {
        for (let letter of letters) {
            letter.style.color = colors[colorIndex];
        }
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Initial color change
    changeColor();

    // Set interval for continuous color change
    setInterval(changeColor, 1000);

    // Letter reveal function
    let count = 0;
    function revealLetter() {
        if (count < letters.length) {
            letters[count].style.opacity = 1;
            count++;
        } else {
            clearInterval(revealInterval);
        }
    }

    // Set interval for letter reveal
    const revealInterval = setInterval(revealLetter, 500);
});