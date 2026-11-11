// ==UserScript==
// @name         Godot WebSocket Bridge
// @version      1.0
// @description  Connects Azgaard's Fantasy Maps to a Godot App that renders parts of the map 3D scenes
// @author       Ricardo Casson (see https://github.com/casson-projects-2021/facet-scope)
// @match        https://casson-projects-2021.github.io/facet-scope/godot_map_bridge_control_panel.html
// @match        https://azgaar.github.io/Fantasy-Map-Generator/*
// @run-at       document-start
// @grant        window.close
// ==/UserScript==

/**********************************************************************************************
 * 
 *  If you are reading this outside the Tamper Monkey website or extension urls, you must
 *   install or enable Tamper Monkey. Please press the back button, install or enable the
 *   extension, then try to add this UserScript again.
 * 
 **********************************************************************************************/

(function() 
{
'use strict';

const curr_url = window.location.href;
  
if( curr_url.includes( "casson-projects-2021.github.io" ))
{   document.documentElement.dataset[ "userscript" ] = "true";

}
else
{   console.log( "to implement" );
}    
})();
