const dialog = document.querySelector('.video-dialog');
const player = document.querySelector('#video-player');
const title = document.querySelector('#video-title');
const original = document.querySelector('#video-original');
let trigger;

document.querySelector('#year').textContent = new Date().getFullYear();

if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-video-id]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      trigger = link;
      title.textContent = link.dataset.videoTitle;
      original.href = link.href;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.tiktok.com/player/v1/${link.dataset.videoId}?autoplay=1&rel=0`;
      iframe.title = link.dataset.videoTitle;
      iframe.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      player.replaceChildren(iframe);
      dialog.showModal();
      document.body.classList.add('modal-open');
      dialog.querySelector('button').focus();
    });
  });

  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    player.replaceChildren();
    document.body.classList.remove('modal-open');
    trigger?.focus();
  });
}
