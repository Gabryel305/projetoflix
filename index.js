// Funcionalidade de alternância de tema (dark/light)

// Seleciona o botão de toggle
const themeToggle = document.getElementById('theme-toggle');

// Função para alternar o tema
function toggleTheme() {
    // Alterna a classe 'light' no body
    document.body.classList.toggle('light');

    // Atualiza o ícone do botão
    updateThemeIcon();

    // Salva a preferência no localStorage
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
}

// Função para atualizar o ícone do botão baseado no tema
function updateThemeIcon() {
    const isLight = document.body.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
}

// Adiciona evento de clique ao botão
themeToggle.addEventListener('click', toggleTheme);

// Carrega o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
    }
    // Atualiza o ícone inicial
    updateThemeIcon();
});