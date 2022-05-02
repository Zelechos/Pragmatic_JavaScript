'use strict';

const NAME = "css-tricks";
const DOMAIN = `https://${NAME}.com/`;
const SITE = `${DOMAIN}/wp-json`;
const API_WORDPRESS = `${SITE}/wp/v2`;
const PER_PAGE = 10;
const POSTS = `${API_WORDPRESS}/posts?_embed&per_page=${PER_PAGE}`;
const POST = `${API_WORDPRESS}/posts`;
const SEARCH = `${API_WORDPRESS}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

// Exportamos nuestras rutas que usaremos para las peticiones
export default { NAME, DOMAIN, SITE, API_WORDPRESS, PER_PAGE, POSTS, POST, SEARCH, page };