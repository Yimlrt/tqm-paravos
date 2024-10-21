const messages = [
    "feliz cumpleaños feliz cumpleaños",
    "te amo sabes ",
    "QUE LOS CUMPLAS FELIZ ",
    "PORQUE TODOS TE QUEREMOS ",
    "pide un deseo",
    "felices 20 primaveras primaverales",
    "felicidades 🎂🎂🎂",
    "mariposas imfinitas🎂🎂🎂"
];

let score = 0;

function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerHTML = '🦋';
    butterfly.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    butterfly.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    
    butterfly.addEventListener('click', () => {
        score++;
        document.getElementById('score').textContent = score + ' 💐';
        butterfly.remove();
        showMessage(messages[Math.floor(Math.random() * messages.length)]);
        createHeart(butterfly.style.left, butterfly.style.top);
        if (score % 5 === 0) {
            createMultipleButterflies(3);
        }
    });

    document.body.appendChild(butterfly);
    animateButterfly(butterfly);
}

function animateButterfly(butterfly) {
    const moveButterfly = () => {
        const x = parseFloat(butterfly.style.left) + (Math.random() - 0.5) * 10;
        const y = parseFloat(butterfly.style.top) + (Math.random() - 0.5) * 10;
        
        butterfly.style.left = Math.min(Math.max(0, x), window.innerWidth - 50) + 'px';
        butterfly.style.top = Math.min(Math.max(0, y), window.innerHeight - 50) + 'px';
        
        if (butterfly.isConnected) {
            requestAnimationFrame(moveButterfly);
        }
    };
    
    requestAnimationFrame(moveButterfly);
}

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = x;
    heart.style.top = y;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

function showMessage(text) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.classList.add('appear');
    setTimeout(() => messageEl.classList.remove('appear'), 2000);
}

function createMultipleButterflies(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(createButterfly, i * 500);
    }
}

// Iniciar el juego
createMultipleButterflies(5);

// Crear nuevas mariposas periódicamente
setInterval(() => {
    if (document.querySelectorAll('.butterfly').length < 8) {
        createButterfly();
    }
}, 3000);

// Crear estrellas de fondo
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for(let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.animation = 'twinkle ${Math.random() * 3 + 1}s infinite';
        starsContainer.appendChild(star);
    }
}

createStars();
