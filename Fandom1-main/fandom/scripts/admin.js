// admin.js

// Проверка роли пользователя
document.addEventListener("DOMContentLoaded", function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || currentUser.role !== "admin") {
        alert("Access denied. Admins only.");
        window.location.href = "index.html";
        return;
    }

    loadUsers();
});

// Загрузка пользователей
function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const tableBody = document.getElementById("userTable").querySelector("tbody");

    tableBody.innerHTML = "";
    users.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input value="${user.username}" onchange="updateUser(${index}, 'username', this.value)"></td>
            <td><input value="${user.firstName}" onchange="updateUser(${index}, 'firstName', this.value)"></td>
            <td><input value="${user.lastName}" onchange="updateUser(${index}, 'lastName', this.value)"></td>
            <td><input value="${user.email}" onchange="updateUser(${index}, 'email', this.value)"></td>
            <td><input type="password" value="${user.password}" onchange="updateUser(${index}, 'password', this.value)"></td>
            <td>${user.hasEnteredNow}</td>
            <td>${user.enterTime || "N/A"}</td>
            <td><button onclick="deleteUser(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function updateUser(index, field, value) {
    let users = JSON.parse(localStorage.getItem("users"));
    users[index][field] = value;
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
}
