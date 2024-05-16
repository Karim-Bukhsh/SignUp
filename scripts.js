document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const modal = document.getElementById('message');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (name && email && password) {
            modalText.textContent = 'Sign Up Successful!';
        } else {
            modalText.textContent = 'Please fill out all fields.';
        }

        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
