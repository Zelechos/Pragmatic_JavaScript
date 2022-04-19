'use strict';

export function Posts(){
    const $posts = document.createElement('section');
    $posts.id = "posts";
    $posts.className = "grid-fluid";
    return $posts;
}