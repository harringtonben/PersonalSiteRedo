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
        $("#mainHeader").addClass("hide");
        $("#mainHeaderM").addClass("hide");
        $("#projectsHeader").removeClass("hide");
        $("#projectsHeaderM").removeClass("hide");
        $("#projectDemos").removeClass("hide");
        $(".demo").removeClass("hide");
    });
};

const showProfile = () => {
    $(".about").click(() => {
        $("#projectDemos").addClass("hide");
        $("#profile").removeClass("hide");
        $("#projectsHeader").addClass("hide");
        $("#projectsHeaderM").addClass("hide");
        $("#mainHeader").removeClass("hide");
        $("#mainHeaderM").removeClass("hide");
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