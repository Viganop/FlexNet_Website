/* =============================================
   FlexNet Telecom — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ——————————————————————————————————————
  // 1. MENU MOBILE (hamburger toggle)
  // ——————————————————————————————————————
  const menuToggle = document.getElementById('menuToggle');
  const navLinks   = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);

      // Animação das barras do hamburger
      const spans = menuToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Fechar ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      });
    });
  }

  // ——————————————————————————————————————
  // 2. NAVBAR — scroll effect
  // ——————————————————————————————————————
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // ——————————————————————————————————————
  // 3. FILTROS DE PLANOS
  // ——————————————————————————————————————
  const filtros    = document.querySelectorAll('.filtro');
  const planosGrid = document.getElementById('planosGrid');

  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza classe active
      filtros.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');

      const filtro = btn.dataset.filtro;
      const cards  = planosGrid.querySelectorAll('.plano-card');

      cards.forEach(card => {
        const cats = (card.dataset.categoria || '').split(' ');
        if (filtro === 'internet' || cats.includes(filtro)) {
          card.classList.remove('hidden');
          // Reaplica animação
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = '';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ——————————————————————————————————————
  // 4. LOGO CARDS — highlight ao clicar
  // ——————————————————————————————————————
  const logoCards = document.querySelectorAll('.logo-card');

  logoCards.forEach(card => {
    card.addEventListener('click', () => {
      logoCards.forEach(c => c.style.outline = '');
      card.style.outline = '3px solid #f5a623';
      card.style.outlineOffset = '3px';

      // Remove após 2s
      setTimeout(() => { card.style.outline = ''; card.style.outlineOffset = ''; }, 2000);
    });
  });

  // ——————————————————————————————————————
  // 5. PLANO ADDONS — atualiza preço ao marcar
  // ——————————————————————————————————————
  const ADDON_PRECO = {
    '15GB': 19.99,
    '20GB': 29.99,
  };

  document.querySelectorAll('.plano-card').forEach(card => {
    const valorEl  = card.querySelector('.valor');
    if (!valorEl) return;

    // Guarda preço base (só números)
    const baseText = valorEl.textContent.replace(',', '.');
    const baseNum  = parseFloat(baseText);
    if (isNaN(baseNum)) return;

    card.querySelectorAll('.plano-addons input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', () => {
        let total = baseNum;
        card.querySelectorAll('.plano-addons input[type="checkbox"]:checked').forEach(checked => {
          const label = checked.parentElement.textContent.trim();
          if (label.includes('15GB')) total += ADDON_PRECO['15GB'];
          if (label.includes('20GB')) total += ADDON_PRECO['20GB'];
        });
        valorEl.textContent = total.toFixed(2).replace('.', ',');
      });
    });
  });

  // ——————————————————————————————————————
  // 6. SCROLL REVEAL — Intersection Observer
  // ——————————————————————————————————————
  const revealEls = document.querySelectorAll(
    '.logo-card, .plano-card, .metrica-item, .passo, .dor-item, .solucao-card, .contato-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = entry.target.style.transform.replace('translateY(20px)', 'translateY(0)');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform += ' translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ——————————————————————————————————————
  // 7. BOTÕES "VER DETALHES" — toggle addons
  // ——————————————————————————————————————
  document.querySelectorAll('.ver-detalhes').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card   = btn.closest('.plano-card');
      const addons = card.querySelector('.plano-addons');
      const isOpen = addons.classList.contains('open');
      addons.classList.toggle('open');
      btn.textContent = isOpen ? 'Ver opções adicionais ↓' : 'Ocultar opções ↑';
    });
  });

  // ——————————————————————————————————————
  // 8. BOTÕES ASSINAR — feedback visual
  // ——————————————————————————————————————
  document.querySelectorAll('.btn-assinar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const original = btn.textContent;
      btn.textContent = '✓ Redirecionando...';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.pointerEvents = '';
      }, 2000);
    });
  });

  // ——————————————————————————————————————
  // 9. PILARES — anima barra ao entrar na tela
  // ——————————————————————————————————————
  const pilarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        pilarObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.pilar').forEach(el => pilarObserver.observe(el));

  console.log('FlexNet Telecom — script carregado com sucesso ✔');
});
