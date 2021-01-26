// Default Components
import Nav from './views/components/Nav.js';
import Footer from './views/components/Footer.js';

// Components
import Home from './views/pages/Home.js';
import Dash from './views/pages/Dash.js';
import Login from './views/pages/Login.js';
import SignUp from './views/pages/SignUp.js';
import Error404 from './views/pages/Error404.js';

// Utils
import Utils from './service/Utils.js';

let routes = {
    '/': Home,
    '/signup': SignUp,
    '/login': Login,
    '/dashboard': Dash

};

// Código do roteador. Pegar URL e verificar na nossa lista de routes e redenrizar.
const router = async () => {

    // Select Components
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Nav.render();
    await Nav.after_render();
    content.innerHTML = await Home.render();
    await Home.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    let request = Utils.parseRequestURL();
    let parseURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '');

    let page = routes[parseURL] ? routes[parseURL] : Error404;

    content.innerHTML = await page.render();
    await page.after_render();
}

// Observar as mudanças na URL
window.addEventListener('hashchange', router);

// carregamento da página
window.addEventListener('load', router);