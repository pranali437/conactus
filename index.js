const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');


        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            // Reset error messages
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            messageError.style.display = 'none';

            let isValid = true;

            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            }

            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                emailError.style.display = 'block';
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the form data to a server
                // For this example, we'll just show an alert
                alert('Message sent successfully! (Simulated)');
                form.reset(); // Clear the form
            }
        });

        