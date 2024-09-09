// Função para navegação suave ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scroll({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    if (!name) {
        alert('Por favor, insira seu nome.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        isValid = false;
    }

    if (!message) {
        alert('Por favor, insira uma mensagem.');
        isValid = false;
    }

    if (isValid) {
        alert('Obrigado por entrar em contato, ' + name + '!');
        document.getElementById('contact-form').reset();
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
