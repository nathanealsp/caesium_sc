// TABBED CONTENT
const panels = document.querySelectorAll('.panel');
const tabs = document.querySelector('.tabs');
tabs.addEventListener('click', e => {
  const targetPanel = document.querySelector(e.target.dataset.target);
  if (e.target.tagName === 'LI') {
    panels.forEach(panel => {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

const root = document.querySelector(':root');
// SWATCHES
const swatches = document.querySelectorAll('.swatches span');
swatches.forEach(swatch =>
  swatch.addEventListener('click', e => {
    if (swatch.className !== 'textSwatch') {
      root.style.setProperty('--grey', e.target.style.background);
      console.log(e.target.style.background);
    }
  })
);
