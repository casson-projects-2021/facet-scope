// ==UserScript==
// @name         Godot WebSocket Bridge
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://casson-projects-2021.github.io/facet-scope/monkey_business.html
// @match        https://azgaar.github.io/Fantasy-Map-Generator/*
// @run-at       document-start
// @grant        window.close
// ==/UserScript==

(function() 
{
'use strict';

const curr_url = window.location.href;
  
if( curr_url.includes( "casson-projects-2021.github.io" ))
{   document.documentElement.dataset[ "tampered" ] = "true";
    //setTimeout(() => { window.close(); }, 1000 );
}
else
{   console.log( "to implement" );
}    
})();
