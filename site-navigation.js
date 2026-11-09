(() => {
  'use strict';

  const header = document.querySelector('[data-site-header]');
  const root = header.dataset.siteRoot || '';
  const sections = [
    ['catalog', 'Варианты', '▦'],
    ['guides', 'Методички', '▧'],
    ['settings', 'Настройки', '⚙'],
  ];

  header.innerHTML = `
    <a class="brand" href="${root}#catalog" data-home>
      <span class="brand-icon" aria-hidden="true">ДЭ</span>
      <span>Практика ДЭ<small>09.01.03 · КИМ 2027</small></span>
    </a>
    <details class="site-menu">
      <summary>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        Меню
      </summary>
      <nav class="site-menu-links" aria-label="Разделы сайта">
        ${sections.map(([id, label, icon]) => {
          const target = id === 'guides' ? 'methodichki/' : '#' + id;
          const current = id === header.dataset.section ? ' aria-current="page"' : '';
          return `<a href="${root}${target}" data-nav="${id}"${current}><span aria-hidden="true">${icon}</span>${label}</a>`;
        }).join('')}
      </nav>
    </details>`;

  const menu = header.querySelector('.site-menu');
  const toggle = menu.querySelector('summary');

  menu.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menu.open = false;
      toggle.focus();
    }
  });

  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
  });

  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      toggle.focus();
    }
  });
})();
