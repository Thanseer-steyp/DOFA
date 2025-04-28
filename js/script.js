document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("splash-screen").style.display = "none";
      document.getElementById("onboard").style.display = "flex";
    }, 2200);
  
    let currentSlide = 0;
    const slides = document.querySelectorAll("#onboard .screen");
    const carousel = document.querySelector(".carousel-container");
    const nextButtons = document.querySelectorAll("#onboard .next");
  
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentSlide * 50}%)`;
    }
  
    nextButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          updateCarousel();
        }
      });
    });
    updateCarousel();
  });
  


const input = document.querySelector("#phone");

    const iti = window.intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function(success, failure) {
        fetch("https://ipinfo.io/json?token=YOUR_TOKEN_HERE")
          .then(resp => resp.json())
          .then(resp => success(resp.country))
          .catch(() => success("us"));
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js",
    });


    input.addEventListener("input", function () {
      const selectedCountryData = iti.getSelectedCountryData();
      const dialCode = selectedCountryData.dialCode;


      const numberWithoutCode = input.value.replace("+" + dialCode, "").trim();


      if (numberWithoutCode.length > 10) {
        input.value = "+" + dialCode + " " + numberWithoutCode.slice(0, 10);
      } else {
        input.value = "+" + dialCode + " " + numberWithoutCode;
      }
    });


    input.addEventListener("countrychange", function () {
      const selectedCountryData = iti.getSelectedCountryData();
      const dialCode = selectedCountryData.dialCode;
      input.value = "+" + dialCode + " ";
    });


    input.addEventListener("input", function () {
      const value = input.value;
      const selectedCountryData = iti.getSelectedCountryData();
      const dialCode = selectedCountryData.dialCode;

      if (!value) {
        input.value = "+" + dialCode + " ";
      }
    });

    document.getElementById("register-form")?.addEventListener("submit", function (e) {
      e.preventDefault();
      const fullNumber = iti.getNumber();
      alert("Submitted phone number: " + fullNumber);
    });



    function setRealVH() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', setRealVH);
    window.addEventListener('load', setRealVH);