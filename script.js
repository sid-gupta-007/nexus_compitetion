document.addEventListener('DOMContentLoaded', () => {
    console.log('NeXus 3.0 Project Loaded Successfully!');

    const navLinks = document.querySelectorAll('nav a');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Light/Dark Mode';
    document.body.prepend(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    alert('Welcome to the NeXus 3.0 Web Project!');
});
