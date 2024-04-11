document.addEventListener("DOMContentLoaded", function() {
    const hireButton = document.querySelector('.hire-btn');
    setInterval(() => {
        hireButton.classList.toggle('blink');
    }, 500);

    const letters = document.querySelectorAll('#animated-text span');
    const colorsLight = ["black", "red", "blue", "green", "yellow", "purple", "orange"];
    const colorsDark = ["white", "red", "blue", "green", "yellow", "purple", "orange"];
    let colorIndex = 0;

    // Color change function
    function changeColor(colors) {
        for (let letter of letters) {
            letter.style.color = colors[colorIndex];
        }
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Initial color change
    changeColor(colorsLight);

    // Set interval for continuous color change
    setInterval(() => {
        if (document.body.style.backgroundColor === 'black') {
            changeColor(colorsDark);
        } else {
            changeColor(colorsLight);
        }
    }, 1000);

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

    // Project link click event listener
    const projectLink = document.querySelector('a[href="projects.html"]');
    projectLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Fade out the page content
        document.body.style.transition = 'opacity 3s ease';
        document.body.style.opacity = 0;

        // Change background color to white and text color to black
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

        // Redirect to projects page after 3 to 4 seconds
        setTimeout(function() {
            window.location.href = "projects.html"; // Redirect to projects page
        }, 1000); // Adjust timeout to desired duration (3 to 4 seconds)
    });

    // Toggle between light and dark mode
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', function() {
        const currentBgColor = document.body.style.backgroundColor;
        if (currentBgColor === 'black') {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    });

    // Maintain opacity at 0 until redirection
    window.addEventListener("beforeunload", function() {
        document.body.style.opacity = 0;
    });
});




