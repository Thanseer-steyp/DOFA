document.addEventListener('DOMContentLoaded', () => {
    // Fetch contacts from data.json
    fetch('../data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch contacts data');
        }
        return response.json();
      })
      .then(contacts => {
        // Initialize with all contacts
        renderContacts(contacts);
        // Set up search input event listener
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
          filterContacts(contacts, e.target.value);
        });
        // Back button functionality
        const backButton = document.querySelector('.back-button');
        backButton.addEventListener('click', () => {
          searchInput.value = '';
          renderContacts(contacts);
        });
      })
      .catch(error => {
        console.error('Error loading contacts:', error);
        document.getElementById('contactList').innerHTML = '<div class="error">Error loading contacts. Please try again later.</div>';
      });
  });
  
  // Function to render contacts
  function renderContacts(contacts) {
    const contactList = document.getElementById('contactList');
    const notFoundElement = document.getElementById('notFound');
    contactList.innerHTML = '';
    
    if (contacts.length === 0) {
      notFoundElement.style.display = 'block';
      return;
    }
    
    notFoundElement.style.display = 'none';
    
    contacts.forEach(contact => {
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
  
  // Function to filter contacts - FIXED to search by name and family
  function filterContacts(contacts, searchTerm) {
    if (!searchTerm) {
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
  function goHome() {
    window.location.href = "Home.html"; // Change this to your actual home page path
  }