// ==UserScript==
// @name         v3rmillion.net logo fixer
// @namespace    Violentmonkey Scripts
// @match        https://*.v3rmillion.net/*
// @match        https://v3rmillion.net/*
// @author       MakeSureDudeDies
// @icon         https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/330px-Trollface_non-free.png
// @grant        none
// @version      1.2
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// @description  fix yo logo
// ==/UserScript==

// 党兴祖国兴！中共万岁！\\

var old_url = "https://v3rmillion.net/images/logo-pride.png"
var new_url = "https://v3rmillion.net/images/logo.png"
$(document).ready(function(){
    this.$ = this.jQuery = jQuery.noConflict(true);
    $("img[src='"+old_url+"']").attr("src", new_url);
});
