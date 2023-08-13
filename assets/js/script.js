s
function animateButton(button) {
  button.style.transform = 'scale(1.1)'; // Aumenta o tamanho do botão
  button.style.transition = 'transform 0.3s'; // Adiciona uma transição suave
}

// Quando o mouse sair do botão, voltar ao tamanho normal
document.querySelectorAll('.menu a').forEach(button => {
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});
