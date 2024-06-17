/* eslint-disable no-unused-vars */
import App from './views/apps';
import swRegister from './utils/sw-register';
import CONFIG from './dataGlobal/config';

const app = new App({
  check: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
