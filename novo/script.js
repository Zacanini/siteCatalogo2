// Variável para rastrear o painel ativo
let painelAtivo = 'painel1';

// Controlando painel lateral
window.addEventListener('scroll', function () {
  const containerLateral = document.querySelector('.ContainerpainelLateral');
  const containerLateral2 = document.querySelector('.ContainerpainelLateral2');
  const scrollTop = window.scrollY;

  if (scrollTop > 360) {
    if (painelAtivo === 'painel1') {
      containerLateral.style.display = 'flex'; // Exibe o elemento
    } else {
      containerLateral2.style.display = 'flex'; // Exibe o segundo painel
    }
  } else {
    containerLateral.style.display = 'none'; // Oculta o primeiro painel
    containerLateral2.style.display = 'none'; // Oculta o segundo painel
  }
});
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

// Trocando os campeonatos do painel lateral
const botaoMais = document.getElementById('botaoMais');
const botaoVoltar = document.getElementById('botaoVoltar');

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
  const items = document.querySelectorAll('.ContainerpainelLateral2 .item2');
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