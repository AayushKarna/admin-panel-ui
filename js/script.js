// make mobile navigation work
const btnNavEl = document.querySelectorAll('.btn-mobile-nav');
const body = document.querySelector('body');
const porfileContent = document.querySelector('.profile-content');

btnNavEl.forEach(el =>
  el.addEventListener('click', () => {
    body.classList.toggle('nav-open');
  })
);

// sticky navigation
// const obs = new IntersectionObserver(
//   entries => {
//     const ent = entries[0];

//     if (!ent.isIntersecting) {
//       bodyEl.classList.add('sticky');
//     }

//     if (ent.isIntersecting) {
//       bodyEl.classList.remove('sticky');
//     }
//   },
//   {
//     root: null, // in the view port
//     threshold: 0,
//     rootMargin: '-8px'
//   }
// );
// obs.observe(porfileContent);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
