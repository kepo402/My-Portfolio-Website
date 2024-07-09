document.addEventListener('DOMContentLoaded', (event) => {
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
    event.preventDefault();
    alert('Message sent! Thank you for contacting me.');
});
