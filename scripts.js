document.addEventListener('DOMContentLoaded', (event) => {
    // Typewriter Effect
    let text = "I am Olayinka, a passionate software engineer.";
    let index = 0;
    let colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#dda0dd"];
    let animatedText = document.getElementById('animated-text');

    function typeWriter() {
        if (index < text.length) {
            animatedText.innerHTML += `<span style="color: ${colors[index % colors.length]}">${text.charAt(index)}</span>`;
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});

function toggleTheme() {
    let body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

function showSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Redirect after successful submission
            window.location.href = '/thank-you.html';
        } else {
            // Handle server errors
            alert('There was a problem with your submission.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your submission.');
    });
});
