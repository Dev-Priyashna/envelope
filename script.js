let opened = false;

function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const music = document.getElementById('music');

  if (!opened) {
    envelope.classList.add('open');
    music.play();
    opened = true;
  }
}

/* Hearts */
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 500);

/* Petals */
setInterval(() => {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}, 700);
