const links = [
  {
    title: 'الموقع الشخصي',
    url: 'https://example.com',
    description: 'عرض أعمالك، نبذة عنك، وروابط التواصل في مكان واحد.',
    badge: 'Portfolio',
    icon: '🌐'
  },
  {
    title: 'حساب LinkedIn',
    url: 'https://linkedin.com',
    description: 'للتواصل المهني واستعراض خبراتك وشهاداتك.',
    badge: 'Networking',
    icon: '💼'
  },
  {
    title: 'معرض Behance أو Dribbble',
    url: 'https://behance.net',
    description: 'اعرض التصاميم والواجهات التي أنجزتها مع تفاصيل المشروع.',
    badge: 'Design',
    icon: '🎨'
  },
  {
    title: 'مستودع GitHub',
    url: 'https://github.com',
    description: 'كود المشاريع، النماذج التفاعلية، أو مكونات جاهزة.',
    badge: 'Code',
    icon: '🧩'
  },
  {
    title: 'روابط اجتماعية',
    url: 'https://twitter.com',
    description: 'غرد عن التحديثات، الإطلاقات، وأفكارك اليومية.',
    badge: 'Social',
    icon: '📣'
  }
];

const linksContainer = document.getElementById('links');
const previewContainer = document.getElementById('preview');
const addLinkBtn = document.getElementById('addLink');
const toggleThemeBtn = document.getElementById('toggleTheme');

document.body.classList.add('dark');

function createCard(link) {
  const card = document.createElement('a');
  card.href = link.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.className = 'card';

  const title = document.createElement('div');
  title.className = 'card__title';
  title.innerHTML = `${link.icon || '🔗'} <span>${link.title}</span>`;

  const desc = document.createElement('p');
  desc.className = 'card__desc';
  desc.textContent = link.description;

  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.innerHTML = `<span>•</span> ${link.badge}`;

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(badge);
  return card;
}

function renderCards() {
  linksContainer.innerHTML = '';
  previewContainer.innerHTML = '';
  links.forEach((link) => {
    const card = createCard(link);
    linksContainer.appendChild(card.cloneNode(true));

    const previewCard = createCard(link);
    previewCard.classList.add('card--mini');
    previewContainer.appendChild(previewCard);
  });
}

function addLink() {
  const title = prompt('عنوان الرابط:');
  if (!title) return;
  const url = prompt('الرابط:');
  if (!url) return;
  const description = prompt('وصف قصير (اختياري):') || 'رابط جديد';
  links.unshift({ title, url, description, badge: 'Custom', icon: '✨' });
  renderCards();
}

function toggleTheme() {
  document.body.classList.toggle('light');
}

addLinkBtn.addEventListener('click', addLink);
toggleThemeBtn.addEventListener('click', toggleTheme);

renderCards();
