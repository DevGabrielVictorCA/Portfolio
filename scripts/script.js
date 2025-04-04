// Abrir e fechar menu hamburger.
let abrirMenu = document.querySelector('.abrir-menu');
let navItems = document.querySelector('.nav-items');

abrirMenu.addEventListener('click', ()=>{
    navItems.classList.toggle('active');
})

// Mostrar e esconder descrição das habilidades.
let btnConteudo = document.querySelectorAll('.btn-conteudo');
let conteudoHabilidades = document.getElementById('conteudoHabilidades');

btnConteudo.forEach(btn => {
    btn.addEventListener('mouseover', ()=>{
        conteudoHabilidades.innerHTML = btn.dataset.conteudo;
    })
    btn.addEventListener('mouseout', ()=>{
        conteudoHabilidades.innerHTML = ' /* Passe o mouse sobre um ícone para ver a sua descrição. */';
    })
})

// Recalcula a posição da página ao adicionar ou remover as abas de habilidades.
const sectionHabilidades = document.getElementById("habilidades");
const observer = new MutationObserver(() => {
    sectionHabilidades.scrollIntoView({ behavior: "smooth", block: "start" });
});
observer.observe(conteudoHabilidades, { childList: true, subtree: true });

// Exibir informações da linha do tempo.
let time = document.querySelectorAll('.item');
let timeContent = document.getElementById('time-content'); // Agora seleciona apenas um elemento

time.forEach(timeBtn => {
    timeBtn.addEventListener('click', () => {
        timeContent.innerHTML = timeBtn.querySelector('span').dataset.time; // Pegando o dataset do span dentro do li
    });
});
