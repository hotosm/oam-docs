'use strict';
import OAM from 'oam-design-system';
import renderDrops from './docs-example/drops';
import renderPanels from './docs-example/panels';

OAM.hello();
// Output the version of oam-design-system. Useful for dev.
console.log(' ' + require('oam-design-system/package.json').version);

// Global menu toggle.
document.querySelector('[data-hook="global-menu:trigger"]').addEventListener('click', function (e) {
  e.preventDefault();
  e.target.classList.toggle('button--active');

  document.querySelector('[data-hook="global-menu:wrapper"]').classList.toggle('menu-wrapper--open');
}, false);

// /////////////////////////////////////////////////////////////////////////////
// -------------------------- Example Docs -----------------------------------//
// ---------------------------------------------------------------------------//

// Dropdowns
renderDrops();

// Panel with scrollbar.
renderPanels();
