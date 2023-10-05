// JavaScript to handle the form submission and WhatsApp integration
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Add code to send the form data to WhatsApp or perform other actions here
    // You can use JavaScript libraries like Axios for sending HTTP requests
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
