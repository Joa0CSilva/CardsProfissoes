'use strict'

const cadastrar = document.getElementById('cadastrar');

function criarCard() {
  const container = document.getElementById('container');
  
  const nome = document.getElementById('nome').value;
  const cargo = document.getElementById('cargo').value;
  
  // Pega o arquivo de imagem do computador
  const arquivoFoto = document.getElementById('foto').files[0];

  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  
  // Transforma o arquivo do computador em um endereço temporário
  if (arquivoFoto) {
    img.src = URL.createObjectURL(arquivoFoto);
  }

  const pNome = document.createElement('p');
  pNome.textContent = nome;

  const pCargo = document.createElement('p');
  pCargo.textContent = cargo;

  card.append(img);
  card.append(pNome);
  card.append(pCargo);

  container.append(card);
}

cadastrar.onclick = criarCard;