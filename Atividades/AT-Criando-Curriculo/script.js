document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      setTimeout(() => {
        section.style.opacity = '1';
      }, 300);
    });
  });
document.addEventListener('DOMContentLoaded', () => {
    fetch('projetos.json')
      .then(response => response.json())
      .then(data => {
        const projetosSection = document.getElementById('projetos');
        data.forEach(projeto => {
          const card = document.createElement('div');
          card.className = 'card mb-3';
          card.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${projeto.titulo}</h5>
              <p class="card-text">${projeto.descricao}</p>
            </div>
          `;
          projetosSection.appendChild(card);
        });
      });
  });