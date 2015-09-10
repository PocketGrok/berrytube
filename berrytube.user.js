// ==UserScript==
// @name         Pocket's BerryTube
// @namespace    http://pocketdeer.com/projects/berrytube/berrytube.user.js
// @version      0.1.1
// @author       PocketGrok
// @description  Script to make BerryTube how Pocket likes it.
// @homepage     http://pocketdeer.com/
// @updateURL    https://raw.githubusercontent.com/PocketGrok/berrytube/master/berrytube.user.js
// @match        http://berrytube.tv/
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @resource     berrytube_css https://raw.githubusercontent.com/PocketGrok/berrytube/master/berrytube.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

GM_addStyle( GM_getResourceText( 'berrytube_css' ) );
