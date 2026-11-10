// ==UserScript==
// @name         Godot WebSocket Bridge
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://casson-projects-2021.github.io/facet-scope/monkey_business.html
// @match        https://azgaar.github.io/Fantasy-Map-Generator/*
// @run-at       document-end
// ==/UserScript==

(function() 
{
'use strict';

const curr_url = window.location.href;
  
if( curr_url.includes( "casson-projects-2021.github.io" ))
{   document.documentElement.dataset[ "tampered" ] = "true";
    const socket = new WebSocket( 'ws://127.0.0.1:9080' );

    socket.onopen = function() 
    {   console.log( "Conectado ao WebSocket do Godot!" );
        socket.send( JSON.stringify({ type: "ping", message: "Olá do Tampermonkey!" }));
    };
}
else
{   console.log( "to implement" );
}    
})();
