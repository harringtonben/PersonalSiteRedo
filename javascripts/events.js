'use strict';

const socialLogoHover = () => {
    $(".email").mouseover(() => {
        $(".email").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".email").removeClass("animated pulse");
        });
    });

    $(".github").mouseover(() => {
        $(".github").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".github").removeClass("animated pulse");
        });
    });

    $(".linkedin").mouseover(() => {
        $(".linkedin").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".linkedin").removeClass("animated pulse");
        });
    });

    $(".twitter").mouseover(() => {
        $(".twitter").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".twitter").removeClass("animated pulse");
        });
    });
};

const techIconHover = () => {
    $(".tech-icons").mouseover(() => {
        $(".tech-icons").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".tech-icons").removeClass("animated pulse");
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

const techAnimation = () => {
        $(".tech").addClass("animated slideInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".tech").removeClass("animated slideInUp");
        });
};


const init = () => {
    socialLogoHover();
    projectButtonHover();
    techAnimation();
    techIconHover();
};

module.exports = {init};