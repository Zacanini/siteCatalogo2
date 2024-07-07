//Variável para rastrear o painel ativo
let painelAtivo = 'painel1';
let menuAberto = false;

// Controlando painel lateral
window.addEventListener('scroll', function () {
  const menuSanduiche = document.getElementById('menuSanduiche');
  const scrollTop = window.scrollY;

  if (scrollTop > 360) {
    menuSanduiche.style.display = 'flex'; // Exibe o menu sanduíche
  } else {
    menuSanduiche.style.display = 'none'; // Oculta o menu sanduíche
    esconderPaineis(); // Oculta os painéis quando o scroll é menor que 360
  }
});

// Função para mostrar o painel com animação
function mostrarPainel(painel) {
  painel.style.display = 'flex';
  painel.style.animation = 'descer 0.5s ease-out forwards';
}

// Função para esconder os painéis com animação
function esconderPainel(painel) {
  painel.style.animation = 'subir 0.5s ease-out forwards';
  setTimeout(() => {
    painel.style.display = 'none';
  }, 500); // Tempo da animação
}



// Função para alternar os painéis
botaoMais.addEventListener('click', () => {
  const items = document.querySelectorAll('.ContainerpainelLateral .item');
  items.forEach(item => {
    item.classList.add('flipped');
    setTimeout(() => {
      item.classList.remove('flipped');
    }, 300); // Metade do tempo de rotação
  });

  setTimeout(() => {
    document.querySelector('.ContainerpainelLateral').style.display = 'none';
    document.querySelector('.ContainerpainelLateral2').style.display = 'flex';
    painelAtivo = 'painel2'; // Atualiza o painel ativo
  }, 300); // Sincroniza com o tempo de rotação
});

botaoVoltar.addEventListener('click', () => {
  const items = document.querySelectorAll('.ContainerpainelLateral2 .item');
  items.forEach(item => {
    item.classList.add('flipped');
    setTimeout(() => {
      item.classList.remove('flipped');
    }, 300); // Metade do tempo de rotação
  });

  setTimeout(() => {
    document.querySelector('.ContainerpainelLateral2').style.display = 'none';
    document.querySelector('.ContainerpainelLateral').style.display = 'flex';
    painelAtivo = 'painel1'; // Atualiza o painel ativo
  }, 300); // Sincroniza com o tempo de rotação
});

// Função para alternar o menu sanduíche
function alternarMenuSanduiche() {
  const linhas = document.querySelectorAll('#menuSanduiche .linha');
  const painel = painelAtivo === 'painel1' ? document.querySelector('.ContainerpainelLateral') : document.querySelector('.ContainerpainelLateral2');
  menuAberto = !menuAberto;

  if (menuAberto) {
    linhas[0].style.transform = 'rotate(90deg)';
    linhas[1].style.transform = 'rotate(90deg)';
    linhas[2].style.transform = 'rotate(90deg)';
    mostrarPainel(painel);
  } else {
    linhas[0].style.transform = 'rotate(0)';
    linhas[1].style.transform = 'rotate(0)';
    linhas[2].style.transform = 'rotate(0)';
    esconderPainel(painel);
  }
}

document.getElementById('menuSanduiche').addEventListener('click', alternarMenuSanduiche);

// Controlando rolagem dos botões do painel lateral ao serem clicados
const menuItems = document.querySelectorAll('.ContainerpainelLateral .item a'); // Seleciona todos os links do primeiro painel

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão de clique do link
    const targetSection = document.querySelector(this.hash); // Seleciona a seção de destino
    const scrollOptions = {
      behavior: 'smooth', // Rolagem suave
      top: targetSection.offsetTop - 100 // Ajuste para compensar a altura do menu
    };
    window.scrollTo(scrollOptions); // Rola para a seção de destino
  });
});


