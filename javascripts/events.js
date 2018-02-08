'use strict';

const aboutButtonHover = () => {
    $("#about").mouseover(() => {
        $("#about").addClass("animated bounce").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $("#about").removeClass("animated bounce");
        });
    });
};

const projectButtonHover = () => {
    $("#projects").mouseover(() => {
        $("#projects").addClass("animated bounce").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $("#projects").removeClass("animated bounce");
        });
    });
};

const init = () => {
    aboutButtonHover();
    projectButtonHover();
};

module.exports = {init};