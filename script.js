const secretText = document.querySelector('.secret-text');
const revealButton = document.getElementById('revealButton');

revealButton.addEventListener('click', () => {
  secretText.classList.toggle('revealed');
  if (secretText.classList.contains('revealed')) {
    secretText.textContent = '🔓 SECRET REVEALED OR IS IT....! 🔓';
    revealButton.textContent = 'Hide Again';
  } else {
    secretText.textContent = 'SECRET HIDDEN';
    revealButton.textContent = 'Reveal Secret';
  }
});

