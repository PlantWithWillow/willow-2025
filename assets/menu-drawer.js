class MenuDrawer extends HTMLElement {
  constructor() {
    super();

    this.menuLink = document.querySelector('#menu-icon-bubble');

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.setHeaderMenuIconAccessibility();
  }

  setHeaderMenuIconAccessibility() {
    if (!this.menuLink) return;

    this.menuLink.setAttribute('role', 'button');
    this.menuLink.setAttribute('aria-haspopup', 'dialog');
    this.menuLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.menuLink.classList.contains('active')) {
        this.close(this.menuLink);
      } else {
        this.open(this.menuLink);
      }
    });
    this.menuLink.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'SPACE') {
        event.preventDefault();
        if (this.menuLink.classList.contains('active')) {
          this.close(this.menuLink);
        } else {
          this.open(this.menuLink);
        }
      }
    });
  }

  open() {
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {
      this.classList.add('animate', 'active');
    });

    this.addEventListener(
      'transitionend',
      () => {
        const containerToTrapFocusOn = document.getElementById('MenuDrawer');
        const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
        trapFocus(containerToTrapFocusOn, focusElement);
      },
      { once: true }
    );

    this.menuLink.classList.add('active');
    document.body.classList.add('overflow-hidden');
    document.querySelector('#cart-icon-bubble').classList.remove('active');
    document.querySelector('cart-drawer').classList.remove('active');
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);

    this.menuLink.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

customElements.define('menu-drawer', MenuDrawer);
