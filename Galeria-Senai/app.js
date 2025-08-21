'use strict';

async function carregarDados() {
    const url = 'http://localhost:3000/fotos';
    const resp = await fetch(url);
    return await resp.json();
  }
  
  async function carregarImagensEDados() {
    const dados = await carregarDados();
    const container = document.getElementById('container');
    container.innerHTML = '';
  
    // Criar os slides
    dados.forEach(item => {
      const div = document.createElement('div');
      div.className = 'imagens';
  
      const img = document.createElement('img');
      img.src = item.imagem;
      img.alt = item.legenda || '';
  
      const textos = document.createElement('div');
      textos.className = 'textos';
  
      const h1 = document.createElement('h1');
      h1.textContent = item.legenda;
  
      const p = document.createElement('p');
      p.textContent = item.data;
  
      textos.appendChild(h1);
      textos.appendChild(p);
      div.appendChild(img);
      div.appendChild(textos);
      container.appendChild(div);
    });
  
    // --- SLIDE ---
    let slideAtual = 0;
    const slides = container.querySelectorAll('.imagens');
    slides.forEach((s, i) => s.style.display = i === 0 ? 'block' : 'none');
  
    function mostrarSlide(n) {
      slides.forEach(s => s.style.display = 'none');
      slides[n].style.display = 'block';
    }
  
    // Botões
    const esquerda = document.createElement('button');
    esquerda.textContent = '←';
    esquerda.className = 'seta-esquerda';
    esquerda.onclick = () => {
      slideAtual = (slideAtual - 1 + slides.length) % slides.length;
      mostrarSlide(slideAtual);
    };
  
    const direita = document.createElement('button');
    direita.textContent = '→';
    direita.className = 'seta-direita';
    direita.onclick = () => {
      slideAtual = (slideAtual + 1) % slides.length;
      mostrarSlide(slideAtual);
    };
  
    container.appendChild(esquerda);
    container.appendChild(direita);
  }
  
  carregarImagensEDados();
  