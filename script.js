// Adiciona efeito de pulsar no botão principal quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('telegramBtn');
  if (btn) {
    btn.classList.add('pulse');

    // Remove o efeito após alguns segundos para não distrair demais
    setTimeout(() => {
      btn.classList.remove('pulse');
    }, 6000);
  }
}); 