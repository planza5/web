function handleNavLinkMouseEnter(event) {
    if (event.target.id === 'instagram') return;
    const inicioNavLink = document.getElementById('inicio');
    if (inicioNavLink.classList.contains('active')) {
        inicioNavLink.classList.remove('active');
    }
    event.target.classList.add('active');
}

function handleNavLinkMouseLeave(event) {
    if (event.target.id === 'instagram') return;
    event.target.classList.remove('active');
    const inicioNavLink = document.getElementById('inicio');
    inicioNavLink.classList.add('active');
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', handleNavLinkMouseEnter);
    link.addEventListener('mouseleave', handleNavLinkMouseLeave);
});
