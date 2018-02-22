(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const aboutButtonHover = () => {
    $(".about").mouseover(() => {
        $(".about").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".about").removeClass("animated pulse");
        });
    });
};

const projectButtonHover = () => {
    $(".projects").mouseover(() => {
        $(".projects").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".projects").removeClass("animated pulse");
        });
    });
};

const showProjects = () => {
    $(".projects").click(() => {
        $("#profile").addClass("hide");
        $("#projectDemos").removeClass("hide");
        $(".demo").removeClass("hide");
    });
};

const showProfile = () => {
    $(".about").click(() => {
        $("#projectDemos").addClass("hide");
        $("#profile").removeClass("hide");
    });
};

const modalInitialize = () => {
    $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
        $(".button-collapse").sideNav();
      });    
};
      

const init = () => {
    aboutButtonHover();
    projectButtonHover();
    showProjects();
    showProfile();
    modalInitialize();
};

module.exports = {init};
},{}],2:[function(require,module,exports){
'use strict';

const events = require("./events");

events.init();
},{"./events":1}]},{},[2]);
