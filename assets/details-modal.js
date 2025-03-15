class DetailsModal extends HTMLElement {
  constructor() {
    super();
    this.detailsContainer = this.querySelector('details');
    this.summaryToggle = this.querySelector('summary');

    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
    this.querySelector('button[type="button"]').addEventListener('click', this.close.bind(this));

    this.summaryToggle.setAttribute('role', 'button');
  }

  isOpen() {
    return this.detailsContainer.hasAttribute('open');
  }

  onSummaryClick(event) {
    event.preventDefault();
    event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);
  }

  onBodyClick(event) {
    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
  }

  open(event) {
    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
    event.target.closest('details').setAttribute('open', true);
    document.body.addEventListener('click', this.onBodyClickEvent);
    document.body.classList.add('overflow-hidden');

    trapFocus(
      this.detailsContainer.querySelector('[tabindex="-1"]'),
      this.detailsContainer.querySelector('input:not([type="hidden"])')
    );

    /* Header search */
    if (this.classList.contains('header__search')) {
      document.querySelector('header').classList.add('search-active');
    }

    /* Close Drawers */
    document.querySelector('#cart-icon-bubble').classList.remove('active');
    document.querySelector('cart-drawer').classList.remove('active');
    document.body.classList.remove('menu-open');
    document.querySelector('#menu-icon-bubble').classList.remove('active');
    document.querySelector('menu-drawer').classList.remove('active');
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');

    /* Header search */
    if (this.classList.contains('header__search')) {
      document.querySelector('header').classList.remove('search-active');
    }
  }
}

customElements.define('details-modal', DetailsModal);
