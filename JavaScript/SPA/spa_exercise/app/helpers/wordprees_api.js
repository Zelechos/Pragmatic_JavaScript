'use strict';

const NAME = "css-tricks";
const DOMAIN = `https://${NAME}.com/`;
const SITE = `${DOMAIN}/wp-json`;
const API_WORDPRESS = `${SITE}/wp/v2`;
const POSTS = `${API_WORDPRESS}/posts?_embed`;
const POST = `${API_WORDPRESS}/posts`;
const SEARCH = `${API_WORDPRESS}/search?_embed&search=`;

// Exportamos nuestras rutas que usaremos para las peticiones
export default { NAME, DOMAIN, SITE, API_WORDPRESS, POSTS, POST, SEARCH };