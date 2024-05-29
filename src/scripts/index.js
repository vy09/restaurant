/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/apps';
import CONFIG from './dataGlobal/config';

// import('../public/data/DATA.json').then(({ default: jsonData }) => {
//   console.log(jsonData);
//   const datas = jsonData.restaurants;
//   let dataList = '';
//   datas.forEach((data) => {
//     dataList += `
//         <div class="card-item">
//             <img class="card-item-pic" src="${data.pictureId}" alt="${
//   data.name
// }" title="${data.name}">
//               <div class="city">${data.city}</div>
//                 <p class="item_rating">
//                     Rating : ${data.rating}
//                 </p>
//                 <h1 class="item_title"><a href="#">${data.name}</a></h1>
//                 <div class="item_desc">${data.description.slice(
//     0,
//     200,
//   )}...</div>
//         </div>
//         `;
//   });
//   document.querySelector('#data').innerHTML = dataList;

//   const hamburgerButton = document.querySelector('#check');

//   hamburgerButton.addEventListener('click', () => {
//     hamburgerButton.classList.toggle('active');
//   });
// });
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
