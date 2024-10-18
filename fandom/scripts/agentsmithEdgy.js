document.getElementById('agentSmithImage').addEventListener('click', function () {
    document.getElementById('hiddenButton').style.display = 'block';
});

document.getElementById('startButton').addEventListener('click', function () {
    alert("Now you can start pressing buttons!");
    let buttons = document.querySelectorAll('.glitch-button');
    buttons.forEach(button => button.disabled = false); // Активируем кнопки
});

document.querySelector('.glitch-button[style="background-color: pink;"]').addEventListener('click', function () {
    window.location.href = 'glitched-neo.html'; // Ведет к глюкнутому Нео
});

let glitchButtons = document.querySelectorAll('.glitch-button');
glitchButtons.forEach(button => {
    button.addEventListener('click', function () {
        let randomChoice = Math.random();
        if (randomChoice < 0.5) {
            window.location.href = 'agent-smith.html'; //sometimes just kicks you back to normal page
        } else {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // sometimes kicks to _this_ link NOTE:DO NOT OPEN IT
        }
    });
});