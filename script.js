// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handling (prevent submission and show alert for demo)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    this.reset();
});

// Mobile menu toggle (if we had a hamburger, but we don't yet)
// We can add a simple toggle for demo, but the current header doesn't have a hamburger.
// We'll leave it as is for now, but we can add a hamburger for mobile if needed later.