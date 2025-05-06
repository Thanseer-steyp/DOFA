document.addEventListener('DOMContentLoaded', () => {
  const contacts = [
    {
      name: "Rowan Vale",
      family: "The Aldridge Family",
      image: "./assets/profile1.jpg"
    },
    {
      name: "Isabelle Hayes",
      family: "The Sterling Group",
      image: "./assets/profile2.jpg"
    },
    {
      name: "Dax Monroe",
      family: "Thornewood Lineage",
      image: "./assets/profile4.jpg"
    },
    {
      name: "Victoria Shaw",
      family: "Beaumont Estates",
      image: "./assets/profile3.jpeg"
    }
  ];

  const contactList = document.getElementById('contactList');
  const searchInput = document.getElementById('searchBar');
  const notFoundElement = document.getElementById('notFound');

  // Initial render
  renderContacts(contacts);

  // Handle search input
  searchInput.addEventListener('input', (e) => {
    filterContacts(contacts, e.target.value);
  });

  // Back button logic
  const backButton = document.querySelector('.back-btn');
  if (backButton) {
    backButton.addEventListener('click', () => {
      searchInput.value = '';
      renderContacts(contacts);
    });
  }

  // Function to render contacts
  function renderContacts(contactArray) {
    contactList.innerHTML = '';

    if (contactArray.length === 0) {
      notFoundElement.style.display = 'block';
      return;
    }

    notFoundElement.style.display = 'none';

    contactArray.forEach(contact => {
      const contactElement = document.createElement('div');
      contactElement.className = 'contact-item';
      contactElement.innerHTML = `
        <img src="${contact.image}" alt="${contact.name}" class="profile-pic">
        <div class="contact-info">
          <div class="contact-name">${contact.name}</div>
          <div class="contact-number">${contact.family}</div>
        </div>
      `;
      contactList.appendChild(contactElement);
    });
  }

  // Function to filter contacts
  function filterContacts(contacts, searchTerm) {
    if (!searchTerm.trim()) {
      renderContacts(contacts);
      return;
    }

    const filteredContacts = contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
      const familyMatch = contact.family.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || familyMatch;
    });

    renderContacts(filteredContacts);
  }

  // Viewport height fix for mobile
  function setRealVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', setRealVH);
  window.addEventListener('load', setRealVH);
});

// Go home function for external use
function goHome() {
  window.location.href = "home.html"; // Change to your actual home page path if needed
}
