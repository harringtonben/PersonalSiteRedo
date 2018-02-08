'use strict';

const iconHover = () => {
    $("#about").mouseover(() => {
        $("#about").addClass("animated bounce").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $("#about").removeClass("animated bounce");
        });
    });
};

module.exports = {iconHover};