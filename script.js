const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.resource-card')];
const chips = [...document.querySelectorAll('.filter-chip')];
const emptyState = document.getElementById('emptyState');
const grid = document.getElementById('resourceGrid');
let activeFilter = 'all';

function filterResources() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesQuery = (card.dataset.search + ' ' + card.innerText).toLowerCase().includes(query);
    const matchesFilter = activeFilter === 'all' || card.dataset.type === activeFilter;
    const show = matchesQuery && matchesFilter;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
  grid.hidden = visible === 0;
  document.getElementById('allCount').textContent = cards.length;
}
searchInput.addEventListener('input', filterResources);
chips.forEach(chip => chip.addEventListener('click', () => {
  activeFilter = chip.dataset.filter;
  chips.forEach(item => item.classList.toggle('selected', item === chip));
  filterResources();
}));
document.querySelectorAll('[data-show-papers]').forEach(link => link.addEventListener('click', () => {
  activeFilter = 'papers';
  chips.forEach(item => item.classList.toggle('selected', item.dataset.filter === 'papers'));
  filterResources();
}));
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
});
filterResources();
