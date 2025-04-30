document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('profileForm');
    const imageUpload = document.getElementById('imageUpload');
    const previewImage = document.getElementById('previewImage');
  
    // Live image preview
    imageUpload.addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = function (e) {
        const dataUrl = e.target.result;
        previewImage.src = dataUrl;
        localStorage.setItem('profileImage', dataUrl);
      };
      reader.readAsDataURL(file);
    });
  
    // Form submission validation
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const inputs = form.querySelectorAll('input[required]');
      let allFilled = true;
  
      inputs.forEach(input => {
        if (!input.value.trim()) {
          allFilled = false;
        }
      });
  
      if (!imageUpload.files.length) {
        allFilled = false;
      }
  
      if (!allFilled) {
        alert('Please complete all fields and upload a profile image.');
        return;
      }
  
      localStorage.setItem('fullName', document.getElementById('full_name').value.trim());
      localStorage.setItem('location', document.getElementById('location').value.trim());
  
      window.location.href = 'home.html';
    });


    const dobInput = document.getElementById('dob');
    const dobDisplay = document.getElementById('dob-display');
    
    dobInput.addEventListener('change', function () {
      if (dobInput.value) {
        dobDisplay.textContent = new Date(dobInput.value).toLocaleDateString('en-GB', {
          day: '2-digit', month: 'short', year: 'numeric'
        });
        dobDisplay.classList.add('filled');
      } else {
        dobDisplay.textContent = 'Select your date of birth';
        dobDisplay.classList.remove('filled');
      }
    });
    
  });
  