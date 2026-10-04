const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, { rootMargin: '-28% 0px -58% 0px', threshold: [0, .25, .6] });
sections.forEach((section) => sectionObserver.observe(section));

const resultTabs = [...document.querySelectorAll('.result-tab')];
const resultPanels = [...document.querySelectorAll('[data-result-panel]')];
resultTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.result;
    resultTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    resultPanels.forEach((panel) => {
      panel.hidden = panel.dataset.resultPanel !== target;
      panel.classList.toggle('is-active', !panel.hidden);
    });
  });
});

const copyButton = document.querySelector('#copy-citation');
const bibtex = document.querySelector('#bibtex');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(bibtex.textContent);
    copyButton.textContent = 'Copied';
    window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 1600);
  } catch {
    copyButton.textContent = 'Select text to copy';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-video-src]').forEach(async (slot) => {
  const source = slot.dataset.videoSrc;
  try {
    const response = await fetch(source, { method: 'HEAD' });
    if (!response.ok) return;
    const figure = document.createElement('figure');
    figure.className = 'hardware-video';
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'none';
    video.className = 'demo-video';
    video.poster = slot.dataset.videoPoster || '';
    const sourceElement = document.createElement('source');
    sourceElement.src = source;
    sourceElement.type = source.endsWith('.webm') ? 'video/webm' : 'video/mp4';
    video.appendChild(sourceElement);
    video.setAttribute('aria-label', slot.dataset.videoCaption || 'Real-world demonstration');
    figure.appendChild(video);
    const caption = document.createElement('figcaption');
    caption.textContent = slot.dataset.videoCaption || 'Real-world demonstration.';
    figure.appendChild(caption);
    slot.replaceWith(figure);
  } catch {
    // Keep the pending state when the optional video is not available.
  }
});
