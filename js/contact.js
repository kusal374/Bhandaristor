document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', data);
    
    // Clear the form
    event.target.reset();
    
    // Show a success message
    alert('Thank you for your message. We will get back to you soon!');
}

