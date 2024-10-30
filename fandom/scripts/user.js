// user.js

document.addEventListener("DOMContentLoaded", function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userInfoDiv = document.getElementById("userInfo");

    if (currentUser) {
        userInfoDiv.innerHTML = `
            <p><strong>Username:</strong> ${currentUser.username}</p>
            <p><strong>First Name:</strong> ${currentUser.firstName}</p>
            <p><strong>Last Name:</strong> ${currentUser.lastName}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <p><strong>Role:</strong> ${currentUser.role}</p>
            ${currentUser.role === "admin" ? '<a href="admin.html">Go to Admin Panel</a>' : ""}
        `;
    } else {
        alert("No user logged in.");
        window.location.href = "index.html";
    }
});
