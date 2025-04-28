// profile-setup.js

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('profile-submit');
    const imageUpload = document.getElementById('imageUpload');
    const previewImage = document.querySelector('.uploadImage img');

    // ———— Live preview + store image ————
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const dataUrl = e.target.result;
            previewImage.src = dataUrl;  // Show preview
            localStorage.setItem('profileImage', dataUrl);  // Store in localStorage
        };
        reader.readAsDataURL(file);
    });

    // ———— Validate & save text fields ————
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // check required inputs
        const inputs = document.querySelectorAll('#profileSetup input[required]');
        let allFilled = true;
        inputs.forEach(i => { if (!i.value.trim()) allFilled = false; });

        // check image
        if (!imageUpload.files.length) allFilled = false;

        if (!allFilled) {
            alert("Please complete all fields and select a profile image before saving.");
            return;
        }

        // Save Full Name and Location
        localStorage.setItem('fullName', document.getElementById('full_name').value.trim());
        localStorage.setItem('location', document.getElementById('location').value.trim());

        // Go to Home
        window.location.href = "Home.html";
    });
});
