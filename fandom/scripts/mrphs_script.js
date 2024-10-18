document.getElementById('triggerButton').addEventListener('click', function() {
    let chance = Math.random();
    if (chance < 0.2) {
        window.local.href = 'game-start.html';
    }
})