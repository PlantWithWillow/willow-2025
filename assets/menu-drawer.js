const menuLink = document.getElementById('menu-icon-bubble');
const body = document.querySelector('body');
const menu = document.getElementById('MenuDrawer');

menuLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(this);
  console.log(event);
  if (menuLink.classList.contains('active')) {
    menuLink.classList.remove('active');
    body.classList.remove('menu-open');
    menu.classList.remove('open');
  } else {
    menuLink.classList.add('active');
    body.classList.add('menu-open');
    menu.classList.add('open');
  }
});

// class MenuDrawer extends HTMLElement {
//   constructor() {
//     super();

//     this.begin();

//     this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
//     this.querySelector('#MenuDrawer-Overlay').addEventListener('click', this.close.bind(this));
//     this.setHeaderMenuIconAccessibility();
//   }
//   connectedCallback() {
//     alert('connectedCallback');
//   }

//   begin() {
//     alert('begin');
//   }

//   setHeaderMenuIconAccessibility() {
//     const menuLink = document.querySelector('#menu-icon-bubble');
//     if (!menuLink) return;

//     menuLink.setAttribute('role', 'button');
//     menuLink.setAttribute('aria-haspopup', 'dialog');
//     menuLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.open(menuLink);
//     });
//     menuLink.addEventListener('keydown', (event) => {
//       if (event.code.toUpperCase() === 'SPACE') {
//         event.preventDefault();
//         this.open(menuLink);
//       }
//     });
//   }

//   open() {
//     alert('open menu');
//     // here the animation doesn't seem to always get triggered. A timeout seem to help
//     setTimeout(() => {
//       this.classList.add('animate', 'active');
//     });

//     this.addEventListener(
//       'transitionend',
//       () => {
//         const containerToTrapFocusOn = document.getElementById('MenuDrawer');
//         const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
//         trapFocus(containerToTrapFocusOn, focusElement);
//       },
//       { once: true }
//     );

//     document.body.classList.add('overflow-hidden');
//   }

//   close() {
//     this.classList.remove('active');
//     removeTrapFocus(this.activeElement);
//     document.body.classList.remove('overflow-hidden');
//   }
// }

// customElements.define('menu-drawer', MenuDrawer);
