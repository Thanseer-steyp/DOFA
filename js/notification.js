 // JSON data for users
 const userData = {
    following: [
        {
            name: "Ann Marry",
            house: "Mistwood Lodge",
            relation: {
                type: "spouse",
                person: "Arjun Sharma"
            },
            avatar:"./assets/follow1.jpg"
        },
        {
            name: "Kiran Kishor",
            house: "Sunstone Ridge",
            relation: {
                type: "father",
                person: "Karthik Kishor"
            },
            avatar: "./assets/follow2.jpg"
        },
        {
            name: "Sara Khan",
            house: "The Axis Grove",
            relation: {
                type: "sister",
                person: "Shaheer Khan"
            },
            avatar: "./assets/follow3.jpg"
        }
    ],
    notifications: [
        {
            name: "John Joe",
            house: "Maple Hollow",
            avatar: "./assets/follow4.jpeg",
            hasButtons: true
        }
    ]
};

// Function to generate HTML for following tab
function generateFollowingContent() {
    const followingContent = document.getElementById('following-content');
    followingContent.innerHTML = '';

    userData.following.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <div class="avatar">
                <img src="${user.avatar}" alt="${user.name}">
            </div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-house">${user.house}</div>
                <div class="relation">
                    <span class="relation-type ${user.relation.type}">${capitalizeFirstLetter(user.relation.type)}</span>
                    <span class="relation-of"> of ${user.relation.person}</span>
                </div>
            </div>
        `;

        followingContent.appendChild(userCard);
    });
}


// Function to generate HTML for notification tab
function generateNotificationContent() {
    const notificationContent = document.getElementById('notification-content');
    notificationContent.innerHTML = '';

    userData.notifications.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        let buttonsHTML = '';
        if (user.hasButtons) {
            buttonsHTML = `
                <div class="buttons">
                    <button class="btn btn-reject">Reject</button>
                    <button class="btn btn-accept">Accept</button>
                </div>
            `;
        }

        userCard.innerHTML = `
            <div class="avatar">
                <img src="${user.avatar}" alt="${user.name}">
            </div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-house">${user.house}</div>
            </div>
            ${buttonsHTML}
        `;

        notificationContent.appendChild(userCard);
    });
}


// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize tabs
document.addEventListener('DOMContentLoaded', function() {
    const followingTab = document.getElementById('following-tab');
    const notificationTab = document.getElementById('notification-tab');
    const followingContent = document.getElementById('following-content');
    const notificationContent = document.getElementById('notification-content');

    // Generate content
    generateFollowingContent();
    generateNotificationContent();

    // Set following tab as active by default
    followingTab.classList.add('active');
    followingContent.classList.add('active');

    // Tab click events
    followingTab.addEventListener('click', function() {
        followingTab.classList.add('active');
        notificationTab.classList.remove('active');
        followingContent.classList.add('active');
        notificationContent.classList.remove('active');
    });

    notificationTab.addEventListener('click', function() {
        notificationTab.classList.add('active');
        followingTab.classList.remove('active');
        notificationContent.classList.add('active');
        followingContent.classList.remove('active');
    });

    // Add event listeners for accept/reject buttons
    document.querySelectorAll('.btn-accept').forEach(button => {
        button.addEventListener('click', function() {
            alert('Connection accepted!');
        });
    });

    document.querySelectorAll('.btn-reject').forEach(button => {
        button.addEventListener('click', function() {
            alert('Connection rejected!');
        });
    });
});