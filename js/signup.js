function validateSignup() {
    // Get all required inputs
    const fullName = document.getElementById('full_name');
    const userName = document.getElementById('user_name');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phone-number');
    const termsCheck = document.getElementById('termsCheck');
    
    // Validate all fields and the checkbox
    if (!fullName.value || !userName.value || !password.value || !email.value || !phoneNumber.value || !termsCheck.checked) {
        alert('Please fill out all fields and agree to the terms and conditions.');
    } else {
        // If everything is valid, proceed to the next page
        window.location.href = 'signup-verify.html';
    }
  }