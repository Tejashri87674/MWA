/*document.addEventListener("DOMContentLoaded", function() {
    // Code to execute after the DOM is fully loaded

    // Example: Change the color of the header on mouseover
    const header = document.querySelector('header');
    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#555';
    });*/

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#333';
    });

   
    const registrationForm = document.querySelector('#registration form');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

  
        alert('Registration successful!');
        registrationForm.reset(); // Clear the form
    });
});


function isValidEmail(email) {
   
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
