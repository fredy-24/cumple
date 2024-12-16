        // Generar confeti animado
        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }

        // Generar globos animados
        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.animationDuration = Math.random() * 4 + 5 + 's';
            document.body.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 10000);
        }

        setInterval(createConfetti, 200);
        setInterval(createBalloon, 800);