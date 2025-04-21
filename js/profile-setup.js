document.getElementById('profileForm').addEventListener('submit', function (e) {
    const fileInput = document.getElementById('imageUpload');
    if (!fileInput.files.length) {
        alert("Please select a profile image.");
        e.preventDefault();
    }
});

function validateProfileForm(event) {
    // Get all required inputs
    const inputs = document.querySelectorAll('#profileSetup input[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    // Check if image file is selected
    const imageUpload = document.getElementById('imageUpload');
    if (!imageUpload.files.length) {
        allFilled = false;
    }

    if (!allFilled) {
        event.preventDefault(); // Stop the link from redirecting
        alert("Please complete all fields before saving.");
        return false;
    }

    // All fields are filled, allow the redirect
    return true;
}