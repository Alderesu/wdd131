document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const socialContent = `
        <a href="https://github.com/alderesu" target="_blank" title="GitHub"><img
            class="icon github-logo" src="../project/images/github-mark-white.png"
            alt="GitHub icon" /></a>
        <a href="https://www.facebook.com/Alderesuu" target="_blank" title="Facebook"><img class="icon fb-logo"
            src="../project/images/facebook-logo.png" alt="fb logo" /></a>
        <a href="mailto:kylealdrich.moran@gmail.com" target="_blank" title="Email"><img
            class="icon gmail-logo" src="../project/images/gmail-logo.png"
            alt="Gmail icon" /></a>
    `;

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});