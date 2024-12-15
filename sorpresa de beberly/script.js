const countdown = document.querySelector('.countdown');
const lid = document.querySelector('.lid');
const giftContainer = document.querySelector('.gift-container');
const message = document.querySelector('.message');
const timer = document.querySelector('.timer');
const birthdayMusic = document.getElementById('birthdayMusic');

// Cuenta regresiva
let time = 3;
const interval = setInterval(() => {
    time--;
    countdown.textContent = time;
    timer.textContent = time; // Actualiza cronómetro en la caja del regalo
    if (time === 0) {
        clearInterval(interval);
        countdown.style.display = 'none';
        lid.style.transform = 'rotateX(-90deg)'; // Tapa se abre
        setTimeout(() => {
            giftContainer.style.display = 'none';
            message.style.display = 'block';
            birthdayMusic.play(); // Reproducir música
            startConfetti();
            startBalloons();
            startHearts();
        }, 1000); // Espera que termine la animación de la tapa
    }
}, 1000);

// Animación de globos
function startBalloons() {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloon.style.animationDuration = `${4 + Math.random() * 2}s`;
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 6000); // Eliminar los globos después de la animación
    }
}

// Animación de corazones
function startHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 4}s`; // Duración aleatoria de los corazones
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000); // Eliminar los corazones después de la animación
    }
}

// Función para confeti
function startConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000); // Eliminar los confetis después de la animación
    }
}
