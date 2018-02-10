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
        $(".demo").removeClass("hidden");
    });
};

const showProfile = () => {
    $("#about").click(() => {
        $("#projectDemos").addClass("hidden");
        $("#profile").removeClass("hidden");
    });
};

const modalInitialize = () => {
    $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
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