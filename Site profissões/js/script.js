document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.getAttribute('href');
            document.body.classList.add('loading');
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    });
});

document.body.classList.remove('loading');
