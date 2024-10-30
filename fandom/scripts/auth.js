// auth.js

// Функция для получения параметра URL
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Добавление администратора по умолчанию
document.addEventListener("DOMContentLoaded", function() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.length === 0) {
        const defaultAdmin = {
            username: "admin",
            firstName: "Admin",
            lastName: "User",
            email: "admin@example.com",
            password: "admin123",
            role: "admin",
            hasEnteredNow: false,
            enterTime: null
        };
        users.push(defaultAdmin);
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Default admin user created: username 'admin', password 'admin123'");
    }

    const returnUrl = getUrlParameter("returnUrl");
    if (returnUrl) {
        localStorage.setItem("returnUrl", returnUrl);
    }
});

// Регистрация пользователя
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const user = {
        username: document.getElementById("username").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        role: "user",
        hasEnteredNow: false,
        enterTime: null
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    document.getElementById("registerForm").reset();

    const returnUrl = localStorage.getItem("returnUrl") || "homepage.html";
    window.location.href = returnUrl;
});

// Вход пользователя
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        user.hasEnteredNow = true;
        user.enterTime = new Date().toLocaleString();
        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("currentUser", JSON.stringify(user));
        
        alert("Login successful!");
        document.getElementById("loginForm").reset();

        window.location.href = "user.html";
    } else {
        alert("Invalid credentials.");
    }
});

// Выход пользователя
function logout() {
    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    window.location.href = "index.html";
}
