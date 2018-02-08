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

const showProjects = () => {
    $("#projects").click(() => {
        $("#profile").addClass("hidden");
        $("#projectDemos").removeClass("hidden");
    });
};

const showProfile = () => {
    $("#about").click(() => {
        $("#projectDemos").addClass("hidden");
        $("#profile").removeClass("hidden");
    });
};

const init = () => {
    aboutButtonHover();
    projectButtonHover();
    showProjects();
    showProfile();
};

module.exports = {init};