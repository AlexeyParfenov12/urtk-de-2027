const screenshotDialog = document.querySelector('.guide-screenshot-dialog');
const screenshotPreview = screenshotDialog.querySelector('.guide-screenshot-preview');

for (const link of document.querySelectorAll('#database .guide-screenshot > a')) {
  link.setAttribute('aria-haspopup', 'dialog');
  link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const frame = link.firstElementChild.cloneNode(true);
    frame.querySelector('img').loading = 'eager';
    screenshotPreview.replaceChildren(frame);
    screenshotDialog.showModal();
    screenshotPreview.scrollTo(0, 0);
  });
}
