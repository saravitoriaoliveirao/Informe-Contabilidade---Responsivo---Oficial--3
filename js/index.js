// script.js

// Seleciona os elementos com a classe "retorica"
const textosRetorica = document.querySelectorAll('.introducao, .retorica, .card_mv, #celular');

// Configuração do Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel'); // Adiciona "visivel" ao aparecer
        } else {
            entry.target.classList.remove('visivel'); // (Opcional) Remove se sair da tela
        }
    });
}, { threshold: 0.1 }); // Ativa quando 50% do elemento estiver visível

// Aplica o observer aos elementos com a classe "retorica"
textosRetorica.forEach((texto) => {
    observer.observe(texto);
});



