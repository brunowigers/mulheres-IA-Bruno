document.addEventListener('DOMContentLoaded', () => {
    // Ativa o fade-in suave na entrada da página
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetUrl = link.getAttribute('href');

            // Verifica se é um link válido para troca de página
            if (targetUrl && !targetUrl.startsWith('#') && targetUrl !== '#') {
                e.preventDefault();
                
                // Faz o fade-out antes de redirecionar
                document.body.classList.remove('fade-in');

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 350);
            }
        });
    });
});