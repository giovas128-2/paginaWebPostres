const posts = document.querySelectorAll('.postre');

const mostrar = () => {
    posts.forEach(p => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            p.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', mostrar);
mostrar();
